# Task 7: Authentication & Security Implementation

## 🎯 Objective
Implement comprehensive enterprise-grade authentication and security framework for Xalesin ERP, including multi-factor authentication, role-based access control, audit logging, and compliance features across web and mobile platforms.

## 📋 Requirements
- Implement Supabase Auth with custom security policies
- Develop multi-factor authentication (MFA) system
- Create granular role-based access control (RBAC)
- Implement comprehensive audit logging
- Setup data encryption and protection
- Develop security monitoring and incident response
- Ensure compliance with enterprise security standards

## 🏗️ Implementation Steps

### 1. Supabase Authentication Setup
```sql
-- Database Schema for Enhanced Authentication
-- auth/schema.sql

-- Extended user profiles
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  tenant_id UUID REFERENCES public.tenants(id) NOT NULL,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  phone VARCHAR(20),
  department VARCHAR(100),
  job_title VARCHAR(100),
  employee_id VARCHAR(50),
  status user_status DEFAULT 'active',
  last_login_at TIMESTAMPTZ,
  password_changed_at TIMESTAMPTZ DEFAULT NOW(),
  failed_login_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMPTZ,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Multi-factor authentication
CREATE TABLE public.user_mfa (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  method mfa_method NOT NULL,
  secret_key TEXT, -- For TOTP
  backup_codes TEXT[], -- Encrypted backup codes
  phone_number VARCHAR(20), -- For SMS
  is_verified BOOLEAN DEFAULT FALSE,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  verified_at TIMESTAMPTZ
);

-- User sessions tracking
CREATE TABLE public.user_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  session_token TEXT NOT NULL,
  device_info JSONB,
  ip_address INET,
  user_agent TEXT,
  location JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_activity_at TIMESTAMPTZ DEFAULT NOW()
);

-- Role-based access control
CREATE TABLE public.roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID REFERENCES public.tenants(id) NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  permissions JSONB NOT NULL DEFAULT '[]',
  is_system_role BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id, name)
);

-- User role assignments
CREATE TABLE public.user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  role_id UUID REFERENCES public.roles(id) NOT NULL,
  assigned_by UUID REFERENCES auth.users(id),
  assigned_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT TRUE,
  UNIQUE(user_id, role_id)
);

-- Security audit log
CREATE TABLE public.security_audit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id UUID REFERENCES public.tenants(id),
  user_id UUID REFERENCES auth.users(id),
  event_type security_event_type NOT NULL,
  event_category security_category NOT NULL,
  severity security_severity NOT NULL,
  description TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  resource_type VARCHAR(100),
  resource_id VARCHAR(255),
  old_values JSONB,
  new_values JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CRETE INDEX idx_user_profiles_tenant_id ON public.user_profiles(tenant_id);
CREATE INDEX idx_user_profiles_status ON public.user_profiles(status);
CREATE INDEX idx_user_mfa_user_id ON public.user_mfa(user_id);
CREATE INDEX idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX idx_user_sessions_active ON public.user_sessions(is_active, expires_at);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX idx_user_roles_role_id ON public.user_roles(role_id);
CREATE INDEX idx_security_audit_tenant_id ON public.security_audit_log(tenant_id);
CREATE INDEX idx_security_audit_user_id ON public.security_audit_log(user_id);
CREATE INDEX idx_security_audit_created_at ON public.security_audit_log(created_at);
```

