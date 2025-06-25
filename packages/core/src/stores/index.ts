/**
 * Stores index for Xalesin ERP Core
 * Central export point for all Zustand stores
 */

// Authentication store
export {
  useAuthStore,
  authActions,
  authSelectors
} from './authStore'

// Application store
export {
  useAppStore,
  appSelectors
} from './appStore'

// Re-export types for convenience
export type {
  UserRole,
  Permission
} from '../services/auth'

export type {
  NotificationLevel
} from '../types/business'