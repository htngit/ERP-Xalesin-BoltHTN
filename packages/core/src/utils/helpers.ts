/**
 * Helper utilities for Xalesin ERP
 * Common utility functions for data manipulation, formatting, and validation
 */

import { format, parseISO, isValid, differenceInDays, addDays, startOfDay, endOfDay } from 'date-fns'
import Decimal from 'decimal.js'
import { v4 as uuidv4 } from 'uuid'
import { cloneDeep, debounce, throttle, pick, omit, groupBy, orderBy } from 'lodash'
import type { Money, Quantity, DocumentStatus } from '../types/business'

/**
 * Date utilities
 */
export const dateUtils = {
  /**
   * Format date for display
   */
  formatDate(date: string | Date, formatStr = 'yyyy-MM-dd'): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return isValid(dateObj) ? format(dateObj, formatStr) : ''
    } catch {
      return ''
    }
  },

  /**
   * Format datetime for display
   */
  formatDateTime(date: string | Date, formatStr = 'yyyy-MM-dd HH:mm:ss'): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      return isValid(dateObj) ? format(dateObj, formatStr) : ''
    } catch {
      return ''
    }
  },

  /**
   * Get relative time description
   */
  getRelativeTime(date: string | Date): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      if (!isValid(dateObj)) return ''

      const now = new Date()
      const days = differenceInDays(now, dateObj)

      if (days === 0) return 'Today'
      if (days === 1) return 'Yesterday'
      if (days === -1) return 'Tomorrow'
      if (days > 0) return `${days} days ago`
      return `In ${Math.abs(days)} days`
    } catch {
      return ''
    }
  },

  /**
   * Check if date is today
   */
  isToday(date: string | Date): boolean {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date
      if (!isValid(dateObj)) return false
      return differenceInDays(new Date(), dateObj) === 0
    } catch {
      return false
    }
  },

  /**
   * Get start of day
   */
  startOfDay(date: string | Date): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return startOfDay(dateObj)
  },

  /**
   * Get end of day
   */
  endOfDay(date: string | Date): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return endOfDay(dateObj)
  },

  /**
   * Add days to date
   */
  addDays(date: string | Date, days: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return addDays(dateObj, days)
  },

  /**
   * Get current ISO string
   */
  now(): string {
    return new Date().toISOString()
  },

  /**
   * Parse date safely
   */
  parseDate(dateStr: string): Date | null {
    try {
      const date = parseISO(dateStr)
      return isValid(date) ? date : null
    } catch {
      return null
    }
  }
}

/**
 * Money utilities
 */
export const moneyUtils = {
  /**
   * Create Money object
   */
  create(amount: number | string, currency = 'USD'): Money {
    return {
      amount: new Decimal(amount).toFixed(2),
      currency
    }
  },

  /**
   * Add two Money amounts
   */
  add(a: Money, b: Money): Money {
    if (a.currency !== b.currency) {
      throw new Error('Cannot add different currencies')
    }
    return {
      amount: new Decimal(a.amount).add(new Decimal(b.amount)).toFixed(2),
      currency: a.currency
    }
  },

  /**
   * Subtract two Money amounts
   */
  subtract(a: Money, b: Money): Money {
    if (a.currency !== b.currency) {
      throw new Error('Cannot subtract different currencies')
    }
    return {
      amount: new Decimal(a.amount).sub(new Decimal(b.amount)).toFixed(2),
      currency: a.currency
    }
  },

  /**
   * Multiply Money by a factor
   */
  multiply(money: Money, factor: number | string): Money {
    return {
      amount: new Decimal(money.amount).mul(new Decimal(factor)).toFixed(2),
      currency: money.currency
    }
  },

  /**
   * Divide Money by a factor
   */
  divide(money: Money, factor: number | string): Money {
    return {
      amount: new Decimal(money.amount).div(new Decimal(factor)).toFixed(2),
      currency: money.currency
    }
  },

  /**
   * Compare two Money amounts
   */
  compare(a: Money, b: Money): number {
    if (a.currency !== b.currency) {
      throw new Error('Cannot compare different currencies')
    }
    return new Decimal(a.amount).cmp(new Decimal(b.amount))
  },

  /**
   * Check if Money amount is zero
   */
  isZero(money: Money): boolean {
    return new Decimal(money.amount).isZero()
  },

  /**
   * Check if Money amount is positive
   */
  isPositive(money: Money): boolean {
    return new Decimal(money.amount).isPositive()
  },

  /**
   * Check if Money amount is negative
   */
  isNegative(money: Money): boolean {
    return new Decimal(money.amount).isNegative()
  },

  /**
   * Get absolute value
   */
  abs(money: Money): Money {
    return {
      amount: new Decimal(money.amount).abs().toFixed(2),
      currency: money.currency
    }
  },

  /**
   * Format Money for display
   */
  format(money: Money, options: {
    locale?: string
    showCurrency?: boolean
    currencyDisplay?: 'symbol' | 'code' | 'name'
  } = {}): string {
    const {
      locale = 'en-US',
      showCurrency = true,
      currencyDisplay = 'symbol'
    } = options

    const amount = parseFloat(money.amount)
    
    if (showCurrency) {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: money.currency,
        currencyDisplay
      }).format(amount)
    }

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }
}

