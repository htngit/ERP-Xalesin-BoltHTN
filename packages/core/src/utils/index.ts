/**
 * Utility functions and helpers for Xalesin ERP Core
 * Centralized export of all utility modules
 */

// Helper utilities
export {
  dateUtils,
  moneyUtils,
  quantityUtils,
  stringUtils,
  numberUtils,
  arrayUtils,
  objectUtils,
  functionUtils,
  validationUtils,
  statusUtils
} from './helpers'

// Error handling
export {
  XalesinError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ConflictError,
  BusinessLogicError,
  RateLimitError,
  InternalServerError,
  ServiceUnavailableError,
  DatabaseError,
  NetworkError,
  ConfigurationError,
  FileOperationError,
  ErrorFactory,
  ErrorHandler,
  ResultUtils,
  ErrorReporter,
  type Result,
  type ErrorBoundaryState
} from './errors'

// Re-export commonly used external utilities
export { default as Decimal } from 'decimal.js'
export { v4 as uuid } from 'uuid'
export {
  format as formatDate,
  parseISO,
  isValid as isValidDate,
  differenceInDays,
  addDays,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  isSameDay,
  isSameMonth,
  isSameYear,
  isAfter,
  isBefore,
  isWithinInterval
} from 'date-fns'
export {
  cloneDeep,
  debounce,
  throttle,
  pick,
  omit,
  groupBy,
  orderBy,
  uniq,
  uniqBy,
  flatten,
  chunk,
  merge,
  get,
  set,
  has,
  isEmpty,
  isEqual,
  isNil,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  isDate
} from 'lodash'

/**
 * Common utility constants
 */
export const CONSTANTS = {
  // Date formats
  DATE_FORMATS: {
    ISO: 'yyyy-MM-dd',
    ISO_DATETIME: 'yyyy-MM-dd HH:mm:ss',
    DISPLAY: 'MMM dd, yyyy',
    DISPLAY_DATETIME: 'MMM dd, yyyy HH:mm',
    INPUT: 'yyyy-MM-dd',
    INPUT_DATETIME: 'yyyy-MM-dd\\THH:mm'
  },

  // Number formats
  NUMBER_FORMATS: {
    CURRENCY_DECIMALS: 2,
    QUANTITY_DECIMALS: 4,
    PERCENTAGE_DECIMALS: 2,
    RATE_DECIMALS: 6
  },

  // Validation patterns
  PATTERNS: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[+]?[1-9]?[0-9]{7,15}$/,
    URL: /^https?:\/\/.+/,
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    SKU: /^[A-Z0-9-_]{3,50}$/,
    BARCODE: /^[0-9]{8,14}$/,
    TAX_ID: /^[A-Z0-9-]{5,20}$/,
    CREDIT_CARD: /^[0-9]{13,19}$/,
    POSTAL_CODE: /^[A-Z0-9\s-]{3,10}$/i
  },

  // File constraints
  FILE_CONSTRAINTS: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'text/plain'
    ],
    IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENT_TYPES: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    SPREADSHEET_TYPES: [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ]
  },

  // API constraints
  API_CONSTRAINTS: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
    MAX_SEARCH_RESULTS: 1000,
    REQUEST_TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000 // 1 second
  },

  // Cache settings
  CACHE_SETTINGS: {
    DEFAULT_TTL: 300, // 5 minutes
    SHORT_TTL: 60, // 1 minute
    LONG_TTL: 3600, // 1 hour
    STATIC_TTL: 86400 // 24 hours
  },

  // Status colors
  STATUS_COLORS: {
    draft: '#6B7280',
    pending: '#F59E0B',
    approved: '#10B981',
    rejected: '#EF4444',
    cancelled: '#6B7280',
    completed: '#10B981',
    processing: '#3B82F6',
    shipped: '#8B5CF6',
    delivered: '#10B981',
    returned: '#F59E0B',
    refunded: '#EF4444'
  },

  // Priority levels
  PRIORITY_LEVELS: {
    low: { value: 1, label: 'Low', color: '#10B981' },
    medium: { value: 2, label: 'Medium', color: '#F59E0B' },
    high: { value: 3, label: 'High', color: '#EF4444' },
    urgent: { value: 4, label: 'Urgent', color: '#DC2626' }
  },

  // Currency codes
  CURRENCY_CODES: [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY',
    'SEK', 'NZD', 'MXN', 'SGD', 'HKD', 'NOK', 'TRY', 'RUB',
    'INR', 'BRL', 'ZAR', 'KRW', 'PLN', 'CZK', 'HUF', 'ILS',
    'CLP', 'PHP', 'AED', 'COP', 'SAR', 'MYR', 'RON', 'THB'
  ],

  // Common units of measure
  UNITS_OF_MEASURE: {
    // Quantity
    quantity: ['pcs', 'each', 'unit', 'item', 'piece'],
    // Weight
    weight: ['kg', 'g', 'lb', 'oz', 'ton', 'mt'],
    // Length
    length: ['m', 'cm', 'mm', 'in', 'ft', 'yd'],
    // Area
    area: ['m²', 'cm²', 'ft²', 'in²'],
    // Volume
    volume: ['l', 'ml', 'gal', 'qt', 'pt', 'fl oz', 'm³', 'cm³'],
    // Time
    time: ['sec', 'min', 'hr', 'day', 'week', 'month', 'year']
  }
} as const

