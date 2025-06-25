/**
 * Formatting utilities for Xalesin ERP
 * Provides consistent formatting across the application
 */

import { NUMBER_FORMATS, DATE_FORMATS, CURRENCY_CODES } from '@xalesin/config'

/**
 * Format currency value with proper locale and currency symbol
 */
export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      ...NUMBER_FORMATS.currency,
    }).format(value)
  } catch (error) {
    // Fallback formatting
    return `${currency} ${value.toFixed(2)}`
  }
}

/**
 * Format percentage value
 */
export function formatPercentage(
  value: number,
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      ...NUMBER_FORMATS.percentage,
    }).format(value / 100)
  } catch (error) {
    return `${value.toFixed(2)}%`
  }
}

/**
 * Format quantity with proper decimal places
 */
export function formatQuantity(
  value: number,
  locale: string = 'en-US'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      ...NUMBER_FORMATS.quantity,
    }).format(value)
  } catch (error) {
    return value.toString()
  }
}

/**
 * Format number with thousands separator
 */
export function formatNumber(
  value: number,
  locale: string = 'en-US',
  options?: Intl.NumberFormatOptions
): string {
  try {
    return new Intl.NumberFormat(locale, options).format(value)
  } catch (error) {
    return value.toString()
  }
}

/**
 * Format date for display
 */
export function formatDate(
  date: Date | string | number,
  format: keyof typeof DATE_FORMATS = 'display',
  locale: string = 'en-US'
): string {
  try {
    const dateObj = new Date(date)
    
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date'
    }
    
    switch (format) {
      case 'display':
        return new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(dateObj)
      
      case 'input':
        return dateObj.toISOString().split('T')[0]
      
      case 'datetime':
        return new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(dateObj)
      
      case 'time':
        return new Intl.DateTimeFormat(locale, {
          hour: '2-digit',
          minute: '2-digit',
        }).format(dateObj)
      
      case 'iso':
        return dateObj.toISOString()
      
      default:
        return dateObj.toLocaleDateString(locale)
    }
  } catch (error) {
    return 'Invalid Date'
  }
}

/**
 * Format relative time (e.g., "2 hours ago", "in 3 days")
 */
export function formatRelativeTime(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  try {
    const dateObj = new Date(date)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)
    
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
    
    const intervals = [
      { unit: 'year' as const, seconds: 31536000 },
      { unit: 'month' as const, seconds: 2592000 },
      { unit: 'day' as const, seconds: 86400 },
      { unit: 'hour' as const, seconds: 3600 },
      { unit: 'minute' as const, seconds: 60 },
      { unit: 'second' as const, seconds: 1 },
    ]
    
    for (const interval of intervals) {
      const count = Math.floor(Math.abs(diffInSeconds) / interval.seconds)
      if (count >= 1) {
        return rtf.format(diffInSeconds < 0 ? count : -count, interval.unit)
      }
    }
    
    return rtf.format(0, 'second')
  } catch (error) {
    return 'Invalid Date'
  }
}

/**
 * Format file size in human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Format phone number
 */
export function formatPhoneNumber(
  phoneNumber: string,
  countryCode: string = 'US'
): string {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, '')
  
  // Basic US phone number formatting
  if (countryCode === 'US' && cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  
  // International format
  if (cleaned.length > 10) {
    return `+${cleaned.slice(0, -10)} (${cleaned.slice(-10, -7)}) ${cleaned.slice(-7, -4)}-${cleaned.slice(-4)}`
  }
  
  return phoneNumber
}

/**
 * Format address for display
 */
export function formatAddress(address: {
  street?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
}): string {
  const parts = [
    address.street,
    address.city,
    address.state && address.postalCode ? `${address.state} ${address.postalCode}` : address.state || address.postalCode,
    address.country,
  ].filter(Boolean)
  
  return parts.join(', ')
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

/**
 * Format initials from name
 */
export function formatInitials(name: string, maxInitials: number = 2): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, maxInitials)
    .join('')
}

/**
 * Format document number with prefix
 */
export function formatDocumentNumber(
  number: string | number,
  prefix: string = '',
  padLength: number = 6
): string {
  const numStr = number.toString().padStart(padLength, '0')
  return prefix ? `${prefix}-${numStr}` : numStr
}

/**
 * Format tax rate for display
 */
export function formatTaxRate(rate: number): string {
  return `${rate.toFixed(2)}%`
}

/**
 * Format discount for display
 */
export function formatDiscount(
  discount: number,
  type: 'percentage' | 'amount' = 'percentage',
  currency: string = 'USD'
): string {
  if (type === 'percentage') {
    return formatPercentage(discount)
  }
  return formatCurrency(discount, currency)
}

/**
 * Format status badge text
 */
export function formatStatus(status: string): string {
  return status
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Format SKU or product code
 */
export function formatSKU(sku: string): string {
  return sku.toUpperCase().replace(/[^A-Z0-9-_]/g, '')
}

/**
 * Format barcode for display
 */
export function formatBarcode(barcode: string): string {
  // Remove any non-digit characters for display
  const cleaned = barcode.replace(/\D/g, '')
  
  // Format based on common barcode lengths
  if (cleaned.length === 12) {
    // UPC-A format
    return `${cleaned.slice(0, 1)} ${cleaned.slice(1, 6)} ${cleaned.slice(6, 11)} ${cleaned.slice(11)}`
  }
  
  if (cleaned.length === 13) {
    // EAN-13 format
    return `${cleaned.slice(0, 1)} ${cleaned.slice(1, 7)} ${cleaned.slice(7, 12)} ${cleaned.slice(12)}`
  }
  
  return barcode
}