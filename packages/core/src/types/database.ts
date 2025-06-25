/**
 * Database type definitions for Xalesin ERP
 * Generated from Supabase schema with additional business logic types
 */

import { Database as SupabaseDatabase } from '@supabase/supabase-js'

/**
 * Base entity interface that all database entities extend
 */
export interface BaseEntity {
  id: string
  created_at: string
  updated_at: string
  created_by?: string
  updated_by?: string
  tenant_id: string
}

/**
 * Tenant entity - Multi-tenancy support
 */
export interface Tenant extends BaseEntity {
  name: string
  slug: string
  domain?: string
  logo_url?: string
  settings: TenantSettings
  subscription_plan: 'free' | 'basic' | 'professional' | 'enterprise'
  subscription_status: 'active' | 'inactive' | 'suspended' | 'cancelled'
  trial_ends_at?: string
  is_active: boolean
}

export interface TenantSettings {
  currency: string
  timezone: string
  date_format: string
  number_format: string
  language: string
  fiscal_year_start: string
  tax_settings: {
    default_tax_rate: number
    tax_inclusive: boolean
    tax_number?: string
  }
  features: {
    inventory: boolean
    manufacturing: boolean
    projects: boolean
    hr: boolean
    accounting: boolean
    crm: boolean
  }
}

/**
 * User entity
 */
export interface User extends BaseEntity {
  email: string
  first_name: string
  last_name: string
  full_name: string
  avatar_url?: string
  phone?: string
  role: UserRole
  permissions: string[]
  is_active: boolean
  last_login_at?: string
  email_verified_at?: string
  preferences: UserPreferences
}

export type UserRole = 'super_admin' | 'admin' | 'manager' | 'employee' | 'viewer'

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: string
  timezone: string
  notifications: {
    email: boolean
    push: boolean
    in_app: boolean
  }
  dashboard_layout: any[]
}

/**
 * Party entity - Base for customers, suppliers, employees
 */
export interface Party extends BaseEntity {
  type: 'customer' | 'supplier' | 'employee' | 'lead'
  name: string
  display_name: string
  email?: string
  phone?: string
  website?: string
  tax_number?: string
  currency: string
  payment_terms?: string
  credit_limit?: number
  is_active: boolean
  notes?: string
  tags: string[]
  custom_fields: Record<string, any>
}

/**
 * Address entity
 */
export interface Address extends BaseEntity {
  party_id: string
  type: 'billing' | 'shipping' | 'office' | 'warehouse' | 'other'
  line1: string
  line2?: string
  city: string
  state?: string
  postal_code?: string
  country: string
  is_primary: boolean
}

/**
 * Contact entity
 */
export interface Contact extends BaseEntity {
  party_id: string
  first_name: string
  last_name: string
  full_name: string
  email?: string
  phone?: string
  position?: string
  department?: string
  is_primary: boolean
}

/**
 * Item entity - Products and services
 */
export interface Item extends BaseEntity {
  type: 'product' | 'service' | 'bundle'
  name: string
  description?: string
  sku: string
  barcode?: string
  category_id?: string
  brand?: string
  unit_of_measure: string
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
    unit: string
  }
  is_active: boolean
  is_sellable: boolean
  is_purchasable: boolean
  is_trackable: boolean
  track_serial_numbers: boolean
  track_batches: boolean
  reorder_level?: number
  reorder_quantity?: number
  lead_time_days?: number
  shelf_life_days?: number
  images: string[]
  custom_fields: Record<string, any>
}

/**
 * Item Category entity
 */
export interface ItemCategory extends BaseEntity {
  name: string
  description?: string
  parent_id?: string
  path: string
  level: number
  is_active: boolean
}

/**
 * Item Price entity
 */
export interface ItemPrice extends BaseEntity {
  item_id: string
  price_list_id?: string
  party_id?: string
  currency: string
  price: number
  cost: number
  margin_percent?: number
  valid_from: string
  valid_to?: string
  min_quantity: number
  is_active: boolean
}

/**
 * Price List entity
 */
export interface PriceList extends BaseEntity {
  name: string
  description?: string
  currency: string
  is_default: boolean
  is_active: boolean
  valid_from: string
  valid_to?: string
}

/**
 * Inventory Transaction entity
 */
export interface InventoryTransaction extends BaseEntity {
  item_id: string
  warehouse_id: string
  transaction_type: 'in' | 'out' | 'transfer' | 'adjustment'
  reference_type?: 'sales_order' | 'purchase_order' | 'stock_entry' | 'manufacturing'
  reference_id?: string
  quantity: number
  unit_cost?: number
  total_cost?: number
  batch_number?: string
  serial_numbers?: string[]
  expiry_date?: string
  notes?: string
}

/**
 * Warehouse entity
 */
