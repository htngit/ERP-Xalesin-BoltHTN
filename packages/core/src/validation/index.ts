/**
 * @fileoverview Zod validation schemas for forms and API data
 * @author Xalesin Team
 */

import { z } from 'zod';
import { VALIDATION_RULES } from '../constants';

// Base schemas
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')
  .regex(VALIDATION_RULES.EMAIL_REGEX, 'Invalid email format');

export const passwordSchema = z
  .string()
  .min(VALIDATION_RULES.PASSWORD_MIN_LENGTH, `Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters`)
  .regex(
    VALIDATION_RULES.PASSWORD_REGEX,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  );

export const slugSchema = z
  .string()
  .min(1, 'Slug is required')
  .regex(VALIDATION_RULES.SLUG_REGEX, 'Slug must contain only lowercase letters, numbers, and hyphens');

export const phoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => !val || VALIDATION_RULES.PHONE_REGEX.test(val),
    'Please enter a valid phone number'
  );

// Authentication schemas
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  organizationName: z.string().min(1, 'Organization name is required'),
  organizationSlug: slugSchema,
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

// Organization schemas
export const organizationSchema = z.object({
  name: z.string().min(1, 'Organization name is required').max(100, 'Name is too long'),
  slug: slugSchema,
  description: z.string().max(500, 'Description is too long').optional(),
  settings: z.record(z.any()).optional(),
});

export const organizationUpdateSchema = organizationSchema.partial();

// User schemas
export const userSchema = z.object({
  email: emailSchema,
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  role: z.enum(['admin', 'manager', 'user', 'viewer']),
  organizationId: z.string().uuid('Invalid organization ID'),
  isActive: z.boolean().optional().default(true),
});

export const userUpdateSchema = userSchema.partial().omit({ organizationId: true });

export const userProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  phone: phoneSchema,
  avatarUrl: z.string().url('Invalid URL').optional(),
});

// Pagination schema
export const paginationSchema = z.object({
  page: z.number().min(1, 'Page must be at least 1').default(1),
  limit: z.number().min(1, 'Limit must be at least 1').max(100, 'Limit cannot exceed 100').default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional().default('asc'),
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  filters: z.record(z.any()).optional(),
}).merge(paginationSchema);

// File upload schema
export const fileUploadSchema = z.object({
  file: z.instanceof(File, 'Please select a file'),
  category: z.string().optional(),
  description: z.string().max(500, 'Description is too long').optional(),
}).refine(
  (data) => data.file.size <= 10 * 1024 * 1024, // 10MB
  'File size must be less than 10MB'
).refine(
  (data) => [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ].includes(data.file.type),
  'File type not supported'
);

// Settings schema
export const themeSettingsSchema = z.object({
  mode: z.enum(['light', 'dark', 'system']).default('system'),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
  accentColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
  borderRadius: z.number().min(0).max(20).default(8),
  fontSize: z.enum(['sm', 'md', 'lg']).default('md'),
});

// Export types
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type OrganizationFormData = z.infer<typeof organizationSchema>;
export type OrganizationUpdateData = z.infer<typeof organizationUpdateSchema>;
export type UserFormData = z.infer<typeof userSchema>;
export type UserUpdateData = z.infer<typeof userUpdateSchema>;
export type UserProfileData = z.infer<typeof userProfileSchema>;
export type PaginationParams = z.infer<typeof paginationSchema>;
export type SearchParams = z.infer<typeof searchSchema>;
export type FileUploadData = z.infer<typeof fileUploadSchema>;
export type ThemeSettings = z.infer<typeof themeSettingsSchema>;