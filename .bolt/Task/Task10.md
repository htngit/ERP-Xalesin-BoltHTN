# Task 10: Performance Optimization & Scalability

## 🎯 Objective
Implement comprehensive performance optimization strategies and scalability solutions for Xalesin ERP to ensure the system can handle enterprise-scale workloads with optimal response times, efficient resource utilization, and seamless horizontal scaling capabilities.

## 📋 Requirements
- Implement advanced caching strategies (Redis, CDN, Application-level)
- Optimize database queries and implement connection pooling
- Setup horizontal and vertical scaling mechanisms
- Implement lazy loading and code splitting
- Optimize bundle sizes and asset delivery
- Setup performance monitoring and alerting
- Implement rate limiting and throttling
- Optimize real-time features and WebSocket connections
- Setup load balancing and auto-scaling
- Implement performance testing and benchmarking

## 🏗️ Implementation Steps

### 1. Advanced Caching Strategy
```typescript
// packages/core/src/cache/CacheManager.ts
import Redis from 'ioredis'
import { logger } from '../utils/logger'

export interface CacheConfig {
  ttl: number // Time to live in seconds
  prefix: string
  compress?: boolean
  serialize?: boolean
}

export class CacheManager {
  private redis: Redis
  private localCache: Map<string, { value: any; expires: number }>
  private readonly maxLocalCacheSize = 1000

  constructor(redisUrl: string) {
    this.redis = new Redis(redisUrl, {
      retryDelayOnFailover: 100,
      enableReadyCheck: false,
      maxRetriesPerRequest: 3,
      lazyConnect: true
    })
    
    this.localCache = new Map()
    
    // Cleanup local cache periodically
    setInterval(() => this.cleanupLocalCache(), 60000)
  }

  async get<T>(key: string, config?: Partial<CacheConfig>): Promise<T | null> {
    const fullKey = this.buildKey(key, config?.prefix)
    
    try {
      // Try local cache first (L1)
      const localValue = this.getFromLocalCache<T>(fullKey)
      if (localValue !== null) {
        return localValue
      }
      
      // Try Redis cache (L2)
      const redisValue = await this.redis.get(fullKey)
      if (redisValue) {
        const parsed = this.deserialize<T>(redisValue, config?.serialize)
        
        // Store in local cache for faster access
        this.setLocalCache(fullKey, parsed, 300) // 5 minutes local TTL
        
        return parsed
      }
      
      return null
    } catch (error) {
      logger.error('Cache get error', { key: fullKey, error })
      return null
    }
  }

  async set<T>(
    key: string, 
    value: T, 
    config: CacheConfig
  ): Promise<void> {
    const fullKey = this.buildKey(key, config.prefix)
    
    try {
      const serialized = this.serialize(value, config.serialize, config.compress)
      
      // Set in Redis with TTL
      await this.redis.setex(fullKey, config.ttl, serialized)
      
      // Set in local cache
      this.setLocalCache(fullKey, value, Math.min(config.ttl, 300))
      
    } catch (error) {
      logger.error('Cache set error', { key: fullKey, error })
    }
  }

  async invalidate(pattern: string, prefix?: string): Promise<void> {
    const fullPattern = this.buildKey(pattern, prefix)
    
    try {
      // Clear from Redis
      const keys = await this.redis.keys(fullPattern)
      if (keys.length > 0) {
        await this.redis.del(...keys)
      }
      
      // Clear from local cache
      for (const [key] of this.localCache) {
        if (key.includes(fullPattern.replace('*', ''))) {
          this.localCache.delete(key)
        }
      }
      
    } catch (error) {
      logger.error('Cache invalidation error', { pattern: fullPattern, error })
    }
  }

  async mget<T>(keys: string[], prefix?: string): Promise<(T | null)[]> {
    const fullKeys = keys.map(key => this.buildKey(key, prefix))
    
    try {
      const values = await this.redis.mget(...fullKeys)
      return values.map(value => 
        value ? this.deserialize<T>(value) : null
      )
    } catch (error) {
      logger.error('Cache mget error', { keys: fullKeys, error })
      return keys.map(() => null)
    }
  }

  async mset<T>(items: Array<{ key: string; value: T; ttl: number }>, prefix?: string): Promise<void> {
    const pipeline = this.redis.pipeline()
    
    items.forEach(({ key, value, ttl }) => {
      const fullKey = this.buildKey(key, prefix)
      const serialized = this.serialize(value)
      pipeline.setex(fullKey, ttl, serialized)
    })
    
    try {
      await pipeline.exec()
    } catch (error) {
      logger.error('Cache mset error', { error })
    }
  }

  private buildKey(key: string, prefix?: string): string {
    return prefix ? `${prefix}:${key}` : key
  }

  private serialize(value: any, useJson = true, compress = false): string {
    let serialized = useJson ? JSON.stringify(value) : String(value)
    
    if (compress && serialized.length > 1024) {
      // Implement compression for large values
      const zlib = require('zlib')
      serialized = zlib.gzipSync(serialized).toString('base64')
    }
    
    return serialized
  }

  private deserialize<T>(value: string, useJson = true): T {
    try {
      // Check if compressed
      if (value.startsWith('H4sI')) { // gzip magic number in base64
        const zlib = require('zlib')
        const decompressed = zlib.gunzipSync(Buffer.from(value, 'base64')).toString()
        return useJson ? JSON.parse(decompressed) : decompressed as T
      }
      
      return useJson ? JSON.parse(value) : value as T
    } catch (error) {
      logger.error('Cache deserialization error', { value, error })
      return value as T
    }
  }

  private getFromLocalCache<T>(key: string): T | null {
    const item = this.localCache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expires) {
      this.localCache.delete(key)
      return null
    }
    
    return item.value
  }

  private setLocalCache<T>(key: string, value: T, ttlSeconds: number): void {
    // Implement LRU eviction if cache is full
    if (this.localCache.size >= this.maxLocalCacheSize) {
      const firstKey = this.localCache.keys().next().value
      this.localCache.delete(firstKey)
    }
    
    this.localCache.set(key, {
      value,
      expires: Date.now() + (ttlSeconds * 1000)
    })
  }

  private cleanupLocalCache(): void {
    const now = Date.now()
    for (const [key, item] of this.localCache) {
      if (now > item.expires) {
        this.localCache.delete(key)
      }
    }
  }
}

// Cache decorators for easy usage
export function Cacheable(config: CacheConfig) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    
    descriptor.value = async function (...args: any[]) {
      const cacheKey = `${target.constructor.name}:${propertyKey}:${JSON.stringify(args)}`
      const cacheManager = this.cacheManager as CacheManager
      
      if (!cacheManager) {
        return originalMethod.apply(this, args)
      }
      
      // Try to get from cache
      const cached = await cacheManager.get(cacheKey, config)
      if (cached !== null) {
        return cached
      }
      
      // Execute method and cache result
      const result = await originalMethod.apply(this, args)
      await cacheManager.set(cacheKey, result, config)
      
      return result
    }
    
    return descriptor
  }
}

export function CacheInvalidate(patterns: string[]) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    
    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args)
      const cacheManager = this.cacheManager as CacheManager
      
      if (cacheManager) {
        // Invalidate cache patterns
        await Promise.all(
          patterns.map(pattern => cacheManager.invalidate(pattern))
        )
      }
      
      return result
    }
    
    return descriptor
  }
}
```