### 2. Enhanced Authentication Service
```typescript
// packages/core/src/services/AuthService.ts
import { supabase } from '../lib/supabase'
import { SecurityAuditService } from './SecurityAuditService'
import { MFAService } from './MFAService'
import { EncryptionService } from './EncryptionService'

export interface LoginCredentials {
  email: string
  password: string
  mfaCode?: string
  deviceInfo?: DeviceInfo
}

export interface DeviceInfo {
  deviceId: string
  deviceName: string
  platform: string
  version: string
  userAgent?: string
}

export interface AuthResult {
  user: User
  session: Session
  requiresMFA: boolean
  mfaMethods?: MFAMethod[]
}

class AuthService {
  private securityAudit = new SecurityAuditService()
  private mfaService = new MFAService()
  private encryption = new EncryptionService()

  async signIn(credentials: LoginCredentials): Promise<AuthResult> {
    const { email, password, mfaCode, deviceInfo } = credentials
    
    try {
      // Check for account lockout
      await this.checkAccountLockout(email)
      
      // Attempt authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) {
        await this.handleFailedLogin(email, deviceInfo)
        throw error
      }
      
      const user = data.user!
      
      // Check if MFA is required
      const mfaMethods = await this.mfaService.getUserMFAMethods(user.id)
      const requiresMFA = mfaMethods.length > 0
      
      if (requiresMFA && !mfaCode) {
        // Log partial authentication
        await this.securityAudit.logEvent({
          userId: user.id,
          eventType: 'AUTHENTICATION_PARTIAL',
          eventCategory: 'AUTHENTICATION',
          severity: 'INFO',
          description: 'User authenticated, MFA required',
          metadata: { email, deviceInfo },
        })
        
        return {
          user,
          session: data.session!,
          requiresMFA: true,
          mfaMethods,
        }
      }
      
      if (requiresMFA && mfaCode) {
        // Verify MFA code
        const mfaValid = await this.mfaService.verifyMFACode(user.id, mfaCode)
        if (!mfaValid) {
          await this.securityAudit.logEvent({
            userId: user.id,
            eventType: 'MFA_FAILED',
            eventCategory: 'AUTHENTICATION',
            severity: 'WARNING',
            description: 'Invalid MFA code provided',
            metadata: { email, deviceInfo },
          })
          throw new Error('Invalid MFA code')
        }
      }
      
      // Create session record
      await this.createSessionRecord(user.id, data.session!, deviceInfo)
      
      // Reset failed login attempts
      await this.resetFailedLoginAttempts(user.id)
      
      // Log successful authentication
      await this.securityAudit.logEvent({
        userId: user.id,
        eventType: 'AUTHENTICATION_SUCCESS',
        eventCategory: 'AUTHENTICATION',
        severity: 'INFO',
        description: 'User successfully authenticated',
        metadata: { email, deviceInfo, mfaUsed: requiresMFA },
      })
      
      return {
        user,
        session: data.session!,
        requiresMFA: false,
      }
      
    } catch (error) {
      await this.securityAudit.logEvent({
        eventType: 'AUTHENTICATION_FAILED',
        eventCategory: 'AUTHENTICATION',
        severity: 'WARNING',
        description: 'Authentication attempt failed',
        metadata: { email, error: error.message, deviceInfo },
      })
      throw error
    }
  }
  
  async signOut(sessionId?: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user) {
      // Invalidate session record
      if (sessionId) {
        await supabase
          .from('user_sessions')
          .update({ is_active: false })
          .eq('id', sessionId)
      } else {
        await supabase
          .from('user_sessions')
          .update({ is_active: false })
          .eq('user_id', user.id)
      }
      
      // Log sign out
      await this.securityAudit.logEvent({
        userId: user.id,
        eventType: 'AUTHENTICATION_LOGOUT',
        eventCategory: 'AUTHENTICATION',
        severity: 'INFO',
        description: 'User signed out',
        metadata: { sessionId },
      })
    }
    
    await supabase.auth.signOut()
  }
  
  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')
    
    // Verify current password
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email: user.email!,
      password: currentPassword,
    })
    
    if (verifyError) {
      await this.securityAudit.logEvent({
        userId: user.id,
        eventType: 'PASSWORD_CHANGE_FAILED',
        eventCategory: 'AUTHENTICATION',
        severity: 'WARNING',
        description: 'Password change failed - invalid current password',
      })
      throw new Error('Current password is incorrect')
    }
    
    // Update password
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    
    if (error) throw error
    
    // Update password changed timestamp
    await supabase
      .from('user_profiles')
      .update({ password_changed_at: new Date().toISOString() })
      .eq('id', user.id)
    
    // Log password change
    await this.securityAudit.logEvent({
      userId: user.id,
      eventType: 'PASSWORD_CHANGED',
      eventCategory: 'AUTHENTICATION',
      severity: 'INFO',
      description: 'User password changed successfully',
    })
  }
  
  private async checkAccountLockout(email: string): Promise<void> {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('failed_login_attempts, locked_until')
      .eq('email', email)
      .single()
    
    if (profile?.locked_until && new Date(profile.locked_until) > new Date()) {
      throw new Error('Account is temporarily locked due to multiple failed login attempts')
    }
  }
  
  private async handleFailedLogin(email: string, deviceInfo?: DeviceInfo): Promise<void> {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('id, failed_login_attempts')
      .eq('email', email)
      .single()
    
    if (profile) {
      const attempts = (profile.failed_login_attempts || 0) + 1
      const maxAttempts = 5
      const lockoutDuration = 30 * 60 * 1000 // 30 minutes
      
      const updates: any = { failed_login_attempts: attempts }
      
      if (attempts >= maxAttempts) {
        updates.locked_until = new Date(Date.now() + lockoutDuration).toISOString()
        
        await this.securityAudit.logEvent({
          userId: profile.id,
          eventType: 'ACCOUNT_LOCKED',
          eventCategory: 'SECURITY',
          severity: 'HIGH',
          description: `Account locked after ${attempts} failed login attempts`,
          metadata: { email, deviceInfo },
        })
      }
      
      await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', profile.id)
    }
  }
  
  private async resetFailedLoginAttempts(userId: string): Promise<void> {
    await supabase
      .from('user_profiles')
      .update({
        failed_login_attempts: 0,
        locked_until: null,
        last_login_at: new Date().toISOString(),
      })
      .eq('id', userId)
  }
  
  private async createSessionRecord(
    userId: string,
    session: Session,
    deviceInfo?: DeviceInfo
  ): Promise<void> {
    await supabase.from('user_sessions').insert({
      user_id: userId,
      session_token: session.access_token,
      device_info: deviceInfo,
      expires_at: new Date(session.expires_at! * 1000).toISOString(),
    })
  }
}

export const authService = new AuthService()
```

