/**
 * Xalesin ERP Configuration Package
 * Exports all shared configurations for web and mobile applications
 */

// Tamagui configuration
export { tamaguiConfig, default as tamaguiConfigDefault } from './tamagui.config'
export type { Conf as TamaguiConfig } from './tamagui.config'

// Database configuration
export {
  DATABASE_CONFIG,
  validateDatabaseConfig,
  getDatabaseStatus,
} from './database'
export type {
  DatabaseConfig,
  TableNames,
  SchemaNames,
} from './database'

// Application constants
export {
  APP_CONFIG,
  API_CONFIG,
  AUTH_CONFIG,
  USER_ROLES,
  PERMISSIONS,
  DOCUMENT_TYPES,
  DOCUMENT_STATUSES,
  MOVEMENT_TYPES,
  PARTY_TYPES,
  ADDRESS_TYPES,
  CURRENCY_CODES,
  TAX_TYPES,
  FILE_CONFIG,
  PAGINATION_CONFIG,
  DATE_FORMATS,
  NUMBER_FORMATS,
  VALIDATION_RULES,
  ERROR_CODES,
  SUCCESS_MESSAGES,
} from './constants'
export type {
  UserRole,
  Permission,
  DocumentType,
  DocumentStatus,
  MovementType,
  PartyType,
  AddressType,
  CurrencyCode,
  TaxType,
  ErrorCode,
} from './constants'

// Re-export commonly used types
export type {
  TamaguiConfig,
  DatabaseConfig,
  UserRole,
  Permission,
}