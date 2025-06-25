/**
 * @fileoverview Core type definitions and interfaces
 * @author Xalesin Team
 */

// Database types
export * from './database';

// Common types
export interface ApiResponse<T = any> {
  data: T | null;
  error: string | null;
  success: boolean;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  children?: NavItem[];
  permissions?: string[];
}

// Theme types
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
  borderRadius: number;
  fontSize: 'sm' | 'md' | 'lg';
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: string;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  lastUpdated?: string;
}

// Multi-tenancy types
export interface TenantContext {
  organizationId: string;
  organizationName: string;
  userRole: string;
  permissions: string[];
}