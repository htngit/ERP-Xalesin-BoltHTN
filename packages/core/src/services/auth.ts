/**
 * Authentication service for Xalesin ERP
 * Handles user authentication, authorization, and session management
 */

import { SupabaseClient, User, Session } from '@supabase/supabase-js'
import { supabaseService } from './supabase'
import type {
  Database,
  User as UserEntity,
  Tenant,
  AuditLog
} from '../types/database'
import type {
  ApiResponse,
  ValidationResult,
  AuditEntry
} from '../types/business'
import type { Logger } from '../types'
import { validateEmail, validateRequired } from '@xalesin/ui'

/**
 * User role definitions
 */
export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  TENANT_ADMIN = 'tenant_admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
  VIEWER = 'viewer'
}

/**
 * Permission definitions
 */
export enum Permission {
  // User management
  USERS_CREATE = 'users:create',
  USERS_READ = 'users:read',
  USERS_UPDATE = 'users:update',
  USERS_DELETE = 'users:delete',
  
  // Tenant management
  TENANTS_CREATE = 'tenants:create',
  TENANTS_READ = 'tenants:read',
  TENANTS_UPDATE = 'tenants:update',
  TENANTS_DELETE = 'tenants:delete',
  
  // Sales
  SALES_CREATE = 'sales:create',
  SALES_READ = 'sales:read',
  SALES_UPDATE = 'sales:update',
  SALES_DELETE = 'sales:delete',
  
  // Purchases
  PURCHASES_CREATE = 'purchases:create',
  PURCHASES_READ = 'purchases:read',
  PURCHASES_UPDATE = 'purchases:update',
  PURCHASES_DELETE = 'purchases:delete',
  
  // Inventory
  INVENTORY_CREATE = 'inventory:create',
  INVENTORY_READ = 'inventory:read',
  INVENTORY_UPDATE = 'inventory:update',
  INVENTORY_DELETE = 'inventory:delete',
  
  // Finance
  FINANCE_CREATE = 'finance:create',
  FINANCE_READ = 'finance:read',
  FINANCE_UPDATE = 'finance:update',
  FINANCE_DELETE = 'finance:delete',
  
  // Reports
  REPORTS_VIEW = 'reports:view',
  REPORTS_EXPORT = 'reports:export',
  
  // Settings
  SETTINGS_READ = 'settings:read',
  SETTINGS_UPDATE = 'settings:update'
}

/**
 * Role-permission mapping
 */
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.SUPER_ADMIN]: Object.values(Permission),
  [UserRole.TENANT_ADMIN]: [
    Permission.USERS_CREATE,
    Permission.USERS_READ,
    Permission.USERS_UPDATE,
    Permission.USERS_DELETE,
    Permission.TENANTS_READ,
    Permission.TENANTS_UPDATE,
    Permission.SALES_CREATE,
    Permission.SALES_READ,
    Permission.SALES_UPDATE,
    Permission.SALES_DELETE,
    Permission.PURCHASES_CREATE,
    Permission.PURCHASES_READ,
    Permission.PURCHASES_UPDATE,
    Permission.PURCHASES_DELETE,
    Permission.INVENTORY_CREATE,
    Permission.INVENTORY_READ,
    Permission.INVENTORY_UPDATE,
    Permission.INVENTORY_DELETE,
    Permission.FINANCE_CREATE,
    Permission.FINANCE_READ,
    Permission.FINANCE_UPDATE,
    Permission.FINANCE_DELETE,
    Permission.REPORTS_VIEW,
    Permission.REPORTS_EXPORT,
    Permission.SETTINGS_READ,
    Permission.SETTINGS_UPDATE
  ],
  [UserRole.MANAGER]: [
    Permission.USERS_READ,
    Permission.SALES_CREATE,
    Permission.SALES_READ,
    Permission.SALES_UPDATE,
    Permission.PURCHASES_CREATE,
    Permission.PURCHASES_READ,
    Permission.PURCHASES_UPDATE,
    Permission.INVENTORY_CREATE,
    Permission.INVENTORY_READ,
    Permission.INVENTORY_UPDATE,
    Permission.FINANCE_READ,
    Permission.REPORTS_VIEW,
    Permission.REPORTS_EXPORT,
    Permission.SETTINGS_READ
  ],
  [UserRole.EMPLOYEE]: [
    Permission.SALES_CREATE,
    Permission.SALES_READ,
    Permission.SALES_UPDATE,
    Permission.PURCHASES_CREATE,
    Permission.PURCHASES_READ,
    Permission.PURCHASES_UPDATE,
    Permission.INVENTORY_READ,
    Permission.INVENTORY_UPDATE,
    Permission.FINANCE_READ,
    Permission.REPORTS_VIEW
  ],
  [UserRole.VIEWER]: [
    Permission.SALES_READ,
    Permission.PURCHASES_READ,
    Permission.INVENTORY_READ,
    Permission.FINANCE_READ,
    Permission.REPORTS_VIEW
  ]
}

