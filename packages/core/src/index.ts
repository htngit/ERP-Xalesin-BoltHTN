/**
 * @fileoverview Core package entry point - exports all shared business logic
 * @author Xalesin Team
 */

// API modules
export * from './api';

// React hooks
export * from './hooks';

// Utilities
export * from './utils';

// Types
export * from './types';

// Constants
export * from './constants';

// Validation schemas
export * from './validation';

// Supabase client
export { supabase } from './lib/supabase';