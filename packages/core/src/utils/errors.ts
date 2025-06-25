/**
 * Error handling utilities for Xalesin ERP
 * Comprehensive error management with proper typing and logging
 */

import type { ApiResponse } from '../types/business'

/**
 * Base error class for Xalesin ERP
 */
export abstract class XalesinError extends Error {
  abstract readonly code: string
  abstract readonly statusCode: number
  readonly timestamp: string
  readonly context?: Record<string, any>

  constructor(
    message: string,
    context?: Record<string, any>
  ) {
    super(message)
    this.name = this.constructor.name
    this.timestamp = new Date().toISOString()
    this.context = context

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype)

    // Capture stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  /**
   * Convert error to API response format
   */
  toApiResponse<T = any>(): ApiResponse<T> {
    return {
      success: false,
      error: {
        code: this.code,
        message: this.message,
        details: this.context
      }
    }
  }

  /**
   * Convert error to JSON
   */
  toJSON(): Record<string, any> {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      timestamp: this.timestamp,
      context: this.context,
      stack: this.stack
    }
  }
}

/**
 * Validation error
 */
export class ValidationError extends XalesinError {
  readonly code = 'VALIDATION_ERROR'
  readonly statusCode = 400

  constructor(
    message: string,
    public readonly field?: string,
    public readonly value?: any,
    context?: Record<string, any>
  ) {
    super(message, { field, value, ...context })
  }
}

/**
 * Authentication error
 */
export class AuthenticationError extends XalesinError {
  readonly code = 'AUTHENTICATION_ERROR'
  readonly statusCode = 401

  constructor(
    message = 'Authentication required',
    context?: Record<string, any>
  ) {
    super(message, context)
  }
}

/**
 * Authorization error
 */
export class AuthorizationError extends XalesinError {
  readonly code = 'AUTHORIZATION_ERROR'
  readonly statusCode = 403

  constructor(
    message = 'Insufficient permissions',
    public readonly requiredPermission?: string,
    context?: Record<string, any>
  ) {
    super(message, { requiredPermission, ...context })
  }
}

/**
 * Not found error
 */
export class NotFoundError extends XalesinError {
  readonly code = 'NOT_FOUND_ERROR'
  readonly statusCode = 404

  constructor(
    message: string,
    public readonly resource?: string,
    public readonly id?: string,
    context?: Record<string, any>
  ) {
    super(message, { resource, id, ...context })
  }
}

/**
 * Conflict error
 */
export class ConflictError extends XalesinError {
  readonly code = 'CONFLICT_ERROR'
  readonly statusCode = 409

  constructor(
    message: string,
    public readonly conflictingField?: string,
    public readonly conflictingValue?: any,
    context?: Record<string, any>
  ) {
    super(message, { conflictingField, conflictingValue, ...context })
  }
}

/**
 * Business logic error
 */
export class BusinessLogicError extends XalesinError {
  readonly code = 'BUSINESS_LOGIC_ERROR'
  readonly statusCode = 422

