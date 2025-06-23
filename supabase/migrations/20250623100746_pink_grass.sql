/*
  # Create warehouse management tables

  1. New Tables
    - `warehouses`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `address` (text)
      - `description` (text, nullable)
      - `created_at` (timestamp)
    
    - `locations`
      - `id` (uuid, primary key)
      - `warehouse_id` (uuid, foreign key)
      - `name` (text)
      - `description` (text, nullable)
      - `created_at` (timestamp)
    
    - `product_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text, nullable)
      - `created_at` (timestamp)
    
    - `batches`
      - `id` (uuid, primary key)
      - `item_id` (uuid, foreign key)
      - `batch_number` (text)
      - `production_date` (date, nullable)
      - `expiry_date` (date, nullable)
      - `quantity` (numeric, default 0)
      - `created_at` (timestamp)

  2. Table Modifications
    - Add `category_id` to `items` table
    - Add `location_id` and `batch_id` to `movement_lines` table
    - Remove `warehouse_id` from `movement_lines` (replaced by location_id)

  3. Indexes and Constraints
    - Foreign key relationships
    - Unique constraints where appropriate
    - Performance indexes
*/

-- Create warehouses table
CREATE TABLE IF NOT EXISTS warehouses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  address text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create locations table
CREATE TABLE IF NOT EXISTS locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  warehouse_id uuid NOT NULL,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT locations_warehouse_id_fkey FOREIGN KEY (warehouse_id) REFERENCES warehouses(id) ON DELETE CASCADE,
  CONSTRAINT locations_warehouse_name_unique UNIQUE (warehouse_id, name)
);

-- Create product_categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create batches table
CREATE TABLE IF NOT EXISTS batches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id uuid NOT NULL,
  batch_number text NOT NULL,
  production_date date,
  expiry_date date,
  quantity numeric DEFAULT 0 CHECK (quantity >= 0),
  created_at timestamptz DEFAULT now(),
  CONSTRAINT batches_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE,
  CONSTRAINT batches_item_batch_unique UNIQUE (item_id, batch_number)
);

-- Add category_id to items table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'items' AND column_name = 'category_id'
  ) THEN
    ALTER TABLE items ADD COLUMN category_id uuid;
    ALTER TABLE items ADD CONSTRAINT items_category_id_fkey 
      FOREIGN KEY (category_id) REFERENCES product_categories(id);
  END IF;
END $$;

-- Update movement_lines table structure
DO $$
BEGIN
  -- Add location_id column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'movement_lines' AND column_name = 'location_id'
  ) THEN
    ALTER TABLE movement_lines ADD COLUMN location_id uuid;
    ALTER TABLE movement_lines ADD CONSTRAINT movement_lines_location_id_fkey 
      FOREIGN KEY (location_id) REFERENCES locations(id);
  END IF;

  -- Add batch_id column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'movement_lines' AND column_name = 'batch_id'
  ) THEN
    ALTER TABLE movement_lines ADD COLUMN batch_id uuid;
    ALTER TABLE movement_lines ADD CONSTRAINT movement_lines_batch_id_fkey 
      FOREIGN KEY (batch_id) REFERENCES batches(id);
  END IF;

  -- Remove warehouse_id column if it exists (replaced by location_id)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'movement_lines' AND column_name = 'warehouse_id'
  ) THEN
    ALTER TABLE movement_lines DROP COLUMN warehouse_id;
  END IF;
END $$;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_locations_warehouse_id ON locations(warehouse_id);
CREATE INDEX IF NOT EXISTS idx_batches_item_id ON batches(item_id);
CREATE INDEX IF NOT EXISTS idx_batches_expiry_date ON batches(expiry_date);
CREATE INDEX IF NOT EXISTS idx_items_category_id ON items(category_id);
CREATE INDEX IF NOT EXISTS idx_movement_lines_location_id ON movement_lines(location_id);
CREATE INDEX IF NOT EXISTS idx_movement_lines_batch_id ON movement_lines(batch_id);