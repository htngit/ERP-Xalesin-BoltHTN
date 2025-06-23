/*
  # Seed initial warehouse and category data

  1. Sample Data
    - Default warehouse and locations
    - Basic product categories
    - Sample items with categories
    - Initial batches for inventory tracking

  2. Test Data
    - Realistic Indonesian business data
    - Proper relationships between tables
*/

-- Insert sample warehouses
INSERT INTO warehouses (name, address, description) VALUES
  ('Gudang Utama Jakarta', 'Jl. Industri Raya No. 123, Jakarta Timur', 'Gudang pusat distribusi Jakarta'),
  ('Gudang Surabaya', 'Jl. Rungkut Industri No. 45, Surabaya', 'Gudang cabang Surabaya'),
  ('Gudang Medan', 'Jl. Gatot Subroto No. 78, Medan', 'Gudang cabang Medan')
ON CONFLICT (name) DO NOTHING;

-- Insert sample locations for each warehouse
INSERT INTO locations (warehouse_id, name, description)
SELECT 
  w.id,
  loc.name,
  loc.description
FROM warehouses w
CROSS JOIN (
  VALUES 
    ('A-01-01', 'Rak A, Baris 1, Posisi 1'),
    ('A-01-02', 'Rak A, Baris 1, Posisi 2'),
    ('A-02-01', 'Rak A, Baris 2, Posisi 1'),
    ('B-01-01', 'Rak B, Baris 1, Posisi 1'),
    ('B-01-02', 'Rak B, Baris 1, Posisi 2'),
    ('C-01-01', 'Rak C, Baris 1, Posisi 1')
) AS loc(name, description)
ON CONFLICT (warehouse_id, name) DO NOTHING;

-- Insert product categories
INSERT INTO product_categories (name, description) VALUES
  ('Bahan Baku', 'Bahan mentah untuk produksi'),
  ('Produk Jadi', 'Barang siap jual kepada konsumen'),
  ('Bahan Penolong', 'Bahan pendukung proses produksi'),
  ('Spare Parts', 'Suku cadang mesin dan peralatan'),
  ('Kemasan', 'Material untuk pengemasan produk'),
  ('Alat Tulis Kantor', 'Perlengkapan administrasi kantor')
ON CONFLICT (name) DO NOTHING;

-- Update existing items with categories
DO $$
DECLARE
  cat_bahan_baku uuid;
  cat_produk_jadi uuid;
  cat_kemasan uuid;
BEGIN
  -- Get category IDs
  SELECT id INTO cat_bahan_baku FROM product_categories WHERE name = 'Bahan Baku';
  SELECT id INTO cat_produk_jadi FROM product_categories WHERE name = 'Produk Jadi';
  SELECT id INTO cat_kemasan FROM product_categories WHERE name = 'Kemasan';

  -- Update items if they exist, otherwise insert sample items
  IF EXISTS (SELECT 1 FROM items LIMIT 1) THEN
    -- Update existing items with random categories
    UPDATE items SET category_id = cat_bahan_baku WHERE category_id IS NULL AND random() < 0.4;
    UPDATE items SET category_id = cat_produk_jadi WHERE category_id IS NULL AND random() < 0.6;
    UPDATE items SET category_id = cat_kemasan WHERE category_id IS NULL;
  ELSE
    -- Insert sample items
    INSERT INTO items (sku, name, category_id, is_stock_tracked, unit_price) VALUES
      ('BK-001', 'Tepung Terigu Premium', cat_bahan_baku, true, 15000),
      ('BK-002', 'Gula Pasir Kristal', cat_bahan_baku, true, 12000),
      ('BK-003', 'Minyak Goreng Sawit', cat_bahan_baku, true, 18000),
      ('PJ-001', 'Roti Tawar Gandum', cat_produk_jadi, true, 8500),
      ('PJ-002', 'Kue Donat Coklat', cat_produk_jadi, true, 5000),
      ('PJ-003', 'Biskuit Marie', cat_produk_jadi, true, 12000),
      ('KM-001', 'Plastik Kemasan 500gr', cat_kemasan, true, 500),
      ('KM-002', 'Kardus Kemasan Sedang', cat_kemasan, true, 2500),
      ('KM-003', 'Label Produk Warna', cat_kemasan, true, 150)
    ON CONFLICT (sku) DO NOTHING;
  END IF;
END $$;

-- Create initial batches for items
INSERT INTO batches (item_id, batch_number, production_date, expiry_date, quantity)
SELECT 
  i.id,
  'BATCH-' || TO_CHAR(CURRENT_DATE, 'YYYYMM') || '-' || LPAD((ROW_NUMBER() OVER())::text, 3, '0'),
  CURRENT_DATE - INTERVAL '7 days',
  CASE 
    WHEN pc.name = 'Bahan Baku' THEN CURRENT_DATE + INTERVAL '6 months'
    WHEN pc.name = 'Produk Jadi' THEN CURRENT_DATE + INTERVAL '3 months'
    ELSE CURRENT_DATE + INTERVAL '1 year'
  END,
  FLOOR(RANDOM() * 1000 + 100)::numeric
FROM items i
LEFT JOIN product_categories pc ON i.category_id = pc.id
WHERE i.is_stock_tracked = true
ON CONFLICT (item_id, batch_number) DO NOTHING;