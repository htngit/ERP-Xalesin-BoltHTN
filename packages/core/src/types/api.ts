/**
 * API types for Xalesin ERP
 * Request and response interfaces for all API endpoints
 */

import {
  PaginationParams,
  PaginationResult,
  SearchParams,
  ApiResponse,
  ValidationResult,
  Money,
  Quantity,
  DateRange,
  SortParams,
  FilterParams
} from './business'

import {
  Tenant,
  User,
  Party,
  Address,
  Contact,
  Item,
  ItemCategory,
  ItemPrice,
  PriceList,
  Warehouse,
  SalesOrder,
  SalesOrderItem,
  PurchaseOrder,
  PurchaseOrderItem,
  Invoice,
  InvoiceItem,
  Payment,
  PaymentAllocation,
  Account,
  JournalEntry,
  JournalEntryLine,
  Tax,
  Currency,
  ExchangeRate
} from './database'

/**
 * Authentication API types
 */
export interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface LoginResponse {
  user: User
  tenant: Tenant
  accessToken: string
  refreshToken: string
  expiresIn: number
  permissions: string[]
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
  confirmPassword: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

/**
 * User API types
 */
export interface CreateUserRequest {
  email: string
  firstName: string
  lastName: string
  role: string
  permissions?: string[]
  phone?: string
  sendInvitation?: boolean
}

export interface UpdateUserRequest {
  firstName?: string
  lastName?: string
  phone?: string
  role?: string
  permissions?: string[]
  isActive?: boolean
  preferences?: any
}

export interface UserListRequest extends SearchParams {
  role?: string
  isActive?: boolean
}

export interface UserListResponse extends PaginationResult<User> {}

/**
 * Tenant API types
 */
export interface CreateTenantRequest {
  name: string
  slug: string
  domain?: string
  subscriptionPlan: string
  settings: any
}

export interface UpdateTenantRequest {
  name?: string
  domain?: string
  logoUrl?: string
  settings?: any
  subscriptionPlan?: string
  subscriptionStatus?: string
}

/**
 * Party API types
 */
export interface CreatePartyRequest {
  type: 'customer' | 'supplier' | 'employee' | 'lead'
  name: string
  displayName?: string
  email?: string
  phone?: string
  website?: string
  taxNumber?: string
  currency?: string
  paymentTerms?: string
  creditLimit?: number
  notes?: string
  tags?: string[]
  customFields?: Record<string, any>
  addresses?: Omit<Address, 'id' | 'party_id' | 'created_at' | 'updated_at' | 'tenant_id'>[]
  contacts?: Omit<Contact, 'id' | 'party_id' | 'created_at' | 'updated_at' | 'tenant_id'>[]
}

export interface UpdatePartyRequest {
  name?: string
  displayName?: string
  email?: string
  phone?: string
  website?: string
  taxNumber?: string
  currency?: string
  paymentTerms?: string
  creditLimit?: number
  isActive?: boolean
  notes?: string
  tags?: string[]
  customFields?: Record<string, any>
}

export interface PartyListRequest extends SearchParams {
  type?: string
  isActive?: boolean
  tags?: string[]
}

export interface PartyListResponse extends PaginationResult<Party & {
  addresses?: Address[]
  contacts?: Contact[]
  totalSales?: Money
  totalPurchases?: Money
  outstandingAmount?: Money
}> {}

export interface PartyDetailResponse extends Party {
  addresses: Address[]
  contacts: Contact[]
  recentTransactions: {
    id: string
    type: 'sales' | 'purchase' | 'payment'
    number: string
    date: string
    amount: Money
    status: string
  }[]
  summary: {
    totalSales: Money
    totalPurchases: Money
    outstandingAmount: Money
    lastTransactionDate?: string
  }
}

/**
 * Item API types
 */
export interface CreateItemRequest {
  type: 'product' | 'service' | 'bundle'
  name: string
  description?: string
  sku: string
  barcode?: string
  categoryId?: string
  brand?: string
  unitOfMeasure: string
  weight?: number
  dimensions?: any
  isActive?: boolean
  isSellable?: boolean
  isPurchasable?: boolean
  isTrackable?: boolean
  trackSerialNumbers?: boolean
  trackBatches?: boolean
  reorderLevel?: number
  reorderQuantity?: number
  leadTimeDays?: number
  shelfLifeDays?: number
  images?: string[]
  customFields?: Record<string, any>
  prices?: {
    priceListId?: string
    currency: string
    price: number
    cost: number
    validFrom: string
    validTo?: string
  }[]
}

export interface UpdateItemRequest {
  name?: string
  description?: string
  barcode?: string
  categoryId?: string
  brand?: string
  unitOfMeasure?: string
  weight?: number
  dimensions?: any
  isActive?: boolean
  isSellable?: boolean
  isPurchasable?: boolean
  isTrackable?: boolean
  trackSerialNumbers?: boolean
  trackBatches?: boolean
  reorderLevel?: number
  reorderQuantity?: number
  leadTimeDays?: number
  shelfLifeDays?: number
  images?: string[]
  customFields?: Record<string, any>
}

export interface ItemListRequest extends SearchParams {
  type?: string
  categoryId?: string
  isActive?: boolean
  isSellable?: boolean
  isPurchasable?: boolean
  isTrackable?: boolean
  lowStock?: boolean
}

export interface ItemListResponse extends PaginationResult<Item & {
  category?: ItemCategory
  currentStock?: Quantity
  averageCost?: Money
  lastSaleDate?: string
  lastPurchaseDate?: string
}> {}

export interface ItemDetailResponse extends Item {
  category?: ItemCategory
  prices: ItemPrice[]
  stockLevels: {
    warehouseId: string
    warehouseName: string
    availableQuantity: Quantity
    reservedQuantity: Quantity
    onOrderQuantity: Quantity
    averageCost: Money
    totalValue: Money
  }[]
  recentTransactions: {
    id: string
    type: 'sale' | 'purchase' | 'adjustment'
    date: string
    quantity: Quantity
    unitPrice?: Money
    reference?: string
  }[]
}

/**
 * Sales Order API types
 */
export interface CreateSalesOrderRequest {
  customerId: string
  orderDate: string
  deliveryDate?: string
  currency?: string
  paymentTerms?: string
  notes?: string
  billingAddressId?: string
  shippingAddressId?: string
  warehouseId?: string
  salesPersonId?: string
  items: {
    itemId: string
    description?: string
    quantity: number
    unitPrice: number
    discountPercent?: number
    taxPercent?: number
    warehouseId?: string
    deliveryDate?: string
  }[]
}

export interface UpdateSalesOrderRequest {
  customerId?: string
  orderDate?: string
  deliveryDate?: string
  currency?: string
  paymentTerms?: string
  notes?: string
  billingAddressId?: string
  shippingAddressId?: string
  warehouseId?: string
  salesPersonId?: string
  status?: string
}

export interface SalesOrderItemRequest {
  itemId: string
  description?: string
  quantity: number
  unitPrice: number
  discountPercent?: number
  taxPercent?: number
  warehouseId?: string
  deliveryDate?: string
}

export interface SalesOrderListRequest extends SearchParams {
  customerId?: string
  status?: string
  salesPersonId?: string
  dateFrom?: string
  dateTo?: string
}

export interface SalesOrderListResponse extends PaginationResult<SalesOrder & {
  customer: Party
  itemCount: number
  totalQuantity: number
}> {}

export interface SalesOrderDetailResponse extends SalesOrder {
  customer: Party
  billingAddress?: Address
  shippingAddress?: Address
  warehouse?: Warehouse
  salesPerson?: User
  items: (SalesOrderItem & {
    item: Item
    warehouse?: Warehouse
  })[]
  relatedDocuments: {
    type: 'invoice' | 'shipment' | 'payment'
    id: string
    number: string
    date: string
    amount?: Money
    status: string
  }[]
}

/**
 * Purchase Order API types
 */
export interface CreatePurchaseOrderRequest {
  supplierId: string
  orderDate: string
  expectedDate?: string
  currency?: string
  paymentTerms?: string
  notes?: string
  billingAddressId?: string
  shippingAddressId?: string
  warehouseId?: string
  buyerId?: string
  items: {
    itemId: string
    description?: string
    quantity: number
    unitPrice: number
    discountPercent?: number
    taxPercent?: number
    warehouseId?: string
    expectedDate?: string
  }[]
}

export interface UpdatePurchaseOrderRequest {
  supplierId?: string
  orderDate?: string
  expectedDate?: string
  currency?: string
  paymentTerms?: string
  notes?: string
  billingAddressId?: string
  shippingAddressId?: string
  warehouseId?: string
  buyerId?: string
  status?: string
}

export interface PurchaseOrderItemRequest {
  itemId: string
  description?: string
  quantity: number
  unitPrice: number
  discountPercent?: number
  taxPercent?: number
  warehouseId?: string
  expectedDate?: string
}

export interface PurchaseOrderListRequest extends SearchParams {
  supplierId?: string
  status?: string
  buyerId?: string
  dateFrom?: string
  dateTo?: string
}

export interface PurchaseOrderListResponse extends PaginationResult<PurchaseOrder & {
  supplier: Party
  itemCount: number
  totalQuantity: number
}> {}

export interface PurchaseOrderDetailResponse extends PurchaseOrder {
  supplier: Party
  billingAddress?: Address
  shippingAddress?: Address
  warehouse?: Warehouse
  buyer?: User
  items: (PurchaseOrderItem & {
    item: Item
    warehouse?: Warehouse
  })[]
  relatedDocuments: {
    type: 'invoice' | 'receipt' | 'payment'
    id: string
    number: string
    date: string
    amount?: Money
    status: string
  }[]
}

/**
 * Invoice API types
 */
export interface CreateInvoiceRequest {
  type: 'sales' | 'purchase'
  partyId: string
  invoiceDate: string
  dueDate: string
  currency?: string
  paymentTerms?: string
  notes?: string
  referenceType?: string
  referenceId?: string
  billingAddressId?: string
  items: {
    itemId?: string
    description: string
    quantity: number
    unitPrice: number
    discountPercent?: number
    taxPercent?: number
  }[]
}

export interface UpdateInvoiceRequest {
  partyId?: string
  invoiceDate?: string
  dueDate?: string
  currency?: string
  paymentTerms?: string
  notes?: string
  status?: string
  billingAddressId?: string
}

export interface InvoiceItemRequest {
  itemId?: string
  description: string
  quantity: number
  unitPrice: number
  discountPercent?: number
  taxPercent?: number
}

export interface InvoiceListRequest extends SearchParams {
  type?: 'sales' | 'purchase'
  partyId?: string
  status?: string
  dateFrom?: string
  dateTo?: string
  dueDateFrom?: string
  dueDateTo?: string
  overdue?: boolean
}

export interface InvoiceListResponse extends PaginationResult<Invoice & {
  party: Party
  itemCount: number
  daysPastDue?: number
}> {}

export interface InvoiceDetailResponse extends Invoice {
  party: Party
  billingAddress?: Address
  items: (InvoiceItem & {
    item?: Item
  })[]
  payments: (PaymentAllocation & {
    payment: Payment
  })[]
  relatedDocuments: {
    type: 'order' | 'shipment' | 'payment'
    id: string
    number: string
    date: string
    amount?: Money
    status: string
  }[]
}

/**
 * Payment API types
 */
export interface CreatePaymentRequest {
  type: 'received' | 'paid'
  partyId: string
  amount: number
  currency?: string
  paymentDate: string
  paymentMethod: string
  referenceNumber?: string
  notes?: string
  accountId?: string
  allocations?: {
    invoiceId: string
    allocatedAmount: number
  }[]
}

export interface UpdatePaymentRequest {
  partyId?: string
  amount?: number
  currency?: string
  paymentDate?: string
  paymentMethod?: string
  referenceNumber?: string
  notes?: string
  accountId?: string
}

export interface PaymentListRequest extends SearchParams {
  type?: 'received' | 'paid'
  partyId?: string
  paymentMethod?: string
  dateFrom?: string
  dateTo?: string
  accountId?: string
}

export interface PaymentListResponse extends PaginationResult<Payment & {
  party: Party
  account?: Account
  allocatedAmount: Money
  unallocatedAmount: Money
}> {}

export interface PaymentDetailResponse extends Payment {
  party: Party
  account?: Account
  allocations: (PaymentAllocation & {
    invoice: Invoice
  })[]
}

/**
 * Inventory API types
 */
export interface StockAdjustmentRequest {
  warehouseId: string
  reason: string
  items: {
    itemId: string
    currentQuantity: number
    newQuantity: number
    unitCost?: number
    batchNumber?: string
    serialNumbers?: string[]
    expiryDate?: string
    notes?: string
  }[]
}

export interface StockTransferRequest {
  fromWarehouseId: string
  toWarehouseId: string
  transferDate: string
  notes?: string
  items: {
    itemId: string
    quantity: number
    batchNumber?: string
    serialNumbers?: string[]
    expiryDate?: string
  }[]
}

export interface StockLevelRequest extends SearchParams {
  warehouseId?: string
  itemId?: string
  categoryId?: string
  lowStock?: boolean
  zeroStock?: boolean
  negativeStock?: boolean
}

export interface StockLevelResponse extends PaginationResult<{
  item: Item
  warehouse: Warehouse
  availableQuantity: Quantity
  reservedQuantity: Quantity
  onOrderQuantity: Quantity
  totalQuantity: Quantity
  averageCost: Money
  totalValue: Money
  lastMovementDate?: string
  reorderLevel?: Quantity
  reorderQuantity?: Quantity
  isLowStock: boolean
}> {}

/**
 * Reporting API types
 */
export interface ReportRequest {
  reportType: string
  period?: DateRange
  filters?: Record<string, any>
  groupBy?: string[]
  sortBy?: SortParams[]
  format?: 'json' | 'pdf' | 'excel' | 'csv'
  includeDetails?: boolean
}

export interface SalesReportRequest extends ReportRequest {
  customerId?: string
  salesPersonId?: string
  itemId?: string
  categoryId?: string
}

export interface PurchaseReportRequest extends ReportRequest {
  supplierId?: string
  buyerId?: string
  itemId?: string
  categoryId?: string
}

export interface InventoryReportRequest extends ReportRequest {
  warehouseId?: string
  itemId?: string
  categoryId?: string
  movementType?: string
}

export interface FinancialReportRequest extends ReportRequest {
  accountId?: string
  accountType?: string
}

/**
 * Dashboard API types
 */
export interface DashboardRequest {
  period?: DateRange
  widgets?: string[]
}

export interface DashboardResponse {
  summary: {
    totalSales: Money
    totalPurchases: Money
    totalInvoices: number
    totalPayments: Money
    outstandingAmount: Money
    lowStockItems: number
  }
  charts: {
    salesTrend: {
      date: string
      amount: Money
    }[]
    topCustomers: {
      customerId: string
      customerName: string
      amount: Money
    }[]
    topItems: {
      itemId: string
      itemName: string
      quantity: Quantity
      amount: Money
    }[]
  }
  alerts: {
    type: 'warning' | 'error' | 'info'
    message: string
    count?: number
    url?: string
  }[]
}

/**
 * Search API types
 */
export interface GlobalSearchRequest {
  query: string
  types?: string[]
  limit?: number
}

export interface GlobalSearchResponse {
  results: {
    type: string
    id: string
    title: string
    subtitle?: string
    description?: string
    url: string
    score: number
  }[]
  total: number
  took: number
}

/**
 * File upload API types
 */
export interface FileUploadRequest {
  file: File | Buffer
  fileName: string
  fileType: string
  referenceType?: string
  referenceId?: string
  description?: string
}

export interface FileUploadResponse {
  id: string
  fileName: string
  fileSize: number
  fileType: string
  fileUrl: string
  thumbnailUrl?: string
}

/**
 * Bulk operation API types
 */
export interface BulkOperationRequest {
  operation: 'create' | 'update' | 'delete'
  entityType: string
  data: any[]
  options?: {
    validateOnly?: boolean
    skipValidation?: boolean
    batchSize?: number
  }
}

export interface BulkOperationResponse {
  jobId: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
  totalRecords: number
  processedRecords: number
  successRecords: number
  errorRecords: number
  errors: {
    index: number
    field?: string
    message: string
  }[]
  result?: any[]
}

/**
 * Export API types
 */
export interface ExportRequest {
  entityType: string
  filters?: FilterParams[]
  fields?: string[]
  format: 'excel' | 'csv' | 'json'
  includeHeaders?: boolean
  dateFormat?: string
  numberFormat?: string
}

export interface ExportResponse {
  jobId: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
  downloadUrl?: string
  expiresAt?: string
  recordCount?: number
}

/**
 * Import API types
 */
export interface ImportRequest {
  entityType: string
  file: File | Buffer
  format: 'excel' | 'csv' | 'json'
  mapping: Record<string, string>
  options: {
    skipFirstRow?: boolean
    updateExisting?: boolean
    validateOnly?: boolean
    batchSize?: number
  }
}

export interface ImportResponse {
  jobId: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
  totalRows: number
  processedRows: number
  successRows: number
  errorRows: number
  warnings: number
  errors: {
    row: number
    field?: string
    message: string
  }[]
  previewData?: any[]
}

/**
 * Generic API response types
 */
export type CreateResponse<T> = ApiResponse<T>
export type UpdateResponse<T> = ApiResponse<T>
export type DeleteResponse = ApiResponse<{ deleted: boolean }>
export type ListResponse<T> = ApiResponse<PaginationResult<T>>
export type DetailResponse<T> = ApiResponse<T>
export type ValidationResponse = ApiResponse<ValidationResult>