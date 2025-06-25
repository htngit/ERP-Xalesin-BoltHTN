/**
 * Supabase client service for Xalesin ERP
 * Handles database connections and operations
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { DATABASE_CONFIG } from '@xalesin/config'
import type { Database } from '../types/database'
import type { Logger } from '../types'

/**
 * Supabase service configuration
 */
export interface SupabaseConfig {
  url: string
  anonKey: string
  serviceRoleKey?: string
  options?: {
    auth?: {
      autoRefreshToken?: boolean
      persistSession?: boolean
      detectSessionInUrl?: boolean
    }
    realtime?: {
      params?: {
        eventsPerSecond?: number
      }
    }
    global?: {
      headers?: Record<string, string>
    }
    db?: {
      schema?: string
    }
  }
}

/**
 * Supabase client wrapper with enhanced functionality
 */
export class SupabaseService {
  private client: SupabaseClient<Database>
  private serviceClient?: SupabaseClient<Database>
  private logger?: Logger
  private config: SupabaseConfig

  constructor(config: SupabaseConfig, logger?: Logger) {
    this.config = config
    this.logger = logger

    // Create main client with anon key
    this.client = createClient<Database>(
      config.url,
      config.anonKey,
      {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
          ...config.options?.auth
        },
        realtime: {
          params: {
            eventsPerSecond: 10,
            ...config.options?.realtime?.params
          }
        },
        global: {
          headers: {
            'X-Client-Info': 'xalesin-erp',
            ...config.options?.global?.headers
          }
        },
        db: {
          schema: 'public',
          ...config.options?.db
        }
      }
    )

