/**
 * Global constants for Xalesin ERP
 * Shared across web and mobile applications
 */

// Application metadata
export const APP_CONFIG = {
  name: 'Xalesin ERP',
  version: '1.0.0',
  description: 'Enterprise Resource Planning System - Warehouse & Inventory Management',
  author: 'Xalesin Team',
  website: 'https://xalesin.com',
  support: 'support@xalesin.com',
} as const

// API configuration
export const API_CONFIG = {
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  rateLimit: {
    requests: 100,
    window: 60000, // 1 minute
  },
} as const

// Authentication configuration
export const AUTH_CONFIG = {
  sessionTimeout: 8 * 60 * 60 * 1000, // 8 hours
  refreshThreshold: 5 * 60 * 1000, // 5 minutes
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
  passwordMinLength: 8,
  mfaEnabled: true,
} as const

// User roles and permissions
export const USER_ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  SUPERVISOR: 'supervisor',
  EMPLOYEE: 'employee',
  VIEWER: 'viewer',
} as const

export const PERMISSIONS = {
  // Inventory permissions
  INVENTORY_VIEW: 'inventory:view',
  INVENTORY_CREATE: 'inventory:create',
  INVENTORY_UPDATE: 'inventory:update',
  INVENTORY_DELETE: 'inventory:delete',
  INVENTORY_ADJUST: 'inventory:adjust',
  INVENTORY_TRANSFER: 'inventory:transfer',
  
  // Financial permissions
  FINANCIAL_VIEW: 'financial:view',
  FINANCIAL_CREATE: 'financial:create',
  FINANCIAL_UPDATE: 'financial:update',
  FINANCIAL_DELETE: 'financial:delete',
  FINANCIAL_APPROVE: 'financial:approve',
  
  // Sales permissions
  SALES_VIEW: 'sales:view',
  SALES_CREATE: 'sales:create',
  SALES_UPDATE: 'sales:update',
  SALES_DELETE: 'sales:delete',
  SALES_APPROVE: 'sales:approve',
  
  // Purchasing permissions
  PURCHASING_VIEW: 'purchasing:view',
  PURCHASING_CREATE: 'purchasing:create',
  PURCHASING_UPDATE: 'purchasing:update',
  PURCHASING_DELETE: 'purchasing:delete',
  PURCHASING_APPROVE: 'purchasing:approve',
  
  // Document permissions
  DOCUMENT_VIEW: 'document:view',
  DOCUMENT_CREATE: 'document:create',
  DOCUMENT_UPDATE: 'document:update',
  DOCUMENT_DELETE: 'document:delete',
  DOCUMENT_APPROVE: 'document:approve',
  
  // User management permissions
  USER_VIEW: 'user:view',
  USER_CREATE: 'user:create',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',
  
  // System permissions
  SYSTEM_CONFIG: 'system:config',
  SYSTEM_BACKUP: 'system:backup',
  SYSTEM_AUDIT: 'system:audit',
} as const

// Document types
export const DOCUMENT_TYPES = {
  QUOTATION: 'quotation',
  SALES_ORDER: 'sales_order',
  INVOICE: 'invoice',
  PURCHASE_ORDER: 'purchase_order',
  RECEIPT: 'receipt',
  BILL: 'bill',
  STOCK_ADJUSTMENT: 'stock_adjustment',
  STOCK_TRANSFER: 'stock_transfer',
} as const

// Document statuses
export const DOCUMENT_STATUSES = {
  DRAFT: 'draft',
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

// Inventory movement types
export const MOVEMENT_TYPES = {
  IN: 'in',
  OUT: 'out',
  TRANSFER: 'transfer',
  ADJUSTMENT: 'adjustment',
} as const

// Party types
export const PARTY_TYPES = {
  CUSTOMER: 'customer',
  SUPPLIER: 'supplier',
  EMPLOYEE: 'employee',
  OTHER: 'other',
} as const

// Address types
export const ADDRESS_TYPES = {
  BILLING: 'billing',
  SHIPPING: 'shipping',
  OFFICE: 'office',
  WAREHOUSE: 'warehouse',
  HOME: 'home',
} as const

// Currency codes (ISO 4217)
export const CURRENCY_CODES = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  JPY: 'JPY',
  CNY: 'CNY',
  INR: 'INR',
  IDR: 'IDR',
  SGD: 'SGD',
  MYR: 'MYR',
  THB: 'THB',
} as const

