/*
  # Sample Data for Indonesian Accounting System

  1. Sample Company Data
    - Create a sample company with Indonesian business details

  2. Standard Indonesian Chart of Accounts
    - Asset accounts (1xxx series)
    - Liability accounts (2xxx series)  
    - Equity accounts (3xxx series)
    - Revenue accounts (4xxx series)
    - Expense accounts (5xxx series)

  3. Sample Journal Entries
    - Initial capital investment
    - Purchase transactions
    - Sales transactions
    - Operating expenses

  This data follows Indonesian accounting standards and provides a realistic starting point.
*/

-- Insert sample company
INSERT INTO companies (id, name, npwp, address, phone, email) VALUES 
(
  '550e8400-e29b-41d4-a716-446655440000',
  'PT Maju Bersama Indonesia',
  '01.234.567.8-901.000',
  'Jl. Sudirman No. 123, Jakarta Selatan 12190',
  '+62-21-1234567',
  'info@majubersama.co.id'
);

-- Insert standard Indonesian chart of accounts
-- ASSETS (1xxx)
INSERT INTO chart_of_accounts (company_id, code, name, type, is_active) VALUES
('550e8400-e29b-41d4-a716-446655440000', '1000', 'ASET', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1100', 'Kas dan Setara Kas', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1101', 'Kas', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1102', 'Bank BCA', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1103', 'Bank Mandiri', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1104', 'Bank BNI', 'ASSET', true),

('550e8400-e29b-41d4-a716-446655440000', '1200', 'Piutang', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1201', 'Piutang Dagang', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1202', 'Piutang Karyawan', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1203', 'Piutang Lain-lain', 'ASSET', true),

('550e8400-e29b-41d4-a716-446655440000', '1300', 'Persediaan', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1301', 'Persediaan Barang Dagangan', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1302', 'Persediaan Bahan Baku', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1303', 'Persediaan Barang Jadi', 'ASSET', true),

('550e8400-e29b-41d4-a716-446655440000', '1400', 'Aset Tetap', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1401', 'Tanah', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1402', 'Bangunan', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1403', 'Kendaraan', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1404', 'Peralatan Kantor', 'ASSET', true),
('550e8400-e29b-41d4-a716-446655440000', '1405', 'Peralatan Komputer', 'ASSET', true),

-- LIABILITIES (2xxx)
('550e8400-e29b-41d4-a716-446655440000', '2000', 'KEWAJIBAN', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2100', 'Kewajiban Lancar', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2101', 'Utang Dagang', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2102', 'Utang Gaji', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2103', 'Utang PPh 21', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2104', 'Utang PPN', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2105', 'Utang BPJS', 'LIABILITY', true),

('550e8400-e29b-41d4-a716-446655440000', '2200', 'Kewajiban Jangka Panjang', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2201', 'Utang Bank', 'LIABILITY', true),
('550e8400-e29b-41d4-a716-446655440000', '2202', 'Utang Sewa Guna Usaha', 'LIABILITY', true),

-- EQUITY (3xxx)
('550e8400-e29b-41d4-a716-446655440000', '3000', 'EKUITAS', 'EQUITY', true),
('550e8400-e29b-41d4-a716-446655440000', '3100', 'Modal Disetor', 'EQUITY', true),
('550e8400-e29b-41d4-a716-446655440000', '3200', 'Laba Ditahan', 'EQUITY', true),
('550e8400-e29b-41d4-a716-446655440000', '3300', 'Laba Tahun Berjalan', 'EQUITY', true),

-- REVENUE (4xxx)
('550e8400-e29b-41d4-a716-446655440000', '4000', 'PENDAPATAN', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4100', 'Pendapatan Operasional', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4101', 'Pendapatan Penjualan', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4102', 'Pendapatan Jasa', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4200', 'Pendapatan Non-Operasional', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4201', 'Pendapatan Bunga', 'REVENUE', true),
('550e8400-e29b-41d4-a716-446655440000', '4202', 'Pendapatan Lain-lain', 'REVENUE', true),

-- EXPENSES (5xxx)
('550e8400-e29b-41d4-a716-446655440000', '5000', 'BEBAN', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5100', 'Beban Operasional', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5101', 'Beban Gaji dan Tunjangan', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5102', 'Beban Sewa Kantor', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5103', 'Beban Listrik dan Air', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5104', 'Beban Telepon dan Internet', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5105', 'Beban Transportasi', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5106', 'Beban Supplies Kantor', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5107', 'Beban Pemasaran', 'EXPENSE', true),

('550e8400-e29b-41d4-a716-446655440000', '5200', 'Beban Non-Operasional', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5201', 'Beban Bunga', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5202', 'Beban Pajak', 'EXPENSE', true),
('550e8400-e29b-41d4-a716-446655440000', '5203', 'Beban Lain-lain', 'EXPENSE', true);

-- Sample journal entries
-- Entry 1: Initial capital investment
INSERT INTO journal_entries (
  id,
  company_id, 
  entry_number, 
  date, 
  description, 
  total_debit, 
  total_credit, 
  status,
  created_by
) VALUES (
  '660e8400-e29b-41d4-a716-446655440001',
  '550e8400-e29b-41d4-a716-446655440000',
  'JE-2024-001',
  '2024-01-01',
  'Setoran modal awal perusahaan',
  500000000,
  500000000,
  'POSTED',
  gen_random_uuid()
);

-- Entry 1 lines
INSERT INTO journal_entry_lines (journal_entry_id, account_id, description, debit, credit) VALUES
(
  '660e8400-e29b-41d4-a716-446655440001',
  (SELECT id FROM chart_of_accounts WHERE code = '1102' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Setoran modal ke Bank BCA',
  500000000,
  0
),
(
  '660e8400-e29b-41d4-a716-446655440001',
  (SELECT id FROM chart_of_accounts WHERE code = '3100' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Modal disetor pemegang saham',
  0,
  500000000
);

-- Entry 2: Purchase of office equipment
INSERT INTO journal_entries (
  id,
  company_id,
  entry_number,
  date,
  description,
  total_debit,
  total_credit,
  status,
  created_by
) VALUES (
  '660e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440000',
  'JE-2024-002',
  '2024-01-15',
  'Pembelian peralatan kantor',
  25000000,
  25000000,
  'POSTED',
  gen_random_uuid()
);

-- Entry 2 lines
INSERT INTO journal_entry_lines (journal_entry_id, account_id, description, debit, credit) VALUES
(
  '660e8400-e29b-41d4-a716-446655440002',
  (SELECT id FROM chart_of_accounts WHERE code = '1404' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Pembelian meja, kursi, dan lemari kantor',
  25000000,
  0
),
(
  '660e8400-e29b-41d4-a716-446655440002',
  (SELECT id FROM chart_of_accounts WHERE code = '1102' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Pembayaran via Bank BCA',
  0,
  25000000
);

-- Entry 3: Sales transaction
INSERT INTO journal_entries (
  id,
  company_id,
  entry_number,
  date,
  description,
  total_debit,
  total_credit,
  status,
  created_by
) VALUES (
  '660e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440000',
  'JE-2024-003',
  '2024-02-01',
  'Penjualan jasa konsultasi',
  55000000,
  55000000,
  'POSTED',
  gen_random_uuid()
);

-- Entry 3 lines
INSERT INTO journal_entry_lines (journal_entry_id, account_id, description, debit, credit) VALUES
(
  '660e8400-e29b-41d4-a716-446655440003',
  (SELECT id FROM chart_of_accounts WHERE code = '1201' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Piutang penjualan jasa PT ABC',
  50000000,
  0
),
(
  '660e8400-e29b-41d4-a716-446655440003',
  (SELECT id FROM chart_of_accounts WHERE code = '2104' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'PPN Keluaran 10%',
  5000000,
  0
),
(
  '660e8400-e29b-41d4-a716-446655440003',
  (SELECT id FROM chart_of_accounts WHERE code = '4102' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Pendapatan jasa konsultasi',
  0,
  50000000
),
(
  '660e8400-e29b-41d4-a716-446655440003',
  (SELECT id FROM chart_of_accounts WHERE code = '2104' AND company_id = '550e8400-e29b-41d4-a716-446655440000'),
  'Utang PPN yang harus disetor',
  0,
  5000000
);