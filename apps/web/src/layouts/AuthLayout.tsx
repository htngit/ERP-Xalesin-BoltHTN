/**
 * @fileoverview Authentication layout component for login, register, and password reset pages
 * @author Xalesin Team
 */

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Stack, Text, Image } from '@xalesin/ui';

/**
 * Authentication layout component
 * @returns {React.ReactElement} The AuthLayout component
 */
const AuthLayout: React.FC = () => {
  return (
    <Stack flex={1} height="100vh" flexDirection="row">
      {/* Left side - Brand and illustration */}
      <Stack
        flex={1}
        backgroundColor="$blue9"
        alignItems="center"
        justifyContent="center"
        padding="$6"
        $sm={{ display: 'none' }}
      >
        <Stack space="$6" maxWidth={500} alignItems="center">
          <Text
            fontSize="$10"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Xalesin ERP
          </Text>
          <Text
            fontSize="$6"
            color="white"
            opacity={0.9}
            textAlign="center"
          >
            Enterprise Resource Planning for modern businesses
          </Text>
          
          {/* Placeholder for illustration */}
          <Stack
            width={400}
            height={300}
            backgroundColor="rgba(255, 255, 255, 0.2)"
            borderRadius="$4"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" opacity={0.7}>
              Illustration Placeholder
            </Text>
          </Stack>
          
          <Text
            fontSize="$3"
            color="white"
            opacity={0.8}
            textAlign="center"
          >
            Streamline your business operations with our comprehensive ERP solution.
            Manage inventory, finances, and team members all in one place.
          </Text>
        </Stack>
      </Stack>
      
      {/* Right side - Auth form */}
      <Stack
        flex={1}
        backgroundColor="$background"
        alignItems="center"
        justifyContent="center"
        padding="$6"
      >
        <Stack
          width="100%"
          maxWidth={450}
          space="$4"
          padding="$6"
          borderWidth={1}
          borderColor="$borderColor"
          borderRadius="$4"
          backgroundColor="$backgroundHover"
        >
          {/* Logo for mobile view */}
          <Stack justifyContent="center" $gtSm={{ display: 'none' }} flexDirection="row">
            <Text fontSize="$8" fontWeight="bold" color="$blue10" marginBottom="$4">
              Xalesin ERP
            </Text>
          </Stack>
          
          {/* Auth form content */}
          <Outlet />
        </Stack>
        
        {/* Footer */}
        <Stack marginTop="$6" alignItems="center" space="$2">
          <Text fontSize="$2" color="$gray10">
            © {new Date().getFullYear()} Xalesin. All rights reserved.
          </Text>
          <Stack space="$4" flexDirection="row">
            <Link to="/terms" style={{ textDecoration: 'none' }}>
              <Text fontSize="$2" color="$blue10">
                Terms of Service
              </Text>
            </Link>
            <Link to="/privacy" style={{ textDecoration: 'none' }}>
              <Text fontSize="$2" color="$blue10">
                Privacy Policy
              </Text>
            </Link>
            <Link to="/help" style={{ textDecoration: 'none' }}>
              <Text fontSize="$2" color="$blue10">
                Help Center
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AuthLayout;