// Tax types
export const TAX_TYPES = {
  VAT: 'vat',
  GST: 'gst',
  SALES_TAX: 'sales_tax',
  EXCISE: 'excise',
  CUSTOMS: 'customs',
} as const

// File upload configuration
export const FILE_CONFIG = {
  maxSize: 50 * 1024 * 1024, // 50MB
  allowedTypes: {
    images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    documents: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'text/plain',
    ],
    archives: [
      'application/zip',
      'application/x-rar-compressed',
      'application/x-7z-compressed',
    ],
  },
} as const

// Pagination configuration
export const PAGINATION_CONFIG = {
  defaultPageSize: 20,
  maxPageSize: 100,
  pageSizeOptions: [10, 20, 50, 100],
} as const

// Date and time formats
export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  input: 'yyyy-MM-dd',
  datetime: 'MMM dd, yyyy HH:mm',
  time: 'HH:mm',
  iso: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const

// Number formats
export const NUMBER_FORMATS = {
  currency: {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  percentage: {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  },
  quantity: {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  },
} as const

// Validation rules
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[1-9]?[0-9]{7,15}$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  numeric: /^[0-9]+$/,
  decimal: /^[0-9]+(\.[0-9]+)?$/,
  sku: /^[A-Z0-9-_]+$/,
  taxNumber: /^[A-Z0-9-]+$/,
} as const

// Error codes
export const ERROR_CODES = {
  // Authentication errors
  AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
  AUTH_SESSION_EXPIRED: 'AUTH_SESSION_EXPIRED',
  AUTH_INSUFFICIENT_PERMISSIONS: 'AUTH_INSUFFICIENT_PERMISSIONS',
  
  // Validation errors
  VALIDATION_REQUIRED_FIELD: 'VALIDATION_REQUIRED_FIELD',
  VALIDATION_INVALID_FORMAT: 'VALIDATION_INVALID_FORMAT',
  VALIDATION_DUPLICATE_VALUE: 'VALIDATION_DUPLICATE_VALUE',
  
  // Business logic errors
  BUSINESS_INSUFFICIENT_STOCK: 'BUSINESS_INSUFFICIENT_STOCK',
  BUSINESS_INVALID_OPERATION: 'BUSINESS_INVALID_OPERATION',
  BUSINESS_WORKFLOW_VIOLATION: 'BUSINESS_WORKFLOW_VIOLATION',
  
  // System errors
  SYSTEM_DATABASE_ERROR: 'SYSTEM_DATABASE_ERROR',
  SYSTEM_NETWORK_ERROR: 'SYSTEM_NETWORK_ERROR',
  SYSTEM_UNKNOWN_ERROR: 'SYSTEM_UNKNOWN_ERROR',
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Record created successfully',
  UPDATED: 'Record updated successfully',
  DELETED: 'Record deleted successfully',
  SAVED: 'Changes saved successfully',
  IMPORTED: 'Data imported successfully',
  EXPORTED: 'Data exported successfully',
} as const

// Type definitions
export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]
export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS]
export type DocumentType = typeof DOCUMENT_TYPES[keyof typeof DOCUMENT_TYPES]
export type DocumentStatus = typeof DOCUMENT_STATUSES[keyof typeof DOCUMENT_STATUSES]
export type MovementType = typeof MOVEMENT_TYPES[keyof typeof MOVEMENT_TYPES]
export type PartyType = typeof PARTY_TYPES[keyof typeof PARTY_TYPES]
export type AddressType = typeof ADDRESS_TYPES[keyof typeof ADDRESS_TYPES]
export type CurrencyCode = typeof CURRENCY_CODES[keyof typeof CURRENCY_CODES]
export type TaxType = typeof TAX_TYPES[keyof typeof TAX_TYPES]
export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES]