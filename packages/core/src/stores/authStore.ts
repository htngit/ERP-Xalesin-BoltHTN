/**
 * Authentication store for Xalesin ERP
 * Global state management for authentication using Zustand
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { User, Tenant } from '../types/database'
import type { UserRole, Permission } from '../services/auth'
import { AuthService } from '../services/auth'
import { ErrorHandler } from '../utils/errors'

/**
 * Authentication state interface
 */
interface AuthState {
  // State
  user: User | null
  tenant: Tenant | null
  role: UserRole | null
  permissions: Permission[]
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  sessionExpiry: Date | null
  lastActivity: Date | null

  // Actions
  setUser: (user: User | null) => void
  setTenant: (tenant: Tenant | null) => void
  setRole: (role: UserRole | null) => void
  setPermissions: (permissions: Permission[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setSessionExpiry: (expiry: Date | null) => void
  updateLastActivity: () => void
  clearAuth: () => void
  reset: () => void

  // Computed
  hasPermission: (permission: Permission) => boolean
  hasAnyPermission: (permissions: Permission[]) => boolean
  hasAllPermissions: (permissions: Permission[]) => boolean
  isSessionExpired: () => boolean
  getTimeUntilExpiry: () => number
}

/**
 * Initial state
 */
const initialState = {
  user: null,
  tenant: null,
  role: null,
  permissions: [],
  isAuthenticated: false,
  isLoading: false,
  error: null,
  sessionExpiry: null,
  lastActivity: null
}

/**
 * Authentication store
 */
export const useAuthStore = create<AuthState>()()
  persist(
    immer((set, get) => ({
      ...initialState,

      // Actions
      setUser: (user) => {
        set((state) => {
          state.user = user
          state.isAuthenticated = !!user
          if (user) {
            state.error = null
            state.lastActivity = new Date()
          }
        })
      },

      setTenant: (tenant) => {
        set((state) => {
          state.tenant = tenant
        })
      },

      setRole: (role) => {
        set((state) => {
          state.role = role
        })
      },

      setPermissions: (permissions) => {
        set((state) => {
          state.permissions = permissions
        })
      },

      setLoading: (loading) => {
        set((state) => {
          state.isLoading = loading
        })
      },

      setError: (error) => {
        set((state) => {
          state.error = error
        })
      },

      setSessionExpiry: (expiry) => {
        set((state) => {
          state.sessionExpiry = expiry
        })
      },

      updateLastActivity: () => {
        set((state) => {
          state.lastActivity = new Date()
        })
      },

      clearAuth: () => {
        set((state) => {
          state.user = null
          state.tenant = null
          state.role = null
          state.permissions = []
          state.isAuthenticated = false
          state.sessionExpiry = null
          state.lastActivity = null
          state.error = null
        })
      },

      reset: () => {
        set(() => ({ ...initialState }))
      },

      // Computed
      hasPermission: (permission) => {
        const { permissions } = get()
        return permissions.includes(permission)
      },

      hasAnyPermission: (requiredPermissions) => {
        const { permissions } = get()
        return requiredPermissions.some(permission => permissions.includes(permission))
      },

      hasAllPermissions: (requiredPermissions) => {
        const { permissions } = get()
        return requiredPermissions.every(permission => permissions.includes(permission))
      },

      isSessionExpired: () => {
        const { sessionExpiry } = get()
        if (!sessionExpiry) return false
        return new Date() > sessionExpiry
      },

      getTimeUntilExpiry: () => {
        const { sessionExpiry } = get()
        if (!sessionExpiry) return 0
        return Math.max(0, sessionExpiry.getTime() - Date.now())
      }
    })),
    {
      name: 'xalesin-auth-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        tenant: state.tenant,
        role: state.role,
        permissions: state.permissions,
        isAuthenticated: state.isAuthenticated,
        sessionExpiry: state.sessionExpiry,
        lastActivity: state.lastActivity
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Check if session is expired on rehydration
          if (state.isSessionExpired()) {
            state.clearAuth()
          }
        }
      }
    }
  )

/**
 * Authentication store actions
 */