### 2. Database Optimization
```typescript
// packages/core/src/database/QueryOptimizer.ts
import { SupabaseClient } from '@supabase/supabase-js'
import { logger } from '../utils/logger'

export class QueryOptimizer {
  private queryCache = new Map<string, any>()
  private slowQueryThreshold = 1000 // 1 second
  
  constructor(private supabase: SupabaseClient) {}

  // Optimized pagination with cursor-based approach
  async paginateWithCursor<T>(
    table: string,
    options: {
      limit?: number
      cursor?: string
      orderBy?: string
      orderDirection?: 'asc' | 'desc'
      filters?: Record<string, any>
      select?: string
    }
  ): Promise<{ data: T[]; nextCursor?: string; hasMore: boolean }> {
    const {
      limit = 50,
      cursor,
      orderBy = 'created_at',
      orderDirection = 'desc',
      filters = {},
      select = '*'
    } = options

    const startTime = Date.now()
    
    let query = this.supabase
      .from(table)
      .select(select)
      .order(orderBy, { ascending: orderDirection === 'asc' })
      .limit(limit + 1) // Get one extra to check if there are more

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        query = query.in(key, value)
      } else if (typeof value === 'object' && value.operator) {
        query = query.filter(key, value.operator, value.value)
      } else {
        query = query.eq(key, value)
      }
    })

    // Apply cursor
    if (cursor) {
      const operator = orderDirection === 'asc' ? 'gt' : 'lt'
      query = query.filter(orderBy, operator, cursor)
    }

    const { data, error } = await query
    
    const queryTime = Date.now() - startTime
    if (queryTime > this.slowQueryThreshold) {
      logger.warn('Slow query detected', {
        table,
        queryTime,
        options
      })
    }

    if (error) throw error

    const hasMore = data.length > limit
    const results = hasMore ? data.slice(0, -1) : data
    const nextCursor = hasMore ? results[results.length - 1][orderBy] : undefined

    return {
      data: results as T[],
      nextCursor,
      hasMore
    }
  }

  // Batch operations for better performance
  async batchInsert<T>(
    table: string,
    records: T[],
    batchSize = 1000
  ): Promise<void> {
    const batches = this.chunkArray(records, batchSize)
    
    for (const batch of batches) {
      const { error } = await this.supabase
        .from(table)
        .insert(batch)
      
      if (error) {
        logger.error('Batch insert error', { table, batchSize: batch.length, error })
        throw error
      }
    }
  }

  async batchUpdate<T>(
    table: string,
    updates: Array<{ id: string; data: Partial<T> }>,
    batchSize = 500
  ): Promise<void> {
    const batches = this.chunkArray(updates, batchSize)
    
    for (const batch of batches) {
      const promises = batch.map(({ id, data }) =>
        this.supabase
          .from(table)
          .update(data)
          .eq('id', id)
      )
      
      const results = await Promise.allSettled(promises)
      
      const failures = results.filter(result => result.status === 'rejected')
      if (failures.length > 0) {
        logger.error('Batch update failures', { 
          table, 
          failureCount: failures.length,
          totalCount: batch.length 
        })
      }
    }
  }

  // Optimized search with full-text search
  async fullTextSearch<T>(
    table: string,
    searchTerm: string,
    options: {
      columns?: string[]
      limit?: number
      filters?: Record<string, any>
    } = {}
  ): Promise<T[]> {
    const { columns = ['name', 'description'], limit = 50, filters = {} } = options
    
    // Use PostgreSQL full-text search
    let query = this.supabase
      .from(table)
      .select('*')
      .textSearch(columns.join(','), searchTerm, {
        type: 'websearch',
        config: 'english'
      })
      .limit(limit)

    // Apply additional filters
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value)
    })

    const { data, error } = await query
    
    if (error) throw error
    return data as T[]
  }

  // Connection pooling configuration
  configureConnectionPool() {
    // This would be configured at the Supabase client level
    return {
      poolSize: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      maxUses: 7500
    }
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }
}

// Database indexes for common queries
export const RECOMMENDED_INDEXES = `
-- Performance indexes for Xalesin ERP

-- Inventory items
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_tenant_status 
ON inventory_items(tenant_id, status) WHERE deleted_at IS NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_sku_tenant 
ON inventory_items(sku, tenant_id) WHERE deleted_at IS NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_category_tenant 
ON inventory_items(category_id, tenant_id) WHERE deleted_at IS NULL;

-- Stock movements
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_stock_movements_item_date 
ON stock_movements(item_id, movement_date DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_stock_movements_tenant_date 
ON stock_movements(tenant_id, movement_date DESC);

-- Financial transactions
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_financial_transactions_tenant_date 
ON financial_transactions(tenant_id, transaction_date DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_financial_transactions_account_date 
ON financial_transactions(account_id, transaction_date DESC);

-- Sales orders
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_sales_orders_tenant_status_date 
ON sales_orders(tenant_id, status, order_date DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_sales_orders_customer_date 
ON sales_orders(customer_id, order_date DESC);

-- Purchase orders
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_purchase_orders_tenant_status_date 
ON purchase_orders(tenant_id, status, order_date DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_purchase_orders_supplier_date 
ON purchase_orders(supplier_id, order_date DESC);

-- Audit logs
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_audit_logs_tenant_timestamp 
ON audit_logs(tenant_id, timestamp DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_audit_logs_user_timestamp 
ON audit_logs(user_id, timestamp DESC);

-- Full-text search indexes
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_search 
ON inventory_items USING gin(to_tsvector('english', name || ' ' || COALESCE(description, '')));

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_parties_search 
ON parties USING gin(to_tsvector('english', name || ' ' || COALESCE(email, '') || ' ' || COALESCE(phone, '')));

-- Composite indexes for common query patterns
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_tenant_category_status 
ON inventory_items(tenant_id, category_id, status) 
WHERE deleted_at IS NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_sales_orders_tenant_customer_status 
ON sales_orders(tenant_id, customer_id, status);

-- Partial indexes for active records
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_inventory_items_active 
ON inventory_items(tenant_id, updated_at DESC) 
WHERE status = 'active' AND deleted_at IS NULL;

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_parties_active 
ON parties(tenant_id, updated_at DESC) 
WHERE status = 'active' AND deleted_at IS NULL;
`
```

### 3. Frontend Performance Optimization
```typescript
// packages/ui/src/hooks/useVirtualization.ts
import { useMemo, useState, useEffect, useCallback } from 'react'

export interface VirtualizationOptions {
  itemHeight: number
  containerHeight: number
  overscan?: number
  items: any[]
}

export function useVirtualization({
  itemHeight,
  containerHeight,
  overscan = 5,
  items
}: VirtualizationOptions) {
  const [scrollTop, setScrollTop] = useState(0)
  
  const visibleRange = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length - 1
    )
    
    return {
      start: Math.max(0, startIndex - overscan),
      end: Math.min(items.length - 1, endIndex + overscan)
    }
  }, [scrollTop, itemHeight, containerHeight, overscan, items.length])
  
  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end + 1).map((item, index) => ({
      ...item,
      index: visibleRange.start + index
    }))
  }, [items, visibleRange])
  
  const totalHeight = items.length * itemHeight
  const offsetY = visibleRange.start * itemHeight
  
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }, [])
  
  return {
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll
  }
}

// packages/ui/src/components/VirtualizedList.tsx
import React from 'react'
import { useVirtualization } from '../hooks/useVirtualization'

interface VirtualizedListProps<T> {
  items: T[]
  itemHeight: number
  height: number
  renderItem: (item: T & { index: number }) => React.ReactNode
  className?: string
}

export function VirtualizedList<T>({
  items,
  itemHeight,
  height,
  renderItem,
  className
}: VirtualizedListProps<T>) {
  const { visibleItems, totalHeight, offsetY, handleScroll } = useVirtualization({
    items,
    itemHeight,
    containerHeight: height
  })
  
  return (
    <div
      className={className}
      style={{ height, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {visibleItems.map((item) => (
            <div key={item.index} style={{ height: itemHeight }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

### 4. Code Splitting and Lazy Loading
```typescript
// apps/web/src/utils/lazyImports.ts
import { lazy } from 'react'
import { ComponentType } from 'react'

// Lazy load components with retry logic
export function lazyWithRetry<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    let retries = 0
    const maxRetries = 3
    
    while (retries < maxRetries) {
      try {
        return await importFunc()
      } catch (error) {
        retries++
        if (retries === maxRetries) {
          throw error
        }
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * retries))
      }
    }
    
    throw new Error('Failed to load component after retries')
  })
}

