/**
 * Database configuration for Xalesin ERP
 * Supabase connection settings and database constants
 */

export const DATABASE_CONFIG = {
  // Supabase connection settings
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  },
  
  // Database schema names
  schemas: {
    public: 'public',
    auth: 'auth',
    storage: 'storage',
  },
  
  // Table names
  tables: {
    // Core ERP tables
    tenants: 'tenants',
    users: 'users',
    user_profiles: 'user_profiles',
    
    // Financial Management
    currencies: 'currencies',
    exchange_rates: 'exchange_rates',
    tax_rates: 'tax_rates',
    
    // Document Management
    document_types: 'document_types',
    document_sequences: 'document_sequences',
    documents: 'documents',
    
    // Party Management
    parties: 'parties',
    addresses: 'addresses',
    
    // Inventory Management
    warehouses: 'warehouses',
    locations: 'locations',
    product_categories: 'product_categories',
    items: 'items',
    batches: 'batches',
    inventory_movements: 'inventory_movements',
    movement_lines: 'movement_lines',
    
    // Sales & CRM
    customers: 'customers',
    quotations: 'quotations',
    sales_orders: 'sales_orders',
    invoices: 'invoices',
    
    // Purchasing
    suppliers: 'suppliers',
    purchase_orders: 'purchase_orders',
    receipts: 'receipts',
    bills: 'bills',
  },
  
  // RLS (Row Level Security) policies
  rls: {
    enabled: process.env.NODE_ENV === 'production',
    tenantIsolation: true,
    roleBasedAccess: true,
  },
  
  // Connection pool settings
  pool: {
    min: 2,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },
  
  // Query settings
  query: {
    timeout: 30000,
    retries: 3,
    retryDelay: 1000,
  },
  
  // Realtime settings
  realtime: {
    enabled: true,
    heartbeatIntervalMs: 30000,
    reconnectAfterMs: 1000,
  },
  
  // Storage settings
  storage: {
    buckets: {
      documents: 'documents',
      images: 'images',
      exports: 'exports',
      imports: 'imports',
    },
    maxFileSize: 50 * 1024 * 1024, // 50MB
    allowedMimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ],
  },
} as const

// Type definitions for database configuration
export type DatabaseConfig = typeof DATABASE_CONFIG
export type TableNames = typeof DATABASE_CONFIG.tables
export type SchemaNames = typeof DATABASE_CONFIG.schemas

// Environment validation
export const validateDatabaseConfig = () => {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ]
  
  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    )
  }
  
  return true
}

// Database connection status
export const getDatabaseStatus = () => {
  return {
    configured: Boolean(
      DATABASE_CONFIG.supabase.url && DATABASE_CONFIG.supabase.anonKey
    ),
    url: DATABASE_CONFIG.supabase.url,
    environment: process.env.NODE_ENV || 'development',
    rlsEnabled: DATABASE_CONFIG.rls.enabled,
  }
}