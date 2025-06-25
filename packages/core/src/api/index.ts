/**
 * @fileoverview API functions for interacting with Supabase
 * @author Xalesin Team
 */

import { supabase } from '../lib/supabase';
import { apiUtils } from '../utils';
import type { 
  ApiResponse, 
  PaginatedResponse, 
  PaginationParams,
  Organization, 
  User,
  Database
} from '../types';

// Type helpers
type Tables = Database['public']['Tables'];
type OrganizationRow = Tables['organizations']['Row'];
type OrganizationInsert = Tables['organizations']['Insert'];
type OrganizationUpdate = Tables['organizations']['Update'];
type UserRow = Tables['users']['Row'];
type UserInsert = Tables['users']['Insert'];
type UserUpdate = Tables['users']['Update'];

// Organization API
export const organizationApi = {
  /**
   * Get all organizations with pagination
   */
  getAll: async (params: PaginationParams): Promise<PaginatedResponse<OrganizationRow>> => {
    try {
      const { page, limit, sortBy = 'created_at', sortOrder = 'desc' } = params;
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      const { data, error, count } = await supabase
        .from('organizations')
        .select('*', { count: 'exact' })
        .order(sortBy, { ascending: sortOrder === 'asc' })
        .range(from, to);

      if (error) throw error;

      const total = count || 0;
      const totalPages = Math.ceil(total / limit);

      return {
        data: data || [],
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      };
    } catch (error) {
      throw apiUtils.handleError(error);
    }
  },

  /**
   * Get organization by ID
   */
  getById: async (id: string): Promise<ApiResponse<OrganizationRow>> => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'Organization retrieved successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Get organization by slug
   */
  getBySlug: async (slug: string): Promise<ApiResponse<OrganizationRow>> => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'Organization retrieved successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Create new organization
   */
  create: async (organization: OrganizationInsert): Promise<ApiResponse<OrganizationRow>> => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .insert(organization)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'Organization created successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Update organization
   */
  update: async (id: string, updates: OrganizationUpdate): Promise<ApiResponse<OrganizationRow>> => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'Organization updated successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Delete organization
   */
  delete: async (id: string): Promise<ApiResponse<null>> => {
    try {
      const { error } = await supabase
        .from('organizations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      return apiUtils.createResponse(null, null, 'Organization deleted successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },
};

// User API
export const userApi = {
  /**
   * Get all users with pagination
   */
  getAll: async (params: PaginationParams & { organizationId?: string }): Promise<PaginatedResponse<UserRow>> => {
    try {
      const { page, limit, sortBy = 'created_at', sortOrder = 'desc', organizationId } = params;
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      let query = supabase
        .from('users')
        .select('*', { count: 'exact' });

      if (organizationId) {
        query = query.eq('organization_id', organizationId);
      }

      const { data, error, count } = await query
        .order(sortBy, { ascending: sortOrder === 'asc' })
        .range(from, to);

      if (error) throw error;

      const total = count || 0;
      const totalPages = Math.ceil(total / limit);

      return {
        data: data || [],
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      };
    } catch (error) {
      throw apiUtils.handleError(error);
    }
  },

  /**
   * Get user by ID
   */
  getById: async (id: string): Promise<ApiResponse<UserRow>> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User retrieved successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Get user by email
   */
  getByEmail: async (email: string): Promise<ApiResponse<UserRow>> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User retrieved successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Create new user
   */
  create: async (user: UserInsert): Promise<ApiResponse<UserRow>> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert(user)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User created successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Update user
   */
  update: async (id: string, updates: UserUpdate): Promise<ApiResponse<UserRow>> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User updated successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Delete user
   */
  delete: async (id: string): Promise<ApiResponse<null>> => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

      if (error) throw error;

      return apiUtils.createResponse(null, null, 'User deleted successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Update user role
   */
  updateRole: async (id: string, role: string): Promise<ApiResponse<UserRow>> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ role, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User role updated successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },

  /**
   * Toggle user active status
   */
  toggleActive: async (id: string): Promise<ApiResponse<UserRow>> => {
    try {
      // First get current status
      const { data: currentUser, error: fetchError } = await supabase
        .from('users')
        .select('is_active')
        .eq('id', id)
        .single();

      if (fetchError) throw fetchError;

      // Toggle the status
      const { data, error } = await supabase
        .from('users')
        .update({ 
          is_active: !currentUser.is_active, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return apiUtils.createResponse(data, null, 'User status updated successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },
};

// Search API
export const searchApi = {
  /**
   * Search across multiple tables
   */
  global: async (query: string, options: { limit?: number; tables?: string[] } = {}) => {
    const { limit = 10, tables = ['organizations', 'users'] } = options;
    const results: any[] = [];

    try {
      // Search organizations
      if (tables.includes('organizations')) {
        const { data: orgs } = await supabase
          .from('organizations')
          .select('id, name, slug, description')
          .or(`name.ilike.%${query}%, description.ilike.%${query}%`)
          .limit(limit);

        if (orgs) {
          results.push(...orgs.map(org => ({ ...org, type: 'organization' })));
        }
      }

      // Search users
      if (tables.includes('users')) {
        const { data: users } = await supabase
          .from('users')
          .select('id, email, first_name, last_name')
          .or(`email.ilike.%${query}%, first_name.ilike.%${query}%, last_name.ilike.%${query}%`)
          .limit(limit);

        if (users) {
          results.push(...users.map(user => ({ ...user, type: 'user' })));
        }
      }

      return apiUtils.createResponse(results, null, 'Search completed successfully');
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(null, appError.message);
    }
  },
};

// Health check API
export const healthApi = {
  /**
   * Check database connection
   */
  check: async (): Promise<ApiResponse<{ status: string; timestamp: string }>> => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('count')
        .limit(1);

      if (error) throw error;

      return apiUtils.createResponse(
        { status: 'healthy', timestamp: new Date().toISOString() },
        null,
        'Database connection is healthy'
      );
    } catch (error) {
      const appError = apiUtils.handleError(error);
      return apiUtils.createResponse(
        { status: 'unhealthy', timestamp: new Date().toISOString() },
        appError.message
      );
    }
  },
};

// Export all APIs
export default {
  organization: organizationApi,
  user: userApi,
  search: searchApi,
  health: healthApi,
};