export interface Warehouse extends BaseEntity {
  name: string
  code: string
  description?: string
  address_id?: string
  is_active: boolean
  is_default: boolean
}

/**
 * Sales Order entity
 */
export interface SalesOrder extends BaseEntity {
  number: string
  customer_id: string
  status: 'draft' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  order_date: string
  delivery_date?: string
  currency: string
  exchange_rate: number
  subtotal: number
  tax_amount: number
  discount_amount: number
  shipping_amount: number
  total_amount: number
  payment_terms?: string
  notes?: string
  billing_address_id?: string
  shipping_address_id?: string
  warehouse_id?: string
  sales_person_id?: string
}

/**
 * Sales Order Item entity
 */
export interface SalesOrderItem extends BaseEntity {
  sales_order_id: string
  item_id: string
  description?: string
  quantity: number
  unit_price: number
  discount_percent: number
  discount_amount: number
  tax_percent: number
  tax_amount: number
  line_total: number
  warehouse_id?: string
  delivery_date?: string
}

/**
 * Purchase Order entity
 */
export interface PurchaseOrder extends BaseEntity {
  number: string
  supplier_id: string
  status: 'draft' | 'confirmed' | 'received' | 'billed' | 'cancelled'
  order_date: string
  expected_date?: string
  currency: string
  exchange_rate: number
  subtotal: number
  tax_amount: number
  discount_amount: number
  shipping_amount: number
  total_amount: number
  payment_terms?: string
  notes?: string
  billing_address_id?: string
  shipping_address_id?: string
  warehouse_id?: string
  buyer_id?: string
}

/**
 * Purchase Order Item entity
 */
export interface PurchaseOrderItem extends BaseEntity {
  purchase_order_id: string
  item_id: string
  description?: string
  quantity: number
  unit_price: number
  discount_percent: number
  discount_amount: number
  tax_percent: number
  tax_amount: number
  line_total: number
  warehouse_id?: string
  expected_date?: string
}

/**
 * Invoice entity
 */
export interface Invoice extends BaseEntity {
  type: 'sales' | 'purchase'
  number: string
  party_id: string
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
  invoice_date: string
  due_date: string
  currency: string
  exchange_rate: number
  subtotal: number
  tax_amount: number
  discount_amount: number
  total_amount: number
  paid_amount: number
  outstanding_amount: number
  payment_terms?: string
  notes?: string
  reference_type?: 'sales_order' | 'purchase_order'
  reference_id?: string
  billing_address_id?: string
}

/**
 * Invoice Item entity
 */
export interface InvoiceItem extends BaseEntity {
  invoice_id: string
  item_id?: string
  description: string
  quantity: number
  unit_price: number
  discount_percent: number
  discount_amount: number
  tax_percent: number
  tax_amount: number
  line_total: number
}

/**
 * Payment entity
 */
export interface Payment extends BaseEntity {
  type: 'received' | 'paid'
  number: string
  party_id: string
  amount: number
  currency: string
  exchange_rate: number
  payment_date: string
  payment_method: 'cash' | 'bank_transfer' | 'credit_card' | 'check' | 'other'
  reference_number?: string
  notes?: string
  account_id?: string
}

/**
 * Payment Allocation entity
 */
export interface PaymentAllocation extends BaseEntity {
  payment_id: string
  invoice_id: string
  allocated_amount: number
}

/**
 * Account entity - Chart of Accounts
 */
export interface Account extends BaseEntity {
  code: string
  name: string
  type: 'asset' | 'liability' | 'equity' | 'income' | 'expense'
  subtype: string
  parent_id?: string
  path: string
  level: number
  is_group: boolean
  is_active: boolean
  description?: string
}

/**
 * Journal Entry entity
 */
export interface JournalEntry extends BaseEntity {
  number: string
  posting_date: string
  reference_type?: string
  reference_id?: string
  description: string
  total_debit: number
  total_credit: number
  is_posted: boolean
  posted_at?: string
  posted_by?: string
}

/**
 * Journal Entry Line entity
 */
export interface JournalEntryLine extends BaseEntity {
  journal_entry_id: string
  account_id: string
  description?: string
  debit_amount: number
  credit_amount: number
  party_id?: string
  reference_type?: string
  reference_id?: string
}

/**
 * Tax entity
 */
export interface Tax extends BaseEntity {
  name: string
  code: string
  rate: number
  type: 'percentage' | 'fixed'
  is_active: boolean
  description?: string
}

/**
 * Currency entity
 */
export interface Currency extends BaseEntity {
  code: string
  name: string
  symbol: string
  decimal_places: number
  is_active: boolean
}

/**
 * Exchange Rate entity
 */
export interface ExchangeRate extends BaseEntity {
  from_currency: string
  to_currency: string
  rate: number
  date: string
}

/**
 * Audit Log entity
 */