  constructor(
    message: string,
    public readonly businessRule?: string,
    context?: Record<string, any>
  ) {
    super(message, { businessRule, ...context })
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends XalesinError {
  readonly code = 'RATE_LIMIT_ERROR'
  readonly statusCode = 429

  constructor(
    message = 'Rate limit exceeded',
    public readonly retryAfter?: number,
    context?: Record<string, any>
  ) {
    super(message, { retryAfter, ...context })
  }
}

/**
 * Internal server error
 */
export class InternalServerError extends XalesinError {
  readonly code = 'INTERNAL_SERVER_ERROR'
  readonly statusCode = 500

  constructor(
    message = 'Internal server error',
    context?: Record<string, any>
  ) {
    super(message, context)
  }
}

/**
 * Service unavailable error
 */
export class ServiceUnavailableError extends XalesinError {
  readonly code = 'SERVICE_UNAVAILABLE_ERROR'
  readonly statusCode = 503

  constructor(
    message = 'Service temporarily unavailable',
    public readonly retryAfter?: number,
    context?: Record<string, any>
  ) {
    super(message, { retryAfter, ...context })
  }
}

/**
 * Database error
 */
export class DatabaseError extends XalesinError {
  readonly code = 'DATABASE_ERROR'
  readonly statusCode = 500

  constructor(
    message: string,
    public readonly operation?: string,
    public readonly table?: string,
    context?: Record<string, any>
  ) {
    super(message, { operation, table, ...context })
  }
}

/**
 * Network error
 */
export class NetworkError extends XalesinError {
  readonly code = 'NETWORK_ERROR'
  readonly statusCode = 500

  constructor(
    message: string,
    public readonly url?: string,
    public readonly method?: string,
    context?: Record<string, any>
  ) {
    super(message, { url, method, ...context })
  }
}

/**
 * Configuration error
 */
export class ConfigurationError extends XalesinError {
  readonly code = 'CONFIGURATION_ERROR'
  readonly statusCode = 500

  constructor(
    message: string,
    public readonly configKey?: string,
    context?: Record<string, any>
  ) {
    super(message, { configKey, ...context })
  }
}

/**
 * File operation error
 */
export class FileOperationError extends XalesinError {
  readonly code = 'FILE_OPERATION_ERROR'
  readonly statusCode = 500

  constructor(
    message: string,
    public readonly operation?: string,
    public readonly filePath?: string,
    context?: Record<string, any>
  ) {
    super(message, { operation, filePath, ...context })
  }
}

/**
 * Error factory for creating specific error types
 */
export class ErrorFactory {
  /**
   * Create validation error
   */
  static validation(
    message: string,
    field?: string,
    value?: any,
    context?: Record<string, any>
  ): ValidationError {
    return new ValidationError(message, field, value, context)
  }

  /**
   * Create authentication error
   */
  static authentication(
    message?: string,
    context?: Record<string, any>
  ): AuthenticationError {
    return new AuthenticationError(message, context)
  }

  /**
   * Create authorization error
   */
  static authorization(
    message?: string,
    requiredPermission?: string,
    context?: Record<string, any>
  ): AuthorizationError {
    return new AuthorizationError(message, requiredPermission, context)
  }

  /**
   * Create not found error
   */
  static notFound(
    resource: string,
    id?: string,
    context?: Record<string, any>
  ): NotFoundError {
    const message = id 
      ? `${resource} with ID '${id}' not found`
      : `${resource} not found`
    return new NotFoundError(message, resource, id, context)
  }

  /**
   * Create conflict error
   */
  static conflict(
    message: string,
    field?: string,
    value?: any,
    context?: Record<string, any>
  ): ConflictError {
    return new ConflictError(message, field, value, context)
  }

  /**
   * Create business logic error
   */
  static businessLogic(
    message: string,
    rule?: string,
    context?: Record<string, any>
  ): BusinessLogicError {
    return new BusinessLogicError(message, rule, context)
  }

  /**
   * Create database error
   */
  static database(
    message: string,
    operation?: string,
    table?: string,
    context?: Record<string, any>
  ): DatabaseError {
    return new DatabaseError(message, operation, table, context)
  }

  /**
   * Create network error
   */
  static network(
    message: string,
    url?: string,
    method?: string,
    context?: Record<string, any>
  ): NetworkError {
    return new NetworkError(message, url, method, context)
  }
}

/**
 * Error handler utility
 */
export class ErrorHandler {
  /**
   * Handle and normalize errors
   */
  static handle(error: unknown): XalesinError {
    // If it's already a Xalesin error, return as is
    if (error instanceof XalesinError) {
      return error
    }

    // Handle standard Error objects
    if (error instanceof Error) {
      return new InternalServerError(error.message, {
        originalError: error.name,
        stack: error.stack
      })
    }

    // Handle string errors
    if (typeof error === 'string') {
      return new InternalServerError(error)
    }

    // Handle unknown errors
    return new InternalServerError('An unknown error occurred', {
      originalError: error
    })
  }

  /**
   * Check if error is retryable
   */
  static isRetryable(error: XalesinError): boolean {
    const retryableCodes = [
      'NETWORK_ERROR',
      'SERVICE_UNAVAILABLE_ERROR',
      'RATE_LIMIT_ERROR'
    ]
    return retryableCodes.includes(error.code)
  }

  /**
   * Get retry delay for retryable errors
   */
  static getRetryDelay(error: XalesinError, attempt: number): number {
    if (error instanceof RateLimitError && error.retryAfter) {
      return error.retryAfter * 1000
    }

    if (error instanceof ServiceUnavailableError && error.retryAfter) {
      return error.retryAfter * 1000
    }

    // Exponential backoff: 1s, 2s, 4s, 8s, etc.
    return Math.min(1000 * Math.pow(2, attempt - 1), 30000)
  }

  /**
   * Log error with appropriate level
   */
  static log(error: XalesinError, logger?: {
    error: (message: string, meta?: any) => void
    warn: (message: string, meta?: any) => void
    info: (message: string, meta?: any) => void
  }): void {
    if (!logger) {
      console.error(error.toJSON())
      return
    }

    const meta = error.toJSON()

    // Log client errors as warnings, server errors as errors
    if (error.statusCode >= 500) {
      logger.error(error.message, meta)
    } else if (error.statusCode >= 400) {
      logger.warn(error.message, meta)
    } else {
      logger.info(error.message, meta)
    }
  }
}

/**
 * Result type for operations that can fail
 */
export type Result<T, E = XalesinError> = 
  | { success: true; data: T }
  | { success: false; error: E }

/**
 * Result utility functions
 */
export class ResultUtils {
  /**
   * Create successful result
   */
  static success<T>(data: T): Result<T> {
    return { success: true, data }
  }

  /**
   * Create error result
   */
  static error<T>(error: XalesinError): Result<T> {
    return { success: false, error }
  }

  /**
   * Wrap async function to return Result
   */
  static async wrap<T>(
    fn: () => Promise<T>
  ): Promise<Result<T>> {
    try {
      const data = await fn()
      return ResultUtils.success(data)
    } catch (error) {
      return ResultUtils.error(ErrorHandler.handle(error))
    }
  }

  /**
   * Wrap sync function to return Result
   */
  static wrapSync<T>(
    fn: () => T
  ): Result<T> {
    try {
      const data = fn()
      return ResultUtils.success(data)
    } catch (error) {
      return ResultUtils.error(ErrorHandler.handle(error))
    }
  }

  /**
   * Map result data
   */
  static map<T, U>(
    result: Result<T>,
    mapper: (data: T) => U
  ): Result<U> {
    if (result.success) {
      try {
        return ResultUtils.success(mapper(result.data))
      } catch (error) {
        return ResultUtils.error(ErrorHandler.handle(error))
      }
    }
    return result
  }

  /**
   * Chain result operations
   */
  static chain<T, U>(
    result: Result<T>,
    mapper: (data: T) => Result<U>
  ): Result<U> {
    if (result.success) {
      try {
        return mapper(result.data)
      } catch (error) {
        return ResultUtils.error(ErrorHandler.handle(error))
      }
    }
    return result
  }

  /**
   * Combine multiple results
   */
  static combine<T extends readonly unknown[]>(
    ...results: { [K in keyof T]: Result<T[K]> }
  ): Result<T> {
    const data: any[] = []
    
    for (const result of results) {
      if (!result.success) {
        return result
      }
      data.push(result.data)
    }
    
    return ResultUtils.success(data as T)
  }
}

/**
 * Error boundary for React components
 */
export interface ErrorBoundaryState {
  hasError: boolean
  error?: XalesinError
}

/**
 * Error reporting utility
 */
export class ErrorReporter {
  private static reporters: Array<(error: XalesinError) => void> = []

  /**
   * Add error reporter
   */
  static addReporter(reporter: (error: XalesinError) => void): void {
    this.reporters.push(reporter)
  }

  /**
   * Remove error reporter
   */
  static removeReporter(reporter: (error: XalesinError) => void): void {
    const index = this.reporters.indexOf(reporter)
    if (index > -1) {
      this.reporters.splice(index, 1)
    }
  }

  /**
   * Report error to all registered reporters
   */
  static report(error: XalesinError): void {
    this.reporters.forEach(reporter => {
      try {
        reporter(error)
      } catch (reporterError) {
        console.error('Error in error reporter:', reporterError)
      }
    })
  }
}

/**
 * Export all error types and utilities
 */
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
  ErrorReporter
}