### 3. Multi-Factor Authentication Service
```typescript
// packages/core/src/services/MFAService.ts
import * as speakeasy from 'speakeasy'
import * as QRCode from 'qrcode'
import { supabase } from '../lib/supabase'
import { EncryptionService } from './EncryptionService'
import { SMSService } from './SMSService'

export type MFAMethod = 'TOTP' | 'SMS' | 'EMAIL'

export interface MFASetupResult {
  secret: string
  qrCodeUrl: string
  backupCodes: string[]
}

class MFAService {
  private encryption = new EncryptionService()
  private smsService = new SMSService()

  async setupTOTP(userId: string): Promise<MFASetupResult> {
    // Generate secret
    const secret = speakeasy.generateSecret({
      name: 'Xalesin ERP',
      account: userId,
      issuer: 'Xalesin',
      length: 32,
    })

    // Generate backup codes
    const backupCodes = this.generateBackupCodes()
    const encryptedBackupCodes = await this.encryption.encrypt(JSON.stringify(backupCodes))
    const encryptedSecret = await this.encryption.encrypt(secret.base32)

    // Store in database
    await supabase.from('user_mfa').insert({
      user_id: userId,
      method: 'TOTP',
      secret_key: encryptedSecret,
      backup_codes: [encryptedBackupCodes],
      is_verified: false,
    })

    // Generate QR code
    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url!)

    return {
      secret: secret.base32,
      qrCodeUrl,
      backupCodes,
    }
  }

  async verifyTOTPSetup(userId: string, token: string): Promise<boolean> {
    const { data: mfaRecord } = await supabase
      .from('user_mfa')
      .select('secret_key')
      .eq('user_id', userId)
      .eq('method', 'TOTP')
      .eq('is_verified', false)
      .single()

    if (!mfaRecord) return false

    const decryptedSecret = await this.encryption.decrypt(mfaRecord.secret_key)
    
    const verified = speakeasy.totp.verify({
      secret: decryptedSecret,
      encoding: 'base32',
      token,
      window: 2, // Allow 2 time steps of variance
    })

    if (verified) {
      await supabase
        .from('user_mfa')
        .update({
          is_verified: true,
          verified_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .eq('method', 'TOTP')
    }

    return verified
  }

  async setupSMS(userId: string, phoneNumber: string): Promise<void> {
    // Generate and send verification code
    const verificationCode = this.generateVerificationCode()
    
    await this.smsService.sendSMS(phoneNumber, 
      `Your Xalesin ERP verification code is: ${verificationCode}`
    )

    // Store temporarily (you might want to use Redis for this)
    await supabase.from('user_mfa').insert({
      user_id: userId,
      method: 'SMS',
      phone_number: phoneNumber,
      secret_key: await this.encryption.encrypt(verificationCode),
      is_verified: false,
    })
  }

  async verifySMSSetup(userId: string, code: string): Promise<boolean> {
    const { data: mfaRecord } = await supabase
      .from('user_mfa')
      .select('secret_key')
      .eq('user_id', userId)
      .eq('method', 'SMS')
      .eq('is_verified', false)
      .single()

    if (!mfaRecord) return false

    const storedCode = await this.encryption.decrypt(mfaRecord.secret_key)
    const verified = storedCode === code

    if (verified) {
      await supabase
        .from('user_mfa')
        .update({
          is_verified: true,
          verified_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .eq('method', 'SMS')
    }

    return verified
  }

  async verifyMFACode(userId: string, code: string): Promise<boolean> {
    const { data: mfaMethods } = await supabase
      .from('user_mfa')
      .select('*')
      .eq('user_id', userId)
      .eq('is_verified', true)

    if (!mfaMethods || mfaMethods.length === 0) return false

    // Try TOTP first
    const totpMethod = mfaMethods.find(m => m.method === 'TOTP')
    if (totpMethod) {
      const decryptedSecret = await this.encryption.decrypt(totpMethod.secret_key)
      const verified = speakeasy.totp.verify({
        secret: decryptedSecret,
        encoding: 'base32',
        token: code,
        window: 2,
      })
      if (verified) return true
    }

    // Check backup codes
    for (const method of mfaMethods) {
      if (method.backup_codes) {
        for (const encryptedCode of method.backup_codes) {
          const backupCodes = JSON.parse(await this.encryption.decrypt(encryptedCode))
          if (backupCodes.includes(code)) {
            // Remove used backup code
            const updatedCodes = backupCodes.filter((c: string) => c !== code)
            const encryptedUpdatedCodes = await this.encryption.encrypt(JSON.stringify(updatedCodes))
            
            await supabase
              .from('user_mfa')
              .update({ backup_codes: [encryptedUpdatedCodes] })
              .eq('id', method.id)
            
            return true
          }
        }
      }
    }

    return false
  }

  async getUserMFAMethods(userId: string): Promise<MFAMethod[]> {
    const { data: methods } = await supabase
      .from('user_mfa')
      .select('method')
      .eq('user_id', userId)
      .eq('is_verified', true)

    return methods?.map(m => m.method) || []
  }

  async disableMFA(userId: string, method: MFAMethod): Promise<void> {
    await supabase
      .from('user_mfa')
      .delete()
      .eq('user_id', userId)
      .eq('method', method)
  }

  private generateBackupCodes(): string[] {
    const codes: string[] = []
    for (let i = 0; i < 10; i++) {
      codes.push(Math.random().toString(36).substring(2, 10).toUpperCase())
    }
    return codes
  }

  private generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }
}

export const mfaService = new MFAService()
```

