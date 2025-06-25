/**
 * @fileoverview Dashboard page component showing key metrics and overview
 * @author Xalesin Team
 */

import React from 'react';
import { XStack, YStack, Text, ScrollView } from '@tamagui/core';
import { Card, CardHeader, CardBody, Button } from '@xalesin/ui';
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Package,
  AlertCircle,
  Plus,
  ArrowRight,
} from 'lucide-react';

/**
 * Metric card interface
 */
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

/**
 * Metric card component
 */
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
}) => {
  const changeColor = {
    positive: '$green10',
    negative: '$red10',
    neutral: '$gray10',
  }[changeType];

  return (
    <Card variant="elevated" size="md">
      <CardBody>
        <XStack justifyContent="space-between" alignItems="flex-start">
          <YStack space="$2" flex={1}>
            <Text fontSize="$3" color="$gray11">
              {title}
            </Text>
            <Text fontSize="$8" fontWeight="bold" color="$color">
              {value}
            </Text>
            <Text fontSize="$2" color={changeColor}>
              {change}
            </Text>
          </YStack>
          <YStack
            backgroundColor="$blue2"
            padding="$3"
            borderRadius="$3"
            alignItems="center"
            justifyContent="center"
          >
            <Icon size={24} color="$blue10" />
          </YStack>
        </XStack>
      </CardBody>
    </Card>
  );
};

/**
 * Recent activity item interface
 */
interface ActivityItem {
  id: string;
  type: 'user' | 'organization' | 'system';
  message: string;
  timestamp: string;
  user?: string;
}

/**
 * Recent activity component
 */
const RecentActivity: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'user',
      message: 'New user John Doe registered',
      timestamp: '2 minutes ago',
      user: 'System',
    },
    {
      id: '2',
      type: 'organization',
      message: 'Organization "Tech Corp" updated their profile',
      timestamp: '15 minutes ago',
      user: 'Admin',
    },
    {
      id: '3',
      type: 'system',
      message: 'Database backup completed successfully',
      timestamp: '1 hour ago',
      user: 'System',
    },
    {
      id: '4',
      type: 'user',
      message: 'User permissions updated for 5 users',
      timestamp: '2 hours ago',
      user: 'Admin',
    },
  ];

  return (
    <Card variant="elevated" size="md">
      <CardHeader>
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$5" fontWeight="600">
            Recent Activity
          </Text>
          <Button size="sm" variant="ghost">
            View All
            <ArrowRight size={16} />
          </Button>
        </XStack>
      </CardHeader>
      <CardBody>
        <YStack space="$3">
          {activities.map((activity) => (
            <XStack key={activity.id} space="$3" alignItems="flex-start">
              <YStack
                width={8}
                height={8}
                backgroundColor="$blue9"
                borderRadius="$10"
                marginTop="$2"
              />
              <YStack flex={1} space="$1">
                <Text fontSize="$3" color="$color">
                  {activity.message}
                </Text>
                <XStack space="$2" alignItems="center">
                  <Text fontSize="$2" color="$gray10">
                    {activity.timestamp}
                  </Text>
                  <Text fontSize="$2" color="$gray8">•</Text>
                  <Text fontSize="$2" color="$gray10">
                    {activity.user}
                  </Text>
                </XStack>
              </YStack>
            </XStack>
          ))}
        </YStack>
      </CardBody>
    </Card>
  );
};

/**
 * Quick actions component
 */
const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 'add-user',
      label: 'Add User',
      icon: Users,
      color: '$blue9',
      path: '/users/new',
    },
    {
      id: 'add-organization',
      label: 'Add Organization',
      icon: Building2,
      color: '$green9',
      path: '/organizations/new',
    },
    {
      id: 'view-reports',
      label: 'View Reports',
      icon: TrendingUp,
      color: '$purple9',
      path: '/reports',
    },
    {
      id: 'manage-inventory',
      label: 'Manage Inventory',
      icon: Package,
      color: '$orange9',
      path: '/inventory',
    },
  ];

  return (
    <Card variant="elevated" size="md">
      <CardHeader>
        <Text fontSize="$5" fontWeight="600">
          Quick Actions
        </Text>
      </CardHeader>
      <CardBody>
        <XStack flexWrap="wrap" gap="$3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="outline"
                size="lg"
                flex={1}
                minWidth={140}
                flexDirection="column"
                space="$2"
                height={80}
              >
                <Icon size={24} color={action.color} />
                <Text fontSize="$3" textAlign="center">
                  {action.label}
                </Text>
              </Button>
            );
          })}
        </XStack>
      </CardBody>
    </Card>
  );
};

/**
 * System alerts component
 */
const SystemAlerts: React.FC = () => {
  const alerts = [
    {
      id: '1',
      type: 'warning',
      message: 'Low inventory alert: 5 items below threshold',
      action: 'View Inventory',
    },
    {
      id: '2',
      type: 'info',
      message: 'System maintenance scheduled for tonight at 2 AM',
      action: 'Learn More',
    },
  ];

  return (
    <Card variant="elevated" size="md">
      <CardHeader>
        <Text fontSize="$5" fontWeight="600">
          System Alerts
        </Text>
      </CardHeader>
      <CardBody>
        <YStack space="$3">
          {alerts.map((alert) => (
            <XStack
              key={alert.id}
              space="$3"
              alignItems="center"
              padding="$3"
              backgroundColor="$yellow2"
              borderRadius="$3"
              borderLeftWidth={4}
              borderLeftColor="$yellow9"
            >
              <AlertCircle size={20} color="$yellow10" />
              <YStack flex={1} space="$1">
                <Text fontSize="$3" color="$color">
                  {alert.message}
                </Text>
              </YStack>
              <Button size="sm" variant="outline">
                {alert.action}
              </Button>
            </XStack>
          ))}
        </YStack>
      </CardBody>
    </Card>
  );
};

/**
 * Dashboard page component
 */
const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Organizations',
      value: '24',
      change: '+12% from last month',
      changeType: 'positive' as const,
      icon: Building2,
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8% from last month',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Monthly Revenue',
      value: '$45,678',
      change: '+15% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Inventory Value',
      value: '$123,456',
      change: '-2% from last month',
      changeType: 'negative' as const,
      icon: Package,
    },
  ];

  return (
    <ScrollView flex={1}>
      <YStack padding="$6" space="$6">
        {/* Header */}
        <YStack space="$2">
          <Text fontSize="$9" fontWeight="bold" color="$color">
            Dashboard
          </Text>
          <Text fontSize="$4" color="$gray11">
            Welcome back! Here's what's happening with your business today.
          </Text>
        </YStack>

        {/* Metrics Grid */}
        <XStack flexWrap="wrap" gap="$4">
          {metrics.map((metric, index) => (
            <YStack key={index} flex={1} minWidth={280}>
              <MetricCard {...metric} />
            </YStack>
          ))}
        </XStack>

        {/* Content Grid */}
        <XStack flexWrap="wrap" gap="$6" alignItems="flex-start">
          {/* Left Column */}
          <YStack flex={2} minWidth={400} space="$6">
            <RecentActivity />
            <SystemAlerts />
          </YStack>

          {/* Right Column */}
          <YStack flex={1} minWidth={300}>
            <QuickActions />
          </YStack>
        </XStack>
      </YStack>
    </ScrollView>
  );
};

export default Dashboard;