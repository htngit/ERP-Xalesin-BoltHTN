/**
 * @fileoverview Forgot password page component
 * @author Xalesin Team
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { YStack, XStack, Text } from '@tamagui/core';
import { Button, Input } from '@xalesin/ui';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

/**
 * Forgot password form data interface
 */
interface ForgotPasswordFormData {
  email: string;
}

/**
 * Forgot password form errors interface
 */
interface ForgotPasswordFormErrors {
  email?: string;
  general?: string;
}

/**
 * Forgot password page component
 */
const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: '',
  });
  const [errors, setErrors] = useState<ForgotPasswordFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: ForgotPasswordFormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
      console.log('Password reset request:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, simulate successful request
      setIsSuccess(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setErrors({ general: 'An error occurred while sending the reset email. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (field: keyof ForgotPasswordFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof ForgotPasswordFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Handle resend email
   */
  const handleResendEmail = () => {
    setIsSuccess(false);
    setFormData({ email: '' });
    setErrors({});
  };

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
            Check Your Email
          </Text>
          <Text fontSize="$4" color="$gray11" textAlign="center" lineHeight="$2">
            We've sent a password reset link to
          </Text>
          <Text fontSize="$4" fontWeight="600" color="$color" textAlign="center">
            {formData.email}
          </Text>
          <Text fontSize="$3" color="$gray10" textAlign="center" lineHeight="$2">
            Click the link in the email to reset your password. If you don't see the email,
            check your spam folder.
          </Text>
        </YStack>

        {/* Actions */}
        <YStack space="$3" width="100%">
          <Button
            variant="primary"
            size="lg"
            onPress={handleResendEmail}
          >
            Send Another Email
          </Button>
          
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="lg" width="100%">
              <ArrowLeft size={16} />
              Back to Sign In
            </Button>
          </Link>
        </YStack>

        {/* Help Text */}
        <Text fontSize="$2" color="$gray10" textAlign="center">
          Still having trouble? Contact our support team for assistance.
        </Text>
      </YStack>
    );
  }

  return (
    <YStack space="$4">
      {/* Header */}
      <YStack space="$2" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color">
          Forgot Password?
        </Text>
        <Text fontSize="$4" color="$gray11" textAlign="center" lineHeight="$2">
          No worries! Enter your email address and we'll send you a link to reset your password.
        </Text>
      </YStack>

      {/* Forgot Password Form */}
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

          {/* Email Input */}
          <Input
            label="Email Address"
            placeholder="Enter your email address"
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

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
          </Button>
        </YStack>
      </form>

      {/* Back to Login */}
      <XStack justifyContent="center" space="$2">
        <Link to="/auth/login" style={{ textDecoration: 'none' }}>
          <Button variant="ghost" size="md">
            <ArrowLeft size={16} />
            Back to Sign In
          </Button>
        </Link>
      </XStack>

      {/* Help Text */}
      <YStack space="$2" alignItems="center">
        <Text fontSize="$2" color="$gray10" textAlign="center">
          Remember your password?
        </Text>
        <Link to="/auth/login" style={{ textDecoration: 'none' }}>
          <Text fontSize="$3" color="$blue10" fontWeight="600">
            Sign in instead
          </Text>
        </Link>
      </YStack>
    </YStack>
  );
};

export default ForgotPassword;