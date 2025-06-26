/**
 * @fileoverview Login page component for user authentication
 * @author Xalesin Team
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, Text } from '@tamagui/core';
import { Button, Input } from '@xalesin/ui';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

/**
 * Login form data interface
 */
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

/**
 * Login form errors interface
 */
interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

/**
 * Login page component
 */
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      // TODO: Implement actual login logic with Supabase
      console.log('Login attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any valid email/password
      if (formData.email && formData.password.length >= 6) {
        // Store auth state (in real app, this would be handled by Supabase)
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
        
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'An error occurred during login. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof LoginFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Handle demo login
   */
  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@xalesin.com',
      password: 'demo123',
      rememberMe: false,
    });
  };

  return (
    <Stack space="$4">
      {/* Header */}
      <Stack space="$2" alignItems="center">
        <Text fontSize="$7" fontWeight="bold" color="$color">
          Welcome Back
        </Text>
        <Text fontSize="$4" color="$gray11" textAlign="center">
          Sign in to your account to continue
        </Text>
      </Stack>

      {/* Demo Login Button */}
      <Button
        variant="outline"
        size="lg"
        onPress={handleDemoLogin}
        disabled={isLoading}
      >
        Fill Demo Credentials
      </Button>

      {/* Login Form */}
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

          {/* Password Input */}
          <Input
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            leftIcon={Lock}
            rightIcon={showPassword ? EyeOff : Eye}
            onRightIconPress={() => setShowPassword(!showPassword)}
            secureTextEntry={!showPassword}
            size="lg"
            variant={errors.password ? 'error' : 'default'}
            errorMessage={errors.password}
            autoComplete="current-password"
            disabled={isLoading}
          />

          {/* Remember Me & Forgot Password */}
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Stack flexDirection="row" space="$2" alignItems="center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                disabled={isLoading}
                style={{
                  width: 16,
                  height: 16,
                  accentColor: '#3b82f6',
                }}
              />
              <Text fontSize="$3" color="$gray11">
                Remember me
              </Text>
            </Stack>
            <Link
              to="/auth/forgot-password"
              style={{ textDecoration: 'none' }}
            >
              <Text fontSize="$3" color="$blue10">
                Forgot password?
              </Text>
            </Link>
          </Stack>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Stack>
      </form>

      {/* Sign Up Link */}
      <Stack flexDirection="row" justifyContent="center" space="$2">
        <Text fontSize="$3" color="$gray11">
          Don't have an account?
        </Text>
        <Link to="/auth/register" style={{ textDecoration: 'none' }}>
          <Text fontSize="$3" color="$blue10" fontWeight="600">
            Sign up
          </Text>
        </Link>
      </Stack>

      {/* Additional Links */}
      <Stack space="$2" alignItems="center">
        <Text fontSize="$2" color="$gray10">
          By signing in, you agree to our
        </Text>
        <Stack flexDirection="row" space="$2">
          <Link to="/terms" style={{ textDecoration: 'none' }}>
            <Text fontSize="$2" color="$blue10">
              Terms of Service
            </Text>
          </Link>
          <Text fontSize="$2" color="$gray8">and</Text>
          <Link to="/privacy" style={{ textDecoration: 'none' }}>
            <Text fontSize="$2" color="$blue10">
              Privacy Policy
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;