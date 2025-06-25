/**
 * API service for Xalesin ERP
 * Handles HTTP requests, error handling, and API communication
 */

import { SupabaseClient } from '@supabase/supabase-js'
import { supabaseService } from './supabase'
import { authService } from './auth'
import type { Database } from '../types/database'
import type {
  ApiResponse,
  PaginationParams,
  ValidationResult
} from '../types/business'
import type {
  UserListRequest,
  UserListResponse,
  UserCreateRequest,
  UserCreateResponse,
  UserUpdateRequest,
  UserUpdateResponse,
  TenantListRequest,
  TenantListResponse,
  TenantCreateRequest,
  TenantCreateResponse,
  PartyListRequest,
  PartyListResponse,
  PartyCreateRequest,
  PartyCreateResponse,
  ItemListRequest,
  ItemListResponse,
  ItemCreateRequest,
  ItemCreateResponse,
  SalesOrderListRequest,
  SalesOrderListResponse,
  SalesOrderCreateRequest,
  SalesOrderCreateResponse,
  PurchaseOrderListRequest,
  PurchaseOrderListResponse,
  PurchaseOrderCreateRequest,
  PurchaseOrderCreateResponse,
  InvoiceListRequest,
  InvoiceListResponse,
  InvoiceCreateRequest,
  InvoiceCreateResponse,
  PaymentListRequest,
  PaymentListResponse,
  PaymentCreateRequest,
  PaymentCreateResponse,
  InventoryStockLevelRequest,
  InventoryStockLevelResponse,
  InventoryAdjustmentRequest,
  InventoryAdjustmentResponse,
  InventoryTransferRequest,
  InventoryTransferResponse,
  ReportRequest,
  ReportResponse,
  DashboardDataRequest,
  DashboardDataResponse,
  GlobalSearchRequest,
  GlobalSearchResponse,
  FileUploadRequest,
  FileUploadResponse,
  BulkOperationRequest,
  BulkOperationResponse,
  DataExportRequest,
  DataExportResponse,
  DataImportRequest,
  DataImportResponse
} from '../types/api'
import type { Logger } from '../types'

/**
 * API configuration
 */
export interface ApiConfig {
  baseUrl?: string
  timeout?: number
  retryAttempts?: number
  retryDelay?: number
  enableLogging?: boolean
  enableCaching?: boolean
  cacheTimeout?: number
}

/**
 * Request options
 */
export interface RequestOptions {
  timeout?: number
  retries?: number
  cache?: boolean
  cacheKey?: string
  cacheTtl?: number
  headers?: Record<string, string>
  signal?: AbortSignal
}

/**
 * Cache entry
 */
interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

/**
 * API error types
 */
export enum ApiErrorCode {
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  MAINTENANCE = 'MAINTENANCE'
}

/**
 * API error class
 */