### 4. Role-Based Access Control (RBAC)
```typescript
// packages/core/src/services/RBACService.ts
import { supabase } from '../lib/supabase'
import { SecurityAuditService } from './SecurityAuditService'

export interface Permission {
  resource: string
  action: string
  conditions?: Record<string, any>
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: Permission[]
  isSystemRole: boolean
}

class RBACService {
  private securityAudit = new SecurityAuditService()

  async createRole(tenantId: string, role: Omit<Role, 'id'>): Promise<Role> {
    const { data, error } = await supabase
      .from('roles')
      .insert({
        tenant_id: tenantId,
        name: role.name,
        description: role.description,
        permissions: role.permissions,
        is_system_role: role.isSystemRole,
      })
      .select()
      .single()

    if (error) throw error

    await this.securityAudit.logEvent({
      eventType: 'ROLE_CREATED',
      eventCategory: 'AUTHORIZATION',
      severity: 'INFO',
      description: `Role '${role.name}' created`,
      metadata: { tenantId, roleId: data.id, permissions: role.permissions },
    })

    return this.mapRoleFromDB(data)
  }

  async assignRoleToUser(
    userId: string,
    roleId: string,
    assignedBy: string,
    expiresAt?: Date
  ): Promise<void> {
    const { error } = await supabase.from('user_roles').insert({
      user_id: userId,
      role_id: roleId,
      assigned_by: assignedBy,
      expires_at: expiresAt?.toISOString(),
    })

    if (error) throw error

    await this.securityAudit.logEvent({
      userId: assignedBy,
      eventType: 'ROLE_ASSIGNED',
      eventCategory: 'AUTHORIZATION',
      severity: 'INFO',
      description: `Role assigned to user`,
      metadata: { targetUserId: userId, roleId, expiresAt },
    })
  }

  async revokeRoleFromUser(userId: string, roleId: string, revokedBy: string): Promise<void> {
    const { error } = await supabase
      .from('user_roles')
      .update({ is_active: false })
      .eq('user_id', userId)
      .eq('role_id', roleId)

    if (error) throw error

    await this.securityAudit.logEvent({
      userId: revokedBy,
      eventType: 'ROLE_REVOKED',
      eventCategory: 'AUTHORIZATION',
      severity: 'INFO',
      description: `Role revoked from user`,
      metadata: { targetUserId: userId, roleId },
    })
  }

  async getUserPermissions(userId: string): Promise<Permission[]> {
    const { data: userRoles } = await supabase
      .from('user_roles')
      .select(`
        roles!inner(
          permissions
        )
      `)
      .eq('user_id', userId)
      .eq('is_active', true)
      .or('expires_at.is.null,expires_at.gt.now()')

    const permissions: Permission[] = []
    userRoles?.forEach(userRole => {
      permissions.push(...(userRole.roles as any).permissions)
    })

    // Remove duplicates
    return permissions.filter((permission, index, self) => 
      index === self.findIndex(p => 
        p.resource === permission.resource && p.action === permission.action
      )
    )
  }

  async checkPermission(
    userId: string,
    resource: string,
    action: string,
    context?: Record<string, any>
  ): Promise<boolean> {
    const permissions = await this.getUserPermissions(userId)
    
    return permissions.some(permission => {
      if (permission.resource !== resource || permission.action !== action) {
        return false
      }

      // Check conditions if any
      if (permission.conditions && context) {
        return this.evaluateConditions(permission.conditions, context)
      }

      return true
    })
  }

  async requirePermission(
    userId: string,
    resource: string,
    action: string,
    context?: Record<string, any>
  ): Promise<void> {
    const hasPermission = await this.checkPermission(userId, resource, action, context)
    
    if (!hasPermission) {
      await this.securityAudit.logEvent({
        userId,
        eventType: 'ACCESS_DENIED',
        eventCategory: 'AUTHORIZATION',
        severity: 'WARNING',
        description: `Access denied for ${action} on ${resource}`,
        metadata: { resource, action, context },
      })
      
      throw new Error(`Access denied: insufficient permissions for ${action} on ${resource}`)
    }
  }

  private evaluateConditions(
    conditions: Record<string, any>,
    context: Record<string, any>
  ): boolean {
    // Simple condition evaluation - can be extended for complex rules
    for (const [key, value] of Object.entries(conditions)) {
      if (context[key] !== value) {
        return false
      }
    }
    return true
  }

  private mapRoleFromDB(data: any): Role {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      permissions: data.permissions,
      isSystemRole: data.is_system_role,
    }
  }
}

export const rbacService = new RBACService()
```

