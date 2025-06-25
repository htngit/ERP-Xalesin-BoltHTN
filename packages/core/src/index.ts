/**
 * Xalesin ERP Core Package
 * Main entry point for the core business logic and utilities
 */

// Types
export * from './types'

// Services
export * from './services'

// Utilities
export * from './utils'

// React Hooks
export * from './hooks'

// State Management
export * from './stores'

// Package information
export const CORE_VERSION = '1.0.0'
export const CORE_NAME = '@xalesin/core'

/**
 * Core package metadata
 */
export const CORE_METADATA = {
  name: CORE_NAME,
  version: CORE_VERSION,
  description: 'Core business logic and utilities for Xalesin ERP',
  author: 'Xalesin Team',
  license: 'MIT'
} as const

/**
 * Feature flags for the core package
 */
export const CORE_FEATURES = {
  AUTHENTICATION: true,
  AUTHORIZATION: true,
  MULTI_TENANT: true,
  REAL_TIME: true,
  OFFLINE_SUPPORT: false,
  AUDIT_LOGGING: true,
  FILE_STORAGE: true,
  NOTIFICATIONS: true,
  SEARCH: true,
  REPORTING: true,
  INTEGRATIONS: true,
  CUSTOM_FIELDS: true,
  WORKFLOWS: false,
  API_RATE_LIMITING: true,
  CACHING: true,
  BACKGROUND_JOBS: true,
  HEALTH_CHECKS: true,
  PERFORMANCE_MONITORING: true
} as const

/**
 * Core configuration defaults
 */
export const CORE_DEFAULTS = {
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100
  },
  CACHE: {
    DEFAULT_TTL: 300, // 5 minutes
    MAX_TTL: 3600 // 1 hour
  },
  API: {
    TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000 // 1 second
  },
  FILES: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  },
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_REQUIRE_UPPERCASE: true,
    PASSWORD_REQUIRE_LOWERCASE: true,
    PASSWORD_REQUIRE_NUMBERS: true,
    PASSWORD_REQUIRE_SYMBOLS: false
  },
  CURRENCY: {
    DEFAULT: 'USD',
    DECIMAL_PLACES: 2
  },
  DATE: {
    DEFAULT_FORMAT: 'MM/dd/yyyy',
    DEFAULT_TIME_FORMAT: 'HH:mm:ss'
  }
} as const

/**
 * Core error codes
 */
export const CORE_ERROR_CODES = {
  // Authentication errors
  AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
  AUTH_USER_NOT_FOUND: 'AUTH_USER_NOT_FOUND',
  AUTH_USER_DISABLED: 'AUTH_USER_DISABLED',
  AUTH_SESSION_EXPIRED: 'AUTH_SESSION_EXPIRED',
  AUTH_INSUFFICIENT_PERMISSIONS: 'AUTH_INSUFFICIENT_PERMISSIONS',

  // Validation errors
  VALIDATION_REQUIRED_FIELD: 'VALIDATION_REQUIRED_FIELD',
  VALIDATION_INVALID_FORMAT: 'VALIDATION_INVALID_FORMAT',
  VALIDATION_OUT_OF_RANGE: 'VALIDATION_OUT_OF_RANGE',
  VALIDATION_DUPLICATE_VALUE: 'VALIDATION_DUPLICATE_VALUE',

  // Business logic errors
  BUSINESS_INSUFFICIENT_STOCK: 'BUSINESS_INSUFFICIENT_STOCK',
  BUSINESS_INVALID_STATUS_TRANSITION: 'BUSINESS_INVALID_STATUS_TRANSITION',
  BUSINESS_DUPLICATE_DOCUMENT: 'BUSINESS_DUPLICATE_DOCUMENT',
  BUSINESS_INVALID_OPERATION: 'BUSINESS_INVALID_OPERATION',

  // System errors
  SYSTEM_DATABASE_ERROR: 'SYSTEM_DATABASE_ERROR',
  SYSTEM_NETWORK_ERROR: 'SYSTEM_NETWORK_ERROR',
  SYSTEM_FILE_ERROR: 'SYSTEM_FILE_ERROR',
  SYSTEM_CONFIGURATION_ERROR: 'SYSTEM_CONFIGURATION_ERROR',

  // API errors
  API_RATE_LIMIT_EXCEEDED: 'API_RATE_LIMIT_EXCEEDED',
  API_INVALID_REQUEST: 'API_INVALID_REQUEST',
  API_RESOURCE_NOT_FOUND: 'API_RESOURCE_NOT_FOUND',
  API_CONFLICT: 'API_CONFLICT'
} as const

/**
 * Core event types
 */