    // Create service client with service role key if provided
    if (config.serviceRoleKey) {
      this.serviceClient = createClient<Database>(
        config.url,
        config.serviceRoleKey,
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false
          },
          global: {
            headers: {
              'X-Client-Info': 'xalesin-erp-service',
              ...config.options?.global?.headers
            }
          },
          db: {
            schema: 'public',
            ...config.options?.db
          }
        }
      )
    }

    this.logger?.info('Supabase service initialized', {
      url: config.url,
      hasServiceRole: !!config.serviceRoleKey
    })
  }

  /**
   * Get the main Supabase client (with anon key)
   */
  getClient(): SupabaseClient<Database> {
    return this.client
  }

  /**
   * Get the service Supabase client (with service role key)
   * Use this for admin operations that bypass RLS
   */
  getServiceClient(): SupabaseClient<Database> {
    if (!this.serviceClient) {
      throw new Error('Service client not available. Service role key not provided.')
    }
    return this.serviceClient
  }

  /**
   * Check database connection status
   */
  async checkConnection(): Promise<{
    connected: boolean
    latency?: number
    error?: string
  }> {
    try {
      const start = Date.now()
      const { error } = await this.client
        .from('tenants')
        .select('id')
        .limit(1)
        .single()

      const latency = Date.now() - start

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        return {
          connected: false,
          error: error.message
        }
      }

      return {
        connected: true,
        latency
      }
    } catch (error) {
      this.logger?.error('Database connection check failed', error as Error)
      return {
        connected: false,
        error: (error as Error).message
      }
    }
  }

  /**
   * Execute a raw SQL query (service client only)
   */
  async executeRawQuery<T = any>(query: string, params?: any[]): Promise<{
    data: T[] | null
    error: any
  }> {
    if (!this.serviceClient) {
      throw new Error('Raw queries require service client')
    }

    try {
      this.logger?.debug('Executing raw query', { query, params })
      
      const { data, error } = await this.serviceClient.rpc('execute_sql', {
        query,
        params: params || []
      })

      if (error) {
        this.logger?.error('Raw query failed', error, { query, params })
      }

      return { data, error }
    } catch (error) {
      this.logger?.error('Raw query execution failed', error as Error, { query, params })
      return {
        data: null,
        error: (error as Error).message
      }
    }
  }

  /**
   * Get database statistics
   */
  async getDatabaseStats(): Promise<{
    tableStats: {
      tableName: string
      rowCount: number
      sizeBytes: number
    }[]
    connectionStats: {
      totalConnections: number
      activeConnections: number
      idleConnections: number
    }
    performanceStats: {
      avgQueryTime: number
      slowQueries: number
      cacheHitRatio: number
    }
  } | null> {
    if (!this.serviceClient) {
      this.logger?.warn('Database stats require service client')
      return null
    }

    try {
      // Get table statistics
      const { data: tableStats } = await this.serviceClient.rpc('get_table_stats')
      
      // Get connection statistics
      const { data: connectionStats } = await this.serviceClient.rpc('get_connection_stats')
      
      // Get performance statistics
      const { data: performanceStats } = await this.serviceClient.rpc('get_performance_stats')

      return {
        tableStats: tableStats || [],
        connectionStats: connectionStats || {
          totalConnections: 0,
          activeConnections: 0,
          idleConnections: 0
        },
        performanceStats: performanceStats || {
          avgQueryTime: 0,
          slowQueries: 0,
          cacheHitRatio: 0
        }
      }
    } catch (error) {
      this.logger?.error('Failed to get database stats', error as Error)
      return null
    }
  }

  /**
   * Set up real-time subscriptions
   */
  subscribeToTable<T = any>(
    table: string,
    callback: (payload: {
      eventType: 'INSERT' | 'UPDATE' | 'DELETE'
      new: T | null
      old: T | null
      errors: any
    }) => void,
    filter?: string
  ) {
    const channel = this.client
      .channel(`${table}_changes`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table,
          filter
        },
        callback
      )
      .subscribe()

    this.logger?.info('Subscribed to table changes', { table, filter })

    return {
      unsubscribe: () => {
        this.client.removeChannel(channel)
        this.logger?.info('Unsubscribed from table changes', { table })
      }
    }
  }

  /**
   * Batch operations with transaction support
   */
  async executeBatch(operations: (() => Promise<any>)[]): Promise<{
    success: boolean
    results: any[]
    errors: any[]
  }> {
    const results: any[] = []
    const errors: any[] = []

    try {
      // Execute all operations
      for (let i = 0; i < operations.length; i++) {
        try {
          const result = await operations[i]()
          results.push(result)
        } catch (error) {
          errors.push({ index: i, error })
          this.logger?.error(`Batch operation ${i} failed`, error as Error)
        }
      }

      return {
        success: errors.length === 0,
        results,
        errors
      }
    } catch (error) {
      this.logger?.error('Batch execution failed', error as Error)
      return {
        success: false,
        results,
        errors: [{ error }]
      }
    }
  }

  /**
   * Clean up resources
   */
  async cleanup(): Promise<void> {
    try {
      // Remove all channels
      this.client.removeAllChannels()
      
      this.logger?.info('Supabase service cleaned up')
    } catch (error) {
      this.logger?.error('Failed to cleanup Supabase service', error as Error)
    }
  }

  /**
   * Get current user session
   */
  async getSession() {
    const { data: { session }, error } = await this.client.auth.getSession()
    
    if (error) {
      this.logger?.error('Failed to get session', error)
    }

    return { session, error }
  }

  /**
   * Sign in with email and password
   */
  async signIn(email: string, password: string) {
    const { data, error } = await this.client.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      this.logger?.error('Sign in failed', error, { email })
    } else {
      this.logger?.info('User signed in', { email, userId: data.user?.id })
    }

    return { data, error }
  }

  /**
   * Sign out current user
   */
  async signOut() {
    const { error } = await this.client.auth.signOut()

    if (error) {
      this.logger?.error('Sign out failed', error)
    } else {
      this.logger?.info('User signed out')
    }

    return { error }
  }

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (event: string, session: any) => void) {
    const { data: { subscription } } = this.client.auth.onAuthStateChange(callback)
    
    return {
      unsubscribe: () => subscription.unsubscribe()
    }
  }
}

/**
 * Create a configured Supabase service instance
 */
export function createSupabaseService(logger?: Logger): SupabaseService {
  const config: SupabaseConfig = {
    url: DATABASE_CONFIG.supabase.url,
    anonKey: DATABASE_CONFIG.supabase.anonKey,
    serviceRoleKey: DATABASE_CONFIG.supabase.serviceRoleKey,
    options: {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      },
      realtime: {
        params: {
          eventsPerSecond: DATABASE_CONFIG.realtime.eventsPerSecond
        }
      },
      db: {
        schema: DATABASE_CONFIG.schema.public
      }
    }
  }

  return new SupabaseService(config, logger)
}

/**
 * Default Supabase service instance
 */
export const supabaseService = createSupabaseService()