// Preload components for better UX
export function preloadComponent(importFunc: () => Promise<any>) {
  const componentImport = importFunc()
  return componentImport
}

// Route-based code splitting
export const LazyRoutes = {
  Dashboard: lazyWithRetry(() => import('../pages/Dashboard')),
  Inventory: lazyWithRetry(() => import('../pages/Inventory')),
  InventoryList: lazyWithRetry(() => import('../pages/Inventory/InventoryList')),
  InventoryDetail: lazyWithRetry(() => import('../pages/Inventory/InventoryDetail')),
  Financial: lazyWithRetry(() => import('../pages/Financial')),
  Sales: lazyWithRetry(() => import('../pages/Sales')),
  Purchasing: lazyWithRetry(() => import('../pages/Purchasing')),
  Documents: lazyWithRetry(() => import('../pages/Documents')),
  Analytics: lazyWithRetry(() => import('../pages/Analytics')),
  Settings: lazyWithRetry(() => import('../pages/Settings'))
}

// Preload critical routes
export function preloadCriticalRoutes() {
  // Preload dashboard and inventory as they're most commonly accessed
  preloadComponent(() => import('../pages/Dashboard'))
  preloadComponent(() => import('../pages/Inventory/InventoryList'))
}
```

### 5. Bundle Optimization
```typescript
// apps/web/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@tamagui/core', '@tamagui/config'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'form-vendor': ['react-hook-form', 'zod'],
          
          // Feature chunks
          'inventory-chunk': [
            './src/pages/Inventory',
            './src/components/Inventory'
          ],
          'financial-chunk': [
            './src/pages/Financial',
            './src/components/Financial'
          ],
          'analytics-chunk': [
            './src/pages/Analytics',
            './src/components/Analytics'
          ]
        }
      }
    },
    
    chunkSizeWarningLimit: 1000
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, '../../packages/core/src'),
      '@ui': resolve(__dirname, '../../packages/ui/src')
    }
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@supabase/supabase-js'
    ]
  }
})
```

### 6. Real-time Performance Optimization
```typescript
// packages/core/src/realtime/OptimizedRealtimeClient.ts
import { RealtimeChannel, SupabaseClient } from '@supabase/supabase-js'
import { logger } from '../utils/logger'