/**
 * Authentication context
 */
export interface AuthContext {
  user: User | null
  userEntity: UserEntity | null
  tenant: Tenant | null
  session: Session | null
  permissions: Permission[]
  isAuthenticated: boolean
  isLoading: boolean
}

/**
 * Sign in request
 */
export interface SignInRequest {
  email: string
  password: string
  tenantId?: string
}

/**
 * Sign up request
 */
export interface SignUpRequest {
  email: string
  password: string
  firstName: string
  lastName: string
  tenantId?: string
  role?: UserRole
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string
  redirectTo?: string
}

/**
 * Password update request
 */
export interface PasswordUpdateRequest {
  currentPassword: string
  newPassword: string
}

/**
 * Profile update request
 */
export interface ProfileUpdateRequest {
  firstName?: string
  lastName?: string
  phone?: string
  avatar?: string
  preferences?: Record<string, any>
}

/**
 * Authentication service
 */
export class AuthService {
  private client: SupabaseClient<Database>
  private logger?: Logger
  private authContext: AuthContext = {
    user: null,
    userEntity: null,
    tenant: null,
    session: null,
    permissions: [],
    isAuthenticated: false,
    isLoading: true
  }
  private listeners: ((context: AuthContext) => void)[] = []

  constructor(logger?: Logger) {
    this.client = supabaseService.getClient()
    this.logger = logger

    // Initialize auth state
    this.initializeAuth()
  }

  /**
   * Initialize authentication state
   */
  private async initializeAuth(): Promise<void> {
    try {
      // Get current session
      const { data: { session }, error } = await this.client.auth.getSession()
      
      if (error) {
        this.logger?.error('Failed to get initial session', error)
        this.updateAuthContext({ isLoading: false })
        return
      }

      if (session) {
        await this.handleAuthStateChange('SIGNED_IN', session)
      } else {
        this.updateAuthContext({ isLoading: false })
      }

      // Listen for auth changes
      this.client.auth.onAuthStateChange(async (event, session) => {
        await this.handleAuthStateChange(event, session)
      })

    } catch (error) {
      this.logger?.error('Failed to initialize auth', error as Error)
      this.updateAuthContext({ isLoading: false })
    }
  }

