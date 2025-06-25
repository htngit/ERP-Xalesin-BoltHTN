/**
 * Validation utilities for Xalesin ERP
 * Provides consistent validation functions across the application
 */

import { VALIDATION_RULES } from '@xalesin/config'

/**
 * Validation result type
 */
export interface ValidationResult {
  isValid: boolean
  message?: string
}

/**
 * Email validation
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, message: 'Email is required' }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }
  
  if (email.length > VALIDATION_RULES.email.maxLength) {
    return { isValid: false, message: `Email must be less than ${VALIDATION_RULES.email.maxLength} characters` }
  }
  
  return { isValid: true }
}

/**
 * Password validation
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, message: 'Password is required' }
  }
  
  if (password.length < VALIDATION_RULES.password.minLength) {
    return { isValid: false, message: `Password must be at least ${VALIDATION_RULES.password.minLength} characters` }
  }
  
  if (password.length > VALIDATION_RULES.password.maxLength) {
    return { isValid: false, message: `Password must be less than ${VALIDATION_RULES.password.maxLength} characters` }
  }
  
  if (VALIDATION_RULES.password.requireUppercase && !/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' }
  }
  
  if (VALIDATION_RULES.password.requireLowercase && !/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' }
  }
  
  if (VALIDATION_RULES.password.requireNumbers && !/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' }
  }
  
  if (VALIDATION_RULES.password.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character' }
  }
  
  return { isValid: true }
}

/**
 * Phone number validation
 */
export function validatePhoneNumber(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, message: 'Phone number is required' }
  }
  
  // Remove all non-digit characters for validation
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length < 10) {
    return { isValid: false, message: 'Phone number must be at least 10 digits' }
  }
  
  if (cleaned.length > 15) {
    return { isValid: false, message: 'Phone number must be less than 15 digits' }
  }
  
  return { isValid: true }
}

/**
 * Required field validation
 */
export function validateRequired(value: any, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, message: `${fieldName} is required` }
  }
  
  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, message: `${fieldName} is required` }
  }
  
  if (Array.isArray(value) && value.length === 0) {
    return { isValid: false, message: `${fieldName} is required` }
  }
  
  return { isValid: true }
}

/**
 * String length validation
 */
export function validateLength(
  value: string,
  min?: number,
  max?: number,
  fieldName: string = 'Field'
): ValidationResult {
  if (!value) {
    return { isValid: true } // Let required validation handle empty values
  }
  
  if (min !== undefined && value.length < min) {
    return { isValid: false, message: `${fieldName} must be at least ${min} characters` }
  }
  
  if (max !== undefined && value.length > max) {
    return { isValid: false, message: `${fieldName} must be less than ${max} characters` }
  }
  
  return { isValid: true }
}

/**
 * Number validation
 */
export function validateNumber(
  value: string | number,
  min?: number,
  max?: number,
  fieldName: string = 'Field'
): ValidationResult {
  if (value === '' || value === null || value === undefined) {
    return { isValid: true } // Let required validation handle empty values
  }
  
  const num = typeof value === 'string' ? parseFloat(value) : value
  
  if (isNaN(num)) {
    return { isValid: false, message: `${fieldName} must be a valid number` }
  }
  
  if (min !== undefined && num < min) {
    return { isValid: false, message: `${fieldName} must be at least ${min}` }
  }
  
  if (max !== undefined && num > max) {
    return { isValid: false, message: `${fieldName} must be less than or equal to ${max}` }
  }
  
  return { isValid: true }
}

/**
 * Currency amount validation
 */
export function validateCurrency(
  value: string | number,
  min: number = 0,
  max?: number,
  fieldName: string = 'Amount'
): ValidationResult {
  const numberResult = validateNumber(value, min, max, fieldName)
  if (!numberResult.isValid) {
    return numberResult
  }
  
  if (value === '' || value === null || value === undefined) {
    return { isValid: true }
  }
  
  const num = typeof value === 'string' ? parseFloat(value) : value
  
  // Check for more than 2 decimal places
  if (typeof value === 'string' && value.includes('.')) {
    const decimals = value.split('.')[1]
    if (decimals && decimals.length > 2) {
      return { isValid: false, message: `${fieldName} cannot have more than 2 decimal places` }
    }
  }
  
  return { isValid: true }
}

/**
 * Percentage validation
 */
export function validatePercentage(
  value: string | number,
  min: number = 0,
  max: number = 100,
  fieldName: string = 'Percentage'
): ValidationResult {
  return validateNumber(value, min, max, fieldName)
}

/**
 * Date validation
 */
