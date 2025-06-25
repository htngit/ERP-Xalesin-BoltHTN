/**
 * @fileoverview Reset password page component
 * @author Xalesin Team
 */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { YStack, XStack, Text } from '@tamagui/core';
import { Button, Input } from '@xalesin/ui';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Reset password form data interface
 */
interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

/**
 * Reset password form errors interface
 */
interface ResetPasswordFormErrors {
  password?: string;
  confirmPassword?: string;
  general?: string;
}

/**
 * Reset password page component
 */
const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<ResetPasswordFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);

  // Get token from URL parameters
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    // Validate token on component mount
    if (!token) {
      setIsValidToken(false);
    } else {
      // TODO: Validate token with backend
      // For demo purposes, accept any token
      setIsValidToken(true);
    }
  }, [token]);

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: ResetPasswordFormErrors = {};

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
      // TODO: Implement actual password reset logic with Supabase
      console.log('Password reset:', { token, email, password: formData.password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, simulate successful reset
      setIsSuccess(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setErrors({ general: 'An error occurred while resetting your password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (field: keyof ResetPasswordFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof ResetPasswordFormErrors]) {
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

  // Invalid token state
  if (!isValidToken) {
    return (
      <YStack space="$6" alignItems="center">
        {/* Error Icon */}
        <YStack
          width={80}
          height={80}
          backgroundColor="$red2"
          borderRadius="$10"
          alignItems="center"
          justifyContent="center"
        >
          <AlertCircle size={40} color="$red10" />
        </YStack>

        {/* Error Message */}
        <YStack space="$3" alignItems="center">
          <Text fontSize="$7" fontWeight="bold" color="$color" textAlign="center">
            Invalid Reset Link
          </Text>
          <Text fontSize="$4" color="$gray11" textAlign="center" lineHeight="$2">
            This password reset link is invalid or has expired.
          </Text>
          <Text fontSize="$3" color="$gray10" textAlign="center" lineHeight="$2">
            Please request a new password reset link to continue.
          </Text>
        </YStack>

        {/* Actions */}
        <YStack space="$3" width="100%">
          <Link to="/auth/forgot-password" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="lg" width="100%">
              Request New Reset Link
            </Button>
          </Link>
          
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="lg" width="100%">
              Back to Sign In
            </Button>
          </Link>
        </YStack>
      </YStack>
    );
  }

  // Success state
  if (isSuccess) {
    return (
      <YStack space="$6" alignItems="center">
        {/* Success Icon */}
        <YStack
          width={80}
          height={80}
          backgroundColor="$green2"
          borderRadius="$10"
          alignItems="center"
          justifyContent="center"
        >
          <CheckCircle size={40} color="$green10" />
        </YStack>

        {/* Success Message */}
        <YStack space="$3" alignItems="center">
          <Text fontSize="$7" fontWeight="bold" color="$color" textAlign="center">
            Password Reset Successful
          </Text>
          <Text fontSize="$4" color="$gray11" textAlign="center" lineHeight="$2">
            Your password has been successfully reset.
          </Text>
          <Text fontSize="$3" color="$gray10" textAlign="center" lineHeight="$2">
            You can now sign in with your new password.
          </Text>
        </YStack>

        {/* Actions */}
        <YStack space="$3" width="100%">
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="lg" width="100%">
              Sign In Now
            </Button>
          </Link>
        </YStack>
      </YStack>
    );
  }

  return (
    <YStack space="$4">
      {/* Header */}
      <YStack space="$2" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color">
          Reset Password
        </Text>
        <Text fontSize="$4" color="$gray11" textAlign="center" lineHeight="$2">
          Enter your new password below
        </Text>
        {email && (
          <Text fontSize="$3" color="$gray10" textAlign="center">
            for {email}
          </Text>
        )}
      </YStack>

      {/* Reset Password Form */}
      <form onSubmit={handleSubmit}>
        <YStack space="$4">
          {/* General Error */}
          {errors.general && (
            <YStack
              padding="$3"
              backgroundColor="$red2"
              borderRadius="$3"
              borderWidth={1}
              borderColor="$red7"
            >
              <Text fontSize="$3" color="$red11">
                {errors.general}
              </Text>
            </YStack>
          )}

          {/* Password Input */}
          <YStack space="$2">
            <Input
              label="New Password"
              placeholder="Enter your new password"
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
              <YStack space="$1">
                <XStack space="$1">
                  {[...Array(5)].map((_, i) => (
                    <YStack
                      key={i}
                      flex={1}
                      height={4}
                      backgroundColor={i < passwordStrength.strength ? passwordStrength.color : '$gray5'}
                      borderRadius="$1"
                    />
                  ))}
                </XStack>
                <Text fontSize="$2" color={passwordStrength.color}>
                  Password strength: {passwordStrength.label}
                </Text>
              </YStack>
            )}
          </YStack>

          {/* Confirm Password Input */}
          <Input
            label="Confirm New Password"
            placeholder="Confirm your new password"
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

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </Button>
        </YStack>
      </form>

      {/* Back to Login */}
      <XStack justifyContent="center" space="$2">
        <Link to="/auth/login" style={{ textDecoration: 'none' }}>
          <Text fontSize="$3" color="$blue10" fontWeight="600">
            Back to Sign In
          </Text>
        </Link>
      </XStack>
    </YStack>
  );
};

export default ResetPassword;