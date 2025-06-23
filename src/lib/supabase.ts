import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string;
          name: string;
          npwp: string | null;
          address: string | null;
          phone: string | null;
          email: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          npwp?: string | null;
          address?: string | null;
          phone?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          npwp?: string | null;
          address?: string | null;
          phone?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      chart_of_accounts: {
        Row: {
          id: string;
          company_id: string;
          code: string;
          name: string;
          type: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
          parent_id: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_id: string;
          code: string;
          name: string;
          type: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
          parent_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string;
          code?: string;
          name?: string;
          type?: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
          parent_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      journal_entries: {
        Row: {
          id: string;
          company_id: string;
          entry_number: string;
          date: string;
          description: string;
          reference: string | null;
          total_debit: number;
          total_credit: number;
          status: 'DRAFT' | 'POSTED' | 'CANCELLED';
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          company_id: string;
          entry_number: string;
          date: string;
          description: string;
          reference?: string | null;
          total_debit: number;
          total_credit: number;
          status?: 'DRAFT' | 'POSTED' | 'CANCELLED';
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          company_id?: string;
          entry_number?: string;
          date?: string;
          description?: string;
          reference?: string | null;
          total_debit?: number;
          total_credit?: number;
          status?: 'DRAFT' | 'POSTED' | 'CANCELLED';
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      journal_entry_lines: {
        Row: {
          id: string;
          journal_entry_id: string;
          account_id: string;
          description: string;
          debit: number;
          credit: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          journal_entry_id: string;
          account_id: string;
          description: string;
          debit: number;
          credit: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          journal_entry_id?: string;
          account_id?: string;
          description?: string;
          debit?: number;
          credit?: number;
          created_at?: string;
        };
      };
    };
  };
};