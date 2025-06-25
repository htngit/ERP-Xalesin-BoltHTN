/**
 * API hooks for Xalesin ERP
 * React hooks for data fetching, mutations, and API state management
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import type { ApiResponse, PaginationParams } from '../types/business'
import { ApiService } from '../services/api'
import { ErrorHandler, type Result } from '../utils/errors'
import { functionUtils } from '../utils/helpers'

/**
 * Query options
 */
interface QueryOptions {
  enabled?: boolean
  refetchOnMount?: boolean
  refetchOnWindowFocus?: boolean
  staleTime?: number
  cacheTime?: number
  retry?: number
  retryDelay?: number
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}

/**
 * Mutation options
 */
interface MutationOptions<TData = any, TVariables = any> {
  onSuccess?: (data: TData, variables: TVariables) => void
  onError?: (error: any, variables: TVariables) => void
  onSettled?: (data: TData | undefined, error: any, variables: TVariables) => void
}

/**
 * Query state
 */
interface QueryState<T> {
  data: T | null
  loading: boolean
  error: string | null
  isStale: boolean
  lastFetched: Date | null
}

/**
 * Mutation state
 */
interface MutationState {
  loading: boolean
  error: string | null
  isSuccess: boolean
  isError: boolean
}

/**
 * Pagination state
 */
interface PaginationState {
  page: number
  pageSize: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

/**
 * Base query hook
 */
export function useQuery<T>(
  queryKey: string,
  queryFn: () => Promise<T>,
  options: QueryOptions = {}
) {
  const {
    enabled = true,
    refetchOnMount = true,
    refetchOnWindowFocus = false,
    staleTime = 5 * 60 * 1000, // 5 minutes
    cacheTime = 10 * 60 * 1000, // 10 minutes
    retry = 3,
    retryDelay = 1000,
    onSuccess,
    onError
  } = options

  const [state, setState] = useState<QueryState<T>>({
    data: null,
    loading: false,
    error: null,
    isStale: false,
    lastFetched: null
  })

  const retryCountRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const abortControllerRef = useRef<AbortController>()

  /**
   * Execute query
   */
  const executeQuery = useCallback(async (force = false) => {
    if (!enabled) return

    // Check if data is stale
    if (!force && state.data && state.lastFetched) {
      const timeSinceLastFetch = Date.now() - state.lastFetched.getTime()
      if (timeSinceLastFetch < staleTime) {
        return
      }
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()

    setState(prev => ({
      ...prev,
      loading: true,
      error: null
    }))

    try {
      const data = await queryFn()
      
      setState({
        data,
        loading: false,
        error: null,
        isStale: false,
        lastFetched: new Date()
      })

      retryCountRef.current = 0
      onSuccess?.(data)
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: handledError.message
      }))

      // Retry logic
      if (retryCountRef.current < retry && ErrorHandler.isRetryable(handledError)) {
        retryCountRef.current++
        const delay = ErrorHandler.getRetryDelay(handledError, retryCountRef.current)
        
        timeoutRef.current = setTimeout(() => {
          executeQuery(force)
        }, delay)
      } else {
        onError?.(handledError)
      }
    }
  }, [enabled, queryFn, staleTime, retry, onSuccess, onError])

  /**
   * Refetch data
   */
  const refetch = useCallback(() => {
    return executeQuery(true)
  }, [executeQuery])

  /**
   * Invalidate query (mark as stale)
   */
  const invalidate = useCallback(() => {
    setState(prev => ({
      ...prev,
      isStale: true
    }))
  }, [])

  // Initial fetch
  useEffect(() => {
    if (refetchOnMount) {
      executeQuery()
    }
  }, [executeQuery, refetchOnMount])

  // Window focus refetch
  useEffect(() => {
    if (!refetchOnWindowFocus) return

    const handleFocus = () => {
      if (state.isStale) {
        executeQuery()
      }
    }

    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [refetchOnWindowFocus, executeQuery, state.isStale])

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  // Mark as stale after stale time
  useEffect(() => {
    if (!state.lastFetched) return

    const timeout = setTimeout(() => {
      setState(prev => ({
        ...prev,
        isStale: true
      }))
    }, staleTime)

    return () => clearTimeout(timeout)
  }, [state.lastFetched, staleTime])

  return {
    ...state,
    refetch,
    invalidate,
    isLoading: state.loading,
    isError: !!state.error,
    isSuccess: !!state.data && !state.error
  }
}