  /**
   * Handle authentication state changes
   */
  private async handleAuthStateChange(
    event: string,
    session: Session | null
  ): Promise<void> {
    try {
      if (event === 'SIGNED_IN' && session) {
        // Load user entity and tenant
        const [userEntity, tenant] = await Promise.all([
          this.loadUserEntity(session.user.id),
          this.loadUserTenant(session.user.id)
        ])

        const permissions = userEntity ? this.getUserPermissions(userEntity.role as UserRole) : []

        this.updateAuthContext({
          user: session.user,
          userEntity,
          tenant,
          session,
          permissions,
          isAuthenticated: true,
          isLoading: false
        })

        // Log successful sign in
        await this.logAuditEvent('user_signed_in', {
          userId: session.user.id,
          email: session.user.email,
          tenantId: tenant?.id
        })

      } else if (event === 'SIGNED_OUT') {
        // Log sign out
        if (this.authContext.userEntity) {
          await this.logAuditEvent('user_signed_out', {
            userId: this.authContext.userEntity.id,
            email: this.authContext.userEntity.email
          })
        }

        this.updateAuthContext({
          user: null,
          userEntity: null,
          tenant: null,
          session: null,
          permissions: [],
          isAuthenticated: false,
          isLoading: false
        })
      }
    } catch (error) {
      this.logger?.error('Failed to handle auth state change', error as Error, { event })
      this.updateAuthContext({ isLoading: false })
    }
  }

  /**
   * Update authentication context and notify listeners
   */
  private updateAuthContext(updates: Partial<AuthContext>): void {
    this.authContext = { ...this.authContext, ...updates }
    this.listeners.forEach(listener => listener(this.authContext))
  }

