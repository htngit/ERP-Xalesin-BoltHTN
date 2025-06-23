import { supabase } from '../supabase';
import type { 
  Warehouse, 
  Location, 
  ProductCategory, 
  Item, 
  Batch, 
  InventoryMovement,
  InventoryAdjustmentForm,
  StockTransferForm 
} from '../types';

// Warehouse operations
export const warehouseApi = {
  // Get all warehouses
  async getWarehouses(): Promise<Warehouse[]> {
    const { data, error } = await supabase
      .from('warehouses')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  // Create warehouse
  async createWarehouse(warehouse: Omit<Warehouse, 'id' | 'created_at'>): Promise<Warehouse> {
    const { data, error } = await supabase
      .from('warehouses')
      .insert(warehouse)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update warehouse
  async updateWarehouse(id: string, updates: Partial<Warehouse>): Promise<Warehouse> {
    const { data, error } = await supabase
      .from('warehouses')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete warehouse
  async deleteWarehouse(id: string): Promise<void> {
    const { error } = await supabase
      .from('warehouses')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Location operations
export const locationApi = {
  // Get locations by warehouse
  async getLocationsByWarehouse(warehouseId: string): Promise<Location[]> {
    const { data, error } = await supabase
      .from('locations')
      .select(`
        *,
        warehouse:warehouses(*)
      `)
      .eq('warehouse_id', warehouseId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  // Get all locations
  async getAllLocations(): Promise<Location[]> {
    const { data, error } = await supabase
      .from('locations')
      .select(`
        *,
        warehouse:warehouses(*)
      `)
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  // Create location
  async createLocation(location: Omit<Location, 'id' | 'created_at'>): Promise<Location> {
    const { data, error } = await supabase
      .from('locations')
      .insert(location)
      .select(`
        *,
        warehouse:warehouses(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update location
  async updateLocation(id: string, updates: Partial<Location>): Promise<Location> {
    const { data, error } = await supabase
      .from('locations')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        warehouse:warehouses(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete location
  async deleteLocation(id: string): Promise<void> {
    const { error } = await supabase
      .from('locations')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Product category operations
export const categoryApi = {
  // Get all categories
  async getCategories(): Promise<ProductCategory[]> {
    const { data, error } = await supabase
      .from('product_categories')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  // Create category
  async createCategory(category: Omit<ProductCategory, 'id' | 'created_at'>): Promise<ProductCategory> {
    const { data, error } = await supabase
      .from('product_categories')
      .insert(category)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update category
  async updateCategory(id: string, updates: Partial<ProductCategory>): Promise<ProductCategory> {
    const { data, error } = await supabase
      .from('product_categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete category
  async deleteCategory(id: string): Promise<void> {
    const { error } = await supabase
      .from('product_categories')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Item operations
export const itemApi = {
  // Get all items
  async getItems(): Promise<Item[]> {
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:product_categories(*)
      `)
      .order('sku');
    
    if (error) throw error;
    return data || [];
  },

  // Create item
  async createItem(item: Omit<Item, 'id' | 'created_at'>): Promise<Item> {
    const { data, error } = await supabase
      .from('items')
      .insert(item)
      .select(`
        *,
        category:product_categories(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update item
  async updateItem(id: string, updates: Partial<Item>): Promise<Item> {
    const { data, error } = await supabase
      .from('items')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        category:product_categories(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete item
  async deleteItem(id: string): Promise<void> {
    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Batch operations
export const batchApi = {
  // Get batches by item
  async getBatchesByItem(itemId: string): Promise<Batch[]> {
    const { data, error } = await supabase
      .from('batches')
      .select(`
        *,
        item:items(*)
      `)
      .eq('item_id', itemId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get all batches
  async getAllBatches(): Promise<Batch[]> {
    const { data, error } = await supabase
      .from('batches')
      .select(`
        *,
        item:items(
          *,
          category:product_categories(*)
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Create batch
  async createBatch(batch: Omit<Batch, 'id' | 'created_at'>): Promise<Batch> {
    const { data, error } = await supabase
      .from('batches')
      .insert(batch)
      .select(`
        *,
        item:items(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update batch
  async updateBatch(id: string, updates: Partial<Batch>): Promise<Batch> {
    const { data, error } = await supabase
      .from('batches')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        item:items(*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete batch
  async deleteBatch(id: string): Promise<void> {
    const { error } = await supabase
      .from('batches')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Inventory operations
export const inventoryApi = {
  // Get inventory movements
  async getInventoryMovements(): Promise<InventoryMovement[]> {
    const { data, error } = await supabase
      .from('inventory_movements')
      .select(`
        *,
        movement_lines(
          *,
          item:items(*),
          location:locations(
            *,
            warehouse:warehouses(*)
          ),
          batch:batches(*)
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Inventory adjustment
  async inventoryAdjustment(adjustment: InventoryAdjustmentForm): Promise<any> {
    const { data, error } = await supabase.functions.invoke('inventory-operations', {
      body: {
        action: 'inventory_adjustment',
        ...adjustment
      }
    });
    
    if (error) throw error;
    return data;
  },

  // Stock transfer
  async stockTransfer(transfer: StockTransferForm): Promise<any> {
    const { data, error } = await supabase.functions.invoke('inventory-operations', {
      body: {
        action: 'stock_transfer',
        ...transfer
      }
    });
    
    if (error) throw error;
    return data;
  },

  // Get stock levels
  async getStockLevels(): Promise<any[]> {
    const { data, error } = await supabase
      .from('batches')
      .select(`
        *,
        item:items(
          *,
          category:product_categories(*)
        )
      `)
      .gt('quantity', 0)
      .order('expiry_date');
    
    if (error) throw error;
    return data || [];
  }
};