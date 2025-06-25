/**
 * Services module exports
 * Central export point for all Xalesin ERP services
 */

// Supabase service
export {
  SupabaseService,
  createSupabaseService,
  supabaseService
} from './supabase'
export type { SupabaseConfig } from './supabase'

// Authentication service
export {
  AuthService,
  authService,
  UserRole,
  Permission
} from './auth'
export type {
  AuthContext,
  SignInRequest,
  SignUpRequest,
  PasswordResetRequest,
  PasswordUpdateRequest,
  ProfileUpdateRequest
} from './auth'

// API service
export {
  ApiService,
  apiService,
  ApiError,
  ApiErrorCode
} from './api'
export type {
  ApiConfig,
  RequestOptions
} from './api'