### 5. Security Audit Service
```typescript
// packages/core/src/services/SecurityAuditService.ts
import { supabase } from '../lib/supabase'

export type SecurityEventType = 
  | 'AUTHENTICATION_SUCCESS'
  | 'AUTHENTICATION_FAILED'
  | 'AUTHENTICATION_PARTIAL'
  | 'AUTHENTICATION_LOGOUT'
  | 'PASSWORD_CHANGED'
  | 'PASSWORD_RESET'
  | 'MFA_ENABLED'
  | 'MFA_DISABLED'
  | 'MFA_FAILED'
  | 'ACCOUNT_LOCKED'
  | 'ROLE_ASSIGNED'
  | 'ROLE_REVOKED'
  | 'ROLE_CREATED'
  | 'ROLE_DELETED'
  | 'ACCESS_DENIED'
  | 'DATA_ACCESS'
  | 'DATA_MODIFIED'
  | 'DATA_DELETED'
  | 'SECURITY_VIOLATION'
  | 'SUSPICIOUS_ACTIVITY'

export type SecurityCategory = 
  | 'AUTHENTICATION'
  | 'AUTHORIZATION'
  | 'DATA_ACCESS'
  | 'SECURITY'
  | 'COMPLIANCE'

export type SecuritySeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'

export interface SecurityEvent {
  tenantId?: string
  userId?: string
  eventType: SecurityEventType
  eventCategory: SecurityCategory
  severity: SecuritySeverity
  description: string
  metadata?: Record<string, any>
  ipAddress?: string
  userAgent?: string
  resourceType?: string
  resourceId?: string
  oldValues?: Record<string, any>
  newValues?: Record<string, any>
}

class SecurityAuditService {
  async logEvent(event: SecurityEvent): Promise<void> {
    try {
      await supabase.from('security_audit_log').insert({
        tenant_id: event.tenantId,
        user_id: event.userId,
        event_type: event.eventType,
        event_category: event.eventCategory,
        severity: event.severity,
        description: event.description,
        metadata: event.metadata || {},
        ip_address: event.ipAddress,
        user_agent: event.userAgent,
        resource_type: event.resourceType,
        resource_id: event.resourceId,
        old_values: event.oldValues,
        new_values: event.newValues,
      })

      // Send alerts for high severity events
      if (event.severity === 'HIGH' || event.severity === 'CRITICAL') {
        await this.sendSecurityAlert(event)
      }
    } catch (error) {
      console.error('Failed to log security event:', error)
      // Don't throw - logging failures shouldn't break the application
    }
  }

  async getAuditLogs(
    tenantId: string,
    filters: {
      userId?: string
      eventType?: SecurityEventType
      severity?: SecuritySeverity
      startDate?: Date
      endDate?: Date
      limit?: number
      offset?: number
    } = {}
  ): Promise<any[]> {
    let query = supabase
      .from('security_audit_log')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false })

    if (filters.userId) {
      query = query.eq('user_id', filters.userId)
    }

    if (filters.eventType) {
      query = query.eq('event_type', filters.eventType)
    }

    if (filters.severity) {
      query = query.eq('severity', filters.severity)
    }

    if (filters.startDate) {
      query = query.gte('created_at', filters.startDate.toISOString())
    }

    if (filters.endDate) {
      query = query.lte('created_at', filters.endDate.toISOString())
    }

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    if (filters.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 50) - 1)
    }

    const { data, error } = await query

    if (error) throw error
    return data || []
  }

  async detectSuspiciousActivity(userId: string): Promise<boolean> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
    
    // Check for multiple failed login attempts
    const { data: failedLogins } = await supabase
      .from('security_audit_log')
      .select('id')
      .eq('user_id', userId)
      .eq('event_type', 'AUTHENTICATION_FAILED')
      .gte('created_at', oneHourAgo.toISOString())

    if (failedLogins && failedLogins.length >= 5) {
      await this.logEvent({
        userId,
        eventType: 'SUSPICIOUS_ACTIVITY',
        eventCategory: 'SECURITY',
        severity: 'HIGH',
        description: 'Multiple failed login attempts detected',
        metadata: { failedAttempts: failedLogins.length },
      })
      return true
    }

    // Check for access from multiple locations
    const { data: recentSessions } = await supabase
      .from('user_sessions')
      .select('location')
      .eq('user_id', userId)
      .gte('created_at', oneHourAgo.toISOString())

    if (recentSessions && recentSessions.length > 1) {
      const locations = recentSessions
        .map(s => s.location)
        .filter(Boolean)
        .map(l => `${l.country}-${l.city}`)
      
      const uniqueLocations = [...new Set(locations)]
      
      if (uniqueLocations.length > 1) {
        await this.logEvent({
          userId,
          eventType: 'SUSPICIOUS_ACTIVITY',
          eventCategory: 'SECURITY',
          severity: 'MEDIUM',
          description: 'Access from multiple locations detected',
          metadata: { locations: uniqueLocations },
        })
        return true
      }
    }

    return false
  }

  private async sendSecurityAlert(event: SecurityEvent): Promise<void> {
    // Implementation for sending security alerts
    // This could be email, Slack, SMS, etc.
    console.log('Security Alert:', event)
  }
}

export const securityAuditService = new SecurityAuditService()
```