export interface AuditLog extends BaseEntity {
  table_name: string
  record_id: string
  action: 'insert' | 'update' | 'delete'
  old_values?: Record<string, any>
  new_values?: Record<string, any>
  user_id?: string
  ip_address?: string
  user_agent?: string
}

/**
 * File Attachment entity
 */
export interface FileAttachment extends BaseEntity {
  reference_type: string
  reference_id: string
  file_name: string
  file_size: number
  file_type: string
  file_url: string
  description?: string
  uploaded_by: string
}

/**
 * Notification entity
 */
export interface Notification extends BaseEntity {
  user_id: string
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  message: string
  is_read: boolean
  read_at?: string
  action_url?: string
  reference_type?: string
  reference_id?: string
}

/**
 * Database type combining all entities
 */
export interface Database {
  public: {
    Tables: {
      tenants: { Row: Tenant; Insert: Omit<Tenant, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Tenant, 'id' | 'created_at'>> }
      users: { Row: User; Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<User, 'id' | 'created_at'>> }
      parties: { Row: Party; Insert: Omit<Party, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Party, 'id' | 'created_at'>> }
      addresses: { Row: Address; Insert: Omit<Address, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Address, 'id' | 'created_at'>> }
      contacts: { Row: Contact; Insert: Omit<Contact, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Contact, 'id' | 'created_at'>> }
      items: { Row: Item; Insert: Omit<Item, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Item, 'id' | 'created_at'>> }
      item_categories: { Row: ItemCategory; Insert: Omit<ItemCategory, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<ItemCategory, 'id' | 'created_at'>> }
      item_prices: { Row: ItemPrice; Insert: Omit<ItemPrice, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<ItemPrice, 'id' | 'created_at'>> }
      price_lists: { Row: PriceList; Insert: Omit<PriceList, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<PriceList, 'id' | 'created_at'>> }
      inventory_transactions: { Row: InventoryTransaction; Insert: Omit<InventoryTransaction, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<InventoryTransaction, 'id' | 'created_at'>> }
      warehouses: { Row: Warehouse; Insert: Omit<Warehouse, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Warehouse, 'id' | 'created_at'>> }
      sales_orders: { Row: SalesOrder; Insert: Omit<SalesOrder, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<SalesOrder, 'id' | 'created_at'>> }
      sales_order_items: { Row: SalesOrderItem; Insert: Omit<SalesOrderItem, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<SalesOrderItem, 'id' | 'created_at'>> }
      purchase_orders: { Row: PurchaseOrder; Insert: Omit<PurchaseOrder, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<PurchaseOrder, 'id' | 'created_at'>> }
      purchase_order_items: { Row: PurchaseOrderItem; Insert: Omit<PurchaseOrderItem, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<PurchaseOrderItem, 'id' | 'created_at'>> }
      invoices: { Row: Invoice; Insert: Omit<Invoice, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Invoice, 'id' | 'created_at'>> }
      invoice_items: { Row: InvoiceItem; Insert: Omit<InvoiceItem, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<InvoiceItem, 'id' | 'created_at'>> }
      payments: { Row: Payment; Insert: Omit<Payment, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Payment, 'id' | 'created_at'>> }
      payment_allocations: { Row: PaymentAllocation; Insert: Omit<PaymentAllocation, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<PaymentAllocation, 'id' | 'created_at'>> }
      accounts: { Row: Account; Insert: Omit<Account, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Account, 'id' | 'created_at'>> }
      journal_entries: { Row: JournalEntry; Insert: Omit<JournalEntry, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<JournalEntry, 'id' | 'created_at'>> }
      journal_entry_lines: { Row: JournalEntryLine; Insert: Omit<JournalEntryLine, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<JournalEntryLine, 'id' | 'created_at'>> }
      taxes: { Row: Tax; Insert: Omit<Tax, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Tax, 'id' | 'created_at'>> }
      currencies: { Row: Currency; Insert: Omit<Currency, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Currency, 'id' | 'created_at'>> }
      exchange_rates: { Row: ExchangeRate; Insert: Omit<ExchangeRate, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<ExchangeRate, 'id' | 'created_at'>> }
      audit_logs: { Row: AuditLog; Insert: Omit<AuditLog, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<AuditLog, 'id' | 'created_at'>> }
      file_attachments: { Row: FileAttachment; Insert: Omit<FileAttachment, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<FileAttachment, 'id' | 'created_at'>> }
      notifications: { Row: Notification; Insert: Omit<Notification, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Omit<Notification, 'id' | 'created_at'>> }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}

/**
 * Helper types for database operations
 */
export type TableName = keyof Database['public']['Tables']
export type TableRow<T extends TableName> = Database['public']['Tables'][T]['Row']
export type TableInsert<T extends TableName> = Database['public']['Tables'][T]['Insert']
export type TableUpdate<T extends TableName> = Database['public']['Tables'][T]['Update']