/**
 * Mutation hook
 */
export function useMutation<TData = any, TVariables = any>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: MutationOptions<TData, TVariables> = {}
) {
  const { onSuccess, onError, onSettled } = options

  const [state, setState] = useState<MutationState>({
    loading: false,
    error: null,
    isSuccess: false,
    isError: false
  })

  const [data, setData] = useState<TData | undefined>()

  /**
   * Execute mutation
   */
  const mutate = useCallback(async (variables: TVariables): Promise<Result<TData>> => {
    setState({
      loading: true,
      error: null,
      isSuccess: false,
      isError: false
    })

    try {
      const result = await mutationFn(variables)
      
      setState({
        loading: false,
        error: null,
        isSuccess: true,
        isError: false
      })

      setData(result)
      onSuccess?.(result, variables)
      onSettled?.(result, null, variables)
      
      return { success: true, data: result }
    } catch (error) {
      const handledError = ErrorHandler.handle(error)
      
      setState({
        loading: false,
        error: handledError.message,
        isSuccess: false,
        isError: true
      })

      onError?.(handledError, variables)
      onSettled?.(undefined, handledError, variables)
      
      return { success: false, error: handledError }
    }
  }, [mutationFn, onSuccess, onError, onSettled])

  /**
   * Reset mutation state
   */
  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      isSuccess: false,
      isError: false
    })
    setData(undefined)
  }, [])

  return {
    ...state,
    data,
    mutate,
    reset,
    isLoading: state.loading
  }
}

/**
 * Paginated query hook
 */
