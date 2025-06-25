/**
 * @fileoverview Supabase client configuration and initialization
 * @author Xalesin Team
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database';

// Environment variables with fallbacks for development
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL and Anon Key are required. Please check your environment variables.');
}

/**
 * Configured Supabase client instance
 * Provides type-safe database operations and authentication
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

/**
 * Helper function to check if Supabase is properly configured
 * @returns {boolean} True if Supabase is configured
 */
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

/**
 * Get the current user session
 * @returns {Promise} Current session or null
 */
export const getCurrentSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error getting session:', error);
    return null;
  }
  return session;
};

/**
 * Get the current user
 * @returns {Promise} Current user or null
 */
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error getting user:', error);
    return null;
  }
  return user;
};