/**
 * Quantity utilities
 */
export const quantityUtils = {
  /**
   * Create Quantity object
   */
  create(value: number | string, unit = 'pcs'): Quantity {
    return {
      value: new Decimal(value).toFixed(4),
      unit
    }
  },

  /**
   * Add two Quantity amounts
   */
  add(a: Quantity, b: Quantity): Quantity {
    if (a.unit !== b.unit) {
      throw new Error('Cannot add different units')
    }
    return {
      value: new Decimal(a.value).add(new Decimal(b.value)).toFixed(4),
      unit: a.unit
    }
  },

  /**
   * Subtract two Quantity amounts
   */
  subtract(a: Quantity, b: Quantity): Quantity {
    if (a.unit !== b.unit) {
      throw new Error('Cannot subtract different units')
    }
    return {
      value: new Decimal(a.value).sub(new Decimal(b.value)).toFixed(4),
      unit: a.unit
    }
  },

  /**
   * Multiply Quantity by a factor
   */
  multiply(quantity: Quantity, factor: number | string): Quantity {
    return {
      value: new Decimal(quantity.value).mul(new Decimal(factor)).toFixed(4),
      unit: quantity.unit
    }
  },

  /**
   * Compare two Quantity amounts
   */
  compare(a: Quantity, b: Quantity): number {
    if (a.unit !== b.unit) {
      throw new Error('Cannot compare different units')
    }
    return new Decimal(a.value).cmp(new Decimal(b.value))
  },

  /**
   * Format Quantity for display
   */
  format(quantity: Quantity, precision = 2): string {
    const value = new Decimal(quantity.value).toFixed(precision)
    return `${value} ${quantity.unit}`
  }
}

/**
 * String utilities
 */
export const stringUtils = {
  /**
   * Generate UUID
   */
  generateId(): string {
    return uuidv4()
  },

  /**
   * Generate short ID
   */
  generateShortId(length = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

  /**
   * Slugify string
   */
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  },

  /**
   * Capitalize first letter
   */
  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  },

  /**
   * Convert to title case
   */
  titleCase(text: string): string {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  },

  /**
   * Truncate text
   */
  truncate(text: string, length: number, suffix = '...'): string {
    if (text.length <= length) return text
    return text.slice(0, length - suffix.length) + suffix
  },

  /**
   * Extract initials
   */
  getInitials(name: string, maxLength = 2): string {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, maxLength)
      .join('')
  },

  /**
   * Generate random string
   */
  randomString(length = 10, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return result
  },

  /**
   * Mask sensitive data
   */
  mask(text: string, visibleChars = 4, maskChar = '*'): string {
    if (text.length <= visibleChars) return text
    const visible = text.slice(-visibleChars)
    const masked = maskChar.repeat(text.length - visibleChars)
    return masked + visible
  }
}

/**
 * Number utilities
 */