export class OptimizedRealtimeClient {
  private channels = new Map<string, RealtimeChannel>()
  private subscriptions = new Map<string, Set<Function>>()
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000
  
  constructor(private supabase: SupabaseClient) {
    this.setupConnectionMonitoring()
  }

  subscribe(
    channelName: string,
    event: string,
    callback: Function,
    filter?: Record<string, any>
  ) {
    const subscriptionKey = `${channelName}:${event}`
    
    // Add callback to subscription set
    if (!this.subscriptions.has(subscriptionKey)) {
      this.subscriptions.set(subscriptionKey, new Set())
    }
    this.subscriptions.get(subscriptionKey)!.add(callback)
    
    // Create or reuse channel
    if (!this.channels.has(channelName)) {
      const channel = this.supabase.channel(channelName, {
        config: {
          broadcast: { self: false },
          presence: { key: '' }
        }
      })
      
      this.channels.set(channelName, channel)
      
      // Setup optimized event handling
      this.setupChannelEvents(channel, channelName)
      
      channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          logger.info('Realtime channel subscribed', { channelName })
          this.reconnectAttempts = 0
        } else if (status === 'CHANNEL_ERROR') {
          logger.error('Realtime channel error', { channelName })
          this.handleReconnection(channelName)
        }
      })
    }
    
    return () => this.unsubscribe(channelName, event, callback)
  }

  private setupChannelEvents(channel: RealtimeChannel, channelName: string) {
    // Batch events to reduce re-renders
    const eventBatch = new Map<string, any[]>()
    let batchTimeout: NodeJS.Timeout | null = null
    
    const processBatch = () => {
      for (const [event, payloads] of eventBatch) {
        const subscriptionKey = `${channelName}:${event}`
        const callbacks = this.subscriptions.get(subscriptionKey)
        
        if (callbacks) {
          // Process batched payloads
          callbacks.forEach(callback => {
            try {
              callback(payloads)
            } catch (error) {
              logger.error('Realtime callback error', { error, event })
            }
          })
        }
      }
      
      eventBatch.clear()
      batchTimeout = null
    }
    
    // Listen to all postgres changes
    channel.on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
      const event = payload.eventType
      
      if (!eventBatch.has(event)) {
        eventBatch.set(event, [])
      }
      eventBatch.get(event)!.push(payload)
      
      // Debounce batch processing
      if (batchTimeout) {
        clearTimeout(batchTimeout)
      }
      batchTimeout = setTimeout(processBatch, 50) // 50ms batch window
    })
  }

  private handleReconnection(channelName: string) {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      logger.error('Max reconnection attempts reached', { channelName })
      return
    }
    
    this.reconnectAttempts++
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1)
    
    setTimeout(() => {
      logger.info('Attempting to reconnect', { channelName, attempt: this.reconnectAttempts })
      
      const channel = this.channels.get(channelName)
      if (channel) {
        channel.unsubscribe()
        this.channels.delete(channelName)
        
        // Recreate subscriptions
        const relevantSubscriptions = Array.from(this.subscriptions.keys())
          .filter(key => key.startsWith(channelName))
        
        relevantSubscriptions.forEach(subscriptionKey => {
          const [, event] = subscriptionKey.split(':')
          const callbacks = this.subscriptions.get(subscriptionKey)
          
          if (callbacks) {
            callbacks.forEach(callback => {
              this.subscribe(channelName, event, callback)
            })
          }
        })
      }
    }, delay)
  }

  unsubscribe(channelName: string, event: string, callback: Function) {
    const subscriptionKey = `${channelName}:${event}`
    const callbacks = this.subscriptions.get(subscriptionKey)
    
    if (callbacks) {
      callbacks.delete(callback)
      
      // Remove channel if no more subscriptions
      if (callbacks.size === 0) {
        this.subscriptions.delete(subscriptionKey)
        
        const hasOtherSubscriptions = Array.from(this.subscriptions.keys())
          .some(key => key.startsWith(channelName))
        
        if (!hasOtherSubscriptions) {
          const channel = this.channels.get(channelName)
          if (channel) {
            channel.unsubscribe()
            this.channels.delete(channelName)
          }
        }
      }
    }
  }

  private setupConnectionMonitoring() {
    // Monitor connection health
    setInterval(() => {
      const activeChannels = this.channels.size
      const activeSubscriptions = this.subscriptions.size
      
      logger.debug('Realtime connection status', {
        activeChannels,
        activeSubscriptions,
        reconnectAttempts: this.reconnectAttempts
      })
    }, 30000) // Every 30 seconds
  }

  disconnect() {
    this.channels.forEach(channel => channel.unsubscribe())
    this.channels.clear()
    this.subscriptions.clear()
  }
}
```

### 7. Rate Limiting and Throttling
```typescript
// packages/core/src/utils/rateLimiter.ts
export class RateLimiter {
  private requests = new Map<string, number[]>()
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}
  
  isAllowed(key: string): boolean {
    const now = Date.now()
    const windowStart = now - this.windowMs
    
    // Get existing requests for this key
    const keyRequests = this.requests.get(key) || []
    
    // Filter out old requests
    const recentRequests = keyRequests.filter(time => time > windowStart)
    
    // Check if under limit
    if (recentRequests.length < this.maxRequests) {
      recentRequests.push(now)
      this.requests.set(key, recentRequests)
      return true
    }
    
    return false
  }
  
  getRemainingRequests(key: string): number {
    const now = Date.now()
    const windowStart = now - this.windowMs
    const keyRequests = this.requests.get(key) || []
    const recentRequests = keyRequests.filter(time => time > windowStart)
    
    return Math.max(0, this.maxRequests - recentRequests.length)
  }
  
  getResetTime(key: string): number {
    const keyRequests = this.requests.get(key) || []
    if (keyRequests.length === 0) return 0
    
    const oldestRequest = Math.min(...keyRequests)
    return oldestRequest + this.windowMs
  }
}