export function usePaginatedQuery<T>(
  queryKey: string,
  queryFn: (params: PaginationParams) => Promise<ApiResponse<T[]>>,
  initialParams: PaginationParams = { page: 1, limit: 20 },
  options: QueryOptions = {}
) {
  const [params, setParams] = useState<PaginationParams>(initialParams)
  const [pagination, setPagination] = useState<PaginationState>({
    page: initialParams.page || 1,
    pageSize: initialParams.limit || 20,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  const query = useQuery(
    `${queryKey}-${JSON.stringify(params)}`,
    () => queryFn(params),
    {
      ...options,
      onSuccess: (response: ApiResponse<T[]>) => {
        if (response.success && response.pagination) {
          setPagination({
            page: response.pagination.page,
            pageSize: response.pagination.limit,
            total: response.pagination.total,
            totalPages: Math.ceil(response.pagination.total / response.pagination.limit),
            hasNextPage: response.pagination.page * response.pagination.limit < response.pagination.total,
            hasPreviousPage: response.pagination.page > 1
          })
        }
        options.onSuccess?.(response)
      }
    }
  )

  /**
   * Go to specific page
   */
  const goToPage = useCallback((page: number) => {
    setParams(prev => ({ ...prev, page }))
  }, [])

  /**
   * Go to next page
   */
  const nextPage = useCallback(() => {
    if (pagination.hasNextPage) {
      goToPage(pagination.page + 1)
    }
  }, [pagination.hasNextPage, pagination.page, goToPage])

  /**
   * Go to previous page
   */
  const previousPage = useCallback(() => {
    if (pagination.hasPreviousPage) {
      goToPage(pagination.page - 1)
    }
  }, [pagination.hasPreviousPage, pagination.page, goToPage])

  /**
   * Change page size
   */
  const changePageSize = useCallback((pageSize: number) => {
    setParams(prev => ({ ...prev, limit: pageSize, page: 1 }))
  }, [])

  /**
   * Update filters
   */
  const updateFilters = useCallback((filters: Record<string, any>) => {
    setParams(prev => ({ ...prev, ...filters, page: 1 }))
  }, [])

  /**
   * Update sorting
   */
  const updateSort = useCallback((sortBy: string, sortOrder: 'asc' | 'desc' = 'asc') => {
    setParams(prev => ({ ...prev, sortBy, sortOrder, page: 1 }))
  }, [])

  return {
    ...query,
    data: query.data?.success ? query.data.data : [],
    pagination,
    params,
    goToPage,
    nextPage,
    previousPage,
    changePageSize,
    updateFilters,
    updateSort
  }
}

/**
 * Infinite query hook
 */
export function useInfiniteQuery<T>(
  queryKey: string,
  queryFn: (params: PaginationParams) => Promise<ApiResponse<T[]>>,
  initialParams: PaginationParams = { page: 1, limit: 20 },
  options: QueryOptions = {}
) {
  const [allData, setAllData] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(initialParams.page || 1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false)

  const query = useQuery(
    `${queryKey}-infinite-${currentPage}`,
    () => queryFn({ ...initialParams, page: currentPage }),
    {
      ...options,
      enabled: options.enabled !== false && hasNextPage,
      onSuccess: (response: ApiResponse<T[]>) => {
        if (response.success) {
          setAllData(prev => {
            if (currentPage === 1) {
              return response.data || []
            }
            return [...prev, ...(response.data || [])]
          })

          if (response.pagination) {
            const totalPages = Math.ceil(response.pagination.total / response.pagination.limit)
            setHasNextPage(currentPage < totalPages)
          } else {
            setHasNextPage((response.data?.length || 0) >= (initialParams.limit || 20))
          }
        }
        setIsFetchingNextPage(false)
        options.onSuccess?.(response)
      },
      onError: (error) => {
        setIsFetchingNextPage(false)
        options.onError?.(error)
      }
    }
  )

  /**
   * Fetch next page
   */
  const fetchNextPage = useCallback(() => {
    if (hasNextPage && !query.loading && !isFetchingNextPage) {
      setIsFetchingNextPage(true)
      setCurrentPage(prev => prev + 1)
    }
  }, [hasNextPage, query.loading, isFetchingNextPage])

  /**
   * Reset to first page
   */
  const reset = useCallback(() => {
    setAllData([])
    setCurrentPage(1)
    setHasNextPage(true)
    setIsFetchingNextPage(false)
  }, [])

  return {
    ...query,
    data: allData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    reset
  }
}

/**
 * Debounced query hook
 */
export function useDebouncedQuery<T>(
  queryKey: string,
  queryFn: () => Promise<T>,
  delay = 300,
  options: QueryOptions = {}
) {
  const [debouncedQueryFn] = useState(() => 
    functionUtils.debounce(queryFn, delay)
  )

  return useQuery(queryKey, debouncedQueryFn, options)
}

/**
 * API service hooks
 */
export function useApiService(apiService: ApiService) {
  /**
   * Generic GET request
   */
  const useGet = <T>(endpoint: string, options?: QueryOptions) => {
    return useQuery(
      endpoint,
      () => apiService.get<T>(endpoint),
      options
    )
  }

  /**
   * Generic POST mutation
   */
  const usePost = <TData = any, TVariables = any>(
    endpoint: string,
    options?: MutationOptions<TData, TVariables>
  ) => {
    return useMutation(
      (data: TVariables) => apiService.post<TData>(endpoint, data),
      options
    )
  }

  /**
   * Generic PUT mutation
   */
  const usePut = <TData = any, TVariables = any>(
    endpoint: string,
    options?: MutationOptions<TData, TVariables>
  ) => {
    return useMutation(
      (data: TVariables) => apiService.put<TData>(endpoint, data),
      options
    )
  }

  /**
   * Generic DELETE mutation
   */
  const useDelete = <TData = any>(
    endpoint: string,
    options?: MutationOptions<TData, string>
  ) => {
    return useMutation(
      (id: string) => apiService.delete<TData>(`${endpoint}/${id}`),
      options
    )
  }

  return {
    useGet,
    usePost,
    usePut,
    useDelete
  }
}