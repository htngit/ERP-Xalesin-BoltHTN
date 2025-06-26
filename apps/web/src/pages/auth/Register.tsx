/**
 * @fileoverview Register page component for new user registration
 * @author Xalesin Team
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, Text, Button, Input } from '@xalesin/ui';
import { Eye, EyeOff, Mail, Lock, User, Building2 } from 'lucide-react';

/**
 * Registration form data interface
 */
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  organizationName: string;
  acceptTerms: boolean;
}

/**
 * Registration form errors interface
 */
interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  organizationName?: string;
  acceptTerms?: string;
  general?: string;
}

/**
 * Register page component
 */
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: RegisterFormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Organization name validation
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = 'Organization name is required';
    } else if (formData.organizationName.trim().length < 2) {
      newErrors.organizationName = 'Organization name must be at least 2 characters';
    }

    // Terms acceptance validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // TODO: Implement actual registration logic with Supabase
      console.log('Registration attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, simulate successful registration
      // In real app, this would create user in Supabase and send verification email
      
      // Navigate to login with success message
      navigate('/auth/login', {
        state: {
          message: 'Registration successful! Please check your email to verify your account.',
          type: 'success'
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ general: 'An error occurred during registration. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (field: keyof RegisterFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof RegisterFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Get password strength indicator
   */
  const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^\w\s]/.test(password)) strength++;

    const levels = [
      { label: 'Very Weak', color: '$red9' },
      { label: 'Weak', color: '$orange9' },
      { label: 'Fair', color: '$yellow9' },
      { label: 'Good', color: '$blue9' },
      { label: 'Strong', color: '$green9' },
    ];

    return { strength, ...levels[Math.min(strength, 4)] };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <Stack space="$4">
      {/* Header */}
      <Stack space="$2" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color">
          Create Account
        </Text>
        <Text fontSize="$4" color="$gray11" textAlign="center">
          Join Xalesin ERP and start managing your business
        </Text>
      </Stack>

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <Stack space="$4">
          {/* General Error */}
          {errors.general && (
            <Stack
              padding="$3"
              backgroundColor="$red2"
              borderRadius="$3"
              borderWidth={1}
              borderColor="$red7"
            >
              <Text fontSize="$3" color="$red11">
                {errors.general}
              </Text>
            </Stack>
          )}

          {/* Name Fields */}
          <Stack flexDirection="row" space="$3">
            <Stack flex={1}>
              <Input
                label="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
                leftIcon={User}
                size="lg"
                variant={errors.firstName ? 'error' : 'default'}
                errorMessage={errors.firstName}
                autoComplete="given-name"
                disabled={isLoading}
              />
            </Stack>
            <Stack flex={1}>
              <Input
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
                leftIcon={User}
                size="lg"
                variant={errors.lastName ? 'error' : 'default'}
                errorMessage={errors.lastName}
                autoComplete="family-name"
                disabled={isLoading}
              />
            </Stack>
          </Stack>

          {/* Email Input */}
          <Input
            label="Email Address"
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            leftIcon={Mail}
            size="lg"
            variant={errors.email ? 'error' : 'default'}
            errorMessage={errors.email}
            autoComplete="email"
            autoCapitalize="none"
            keyboardType="email-address"
            disabled={isLoading}
          />

          {/* Organization Name */}
          <Input
            label="Organization Name"
            placeholder="Enter your organization name"
            value={formData.organizationName}
            onChangeText={(value) => handleInputChange('organizationName', value)}
            leftIcon={Building2}
            size="lg"
            variant={errors.organizationName ? 'error' : 'default'}
            errorMessage={errors.organizationName}
            autoComplete="organization"
            disabled={isLoading}
          />

          {/* Password Input */}
          <Stack space="$2">
            <Input
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
              leftIcon={Lock}
              rightIcon={showPassword ? EyeOff : Eye}
              onRightIconPress={() => setShowPassword(!showPassword)}
              secureTextEntry={!showPassword}
              size="lg"
              variant={errors.password ? 'error' : 'default'}
              errorMessage={errors.password}
              autoComplete="new-password"
              disabled={isLoading}
            />
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <Stack space="$1">
                <Stack flexDirection="row" space="$1">
                  {[...Array(5)].map((_, i) => (
                    <Stack
                      key={i}
                      flex={1}
                      height={4}
                      backgroundColor={i < passwordStrength.strength ? passwordStrength.color : '$gray5'}
                      borderRadius="$1"
                    />
                  ))}
                </Stack>
                <Text fontSize="$2" color={passwordStrength.color}>
                  Password strength: {passwordStrength.label}
                </Text>
              </Stack>
            )}
          </Stack>

          {/* Confirm Password Input */}
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            leftIcon={Lock}
            rightIcon={showConfirmPassword ? EyeOff : Eye}
            onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
            secureTextEntry={!showConfirmPassword}
            size="lg"
            variant={errors.confirmPassword ? 'error' : 'default'}
            errorMessage={errors.confirmPassword}
            autoComplete="new-password"
            disabled={isLoading}
          />

          {/* Terms and Conditions */}
          <Stack space="$2">
            <Stack flexDirection="row" space="$2" alignItems="flex-start">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                disabled={isLoading}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: 2,
                  accentColor: '#3b82f6',
                }}
              />
              <Stack flex={1}>
                <Text fontSize="$3" color="$gray11" lineHeight="$1">
                  I agree to the{' '}
                  <Link to="/terms" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </Text>
              </Stack>
            </Stack>
            {errors.acceptTerms && (
              <Text fontSize="$2" color="$red10">
                {errors.acceptTerms}
              </Text>
            )}
          </Stack>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Stack>
      </form>

      {/* Sign In Link */}
      <Stack flexDirection="row" justifyContent="center" space="$2">
        <Text fontSize="$3" color="$gray11">
          Already have an account?
        </Text>
        <Link to="/auth/login" style={{ textDecoration: 'none' }}>
          <Text fontSize="$3" color="$blue10" fontWeight="600">
            Sign in
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Register;