### 6. Row Level Security (RLS) Policies
```sql
-- Row Level Security Policies
-- auth/rls_policies.sql

-- Enable RLS on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_mfa ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.user_profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur
      JOIN public.roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND r.name = 'admin'
      AND ur.is_active = true
    )
  );

-- MFA policies
CREATE POLICY "Users can manage own MFA" ON public.user_mfa
  FOR ALL USING (auth.uid() = user_id);

-- Sessions policies
CREATE POLICY "Users can view own sessions" ON public.user_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON public.user_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- Roles policies
CREATE POLICY "Users can view roles in their tenant" ON public.roles
  FOR SELECT USING (
    tenant_id IN (
      SELECT tenant_id FROM public.user_profiles
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage roles" ON public.roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur
      JOIN public.roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND r.name = 'admin'
      AND ur.is_active = true
    )
  );

-- User roles policies
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage user roles" ON public.user_roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_roles ur
      JOIN public.roles r ON ur.role_id = r.id
      WHERE ur.user_id = auth.uid()
      AND r.name = 'admin'
      AND ur.is_active = true
    )
  );

-- Audit log policies
CREATE POLICY "Users can view audit logs for their tenant" ON public.security_audit_log
  FOR SELECT USING (
    tenant_id IN (
      SELECT tenant_id FROM public.user_profiles
      WHERE id = auth.uid()
    )
    AND (
      user_id = auth.uid() OR
      EXISTS (
        SELECT 1 FROM public.user_roles ur
        JOIN public.roles r ON ur.role_id = r.id
        WHERE ur.user_id = auth.uid()
        AND r.name IN ('admin', 'security_officer')
        AND ur.is_active = true
      )
    )
  );

CREATE POLICY "System can insert audit logs" ON public.security_audit_log
  FOR INSERT WITH CHECK (true);
```

