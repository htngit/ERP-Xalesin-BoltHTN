/**
 * Hooks index for Xalesin ERP Core
 * Central export point for all React hooks
 */

// Authentication hooks
export {
  AuthProvider,
  useAuthContext,
  useAuth,
  usePermissions,
  useSession,
  useAuthGuard
} from './useAuth.tsx'

// API hooks
export {
  useQuery,
  useMutation,
  usePaginatedQuery,
  useInfiniteQuery,
  useDebouncedQuery,
  useApiService
} from './useApi'

// Business logic hooks
export {
  usePriceCalculation,
  useTaxCalculation,
  useDiscountCalculation,
  useCurrencyConversion,
  useInventoryManagement,
  useDocumentValidation,
  useDocumentStatus,
  useBusinessMetrics
} from './useBusiness'

// Re-export types for convenience
export type {
  QueryOptions,
  MutationOptions,
  QueryState,
  MutationState,
  PaginationState
} from './useApi'

export type {
  AuthContextType,
  SignInRequest,
  SignUpRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest
} from './useAuth.tsx'