/**
 * Xalesin ERP UI Utilities
 * Export all utility functions for formatting, validation, and common operations
 */

// Formatting utilities
export {
  formatCurrency,
  formatPercentage,
  formatQuantity,
  formatNumber,
  formatDate,
  formatRelativeTime,
  formatFileSize,
  formatPhoneNumber,
  formatAddress,
  truncateText,
  formatInitials,
  formatDocumentNumber,
  formatTaxRate,
  formatDiscount,
  formatStatus,
  formatSKU,
  formatBarcode,
} from './format'

// Validation utilities
export {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateRequired,
  validateLength,
  validateNumber,
  validateCurrency,
  validatePercentage,
  validateDate,
  validateURL,
  validateSKU,
  validateBarcode,
  validateTaxID,
  validateCreditCard,
  validateFile,
  combineValidations,
  createValidator,
  type ValidationResult,
} from './validation'