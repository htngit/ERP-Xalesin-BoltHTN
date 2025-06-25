/**
 * Business logic types for Xalesin ERP
 * Domain models and business operations
 */

import { Decimal } from 'decimal.js'

/**
 * Common business types
 */
export type DocumentStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'cancelled'
export type PaymentStatus = 'pending' | 'paid' | 'partial' | 'overdue' | 'cancelled'
export type ShippingStatus = 'pending' | 'shipped' | 'delivered' | 'returned'
export type Priority = 'low' | 'medium' | 'high' | 'urgent'

/**
 * Money type for precise financial calculations
 */
export interface Money {
  amount: Decimal
  currency: string
}

/**
 * Quantity type for inventory management
 */
export interface Quantity {
  value: Decimal
  unit: string
}

/**
 * Date range type
 */
export interface DateRange {
  start: Date
  end: Date
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number
  limit: number
  offset?: number
}

/**
 * Pagination result
 */
export interface PaginationResult<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * Sort parameters
 */
export interface SortParams {
  field: string
  direction: 'asc' | 'desc'
}

/**
 * Filter parameters
 */
export interface FilterParams {
  field: string
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'like' | 'ilike'
  value: any
}

/**
 * Search parameters
 */
export interface SearchParams {
  query?: string
  filters?: FilterParams[]
  sort?: SortParams[]
  pagination?: PaginationParams
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  meta?: {
    timestamp: string
    requestId: string
    version: string
  }
}

/**
 * Business validation result
 */
export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
  warnings: ValidationWarning[]
}

export interface ValidationError {
  field: string
  code: string
  message: string
  value?: any
}

export interface ValidationWarning {
  field: string
  code: string
  message: string
  value?: any
}

/**
 * Business rule result
 */
export interface BusinessRuleResult {
  passed: boolean
  rule: string
  message?: string
  data?: any
}

/**
 * Audit trail entry
 */
export interface AuditEntry {
  id: string
  entityType: string
  entityId: string
  action: 'create' | 'update' | 'delete' | 'view'
  userId?: string
  timestamp: Date
  changes?: {
    field: string
    oldValue: any
    newValue: any
  }[]
  metadata?: Record<string, any>
}

/**
 * Document number generation
 */
export interface DocumentNumberConfig {
  prefix: string
  suffix?: string
  length: number
  separator: string
  includeYear: boolean
  includeMonth: boolean
  resetPeriod: 'never' | 'yearly' | 'monthly'
}

/**
 * Tax calculation
 */
export interface TaxCalculation {
  taxableAmount: Money
  taxRate: Decimal
  taxAmount: Money
  totalAmount: Money
  breakdown: TaxBreakdown[]
}

export interface TaxBreakdown {
  taxId: string
  taxName: string
  taxRate: Decimal
  taxableAmount: Money
  taxAmount: Money
}

/**
 * Discount calculation
 */
export interface DiscountCalculation {
  originalAmount: Money
  discountType: 'percentage' | 'fixed'
  discountValue: Decimal
  discountAmount: Money
  finalAmount: Money
}

/**
 * Inventory movement
 */
export interface InventoryMovement {
  itemId: string
  warehouseId: string
  movementType: 'in' | 'out' | 'transfer' | 'adjustment'
  quantity: Quantity
  unitCost?: Money
  totalCost?: Money
  batchNumber?: string
  serialNumbers?: string[]
  expiryDate?: Date
  reason: string
  referenceType?: string
  referenceId?: string
}

/**
 * Stock level
 */
export interface StockLevel {
  itemId: string
  warehouseId: string
  availableQuantity: Quantity
  reservedQuantity: Quantity
  onOrderQuantity: Quantity
  totalQuantity: Quantity
  averageCost: Money
  totalValue: Money
  lastMovementDate?: Date
  reorderLevel?: Quantity
  reorderQuantity?: Quantity
}

/**
 * Price calculation
 */
export interface PriceCalculation {
  basePrice: Money
  discounts: DiscountCalculation[]
  taxes: TaxCalculation
  finalPrice: Money
  margin?: {
    amount: Money
    percentage: Decimal
  }
}

/**
 * Sales metrics
 */
export interface SalesMetrics {
  period: DateRange
  totalRevenue: Money
  totalOrders: number
  averageOrderValue: Money
  topCustomers: {
    customerId: string
    customerName: string
    revenue: Money
    orders: number
  }[]
  topItems: {
    itemId: string
    itemName: string
    quantity: Quantity
    revenue: Money
  }[]
  salesByPeriod: {
    date: Date
    revenue: Money
    orders: number
  }[]
}

/**
 * Purchase metrics
 */
export interface PurchaseMetrics {
  period: DateRange
  totalSpend: Money
  totalOrders: number
  averageOrderValue: Money
  topSuppliers: {
    supplierId: string
    supplierName: string
    spend: Money
    orders: number
  }[]
  topItems: {
    itemId: string
    itemName: string
    quantity: Quantity
    spend: Money
  }[]
  purchasesByPeriod: {
    date: Date
    spend: Money
    orders: number
  }[]
}

/**
 * Inventory metrics
 */
export interface InventoryMetrics {
  totalValue: Money
  totalItems: number
  lowStockItems: {
    itemId: string
    itemName: string
    currentStock: Quantity
    reorderLevel: Quantity
  }[]
  expiringSoon: {
    itemId: string
    itemName: string
    batchNumber: string
    expiryDate: Date
    quantity: Quantity
  }[]
  fastMovingItems: {
    itemId: string
    itemName: string
    turnoverRate: Decimal
    averageStock: Quantity
  }[]
  slowMovingItems: {
    itemId: string
    itemName: string
    turnoverRate: Decimal
    averageStock: Quantity
    lastMovementDate: Date
  }[]
}