// API rate limiting middleware
export function createRateLimitMiddleware(
  maxRequests: number,
  windowMs: number,
  keyGenerator?: (req: any) => string
) {
  const limiter = new RateLimiter(maxRequests, windowMs)
  
  return (req: any, res: any, next: any) => {
    const key = keyGenerator ? keyGenerator(req) : req.ip
    
    if (!limiter.isAllowed(key)) {
      const resetTime = limiter.getResetTime(key)
      
      res.status(429).json({
        error: 'Too Many Requests',
        retryAfter: Math.ceil((resetTime - Date.now()) / 1000)
      })
      return
    }
    
    // Add rate limit headers
    res.set({
      'X-RateLimit-Limit': maxRequests,
      'X-RateLimit-Remaining': limiter.getRemainingRequests(key),
      'X-RateLimit-Reset': Math.ceil(limiter.getResetTime(key) / 1000)
    })
    
    next()
  }
}
```

### 8. Performance Monitoring
```typescript
// packages/core/src/monitoring/PerformanceMonitor.ts
export class PerformanceMonitor {
  private metrics = new Map<string, number[]>()
  private observers = new Map<string, PerformanceObserver>()
  
  constructor() {
    this.setupWebVitalsMonitoring()
    this.setupResourceMonitoring()
    this.setupNavigationMonitoring()
  }
  