export function validateDate(
  value: string | Date,
  minDate?: Date,
  maxDate?: Date,
  fieldName: string = 'Date'
): ValidationResult {
  if (!value) {
    return { isValid: true } // Let required validation handle empty values
  }
  
  const date = typeof value === 'string' ? new Date(value) : value
  
  if (isNaN(date.getTime())) {
    return { isValid: false, message: `${fieldName} must be a valid date` }
  }
  
  if (minDate && date < minDate) {
    return { isValid: false, message: `${fieldName} cannot be before ${minDate.toLocaleDateString()}` }
  }
  
  if (maxDate && date > maxDate) {
    return { isValid: false, message: `${fieldName} cannot be after ${maxDate.toLocaleDateString()}` }
  }
  
  return { isValid: true }
}

/**
 * URL validation
 */
export function validateURL(url: string, fieldName: string = 'URL'): ValidationResult {
  if (!url) {
    return { isValid: true } // Let required validation handle empty values
  }
  
  try {
    new URL(url)
    return { isValid: true }
  } catch {
    return { isValid: false, message: `${fieldName} must be a valid URL` }
  }
}

/**
 * SKU validation
 */
export function validateSKU(sku: string): ValidationResult {
  if (!sku) {
    return { isValid: false, message: 'SKU is required' }
  }
  
  // SKU should contain only alphanumeric characters, hyphens, and underscores
  const skuRegex = /^[A-Za-z0-9_-]+$/
  
  if (!skuRegex.test(sku)) {
    return { isValid: false, message: 'SKU can only contain letters, numbers, hyphens, and underscores' }
  }
  
  if (sku.length < 2) {
    return { isValid: false, message: 'SKU must be at least 2 characters' }
  }
  
  if (sku.length > 50) {
    return { isValid: false, message: 'SKU must be less than 50 characters' }
  }
  
  return { isValid: true }
}

/**
 * Barcode validation
 */
export function validateBarcode(barcode: string): ValidationResult {
  if (!barcode) {
    return { isValid: false, message: 'Barcode is required' }
  }
  
  // Remove any non-digit characters
  const cleaned = barcode.replace(/\D/g, '')
  
  // Check for common barcode lengths
  const validLengths = [8, 12, 13, 14] // EAN-8, UPC-A, EAN-13, ITF-14
  
  if (!validLengths.includes(cleaned.length)) {
    return { isValid: false, message: 'Barcode must be 8, 12, 13, or 14 digits' }
  }
  
  return { isValid: true }
}

/**
 * Tax ID validation (basic)
 */
export function validateTaxID(taxId: string, fieldName: string = 'Tax ID'): ValidationResult {
  if (!taxId) {
    return { isValid: true } // Let required validation handle empty values
  }
  
  // Remove any non-alphanumeric characters
  const cleaned = taxId.replace(/[^A-Za-z0-9]/g, '')
  
  if (cleaned.length < 5) {
    return { isValid: false, message: `${fieldName} must be at least 5 characters` }
  }
  
  if (cleaned.length > 20) {
    return { isValid: false, message: `${fieldName} must be less than 20 characters` }
  }
  
  return { isValid: true }
}

/**
 * Credit card validation (Luhn algorithm)
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber) {
    return { isValid: false, message: 'Credit card number is required' }
  }
  
  // Remove any non-digit characters
  const cleaned = cardNumber.replace(/\D/g, '')
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, message: 'Credit card number must be between 13 and 19 digits' }
  }
  
  // Luhn algorithm
  let sum = 0
  let isEven = false
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10)
    
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    
    sum += digit
    isEven = !isEven
  }
  
  if (sum % 10 !== 0) {
    return { isValid: false, message: 'Invalid credit card number' }
  }
  
  return { isValid: true }
}

/**
 * File validation
 */
export function validateFile(
  file: File,
  allowedTypes?: string[],
  maxSize?: number
): ValidationResult {
  if (!file) {
    return { isValid: false, message: 'File is required' }
  }
  
  if (allowedTypes && !allowedTypes.includes(file.type)) {
    return { isValid: false, message: `File type must be one of: ${allowedTypes.join(', ')}` }
  }
  
  if (maxSize && file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024))
    return { isValid: false, message: `File size must be less than ${maxSizeMB}MB` }
  }
  
  return { isValid: true }
}

/**
 * Combine multiple validation results
 */
export function combineValidations(...results: ValidationResult[]): ValidationResult {
  for (const result of results) {
    if (!result.isValid) {
      return result
    }
  }
  return { isValid: true }
}

/**
 * Create a validation function that combines multiple validators
 */
export function createValidator(
  ...validators: ((value: any) => ValidationResult)[]
) {
  return (value: any): ValidationResult => {
    for (const validator of validators) {
      const result = validator(value)
      if (!result.isValid) {
        return result
      }
    }
    return { isValid: true }
  }
}