/**
 * Financial metrics
 */
export interface FinancialMetrics {
  period: DateRange
  revenue: Money
  expenses: Money
  grossProfit: Money
  netProfit: Money
  grossMargin: Decimal
  netMargin: Decimal
  accountsReceivable: Money
  accountsPayable: Money
  cashFlow: Money
  workingCapital: Money
}

/**
 * Dashboard widget data
 */
export interface DashboardWidget {
  id: string
  type: 'metric' | 'chart' | 'table' | 'list'
  title: string
  size: 'small' | 'medium' | 'large'
  position: {
    x: number
    y: number
    width: number
    height: number
  }
  data: any
  config: Record<string, any>
  refreshInterval?: number
  lastUpdated?: Date
}

/**
 * Report parameters
 */
export interface ReportParams {
  reportType: string
  period?: DateRange
  filters?: Record<string, any>
  groupBy?: string[]
  sortBy?: SortParams[]
  format: 'pdf' | 'excel' | 'csv' | 'json'
  includeDetails: boolean
}

/**
 * Export parameters
 */
export interface ExportParams {
  entityType: string
  filters?: FilterParams[]
  fields?: string[]
  format: 'excel' | 'csv' | 'json'
  includeHeaders: boolean
  dateFormat?: string
  numberFormat?: string
}

/**
 * Import parameters
 */
export interface ImportParams {
  entityType: string
  file: File | Buffer
  format: 'excel' | 'csv' | 'json'
  mapping: Record<string, string>
  options: {
    skipFirstRow: boolean
    updateExisting: boolean
    validateOnly: boolean
    batchSize: number
  }
}

/**
 * Import result
 */
export interface ImportResult {
  totalRows: number
  successRows: number
  errorRows: number
  warnings: number
  errors: {
    row: number
    field?: string
    message: string
  }[]
  data?: any[]
}

/**
 * Workflow step
 */
export interface WorkflowStep {
  id: string
  name: string
  type: 'approval' | 'notification' | 'action' | 'condition'
  order: number
  config: Record<string, any>
  assignees?: string[]
  conditions?: {
    field: string
    operator: string
    value: any
  }[]
}

/**
 * Workflow instance
 */
export interface WorkflowInstance {
  id: string
  workflowId: string
  entityType: string
  entityId: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  currentStep: number
  steps: WorkflowStepInstance[]
  startedAt: Date
  completedAt?: Date
  startedBy: string
}

export interface WorkflowStepInstance {
  stepId: string
  status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'rejected'
  assignedTo?: string
  startedAt?: Date
  completedAt?: Date
  comments?: string
  data?: Record<string, any>
}

/**
 * Notification types
 */
export interface NotificationTemplate {
  id: string
  name: string
  type: 'email' | 'sms' | 'push' | 'in_app'
  subject: string
  body: string
  variables: string[]
  conditions?: {
    field: string
    operator: string
    value: any
  }[]
}

export interface NotificationRequest {
  templateId: string
  recipients: string[]
  data: Record<string, any>
  priority: Priority
  scheduledAt?: Date
}

/**
 * Integration types
 */
export interface IntegrationConfig {
  id: string
  name: string
  type: 'api' | 'webhook' | 'file' | 'database'
  isActive: boolean
  config: Record<string, any>
  mapping: Record<string, string>
  schedule?: {
    frequency: 'manual' | 'hourly' | 'daily' | 'weekly' | 'monthly'
    time?: string
    timezone?: string
  }
}

export interface IntegrationLog {
  id: string
  integrationId: string
  status: 'success' | 'error' | 'warning'
  message: string
  data?: any
  startedAt: Date
  completedAt?: Date
  recordsProcessed?: number
  recordsSuccess?: number
  recordsError?: number
}

/**
 * Custom field types
 */
export interface CustomField {
  id: string
  entityType: string
  name: string
  label: string
  type: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multiselect' | 'textarea'
  isRequired: boolean
  defaultValue?: any
  options?: string[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
  order: number
  isActive: boolean
}

export interface CustomFieldValue {
  fieldId: string
  entityId: string
  value: any
}

/**
 * System configuration
 */
export interface SystemConfig {
  key: string
  value: any
  type: 'string' | 'number' | 'boolean' | 'json'
  category: string
  description?: string
  isEditable: boolean
  isPublic: boolean
}

/**
 * Feature flag
 */
export interface FeatureFlag {
  key: string
  name: string
  description?: string
  isEnabled: boolean
  rolloutPercentage: number
  conditions?: {
    field: string
    operator: string
    value: any
  }[]
  startDate?: Date
  endDate?: Date
}

/**
 * API rate limit
 */
export interface RateLimit {
  key: string
  limit: number
  window: number // seconds
  current: number
  resetAt: Date
}

/**
 * Cache entry
 */
export interface CacheEntry<T = any> {
  key: string
  value: T
  ttl: number // seconds
  createdAt: Date
  accessedAt: Date
  hitCount: number
}

/**
 * Background job
 */
export interface BackgroundJob {
  id: string
  type: string
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
  priority: Priority
  data: any
  result?: any
  error?: string
  attempts: number
  maxAttempts: number
  createdAt: Date
  startedAt?: Date
  completedAt?: Date
  scheduledAt?: Date
}

/**
 * Health check result
 */
export interface HealthCheck {
  service: string
  status: 'healthy' | 'unhealthy' | 'degraded'
  message?: string
  details?: Record<string, any>
  timestamp: Date
  responseTime: number
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  endpoint: string
  method: string
  responseTime: number
  statusCode: number
  timestamp: Date
  userId?: string
  tenantId?: string
  userAgent?: string
  ipAddress?: string
}