export const numberUtils = {
  /**
   * Format number with thousands separator
   */
  format(num: number, options: {
    locale?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  } = {}): string {
    const {
      locale = 'en-US',
      minimumFractionDigits = 0,
      maximumFractionDigits = 2
    } = options

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits,
      maximumFractionDigits
    }).format(num)
  },

  /**
   * Format as percentage
   */
  formatPercentage(num: number, decimals = 2): string {
    return `${(num * 100).toFixed(decimals)}%`
  },

  /**
   * Round to specified decimal places
   */
  round(num: number, decimals = 2): number {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
  },

  /**
   * Clamp number between min and max
   */
  clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max)
  },

  /**
   * Check if number is in range
   */
  inRange(num: number, min: number, max: number): boolean {
    return num >= min && num <= max
  },

  /**
   * Generate random number in range
   */
  random(min: number, max: number): number {
    return Math.random() * (max - min) + min
  },

  /**
   * Generate random integer in range
   */
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

/**
 * Array utilities
 */
export const arrayUtils = {
  /**
   * Group array by key
   */
  groupBy: <T>(array: T[], key: keyof T | ((item: T) => string)) => {
    return groupBy(array, key)
  },

  /**
   * Sort array by key
   */
  sortBy: <T>(array: T[], keys: string | string[], orders?: ('asc' | 'desc')[]) => {
    return orderBy(array, keys, orders)
  },

  /**
   * Remove duplicates
   */
  unique: <T>(array: T[], key?: keyof T): T[] => {
    if (!key) {
      return [...new Set(array)]
    }
    const seen = new Set()
    return array.filter(item => {
      const value = item[key]
      if (seen.has(value)) {
        return false
      }
      seen.add(value)
      return true
    })
  },

  /**
   * Chunk array into smaller arrays
   */
  chunk: <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  },

  /**
   * Flatten nested array
   */
  flatten: <T>(array: (T | T[])[]): T[] => {
    return array.flat() as T[]
  },

  /**
   * Get random item from array
   */
  sample: <T>(array: T[]): T | undefined => {
    return array[Math.floor(Math.random() * array.length)]
  },

  /**
   * Shuffle array
   */
  shuffle: <T>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
}

/**
 * Object utilities
 */
export const objectUtils = {
  /**
   * Deep clone object
   */
  clone: <T>(obj: T): T => cloneDeep(obj),

  /**
   * Pick specific keys from object
   */
  pick: <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => pick(obj, keys),

  /**
   * Omit specific keys from object
   */
  omit: <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => omit(obj, keys),

  /**
   * Check if object is empty
   */
  isEmpty: (obj: object): boolean => {
    return Object.keys(obj).length === 0
  },

  /**
   * Get nested property safely
   */
  get: <T>(obj: any, path: string, defaultValue?: T): T => {
    const keys = path.split('.')
    let result = obj
    
    for (const key of keys) {
      if (result == null || typeof result !== 'object') {
        return defaultValue as T
      }
      result = result[key]
    }
    
    return result !== undefined ? result : defaultValue as T
  },

  /**
   * Set nested property
   */
  set: (obj: any, path: string, value: any): void => {
    const keys = path.split('.')
    let current = obj
    
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]
      if (!(key in current) || typeof current[key] !== 'object') {
        current[key] = {}
      }
      current = current[key]
    }
    
    current[keys[keys.length - 1]] = value
  },

  /**
   * Merge objects deeply
   */
  merge: <T>(...objects: Partial<T>[]): T => {
    const result = {} as T
    
    for (const obj of objects) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key]
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            result[key] = objectUtils.merge(result[key] || {}, value)
          } else {
            result[key] = value as T[Extract<keyof T, string>]
          }
        }
      }
    }
    
    return result
  }
}

/**
 * Function utilities
 */