  /**
   * Load user entity from database
   */
  private async loadUserEntity(userId: string): Promise<UserEntity | null> {
    try {
      const { data, error } = await this.client
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        this.logger?.error('Failed to load user entity', error, { userId })
        return null
      }

      return data
    } catch (error) {
      this.logger?.error('Failed to load user entity', error as Error, { userId })
      return null
    }
  }

  /**
   * Load user's tenant from database
   */
  private async loadUserTenant(userId: string): Promise<Tenant | null> {
    try {
      const { data, error } = await this.client
        .from('users')
        .select(`
          tenant_id,
          tenants (
            id,
            name,
            slug,
            settings,
            subscription_plan,
            subscription_status,
            trial_ends_at,
            created_at,
            updated_at
          )
        `)
        .eq('id', userId)
        .single()

      if (error) {
        this.logger?.error('Failed to load user tenant', error, { userId })
        return null
      }

      return data.tenants as Tenant
    } catch (error) {
      this.logger?.error('Failed to load user tenant', error as Error, { userId })
      return null
    }
  }

  /**
   * Get user permissions based on role
   */
  private getUserPermissions(role: UserRole): Permission[] {
    return ROLE_PERMISSIONS[role] || []
  }

  /**
   * Log audit event
   */
  private async logAuditEvent(
    action: string,
    details: Record<string, any>
  ): Promise<void> {
    try {
      const auditEntry: Omit<AuditLog, 'id' | 'created_at'> = {
        tenant_id: this.authContext.tenant?.id || null,
        user_id: this.authContext.userEntity?.id || null,
        action,
        resource_type: 'user',
        resource_id: details.userId || null,
        old_values: null,
        new_values: details,
        ip_address: null, // Will be set by database trigger
        user_agent: navigator?.userAgent || null
      }

      await this.client.from('audit_logs').insert(auditEntry)
    } catch (error) {
      this.logger?.error('Failed to log audit event', error as Error, { action, details })
    }
  }

  /**
   * Get current authentication context
   */
  getAuthContext(): AuthContext {
    return this.authContext
  }

  /**
   * Subscribe to authentication context changes
   */
  subscribe(listener: (context: AuthContext) => void): () => void {
    this.listeners.push(listener)
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener)
      if (index > -1) {
        this.listeners.splice(index, 1)
      }
    }
  }

  /**
   * Sign in with email and password
   */
  async signIn(request: SignInRequest): Promise<ApiResponse<AuthContext>> {
    try {
      // Validate input
      const validation = this.validateSignInRequest(request)
      if (!validation.isValid) {
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid input',
            details: validation.errors
          }
        }
      }

      // Attempt sign in
      const { data, error } = await this.client.auth.signInWithPassword({
        email: request.email,
        password: request.password
      })

      if (error) {
        this.logger?.error('Sign in failed', error, { email: request.email })
        return {
          success: false,
          error: {
            code: error.message.includes('Invalid') ? 'INVALID_CREDENTIALS' : 'AUTH_ERROR',
            message: error.message
          }
        }
      }

      // Verify tenant access if specified
      if (request.tenantId) {
        const hasAccess = await this.verifyTenantAccess(data.user.id, request.tenantId)
        if (!hasAccess) {
          await this.signOut()
          return {
            success: false,
            error: {
              code: 'TENANT_ACCESS_DENIED',
              message: 'Access denied to the specified tenant'
            }
          }
        }
      }

      return {
        success: true,
        data: this.authContext
      }
    } catch (error) {
      this.logger?.error('Sign in error', error as Error, { email: request.email })
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Sign up new user
   */
  async signUp(request: SignUpRequest): Promise<ApiResponse<AuthContext>> {
    try {
      // Validate input
      const validation = this.validateSignUpRequest(request)
      if (!validation.isValid) {
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid input',
            details: validation.errors
          }
        }
      }

      // Attempt sign up
      const { data, error } = await this.client.auth.signUp({
        email: request.email,
        password: request.password,
        options: {
          data: {
            first_name: request.firstName,
            last_name: request.lastName
          }
        }
      })

      if (error) {
        this.logger?.error('Sign up failed', error, { email: request.email })
        return {
          success: false,
          error: {
            code: 'SIGNUP_ERROR',
            message: error.message
          }
        }
      }

      if (data.user) {
        // Create user entity
        await this.createUserEntity({
          id: data.user.id,
          email: request.email,
          firstName: request.firstName,
          lastName: request.lastName,
          tenantId: request.tenantId,
          role: request.role || UserRole.EMPLOYEE
        })
      }

      return {
        success: true,
        data: this.authContext
      }
    } catch (error) {
      this.logger?.error('Sign up error', error as Error, { email: request.email })
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<ApiResponse<void>> {
    try {
      const { error } = await this.client.auth.signOut()

      if (error) {
        this.logger?.error('Sign out failed', error)
        return {
          success: false,
          error: {
            code: 'SIGNOUT_ERROR',
            message: error.message
          }
        }
      }

      return { success: true }
    } catch (error) {
      this.logger?.error('Sign out error', error as Error)
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(request: PasswordResetRequest): Promise<ApiResponse<void>> {
    try {
      const { error } = await this.client.auth.resetPasswordForEmail(
        request.email,
        {
          redirectTo: request.redirectTo
        }
      )

      if (error) {
        this.logger?.error('Password reset request failed', error, { email: request.email })
        return {
          success: false,
          error: {
            code: 'PASSWORD_RESET_ERROR',
            message: error.message
          }
        }
      }

      return { success: true }
    } catch (error) {
      this.logger?.error('Password reset request error', error as Error, { email: request.email })
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Update user password
   */
  async updatePassword(request: PasswordUpdateRequest): Promise<ApiResponse<void>> {
    try {
      if (!this.authContext.isAuthenticated) {
        return {
          success: false,
          error: {
            code: 'UNAUTHORIZED',
            message: 'User not authenticated'
          }
        }
      }

      const { error } = await this.client.auth.updateUser({
        password: request.newPassword
      })

      if (error) {
        this.logger?.error('Password update failed', error)
        return {
          success: false,
          error: {
            code: 'PASSWORD_UPDATE_ERROR',
            message: error.message
          }
        }
      }

      // Log password change
      await this.logAuditEvent('password_changed', {
        userId: this.authContext.userEntity?.id
      })

      return { success: true }
    } catch (error) {
      this.logger?.error('Password update error', error as Error)
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(request: ProfileUpdateRequest): Promise<ApiResponse<UserEntity>> {
    try {
      if (!this.authContext.isAuthenticated || !this.authContext.userEntity) {
        return {
          success: false,
          error: {
            code: 'UNAUTHORIZED',
            message: 'User not authenticated'
          }
        }
      }

      const updates: Partial<UserEntity> = {}
      
      if (request.firstName !== undefined) updates.first_name = request.firstName
      if (request.lastName !== undefined) updates.last_name = request.lastName
      if (request.phone !== undefined) updates.phone = request.phone
      if (request.avatar !== undefined) updates.avatar = request.avatar
      if (request.preferences !== undefined) updates.preferences = request.preferences
      
      updates.updated_at = new Date().toISOString()

      const { data, error } = await this.client
        .from('users')
        .update(updates)
        .eq('id', this.authContext.userEntity.id)
        .select()
        .single()

      if (error) {
        this.logger?.error('Profile update failed', error)
        return {
          success: false,
          error: {
            code: 'PROFILE_UPDATE_ERROR',
            message: error.message
          }
        }
      }

      // Update auth context
      this.updateAuthContext({
        userEntity: data
      })

      // Log profile update
      await this.logAuditEvent('profile_updated', {
        userId: data.id,
        changes: Object.keys(updates)
      })

      return {
        success: true,
        data
      }
    } catch (error) {
      this.logger?.error('Profile update error', error as Error)
      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'An unexpected error occurred'
        }
      }
    }
  }

  /**
   * Check if user has permission
   */
  hasPermission(permission: Permission): boolean {
    return this.authContext.permissions.includes(permission)
  }

  /**
   * Check if user has any of the specified permissions
   */
  hasAnyPermission(permissions: Permission[]): boolean {
    return permissions.some(permission => this.hasPermission(permission))
  }

  /**
   * Check if user has all specified permissions
   */
  hasAllPermissions(permissions: Permission[]): boolean {
    return permissions.every(permission => this.hasPermission(permission))
  }

  /**
   * Validate sign in request
   */
  private validateSignInRequest(request: SignInRequest): ValidationResult {
    const errors: string[] = []

    if (!validateEmail(request.email).isValid) {
      errors.push('Invalid email address')
    }

    if (!validateRequired(request.password).isValid) {
      errors.push('Password is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate sign up request
   */
  private validateSignUpRequest(request: SignUpRequest): ValidationResult {
    const errors: string[] = []

    if (!validateEmail(request.email).isValid) {
      errors.push('Invalid email address')
    }

    if (!validateRequired(request.password).isValid) {
      errors.push('Password is required')
    }

    if (request.password.length < 8) {
      errors.push('Password must be at least 8 characters long')
    }

    if (!validateRequired(request.firstName).isValid) {
      errors.push('First name is required')
    }

    if (!validateRequired(request.lastName).isValid) {
      errors.push('Last name is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Verify user has access to tenant
   */
  private async verifyTenantAccess(userId: string, tenantId: string): Promise<boolean> {
    try {
      const { data, error } = await this.client
        .from('users')
        .select('tenant_id')
        .eq('id', userId)
        .eq('tenant_id', tenantId)
        .single()

      return !error && !!data
    } catch {
      return false
    }
  }

  /**
   * Create user entity in database
   */
  private async createUserEntity(userData: {
    id: string
    email: string
    firstName: string
    lastName: string
    tenantId?: string
    role: UserRole
  }): Promise<void> {
    try {
      const userEntity: Omit<UserEntity, 'created_at' | 'updated_at'> = {
        id: userData.id,
        tenant_id: userData.tenantId || null,
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
        role: userData.role,
        is_active: true,
        phone: null,
        avatar: null,
        last_login_at: null,
        preferences: {}
      }

      await this.client.from('users').insert(userEntity)
    } catch (error) {
      this.logger?.error('Failed to create user entity', error as Error, userData)
      throw error
    }
  }
}

/**
 * Default authentication service instance
 */
export const authService = new AuthService()

/**
 * Export types and enums
 */
export type {
  AuthContext,
  SignInRequest,
  SignUpRequest,
  PasswordResetRequest,
  PasswordUpdateRequest,
  ProfileUpdateRequest
}