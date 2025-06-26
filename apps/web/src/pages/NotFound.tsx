/**
 * @fileoverview 404 Not Found page component
 * @author Xalesin Team
 */

import React from 'react';
import { Stack, Text } from '@xalesin/ui';
import { Button } from '@xalesin/ui';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * NotFound page component
 * Displays a 404 error page when users navigate to non-existent routes
 */
const NotFound: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Navigate back to previous page
   */
  const handleGoBack = () => {
    navigate(-1);
  };

  /**
   * Navigate to dashboard
   */
  const handleGoHome = () => {
    navigate('/dashboard');
  };

  /**
   * Navigate to organizations page
   */
  const handleGoToOrganizations = () => {
    navigate('/organizations');
  };

  return (
    <Stack
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$6"
      gap="$6"
      minHeight="100vh"
    >
      {/* Error Icon */}
      <Stack alignItems="center" gap="$4">
        <Stack
          width={120}
          height={120}
          borderRadius="$12"
          backgroundColor="$orange4"
          alignItems="center"
          justifyContent="center"
          borderWidth={2}
          borderColor="$orange7"
        >
          <AlertTriangle size={48} color="var(--orange11)" />
        </Stack>

        {/* Error Code */}
        <Text
          fontSize="$12"
          fontWeight="bold"
          color="$gray12"
          textAlign="center"
        >
          404
        </Text>
      </Stack>

      {/* Error Message */}
      <Stack alignItems="center" gap="$3" maxWidth={500}>
        <Text
          fontSize="$8"
          fontWeight="bold"
          color="$gray12"
          textAlign="center"
        >
          Page Not Found
        </Text>
        
        <Text
          fontSize="$5"
          color="$gray11"
          textAlign="center"
          lineHeight="$6"
        >
          Sorry, we couldn't find the page you're looking for. 
          The page might have been moved, deleted, or you entered the wrong URL.
        </Text>
      </Stack>

      {/* Action Buttons */}
      <Stack gap="$3" alignItems="center" width="100%" maxWidth={400}>
        <Stack gap="$3" width="100%">
          <Button
            flex={1}
            variant="outline"
            size="$4"
            icon={ArrowLeft}
            onPress={handleGoBack}
          >
            Go Back
          </Button>
          
          <Button
            flex={1}
            size="$4"
            icon={Home}
            onPress={handleGoHome}
          >
            Go to Dashboard
          </Button>
        </Stack>

        <Button
          variant="ghost"
          size="$4"
          icon={Search}
          onPress={handleGoToOrganizations}
        >
          Browse Organizations
        </Button>
      </Stack>

      {/* Help Text */}
      <Stack alignItems="center" gap="$2" marginTop="$4">
        <Text fontSize="$3" color="$gray10" textAlign="center">
          Need help? Contact our support team
        </Text>
        
        <Stack gap="$4">
          <Text
            fontSize="$3"
            color="$blue11"
            textDecorationLine="underline"
            cursor="pointer"
            onPress={() => window.open('mailto:support@xalesin.com')}
          >
            support@xalesin.com
          </Text>
          
          <Text
            fontSize="$3"
            color="$blue11"
            textDecorationLine="underline"
            cursor="pointer"
            onPress={() => window.open('tel:+1-555-123-4567')}
          >
            +1 (555) 123-4567
          </Text>
        </Stack>
      </Stack>

      {/* Footer */}
      <Stack alignItems="center" marginTop="$6">
        <Text fontSize="$2" color="$gray9" textAlign="center">
          © 2024 Xalesin ERP. All rights reserved.
        </Text>
      </Stack>
    </Stack>
  );
};

export default NotFound;