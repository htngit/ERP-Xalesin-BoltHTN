// Database types for the ERP system
export interface Database {
  public: {
    Tables: {
      warehouses: {
        Row: {
          id: string;
          name: string;
          address: string | null;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          address?: string | null;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          address?: string | null;
          description?: string | null;
          created_at?: string;
        };
      };
      locations: {
        Row: {
          id: string;
          warehouse_id: string;
          name: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          warehouse_id: string;
          name: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          warehouse_id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
        };
      };
      product_categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
        };
      };
      batches: {
        Row: {
          id: string;
          item_id: string;
          batch_number: string;
          production_date: string | null;
          expiry_date: string | null;
          quantity: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          item_id: string;
          batch_number: string;
          production_date?: string | null;
          expiry_date?: string | null;
          quantity?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          item_id?: string;
          batch_number?: string;
          production_date?: string | null;
          expiry_date?: string | null;
          quantity?: number;
          created_at?: string;
        };
      };
      items: {
        Row: {
          id: string;
          sku: string;
          name: string;
          category_id: string | null;
          is_stock_tracked: boolean;
          unit_price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          sku: string;
          name: string;
          category_id?: string | null;
          is_stock_tracked?: boolean;
          unit_price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          sku?: string;
          name?: string;
          category_id?: string | null;
          is_stock_tracked?: boolean;
          unit_price?: number;
          created_at?: string;
        };
      };
      movement_lines: {
        Row: {
          id: string;
          movement_id: string;
          item_id: string;
          quantity: number;
          location_id: string | null;
          batch_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          movement_id: string;
          item_id: string;
          quantity: number;
          location_id?: string | null;
          batch_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          movement_id?: string;
          item_id?: string;
          quantity?: number;
          location_id?: string | null;
          batch_id?: string | null;
          created_at?: string;
        };
      };
    };
  };
}

// Application types
export interface Warehouse {
  id: string;
  name: string;
  address?: string;
  description?: string;
  created_at: string;
}

export interface Location {
  id: string;
  warehouse_id: string;
  name: string;
  description?: string;
  created_at: string;
  warehouse?: Warehouse;
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface Item {
  id: string;
  sku: string;
  name: string;
  category_id?: string;
  is_stock_tracked: boolean;
  unit_price: number;
  created_at: string;
  category?: ProductCategory;
}

export interface Batch {
  id: string;
  item_id: string;
  batch_number: string;
  production_date?: string;
  expiry_date?: string;
  quantity: number;
  created_at: string;
  item?: Item;
}

export interface MovementLine {
  id: string;
  movement_id: string;
  item_id: string;
  quantity: number;
  location_id?: string;
  batch_id?: string;
  created_at: string;
  item?: Item;
  location?: Location;
  batch?: Batch;
}

export interface InventoryMovement {
  id: string;
  document_id?: string;
  movement_type: string;
  date: string;
  created_at: string;
  movement_lines?: MovementLine[];
}

// Form types
export interface InventoryAdjustmentForm {
  item_id: string;
  batch_id: string;
  location_id: string;
  quantity_change: number;
  movement_type: 'adjustment' | 'receipt' | 'issue';
  reference?: string;
  notes?: string;
}

export interface StockTransferForm {
  item_id: string;
  batch_id: string;
  from_location_id: string;
  to_location_id: string;
  quantity: number;
  reference?: string;
  notes?: string;
}