export const authActions = {
  /**
   * Initialize authentication
   */
  async initialize(authService: AuthService) {
    const store = useAuthStore.getState()
    
    try {
      store.setLoading(true)
      store.setError(null)

      // Check if user is already authenticated
      const session = await authService.getSession()
      if (session?.user) {
        const user = await authService.getCurrentUser()
        if (user) {
          store.setUser(user)
          
          // Load user role and permissions
          const role = authService.getUserRole(user)
          const permissions = authService.getUserPermissions(role)
          
          store.setRole(role)
          store.setPermissions(permissions)
          
          // Load tenant if user has one
          if (user.tenantId) {
            const tenant = await authService.getCurrentTenant()
            store.setTenant(tenant)
          }
          
          // Set session expiry
          if (session.expires_at) {
            store.setSessionExpiry(new Date(session.expires_at * 1000))
          }
        }
      }
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      store.setError(handledError.message)
      store.clearAuth()
    } finally {
      store.setLoading(false)
    }
  },

  /**
   * Sign in user
   */
  async signIn(authService: AuthService, email: string, password: string) {
    const store = useAuthStore.getState()
    
    try {
      store.setLoading(true)
      store.setError(null)

      const result = await authService.signIn({ email, password })
      
      if (result.success && result.data) {
        const { user, session } = result.data
        
        store.setUser(user)
        
        // Load user role and permissions
        const role = authService.getUserRole(user)
        const permissions = authService.getUserPermissions(role)
        
        store.setRole(role)
        store.setPermissions(permissions)
        
        // Load tenant if user has one
        if (user.tenantId) {
          const tenant = await authService.getCurrentTenant()
          store.setTenant(tenant)
        }
        
        // Set session expiry
        if (session?.expires_at) {
          store.setSessionExpiry(new Date(session.expires_at * 1000))
        }
        
        return result
      } else {
        store.setError(result.error?.message || 'Sign in failed')
        return result
      }
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      store.setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      store.setLoading(false)
    }
  },

  /**
   * Sign out user
   */
  async signOut(authService: AuthService) {
    const store = useAuthStore.getState()
    
    try {
      store.setLoading(true)
      await authService.signOut()
    } catch (error) {
      // Log error but don't prevent sign out
      console.error('Error during sign out:', error)
    } finally {
      store.clearAuth()
      store.setLoading(false)
    }
  },

  /**
   * Refresh session
   */
  async refreshSession(authService: AuthService) {
    const store = useAuthStore.getState()
    
    try {
      const session = await authService.getSession()
      
      if (session?.user) {
        const user = await authService.getCurrentUser()
        if (user) {
          store.setUser(user)
          
          // Update session expiry
          if (session.expires_at) {
            store.setSessionExpiry(new Date(session.expires_at * 1000))
          }
          
          store.updateLastActivity()
          return true
        }
      }
      
      // Session is invalid
      store.clearAuth()
      return false
    } catch (error) {
      store.clearAuth()
      return false
    }
  },

  /**
   * Update user profile
   */
  async updateProfile(authService: AuthService, updates: Partial<User>) {
    const store = useAuthStore.getState()
    
    try {
      store.setLoading(true)
      store.setError(null)

      const result = await authService.updateProfile(updates)
      
      if (result.success && result.data) {
        store.setUser(result.data)
        return result
      } else {
        store.setError(result.error?.message || 'Profile update failed')
        return result
      }
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      store.setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      store.setLoading(false)
    }
  },

  /**
   * Switch tenant
   */
  async switchTenant(authService: AuthService, tenantId: string) {
    const store = useAuthStore.getState()
    
    try {
      store.setLoading(true)
      store.setError(null)

      // Update user's current tenant
      const user = store.user
      if (user) {
        const updatedUser = { ...user, tenantId }
        const result = await authService.updateProfile({ tenantId })
        
        if (result.success) {
          store.setUser(updatedUser)
          
          // Load new tenant
          const tenant = await authService.getCurrentTenant()
          store.setTenant(tenant)
          
          return { success: true, data: tenant }
        } else {
          store.setError(result.error?.message || 'Tenant switch failed')
          return result
        }
      }
      
      return { success: false, error: { message: 'No user found' } }
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      store.setError(handledError.message)
      return { success: false, error: handledError }
    } finally {
      store.setLoading(false)
    }
  }
}

/**
 * Authentication selectors
 */
export const authSelectors = {
  user: () => useAuthStore((state) => state.user),
  tenant: () => useAuthStore((state) => state.tenant),
  role: () => useAuthStore((state) => state.role),
  permissions: () => useAuthStore((state) => state.permissions),
  isAuthenticated: () => useAuthStore((state) => state.isAuthenticated),
  isLoading: () => useAuthStore((state) => state.isLoading),
  error: () => useAuthStore((state) => state.error),
  sessionExpiry: () => useAuthStore((state) => state.sessionExpiry),
  lastActivity: () => useAuthStore((state) => state.lastActivity),
  hasPermission: () => useAuthStore((state) => state.hasPermission),
  hasAnyPermission: () => useAuthStore((state) => state.hasAnyPermission),
  hasAllPermissions: () => useAuthStore((state) => state.hasAllPermissions),
  isSessionExpired: () => useAuthStore((state) => state.isSessionExpired),
  getTimeUntilExpiry: () => useAuthStore((state) => state.getTimeUntilExpiry)
}