export class ApiError extends Error {
  constructor(
    public code: ApiErrorCode,
    message: string,
    public statusCode?: number,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * API service class
 */
export class ApiService {
  private client: SupabaseClient<Database>
  private logger?: Logger
  private config: Required<ApiConfig>
  private cache = new Map<string, CacheEntry<any>>()
  private requestQueue = new Map<string, Promise<any>>()

  constructor(config: ApiConfig = {}, logger?: Logger) {
    this.client = supabaseService.getClient()
    this.logger = logger
    this.config = {
      baseUrl: '',
      timeout: 30000,
      retryAttempts: 3,
      retryDelay: 1000,
      enableLogging: true,
      enableCaching: true,
      cacheTimeout: 300000, // 5 minutes
      ...config
    }
  }

  /**
   * Generic request method with error handling and retries
   */
  private async request<T>(
    operation: () => Promise<{ data: T | null; error: any }>,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const startTime = Date.now()
    const retries = options.retries ?? this.config.retryAttempts
    
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        // Check cache first
        if (options.cache && options.cacheKey) {
          const cached = this.getFromCache<T>(options.cacheKey)
          if (cached) {
            this.logger?.debug('Cache hit', { cacheKey: options.cacheKey })
            return { success: true, data: cached }
          }
        }

        // Check for duplicate requests
        if (options.cacheKey && this.requestQueue.has(options.cacheKey)) {
          this.logger?.debug('Duplicate request detected, waiting for existing request', {
            cacheKey: options.cacheKey
          })
          const result = await this.requestQueue.get(options.cacheKey)!
          return result
        }

        // Create request promise
        const requestPromise = this.executeRequest(operation, options)
        
        if (options.cacheKey) {
          this.requestQueue.set(options.cacheKey, requestPromise)
        }

        const result = await requestPromise

        // Clean up request queue
        if (options.cacheKey) {
          this.requestQueue.delete(options.cacheKey)
        }

        // Cache successful results
        if (result.success && options.cache && options.cacheKey && result.data) {
          this.setCache(options.cacheKey, result.data, options.cacheTtl)
        }

        // Log request
        if (this.config.enableLogging) {
          const duration = Date.now() - startTime
          this.logger?.info('API request completed', {
            success: result.success,
            duration,
            attempt: attempt + 1,
            cached: false
          })
        }

        return result

      } catch (error) {
        const isLastAttempt = attempt === retries
        
        if (isLastAttempt) {
          this.logger?.error('API request failed after all retries', error as Error, {
            attempts: attempt + 1,
            duration: Date.now() - startTime
          })
          
          return {
            success: false,
            error: {
              code: 'INTERNAL_ERROR',
              message: 'Request failed after multiple attempts',
              details: error
            }
          }
        }

        // Wait before retry
        await this.delay(this.config.retryDelay * Math.pow(2, attempt))
        
        this.logger?.warn('API request failed, retrying', {
          attempt: attempt + 1,
          error: (error as Error).message
        })
      }
    }

    // This should never be reached, but TypeScript requires it
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Unexpected error'
      }
    }
  }

  /**
   * Execute the actual request
   */
  private async executeRequest<T>(
    operation: () => Promise<{ data: T | null; error: any }>,
    options: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      // Set up timeout
      const timeout = options.timeout ?? this.config.timeout
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
          reject(new ApiError(ApiErrorCode.TIMEOUT_ERROR, 'Request timeout'))
        }, timeout)
      })

      // Execute operation with timeout
      const { data, error } = await Promise.race([
        operation(),
        timeoutPromise
      ])

      if (error) {
        return this.handleSupabaseError(error)
      }

      return {
        success: true,
        data: data as T
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: {
            code: error.code,
            message: error.message,
            details: error.details
          }
        }
      }

      return {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: (error as Error).message
        }
      }
    }
  }

  /**
   * Handle Supabase-specific errors
   */
  private handleSupabaseError(error: any): ApiResponse<never> {
    let code: ApiErrorCode
    let message: string

    switch (error.code) {
      case 'PGRST301':
        code = ApiErrorCode.UNAUTHORIZED
        message = 'Authentication required'
        break
      case 'PGRST302':
        code = ApiErrorCode.FORBIDDEN
        message = 'Access forbidden'
        break
      case 'PGRST116':
        code = ApiErrorCode.NOT_FOUND
        message = 'Resource not found'
        break
      case '23505':
        code = ApiErrorCode.VALIDATION_ERROR
        message = 'Duplicate entry'
        break
      case '23503':
        code = ApiErrorCode.VALIDATION_ERROR
        message = 'Foreign key constraint violation'
        break
      case '23514':
        code = ApiErrorCode.VALIDATION_ERROR
        message = 'Check constraint violation'
        break
      default:
        code = ApiErrorCode.SERVER_ERROR
        message = error.message || 'Server error'
    }

    return {
      success: false,
      error: {
        code,
        message,
        details: error
      }
    }
  }

  /**
   * Cache management
   */
  private getFromCache<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    const now = Date.now()
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.data
  }

  private setCache<T>(key: string, data: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl ?? this.config.cacheTimeout
    }
    this.cache.set(key, entry)
  }

  /**
   * Clear cache
   */
  clearCache(pattern?: string): void {
    if (pattern) {
      const regex = new RegExp(pattern)
      for (const key of this.cache.keys()) {
        if (regex.test(key)) {
          this.cache.delete(key)
        }
      }
    } else {
      this.cache.clear()
    }
  }

  /**
   * Utility method for delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * Build query with pagination and filters
   */
  private buildQuery(
    table: string,
    params: PaginationParams & Record<string, any> = {}
  ) {
    let query = this.client.from(table).select('*', { count: 'exact' })

    // Apply filters
    Object.entries(params).forEach(([key, value]) => {
      if (key === 'page' || key === 'limit' || value === undefined) return
      
      if (key.endsWith('_like')) {
        const field = key.replace('_like', '')
        query = query.ilike(field, `%${value}%`)
      } else if (key.endsWith('_in')) {
        const field = key.replace('_in', '')
        query = query.in(field, value)
      } else if (key.endsWith('_gte')) {
        const field = key.replace('_gte', '')
        query = query.gte(field, value)
      } else if (key.endsWith('_lte')) {
        const field = key.replace('_lte', '')
        query = query.lte(field, value)
      } else {
        query = query.eq(key, value)
      }
    })

    // Apply pagination
    const page = params.page || 1
    const limit = params.limit || 20
    const offset = (page - 1) * limit
    
    query = query.range(offset, offset + limit - 1)

    // Apply ordering
    if (params.sort_by) {
      const ascending = params.sort_order !== 'desc'
      query = query.order(params.sort_by, { ascending })
    }

    return query
  }

  // User Management APIs
  async getUsers(request: UserListRequest, options?: RequestOptions): Promise<ApiResponse<UserListResponse>> {
    return this.request(
      () => this.buildQuery('users', request).then(result => ({
        data: {
          users: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `users:${JSON.stringify(request)}` }
    )
  }

  async createUser(request: UserCreateRequest, options?: RequestOptions): Promise<ApiResponse<UserCreateResponse>> {
    return this.request(
      () => this.client.from('users').insert(request).select().single().then(result => ({
        data: { user: result.data },
        error: result.error
      })),
      options
    )
  }

  async updateUser(id: string, request: UserUpdateRequest, options?: RequestOptions): Promise<ApiResponse<UserUpdateResponse>> {
    return this.request(
      () => this.client.from('users').update(request).eq('id', id).select().single().then(result => ({
        data: { user: result.data },
        error: result.error
      })),
      options
    )
  }

  // Tenant Management APIs
  async getTenants(request: TenantListRequest, options?: RequestOptions): Promise<ApiResponse<TenantListResponse>> {
    return this.request(
      () => this.buildQuery('tenants', request).then(result => ({
        data: {
          tenants: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `tenants:${JSON.stringify(request)}` }
    )
  }

  async createTenant(request: TenantCreateRequest, options?: RequestOptions): Promise<ApiResponse<TenantCreateResponse>> {
    return this.request(
      () => this.client.from('tenants').insert(request).select().single().then(result => ({
        data: { tenant: result.data },
        error: result.error
      })),
      options
    )
  }

  // Party Management APIs
  async getParties(request: PartyListRequest, options?: RequestOptions): Promise<ApiResponse<PartyListResponse>> {
    return this.request(
      () => this.buildQuery('parties', request).then(result => ({
        data: {
          parties: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `parties:${JSON.stringify(request)}` }
    )
  }

  async createParty(request: PartyCreateRequest, options?: RequestOptions): Promise<ApiResponse<PartyCreateResponse>> {
    return this.request(
      () => this.client.from('parties').insert(request).select().single().then(result => ({
        data: { party: result.data },
        error: result.error
      })),
      options
    )
  }

  // Item Management APIs
  async getItems(request: ItemListRequest, options?: RequestOptions): Promise<ApiResponse<ItemListResponse>> {
    return this.request(
      () => this.buildQuery('items', request).then(result => ({
        data: {
          items: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `items:${JSON.stringify(request)}` }
    )
  }

  async createItem(request: ItemCreateRequest, options?: RequestOptions): Promise<ApiResponse<ItemCreateResponse>> {
    return this.request(
      () => this.client.from('items').insert(request).select().single().then(result => ({
        data: { item: result.data },
        error: result.error
      })),
      options
    )
  }

  // Sales Order APIs
  async getSalesOrders(request: SalesOrderListRequest, options?: RequestOptions): Promise<ApiResponse<SalesOrderListResponse>> {
    return this.request(
      () => this.buildQuery('sales_orders', request).then(result => ({
        data: {
          orders: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `sales_orders:${JSON.stringify(request)}` }
    )
  }

  async createSalesOrder(request: SalesOrderCreateRequest, options?: RequestOptions): Promise<ApiResponse<SalesOrderCreateResponse>> {
    return this.request(
      () => this.client.from('sales_orders').insert(request).select().single().then(result => ({
        data: { order: result.data },
        error: result.error
      })),
      options
    )
  }

  // Purchase Order APIs
  async getPurchaseOrders(request: PurchaseOrderListRequest, options?: RequestOptions): Promise<ApiResponse<PurchaseOrderListResponse>> {
    return this.request(
      () => this.buildQuery('purchase_orders', request).then(result => ({
        data: {
          orders: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `purchase_orders:${JSON.stringify(request)}` }
    )
  }

  async createPurchaseOrder(request: PurchaseOrderCreateRequest, options?: RequestOptions): Promise<ApiResponse<PurchaseOrderCreateResponse>> {
    return this.request(
      () => this.client.from('purchase_orders').insert(request).select().single().then(result => ({
        data: { order: result.data },
        error: result.error
      })),
      options
    )
  }

  // Invoice APIs
  async getInvoices(request: InvoiceListRequest, options?: RequestOptions): Promise<ApiResponse<InvoiceListResponse>> {
    return this.request(
      () => this.buildQuery('invoices', request).then(result => ({
        data: {
          invoices: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `invoices:${JSON.stringify(request)}` }
    )
  }

  async createInvoice(request: InvoiceCreateRequest, options?: RequestOptions): Promise<ApiResponse<InvoiceCreateResponse>> {
    return this.request(
      () => this.client.from('invoices').insert(request).select().single().then(result => ({
        data: { invoice: result.data },
        error: result.error
      })),
      options
    )
  }

  // Payment APIs
  async getPayments(request: PaymentListRequest, options?: RequestOptions): Promise<ApiResponse<PaymentListResponse>> {
    return this.request(
      () => this.buildQuery('payments', request).then(result => ({
        data: {
          payments: result.data || [],
          total: result.count || 0,
          page: request.page || 1,
          limit: request.limit || 20
        },
        error: result.error
      })),
      { ...options, cacheKey: `payments:${JSON.stringify(request)}` }
    )
  }

  async createPayment(request: PaymentCreateRequest, options?: RequestOptions): Promise<ApiResponse<PaymentCreateResponse>> {
    return this.request(
      () => this.client.from('payments').insert(request).select().single().then(result => ({
        data: { payment: result.data },
        error: result.error
      })),
      options
    )
  }

  // Inventory APIs
  async getStockLevels(request: InventoryStockLevelRequest, options?: RequestOptions): Promise<ApiResponse<InventoryStockLevelResponse>> {
    return this.request(
      () => this.client.rpc('get_stock_levels', request).then(result => ({
        data: { stockLevels: result.data || [] },
        error: result.error
      })),
      { ...options, cacheKey: `stock_levels:${JSON.stringify(request)}` }
    )
  }

  async createStockAdjustment(request: InventoryAdjustmentRequest, options?: RequestOptions): Promise<ApiResponse<InventoryAdjustmentResponse>> {
    return this.request(
      () => this.client.rpc('create_stock_adjustment', request).then(result => ({
        data: { adjustment: result.data },
        error: result.error
      })),
      options
    )
  }

  async createStockTransfer(request: InventoryTransferRequest, options?: RequestOptions): Promise<ApiResponse<InventoryTransferResponse>> {
    return this.request(
      () => this.client.rpc('create_stock_transfer', request).then(result => ({
        data: { transfer: result.data },
        error: result.error
      })),
      options
    )
  }

  // Reporting APIs
  async generateReport(request: ReportRequest, options?: RequestOptions): Promise<ApiResponse<ReportResponse>> {
    return this.request(
      () => this.client.rpc('generate_report', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      options
    )
  }

  // Dashboard APIs
  async getDashboardData(request: DashboardDataRequest, options?: RequestOptions): Promise<ApiResponse<DashboardDataResponse>> {
    return this.request(
      () => this.client.rpc('get_dashboard_data', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      { ...options, cacheKey: `dashboard:${JSON.stringify(request)}`, cacheTtl: 60000 } // 1 minute cache
    )
  }

  // Search APIs
  async globalSearch(request: GlobalSearchRequest, options?: RequestOptions): Promise<ApiResponse<GlobalSearchResponse>> {
    return this.request(
      () => this.client.rpc('global_search', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      options
    )
  }

  // File Upload APIs
  async uploadFile(request: FileUploadRequest, options?: RequestOptions): Promise<ApiResponse<FileUploadResponse>> {
    return this.request(
      () => this.client.storage.from('files').upload(request.path, request.file).then(result => ({
        data: { url: result.data?.path, file: result.data },
        error: result.error
      })),
      options
    )
  }

  // Bulk Operations
  async executeBulkOperation(request: BulkOperationRequest, options?: RequestOptions): Promise<ApiResponse<BulkOperationResponse>> {
    return this.request(
      () => this.client.rpc('execute_bulk_operation', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      options
    )
  }

  // Data Export/Import
  async exportData(request: DataExportRequest, options?: RequestOptions): Promise<ApiResponse<DataExportResponse>> {
    return this.request(
      () => this.client.rpc('export_data', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      options
    )
  }

  async importData(request: DataImportRequest, options?: RequestOptions): Promise<ApiResponse<DataImportResponse>> {
    return this.request(
      () => this.client.rpc('import_data', request).then(result => ({
        data: result.data,
        error: result.error
      })),
      options
    )
  }
}

/**
 * Default API service instance
 */
export const apiService = new ApiService()

/**
 * Export types and enums
 */
export type {
  ApiConfig,
  RequestOptions
}