  // Track custom metrics
  trackMetric(name: string, value: number, tags?: Record<string, string>) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }
    
    this.metrics.get(name)!.push(value)
    
    // Send to analytics service
    this.sendMetric(name, value, tags)
  }
  
  // Track function execution time
  trackExecution<T>(name: string, fn: () => T): T {
    const start = performance.now()
    const result = fn()
    const duration = performance.now() - start
    
    this.trackMetric(`execution.${name}`, duration)
    
    return result
  }
  
  // Track async function execution time
  async trackAsyncExecution<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now()
    const result = await fn()
    const duration = performance.now() - start
    
    this.trackMetric(`execution.${name}`, duration)
    
    return result
  }
  
  private setupWebVitalsMonitoring() {
    // Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(metric => this.trackMetric('web-vitals.cls', metric.value))
        getFID(metric => this.trackMetric('web-vitals.fid', metric.value))
        getFCP(metric => this.trackMetric('web-vitals.fcp', metric.value))
        getLCP(metric => this.trackMetric('web-vitals.lcp', metric.value))
        getTTFB(metric => this.trackMetric('web-vitals.ttfb', metric.value))
      })
    }
  }
  
  private setupResourceMonitoring() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
            
            this.trackMetric('resource.duration', resourceEntry.duration, {
              type: resourceEntry.initiatorType,
              name: resourceEntry.name
            })
            
            this.trackMetric('resource.size', resourceEntry.transferSize || 0, {
              type: resourceEntry.initiatorType,
              name: resourceEntry.name
            })
          }
        })
      })
      
      observer.observe({ entryTypes: ['resource'] })
      this.observers.set('resource', observer)
    }
  }
  
  private setupNavigationMonitoring() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            
            this.trackMetric('navigation.domContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart)
            this.trackMetric('navigation.load', navEntry.loadEventEnd - navEntry.loadEventStart)
            this.trackMetric('navigation.domInteractive', navEntry.domInteractive - navEntry.navigationStart)
          }
        })
      })
      
      observer.observe({ entryTypes: ['navigation'] })
      this.observers.set('navigation', observer)
    }
  }
  
  private sendMetric(name: string, value: number, tags?: Record<string, string>) {
    // Send to your analytics service (e.g., DataDog, New Relic, etc.)
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, value, tags, timestamp: Date.now() })
      }).catch(error => {
        console.warn('Failed to send metric:', error)
      })
    }
  }
  
  getMetricSummary(name: string) {
    const values = this.metrics.get(name) || []
    if (values.length === 0) return null
    
    const sorted = [...values].sort((a, b) => a - b)
    
    return {
      count: values.length,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      avg: values.reduce((sum, val) => sum + val, 0) / values.length,
      p50: sorted[Math.floor(sorted.length * 0.5)],
      p95: sorted[Math.floor(sorted.length * 0.95)],
      p99: sorted[Math.floor(sorted.length * 0.99)]
    }
  }
  
  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers.clear()
    this.metrics.clear()
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor()

