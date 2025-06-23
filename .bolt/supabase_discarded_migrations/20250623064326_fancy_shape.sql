/*
  # Indonesian Accounting System Database Schema

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text, company name)
      - `npwp` (text, tax identification number)
      - `address` (text, company address)
      - `phone` (text, company phone)
      - `email` (text, company email)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `chart_of_accounts`
      - `id` (uuid, primary key)
      - `company_id` (uuid, foreign key)
      - `code` (text, account code)
      - `name` (text, account name)
      - `type` (enum: ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE)
      - `parent_id` (uuid, self-referencing foreign key)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `journal_entries`
      - `id` (uuid, primary key)
      - `company_id` (uuid, foreign key)
      - `entry_number` (text, unique entry number)
      - `date` (date, transaction date)
      - `description` (text, entry description)
      - `reference` (text, reference number)
      - `total_debit` (numeric, total debit amount)
      - `total_credit` (numeric, total credit amount)
      - `status` (enum: DRAFT, POSTED, CANCELLED)
      - `created_by` (uuid, user id)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `journal_entry_lines`
      - `id` (uuid, primary key)
      - `journal_entry_id` (uuid, foreign key)
      - `account_id` (uuid, foreign key to chart_of_accounts)
      - `description` (text, line description)
      - `debit` (numeric, debit amount)
      - `credit` (numeric, credit amount)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own company data
    - Add policies for role-based access control

  3. Indexes
    - Create indexes for frequently queried columns
    - Create unique constraints where appropriate
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE account_type AS ENUM ('ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE');
CREATE TYPE journal_status AS ENUM ('DRAFT', 'POSTED', 'CANCELLED');

-- Companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  npwp text,
  address text,
  phone text,
  email text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Chart of Accounts table
CREATE TABLE IF NOT EXISTS chart_of_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  code text NOT NULL,
  name text NOT NULL,
  type account_type NOT NULL,
  parent_id uuid REFERENCES chart_of_accounts(id) ON DELETE SET NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(company_id, code)
);

-- Journal Entries table
CREATE TABLE IF NOT EXISTS journal_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  entry_number text NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  description text NOT NULL,
  reference text,
  total_debit numeric(15,2) DEFAULT 0,
  total_credit numeric(15,2) DEFAULT 0,
  status journal_status DEFAULT 'DRAFT',
  created_by uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(company_id, entry_number)
);

-- Journal Entry Lines table
CREATE TABLE IF NOT EXISTS journal_entry_lines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  journal_entry_id uuid NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
  account_id uuid NOT NULL REFERENCES chart_of_accounts(id) ON DELETE RESTRICT,
  description text NOT NULL,
  debit numeric(15,2) DEFAULT 0,
  credit numeric(15,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  CHECK (debit >= 0 AND credit >= 0),
  CHECK (NOT (debit > 0 AND credit > 0))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_company_id ON chart_of_accounts(company_id);
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_type ON chart_of_accounts(type);
CREATE INDEX IF NOT EXISTS idx_chart_of_accounts_parent_id ON chart_of_accounts(parent_id);
CREATE INDEX IF NOT EXISTS idx_journal_entries_company_id ON journal_entries(company_id);
CREATE INDEX IF NOT EXISTS idx_journal_entries_date ON journal_entries(date);
CREATE INDEX IF NOT EXISTS idx_journal_entries_status ON journal_entries(status);
CREATE INDEX IF NOT EXISTS idx_journal_entry_lines_journal_entry_id ON journal_entry_lines(journal_entry_id);
CREATE INDEX IF NOT EXISTS idx_journal_entry_lines_account_id ON journal_entry_lines(account_id);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE chart_of_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entry_lines ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Companies policies
CREATE POLICY "Users can read own company data"
  ON companies
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

CREATE POLICY "Users can update own company data"
  ON companies
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

-- Chart of Accounts policies
CREATE POLICY "Users can read company chart of accounts"
  ON chart_of_accounts
  FOR SELECT
  TO authenticated
  USING (company_id::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

CREATE POLICY "Users can manage company chart of accounts"
  ON chart_of_accounts
  FOR ALL
  TO authenticated
  USING (company_id::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

-- Journal Entries policies
CREATE POLICY "Users can read company journal entries"
  ON journal_entries
  FOR SELECT
  TO authenticated
  USING (company_id::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

CREATE POLICY "Users can manage company journal entries"
  ON journal_entries
  FOR ALL
  TO authenticated
  USING (company_id::text = ANY(
    SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
    FROM auth.users
    WHERE id = auth.uid()
  ));

-- Journal Entry Lines policies
CREATE POLICY "Users can read journal entry lines"
  ON journal_entry_lines
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM journal_entries je
    WHERE je.id = journal_entry_lines.journal_entry_id
    AND je.company_id::text = ANY(
      SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
      FROM auth.users
      WHERE id = auth.uid()
    )
  ));

CREATE POLICY "Users can manage journal entry lines"
  ON journal_entry_lines
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM journal_entries je
    WHERE je.id = journal_entry_lines.journal_entry_id
    AND je.company_id::text = ANY(
      SELECT jsonb_array_elements_text(raw_user_meta_data->'company_ids')
      FROM auth.users
      WHERE id = auth.uid()
    )
  ));

-- Create functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_chart_of_accounts_updated_at BEFORE UPDATE ON chart_of_accounts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_journal_entries_updated_at BEFORE UPDATE ON journal_entries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();