export const CORE_EVENTS = {
  // Authentication events
  USER_SIGNED_IN: 'user:signed_in',
  USER_SIGNED_OUT: 'user:signed_out',
  USER_SESSION_EXPIRED: 'user:session_expired',
  USER_PROFILE_UPDATED: 'user:profile_updated',

  // Entity events
  ENTITY_CREATED: 'entity:created',
  ENTITY_UPDATED: 'entity:updated',
  ENTITY_DELETED: 'entity:deleted',
  ENTITY_STATUS_CHANGED: 'entity:status_changed',

  // Business events
  ORDER_PLACED: 'order:placed',
  ORDER_CONFIRMED: 'order:confirmed',
  ORDER_SHIPPED: 'order:shipped',
  ORDER_DELIVERED: 'order:delivered',
  ORDER_CANCELLED: 'order:cancelled',

  INVOICE_CREATED: 'invoice:created',
  INVOICE_SENT: 'invoice:sent',
  INVOICE_PAID: 'invoice:paid',
  INVOICE_OVERDUE: 'invoice:overdue',

  PAYMENT_RECEIVED: 'payment:received',
  PAYMENT_FAILED: 'payment:failed',

  STOCK_LOW: 'stock:low',
  STOCK_OUT: 'stock:out',
  STOCK_ADJUSTED: 'stock:adjusted',

  // System events
  SYSTEM_ERROR: 'system:error',
  SYSTEM_WARNING: 'system:warning',
  SYSTEM_INFO: 'system:info',
  SYSTEM_MAINTENANCE: 'system:maintenance'
} as const

/**
 * Core permissions
 */
export const CORE_PERMISSIONS = {
  // User management
  USERS_VIEW: 'users:view',
  USERS_CREATE: 'users:create',
  USERS_UPDATE: 'users:update',
  USERS_DELETE: 'users:delete',

  // Tenant management
  TENANTS_VIEW: 'tenants:view',
  TENANTS_CREATE: 'tenants:create',
  TENANTS_UPDATE: 'tenants:update',
  TENANTS_DELETE: 'tenants:delete',

  // Customer management
  CUSTOMERS_VIEW: 'customers:view',
  CUSTOMERS_CREATE: 'customers:create',
  CUSTOMERS_UPDATE: 'customers:update',
  CUSTOMERS_DELETE: 'customers:delete',

  // Supplier management
  SUPPLIERS_VIEW: 'suppliers:view',
  SUPPLIERS_CREATE: 'suppliers:create',
  SUPPLIERS_UPDATE: 'suppliers:update',
  SUPPLIERS_DELETE: 'suppliers:delete',

  // Item management
  ITEMS_VIEW: 'items:view',
  ITEMS_CREATE: 'items:create',
  ITEMS_UPDATE: 'items:update',
  ITEMS_DELETE: 'items:delete',

  // Sales management
  SALES_VIEW: 'sales:view',
  SALES_CREATE: 'sales:create',
  SALES_UPDATE: 'sales:update',
  SALES_DELETE: 'sales:delete',
  SALES_APPROVE: 'sales:approve',

  // Purchase management
  PURCHASES_VIEW: 'purchases:view',
  PURCHASES_CREATE: 'purchases:create',
  PURCHASES_UPDATE: 'purchases:update',
  PURCHASES_DELETE: 'purchases:delete',
  PURCHASES_APPROVE: 'purchases:approve',

  // Inventory management
  INVENTORY_VIEW: 'inventory:view',
  INVENTORY_ADJUST: 'inventory:adjust',
  INVENTORY_TRANSFER: 'inventory:transfer',

  // Financial management
  FINANCE_VIEW: 'finance:view',
  FINANCE_CREATE: 'finance:create',
  FINANCE_UPDATE: 'finance:update',
  FINANCE_DELETE: 'finance:delete',
  FINANCE_APPROVE: 'finance:approve',

  // Reporting
  REPORTS_VIEW: 'reports:view',
  REPORTS_EXPORT: 'reports:export',

  // System administration
  SYSTEM_ADMIN: 'system:admin',
  SYSTEM_CONFIG: 'system:config',
  SYSTEM_AUDIT: 'system:audit'
} as const

/**
 * Core utility functions
 */
export const CORE_UTILS = {
  /**
   * Check if a feature is enabled
   */
  isFeatureEnabled: (feature: keyof typeof CORE_FEATURES): boolean => {
    return CORE_FEATURES[feature]
  },

  /**
   * Get default configuration value
   */
  getDefault: (path: string): any => {
    const keys = path.split('.')
    let value: any = CORE_DEFAULTS
    
    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) break
    }
    
    return value
  },

  /**
   * Check if error code is a core error
   */
  isCoreError: (code: string): boolean => {
    return Object.values(CORE_ERROR_CODES).includes(code as any)
  },

  /**
   * Check if event is a core event
   */
  isCoreEvent: (event: string): boolean => {
    return Object.values(CORE_EVENTS).includes(event as any)
  },

  /**
   * Check if permission is a core permission
   */
  isCorePermission: (permission: string): boolean => {
    return Object.values(CORE_PERMISSIONS).includes(permission as any)
  }
} as const