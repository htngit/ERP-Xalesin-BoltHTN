/**
 * @fileoverview Utility functions for common operations
 * @author Xalesin Team
 */

import { format, parseISO, isValid } from 'date-fns';
import { DATE_FORMATS, STORAGE_KEYS } from '../constants';
import type { ApiResponse, AppError } from '../types';

// Date utilities
export const dateUtils = {
  /**
   * Format a date string or Date object for display
   */
  formatDate: (date: string | Date, formatStr: string = DATE_FORMATS.DISPLAY): string => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;
      return isValid(dateObj) ? format(dateObj, formatStr) : 'Invalid date';
    } catch {
      return 'Invalid date';
    }
  },

  /**
   * Format a date for input fields
   */
  formatForInput: (date: string | Date): string => {
    return dateUtils.formatDate(date, DATE_FORMATS.INPUT);
  },

  /**
   * Format a datetime for display
   */
  formatDateTime: (date: string | Date): string => {
    return dateUtils.formatDate(date, DATE_FORMATS.DATETIME);
  },

  /**
   * Get current timestamp in ISO format
   */
  now: (): string => {
    return new Date().toISOString();
  },

  /**
   * Check if a date is valid
   */
  isValidDate: (date: string | Date): boolean => {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;
      return isValid(dateObj);
    } catch {
      return false;
    }
  },
};

// String utilities
export const stringUtils = {
  /**
   * Convert string to slug format
   */
  toSlug: (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  },

  /**
   * Capitalize first letter of each word
   */
  toTitleCase: (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  },

  /**
   * Truncate string with ellipsis
   */
  truncate: (str: string, length: number = 100): string => {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  },

  /**
   * Generate random string
   */
  randomString: (length: number = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Extract initials from name
   */
  getInitials: (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  },
};

// Number utilities
export const numberUtils = {
  /**
   * Format number as currency
   */
  formatCurrency: (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  },

  /**
   * Format number with commas
   */
  formatNumber: (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  },

  /**
   * Round to specified decimal places
   */
  round: (num: number, decimals: number = 2): number => {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },

  /**
   * Generate random number between min and max
   */
  random: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

// Storage utilities
export const storageUtils = {
  /**
   * Set item in localStorage with error handling
   */
  setItem: (key: string, value: any): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting localStorage item:', error);
      return false;
    }
  },

  /**
   * Get item from localStorage with error handling
   */
  getItem: <T = any>(key: string, defaultValue: T | null = null): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error getting localStorage item:', error);
      return defaultValue;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing localStorage item:', error);
      return false;
    }
  },

  /**
   * Clear all localStorage items
   */
  clear: (): boolean => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },
};

// API utilities
export const apiUtils = {
  /**
   * Create standardized API response
   */
  createResponse: <T>(data: T | null, error: string | null = null, message?: string): ApiResponse<T> => {
    return {
      data,
      error,
      success: !error,
      message,
    };
  },

  /**
   * Handle API errors
   */
  handleError: (error: any): AppError => {
    const timestamp = new Date().toISOString();
    
    if (error?.response) {
      // HTTP error
      return {
        code: `HTTP_${error.response.status}`,
        message: error.response.data?.message || error.message || 'An error occurred',
        details: error.response.data,
        timestamp,
      };
    }
    
    if (error?.code) {
      // Network or other coded error
      return {
        code: error.code,
        message: error.message || 'An error occurred',
        details: error,
        timestamp,
      };
    }
    
    // Generic error
    return {
      code: 'UNKNOWN_ERROR',
      message: error?.message || 'An unexpected error occurred',
      details: error,
      timestamp,
    };
  },

  /**
   * Build query string from object
   */
  buildQueryString: (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        searchParams.append(key, String(value));
      }
    });
    
    return searchParams.toString();
  },
};

// Validation utilities
export const validationUtils = {
  /**
   * Check if email is valid
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Check if URL is valid
   */
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Check if string is UUID
   */
  isUUID: (str: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(str);
  },
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Deep clone utility
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    Object.keys(obj).forEach(key => {
      (clonedObj as any)[key] = deepClone((obj as any)[key]);
    });
    return clonedObj;
  }
  return obj;
};

// Export all utilities
export default {
  dateUtils,
  stringUtils,
  numberUtils,
  storageUtils,
  apiUtils,
  validationUtils,
  debounce,
  throttle,
  deepClone,
};