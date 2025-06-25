/**
 * Authentication hooks for Xalesin ERP
 * React hooks for managing authentication state and operations
 */

import { useState, useEffect, useCallback, useContext, createContext, ReactNode } from 'react'
import type { User, AuthContext as AuthContextType } from '../types/database'
import type { SignInRequest, SignUpRequest, UpdatePasswordRequest, UpdateProfileRequest } from '../services/auth'
import { AuthService } from '../services/auth'
import { ErrorHandler, type Result } from '../utils/errors'

/**
 * Authentication context
 */
const AuthContext = createContext<AuthContextType | null>(null)

/**
 * Authentication provider props
 */
interface AuthProviderProps {
  children: ReactNode
  authService: AuthService
}

/**
 * Authentication provider component
 */
export function AuthProvider({ children, authService }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)

  // Initialize authentication state
  useEffect(() => {
    const initAuth = async () => {
      try {
        setLoading(true)
        const session = await authService.getCurrentSession()
        if (session?.user) {
          const userEntity = await authService.getCurrentUser()
          setUser(userEntity)
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error)
      } finally {
        setLoading(false)
        setInitialized(true)
      }
    }

    initAuth()
  }, [authService])

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        try {
          const userEntity = await authService.getCurrentUser()
          setUser(userEntity)
        } catch (error) {
          console.error('Failed to load user:', error)
          setUser(null)
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [authService])

  const contextValue: AuthContextType = {
    user,
    loading,
    initialized,
    isAuthenticated: !!user,
    permissions: user?.permissions || [],
    tenantId: user?.tenant_id || null
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Hook to access authentication context
 */
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

/**
 * Authentication hook
 */
export function useAuth(authService: AuthService) {
  const context = useAuthContext()
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  /**
   * Sign in user
   */
  const signIn = useCallback(async (request: SignInRequest): Promise<Result<User>> => {
    try {
      setActionLoading('signIn')
      setError(null)
      
      const result = await authService.signIn(request)
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Sign up user
   */
  const signUp = useCallback(async (request: SignUpRequest): Promise<Result<User>> => {
    try {
      setActionLoading('signUp')
      setError(null)
      
      const result = await authService.signUp(request)
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Sign out user
   */
  const signOut = useCallback(async (): Promise<Result<void>> => {
    try {
      setActionLoading('signOut')
      setError(null)
      
      const result = await authService.signOut()
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Reset password
   */
  const resetPassword = useCallback(async (email: string): Promise<Result<void>> => {
    try {
      setActionLoading('resetPassword')
      setError(null)
      
      const result = await authService.resetPassword(email)
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Update password
   */
  const updatePassword = useCallback(async (request: UpdatePasswordRequest): Promise<Result<void>> => {
    try {
      setActionLoading('updatePassword')
      setError(null)
      
      const result = await authService.updatePassword(request)
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Update profile
   */
  const updateProfile = useCallback(async (request: UpdateProfileRequest): Promise<Result<User>> => {
    try {
      setActionLoading('updateProfile')
      setError(null)
      
      const result = await authService.updateProfile(request)
      
      if (!result.success) {
        setError(result.error.message)
        return result
      }
      
      return result
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      setActionLoading(null)
    }
  }, [authService])

  /**
   * Check if user has permission
   */
  const hasPermission = useCallback((permission: string): boolean => {
    return authService.hasPermission(permission)
  }, [authService, context.user])

  /**
   * Check if user has any of the permissions
   */
  const hasAnyPermission = useCallback((permissions: string[]): boolean => {
    return authService.hasAnyPermission(permissions)
  }, [authService, context.user])

  /**
   * Check if user has all permissions
   */
  const hasAllPermissions = useCallback((permissions: string[]): boolean => {
    return authService.hasAllPermissions(permissions)
  }, [authService, context.user])

  /**
   * Check if user has role
   */
  const hasRole = useCallback((role: string): boolean => {
    return authService.hasRole(role)
  }, [authService, context.user])

  return {
    // State from context
    user: context.user,
    loading: context.loading || actionLoading !== null,
    initialized: context.initialized,
    isAuthenticated: context.isAuthenticated,
    permissions: context.permissions,
    tenantId: context.tenantId,
    
    // Action state
    actionLoading,
    error,
    
    // Actions
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    clearError,
    
    // Permission checks
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    hasRole
  }
}

/**
 * Hook for permission-based rendering
 */
export function usePermissions(authService: AuthService) {
  const { permissions, user } = useAuthContext()
  
  const can = useCallback((permission: string): boolean => {
    return authService.hasPermission(permission)
  }, [authService, permissions])
  
  const canAny = useCallback((permissionList: string[]): boolean => {
    return authService.hasAnyPermission(permissionList)
  }, [authService, permissions])
  
  const canAll = useCallback((permissionList: string[]): boolean => {
    return authService.hasAllPermissions(permissionList)
  }, [authService, permissions])
  
  const hasRole = useCallback((role: string): boolean => {
    return authService.hasRole(role)
  }, [authService, user])
  
  return {
    permissions,
    can,
    canAny,
    canAll,
    hasRole
  }
}

/**
 * Hook for session management
 */
export function useSession(authService: AuthService) {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const loadSession = async () => {
      try {
        const currentSession = await authService.getCurrentSession()
        setSession(currentSession)
      } catch (error) {
        console.error('Failed to load session:', error)
        setSession(null)
      } finally {
        setLoading(false)
      }
    }
    
    loadSession()
  }, [authService])
  
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange((event, newSession) => {
      setSession(newSession)
    })
    
    return unsubscribe
  }, [authService])
  
  const refreshSession = useCallback(async () => {
    try {
      setLoading(true)
      const refreshedSession = await authService.refreshSession()
      setSession(refreshedSession)
      return refreshedSession
    } catch (error) {
      console.error('Failed to refresh session:', error)
      setSession(null)
      throw error
    } finally {
      setLoading(false)
    }
  }, [authService])
  
  return {
    session,
    loading,
    refreshSession,
    isValid: !!session?.access_token,
    expiresAt: session?.expires_at ? new Date(session.expires_at * 1000) : null
  }
}

/**
 * Hook for authentication guards
 */
export function useAuthGuard(authService: AuthService, options: {
  requireAuth?: boolean
  requiredPermissions?: string[]
  requiredRole?: string
  redirectTo?: string
} = {}) {
  const {
    requireAuth = true,
    requiredPermissions = [],
    requiredRole,
    redirectTo = '/login'
  } = options
  
  const { isAuthenticated, loading, initialized } = useAuthContext()
  const { can, canAll, hasRole } = usePermissions(authService)
  
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  
  useEffect(() => {
    if (!initialized || loading) {
      return
    }
    
    // Check authentication
    if (requireAuth && !isAuthenticated) {
      setIsAuthorized(false)
      setShouldRedirect(true)
      return
    }
    
    // Check permissions
    if (requiredPermissions.length > 0 && !canAll(requiredPermissions)) {
      setIsAuthorized(false)
      setShouldRedirect(false) // Don't redirect for permission issues
      return
    }
    
    // Check role
    if (requiredRole && !hasRole(requiredRole)) {
      setIsAuthorized(false)
      setShouldRedirect(false) // Don't redirect for role issues
      return
    }
    
    setIsAuthorized(true)
    setShouldRedirect(false)
  }, [initialized, loading, isAuthenticated, requiredPermissions, requiredRole, canAll, hasRole])
  
  return {
    isAuthorized,
    shouldRedirect,
    redirectTo,
    loading: loading || !initialized
  }
}