### 7. Authentication Hooks
```typescript
// packages/core/src/hooks/useAuth.ts
import { useState, useEffect, createContext, useContext } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { authService, LoginCredentials, AuthResult } from '../services/AuthService'
import { rbacService, Permission } from '../services/RBACService'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  permissions: Permission[]
  signIn: (credentials: LoginCredentials) => Promise<AuthResult>
  signOut: () => Promise<void>
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>
  hasPermission: (resource: string, action: string, context?: Record<string, any>) => boolean
  requirePermission: (resource: string, action: string, context?: Record<string, any>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [permissions, setPermissions] = useState<Permission[]>([])

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        loadUserPermissions(session.user.id)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await loadUserPermissions(session.user.id)
        } else {
          setPermissions([])
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const loadUserPermissions = async (userId: string) => {
    try {
      const userPermissions = await rbacService.getUserPermissions(userId)
      setPermissions(userPermissions)
    } catch (error) {
      console.error('Failed to load user permissions:', error)
      setPermissions([])
    }
  }

  const signIn = async (credentials: LoginCredentials): Promise<AuthResult> => {
    return await authService.signIn(credentials)
  }

  const signOut = async (): Promise<void> => {
    await authService.signOut()
  }

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    await authService.changePassword(currentPassword, newPassword)
  }

  const hasPermission = (
    resource: string,
    action: string,
    context?: Record<string, any>
  ): boolean => {
    return permissions.some(permission => {
      if (permission.resource !== resource || permission.action !== action) {
        return false
      }

      if (permission.conditions && context) {
        // Simple condition evaluation
        for (const [key, value] of Object.entries(permission.conditions)) {
          if (context[key] !== value) {
            return false
          }
        }
      }

      return true
    })
  }

  const requirePermission = async (
    resource: string,
    action: string,
    context?: Record<string, any>
  ): Promise<void> => {
    if (user) {
      await rbacService.requirePermission(user.id, resource, action, context)
    } else {
      throw new Error('Not authenticated')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      permissions,
      signIn,
      signOut,
      changePassword,
      hasPermission,
      requirePermission,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

## ✅ Acceptance Criteria
- [ ] Supabase authentication is properly configured
- [ ] Multi-factor authentication (TOTP and SMS) works
- [ ] Role-based access control is implemented and enforced
- [ ] Comprehensive audit logging captures all security events
- [ ] Row-level security policies protect data access
- [ ] Password policies and account lockout mechanisms work
- [ ] Session management tracks and controls user sessions
- [ ] Security monitoring detects suspicious activities
- [ ] Data encryption protects sensitive information
- [ ] Compliance requirements are met

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer

## 📊 Estimated Effort
- **Complexity**: Very High
- **Time Estimate**: 32-40 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Implement security headers and CORS policies
- Add rate limiting for authentication endpoints
- Setup security monitoring and alerting
- Plan for security compliance audits
- Implement data loss prevention (DLP) measures
- Add security training documentation

## 🎯 Success Metrics
- Zero security vulnerabilities in penetration testing
- 100% audit trail coverage for sensitive operations
- MFA adoption rate above 90%
- Authentication response time under 500ms
- Zero unauthorized data access incidents
- Compliance audit passes with high scores

## 🔒 Security Compliance
- SOC 2 Type II compliance
- GDPR data protection compliance
- ISO 27001 security standards
- OWASP security best practices
- Industry-specific compliance (HIPAA, PCI-DSS if applicable)