export const functionUtils = {
  /**
   * Debounce function
   */
  debounce: <T extends (...args: any[]) => any>(func: T, wait: number): T => {
    return debounce(func, wait) as T
  },

  /**
   * Throttle function
   */
  throttle: <T extends (...args: any[]) => any>(func: T, wait: number): T => {
    return throttle(func, wait) as T
  },

  /**
   * Memoize function
   */
  memoize: <T extends (...args: any[]) => any>(func: T): T => {
    const cache = new Map()
    
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args)
      
      if (cache.has(key)) {
        return cache.get(key)
      }
      
      const result = func(...args)
      cache.set(key, result)
      return result
    }) as T
  },

  /**
   * Retry function with exponential backoff
   */
  retry: async <T>(
    func: () => Promise<T>,
    options: {
      attempts?: number
      delay?: number
      backoff?: number
      shouldRetry?: (error: any) => boolean
    } = {}
  ): Promise<T> => {
    const {
      attempts = 3,
      delay = 1000,
      backoff = 2,
      shouldRetry = () => true
    } = options

    let lastError: any
    
    for (let i = 0; i < attempts; i++) {
      try {
        return await func()
      } catch (error) {
        lastError = error
        
        if (i === attempts - 1 || !shouldRetry(error)) {
          throw error
        }
        
        await new Promise(resolve => 
          setTimeout(resolve, delay * Math.pow(backoff, i))
        )
      }
    }
    
    throw lastError
  }
}

/**
 * Validation utilities
 */
export const validationUtils = {
  /**
   * Check if value is defined and not null
   */
  isDefined: <T>(value: T | null | undefined): value is T => {
    return value !== null && value !== undefined
  },

  /**
   * Check if string is not empty
   */
  isNotEmpty: (value: string | null | undefined): value is string => {
    return typeof value === 'string' && value.trim().length > 0
  },

  /**
   * Check if array is not empty
   */
  isNotEmptyArray: <T>(value: T[] | null | undefined): value is T[] => {
    return Array.isArray(value) && value.length > 0
  },

  /**
   * Check if object is not empty
   */
  isNotEmptyObject: (value: object | null | undefined): value is object => {
    return typeof value === 'object' && value !== null && Object.keys(value).length > 0
  },

  /**
   * Check if value is a valid number
   */
  isValidNumber: (value: any): value is number => {
    return typeof value === 'number' && !isNaN(value) && isFinite(value)
  },

  /**
   * Check if value is a positive number
   */
  isPositiveNumber: (value: any): value is number => {
    return validationUtils.isValidNumber(value) && value > 0
  },

  /**
   * Check if value is a non-negative number
   */
  isNonNegativeNumber: (value: any): value is number => {
    return validationUtils.isValidNumber(value) && value >= 0
  }
}

/**
 * Status utilities
 */
export const statusUtils = {
  /**
   * Get status color
   */
  getStatusColor(status: DocumentStatus): string {
    const colors: Record<DocumentStatus, string> = {
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
    }
    return colors[status] || '#6B7280'
  },

  /**
   * Get status label
   */
  getStatusLabel(status: DocumentStatus): string {
    const labels: Record<DocumentStatus, string> = {
      draft: 'Draft',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected',
      cancelled: 'Cancelled',
      completed: 'Completed',
      processing: 'Processing',
      shipped: 'Shipped',
      delivered: 'Delivered',
      returned: 'Returned',
      refunded: 'Refunded'
    }
    return labels[status] || status
  },

  /**
   * Check if status is final
   */
  isFinalStatus(status: DocumentStatus): boolean {
    const finalStatuses: DocumentStatus[] = [
      'completed',
      'cancelled',
      'rejected',
      'delivered',
      'refunded'
    ]
    return finalStatuses.includes(status)
  },

  /**
   * Get next possible statuses
   */
  getNextStatuses(currentStatus: DocumentStatus): DocumentStatus[] {
    const transitions: Record<DocumentStatus, DocumentStatus[]> = {
      draft: ['pending', 'cancelled'],
      pending: ['approved', 'rejected', 'cancelled'],
      approved: ['processing', 'cancelled'],
      processing: ['shipped', 'completed', 'cancelled'],
      shipped: ['delivered', 'returned'],
      delivered: ['completed'],
      returned: ['refunded', 'processing'],
      rejected: [],
      cancelled: [],
      completed: [],
      refunded: []
    }
    return transitions[currentStatus] || []
  }
}

/**
 * Export all utilities
 */
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
}