// Performance decorator
export function Performance(name?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const metricName = name || `${target.constructor.name}.${propertyKey}`
    
    descriptor.value = function (...args: any[]) {
      return performanceMonitor.trackExecution(metricName, () => {
        return originalMethod.apply(this, args)
      })
    }
    
    return descriptor
  }
}

export function AsyncPerformance(name?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const metricName = name || `${target.constructor.name}.${propertyKey}`
    
    descriptor.value = async function (...args: any[]) {
      return performanceMonitor.trackAsyncExecution(metricName, () => {
        return originalMethod.apply(this, args)
      })
    }
    
    return descriptor
  }
}
```

## ✅ Acceptance Criteria
- [ ] Page load times under 2 seconds
- [ ] API response times under 500ms (95th percentile)
- [ ] Database query optimization implemented
- [ ] Caching strategy reduces database load by 70%
- [ ] Bundle sizes optimized (main bundle < 500KB)
- [ ] Virtual scrolling for large lists
- [ ] Code splitting reduces initial load
- [ ] Real-time features optimized for scale
- [ ] Rate limiting prevents abuse
- [ ] Performance monitoring dashboard
- [ ] Auto-scaling responds to load
- [ ] Memory usage stays under limits

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer
- Task 4: Universal UI Components
- Task 5: Web Application Development
- Task 6: Mobile Application Development
- Task 9: Deployment & DevOps Infrastructure

## 📊 Estimated Effort
- **Complexity**: Very High
- **Time Estimate**: 45-55 hours
- **Priority**: High (Performance Critical)

## 📝 Notes
- Implement progressive enhancement
- Use service workers for caching
- Optimize images and assets
- Implement lazy loading everywhere
- Monitor Core Web Vitals
- Setup performance budgets
- Use CDN for static assets
- Implement database query optimization
- Setup horizontal scaling
- Monitor and alert on performance regressions

## 🎯 Success Metrics
- **Page Load Time**: < 2 seconds (95th percentile)
- **API Response Time**: < 500ms (95th percentile)
- **Database Query Time**: < 100ms (average)
- **Bundle Size**: Main bundle < 500KB gzipped
- **Cache Hit Rate**: > 80%
- **Core Web Vitals**: All metrics in "Good" range
- **Memory Usage**: < 100MB per user session
- **CPU Usage**: < 70% under normal load
- **Throughput**: > 1000 requests/second
- **Concurrent Users**: Support 10,000+ users

## 🚀 Performance Optimization Areas
- **Frontend**: Bundle optimization, lazy loading, virtualization
- **Backend**: Query optimization, caching, connection pooling
- **Database**: Indexing, query optimization, read replicas
- **Network**: CDN, compression, HTTP/2, caching headers
- **Real-time**: Connection pooling, event batching, reconnection logic
- **Mobile**: Native optimizations, offline caching, background sync
- **Infrastructure**: Auto-scaling, load balancing, resource optimization