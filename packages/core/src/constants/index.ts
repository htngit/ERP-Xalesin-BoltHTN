/**
 * @fileoverview Application constants and configuration values
 * @author Xalesin Team
 */

// API Configuration
export const API_CONFIG = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  REQUEST_TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// User Roles and Permissions
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  VIEWER: 'viewer',
} as const;

export const PERMISSIONS = {
  // Organization permissions
  ORG_READ: 'org:read',
  ORG_WRITE: 'org:write',
  ORG_DELETE: 'org:delete',
  
  // User management permissions
  USER_READ: 'user:read',
  USER_WRITE: 'user:write',
  USER_DELETE: 'user:delete',
  
  // Financial permissions
  FINANCE_READ: 'finance:read',
  FINANCE_WRITE: 'finance:write',
  FINANCE_DELETE: 'finance:delete',
  
  // Document permissions
  DOC_READ: 'doc:read',
  DOC_WRITE: 'doc:write',
  DOC_DELETE: 'doc:delete',
} as const;

// Role-Permission Mapping
export const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: Object.values(PERMISSIONS),
  [USER_ROLES.MANAGER]: [
    PERMISSIONS.ORG_READ,
    PERMISSIONS.USER_READ,
    PERMISSIONS.USER_WRITE,
    PERMISSIONS.FINANCE_READ,
    PERMISSIONS.FINANCE_WRITE,
    PERMISSIONS.DOC_READ,
    PERMISSIONS.DOC_WRITE,
  ],
  [USER_ROLES.USER]: [
    PERMISSIONS.ORG_READ,
    PERMISSIONS.USER_READ,
    PERMISSIONS.FINANCE_READ,
    PERMISSIONS.DOC_READ,
    PERMISSIONS.DOC_WRITE,
  ],
  [USER_ROLES.VIEWER]: [
    PERMISSIONS.ORG_READ,
    PERMISSIONS.USER_READ,
    PERMISSIONS.FINANCE_READ,
    PERMISSIONS.DOC_READ,
  ],
} as const;

// Application Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  
  // Organization routes
  ORGANIZATIONS: '/organizations',
  ORGANIZATION_DETAIL: '/organizations/:id',
  
  // User management routes
  USERS: '/users',
  USER_DETAIL: '/users/:id',
  
  // Financial routes
  FINANCE: '/finance',
  ACCOUNTS: '/finance/accounts',
  TRANSACTIONS: '/finance/transactions',
  REPORTS: '/finance/reports',
  
  // Document routes
  DOCUMENTS: '/documents',
  DOCUMENT_DETAIL: '/documents/:id',
} as const;

// Storage Configuration
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'xalesin_auth_token',
  USER_PREFERENCES: 'xalesin_user_preferences',
  THEME_CONFIG: 'xalesin_theme_config',
  ORGANIZATION_ID: 'xalesin_organization_id',
} as const;

// File Upload Configuration
export const FILE_CONFIG = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  UPLOAD_BUCKET: 'documents',
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  SLUG_REGEX: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

// Date and Time Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  INPUT: 'yyyy-MM-dd',
  DATETIME: 'MMM dd, yyyy HH:mm',
  TIME: 'HH:mm',
  ISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Successfully created.',
  UPDATED: 'Successfully updated.',
  DELETED: 'Successfully deleted.',
  SAVED: 'Changes saved successfully.',
  UPLOADED: 'File uploaded successfully.',
} as const;