/**
 * Type guards for common validations
 */
export const typeGuards = {
  /**
   * Check if value is a valid email
   */
  isEmail: (value: string): boolean => {
    return CONSTANTS.PATTERNS.EMAIL.test(value)
  },

  /**
   * Check if value is a valid phone number
   */
  isPhone: (value: string): boolean => {
    return CONSTANTS.PATTERNS.PHONE.test(value.replace(/\s/g, ''))
  },

  /**
   * Check if value is a valid URL
   */
  isUrl: (value: string): boolean => {
    return CONSTANTS.PATTERNS.URL.test(value)
  },

  /**
   * Check if value is a valid UUID
   */
  isUuid: (value: string): boolean => {
    return CONSTANTS.PATTERNS.UUID.test(value)
  },

  /**
   * Check if value is a valid SKU
   */
  isSku: (value: string): boolean => {
    return CONSTANTS.PATTERNS.SKU.test(value)
  },

  /**
   * Check if value is a valid barcode
   */
  isBarcode: (value: string): boolean => {
    return CONSTANTS.PATTERNS.BARCODE.test(value)
  },

  /**
   * Check if value is a valid currency code
   */
  isCurrencyCode: (value: string): boolean => {
    return CONSTANTS.CURRENCY_CODES.includes(value as any)
  },

  /**
   * Check if file type is allowed
   */
  isAllowedFileType: (mimeType: string): boolean => {
    return CONSTANTS.FILE_CONSTRAINTS.ALLOWED_TYPES.includes(mimeType)
  },

  /**
   * Check if file is an image
   */
  isImageFile: (mimeType: string): boolean => {
    return CONSTANTS.FILE_CONSTRAINTS.IMAGE_TYPES.includes(mimeType)
  },

  /**
   * Check if file is a document
   */
  isDocumentFile: (mimeType: string): boolean => {
    return CONSTANTS.FILE_CONSTRAINTS.DOCUMENT_TYPES.includes(mimeType)
  },

  /**
   * Check if file is a spreadsheet
   */
  isSpreadsheetFile: (mimeType: string): boolean => {
    return CONSTANTS.FILE_CONSTRAINTS.SPREADSHEET_TYPES.includes(mimeType)
  }
} as const

/**
 * Performance utilities
 */
export const performanceUtils = {
  /**
   * Measure execution time
   */
  measure: async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
    const start = performance.now()
    try {
      const result = await fn()
      const end = performance.now()
      console.log(`${name} took ${end - start} milliseconds`)
      return result
    } catch (error) {
      const end = performance.now()
      console.log(`${name} failed after ${end - start} milliseconds`)
      throw error
    }
  },

  /**
   * Measure sync execution time
   */
  measureSync: <T>(name: string, fn: () => T): T => {
    const start = performance.now()
    try {
      const result = fn()
      const end = performance.now()
      console.log(`${name} took ${end - start} milliseconds`)
      return result
    } catch (error) {
      const end = performance.now()
      console.log(`${name} failed after ${end - start} milliseconds`)
      throw error
    }
  },

  /**
   * Create a performance timer
   */
  createTimer: (name: string) => {
    const start = performance.now()
    return {
      stop: () => {
        const end = performance.now()
        const duration = end - start
        console.log(`${name} took ${duration} milliseconds`)
        return duration
      }
    }
  }
} as const

/**
 * Browser utilities
 */
export const browserUtils = {
  /**
   * Check if running in browser
   */
  isBrowser: (): boolean => {
    return typeof window !== 'undefined'
  },

  /**
   * Get user agent
   */
  getUserAgent: (): string => {
    return browserUtils.isBrowser() ? navigator.userAgent : ''
  },

  /**
   * Check if mobile device
   */
  isMobile: (): boolean => {
    if (!browserUtils.isBrowser()) return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  },

  /**
   * Copy text to clipboard
   */
  copyToClipboard: async (text: string): Promise<boolean> => {
    if (!browserUtils.isBrowser()) return false
    
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textArea)
      return success
    }
  },

  /**
   * Download file
   */
  downloadFile: (data: Blob | string, filename: string, mimeType?: string): void => {
    if (!browserUtils.isBrowser()) return
    
    const blob = typeof data === 'string' 
      ? new Blob([data], { type: mimeType || 'text/plain' })
      : data
    
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  },

  /**
   * Get current URL
   */
  getCurrentUrl: (): string => {
    return browserUtils.isBrowser() ? window.location.href : ''
  },

  /**
   * Get query parameters
   */
  getQueryParams: (): Record<string, string> => {
    if (!browserUtils.isBrowser()) return {}
    
    const params: Record<string, string> = {}
    const searchParams = new URLSearchParams(window.location.search)
    
    for (const [key, value] of searchParams.entries()) {
      params[key] = value
    }
    
    return params
  }
} as const