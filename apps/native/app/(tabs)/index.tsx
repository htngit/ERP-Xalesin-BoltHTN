import React from 'react';
import { ScrollView } from 'react-native';
import { YStack, XStack, Card, H2, H3, Text, Button } from 'tamagui';
import { CORE_NAME, CORE_VERSION } from '@xalesin/core';
import { router } from 'expo-router';

export default function DashboardScreen() {
  const dashboardCards = [
    {
      title: 'Inventory',
      value: '1,234',
      subtitle: 'Items in stock',
      color: '$blue10',
      route: '/inventory',
    },
    {
      title: 'Sales',
      value: '$45,678',
      subtitle: 'This month',
      color: '$green10',
      route: '/sales',
    },
    {
      title: 'Orders',
      value: '89',
      subtitle: 'Pending',
      color: '$orange10',
      route: '/orders',
    },
    {
      title: 'Customers',
      value: '567',
      subtitle: 'Active',
      color: '$purple10',
      route: '/customers',
    },
  ];

  const quickActions = [
    { title: 'Scan Barcode', route: '/scanner', icon: '📷' },
    { title: 'New Sale', route: '/sales/new', icon: '💰' },
    { title: 'Add Product', route: '/inventory/add', icon: '📦' },
    { title: 'View Reports', route: '/reports', icon: '📊' },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '$background' }}>
      <YStack padding="$4" space="$4">
        {/* Header */}
        <YStack space="$2">
          <H2>Welcome to {CORE_NAME}</H2>
          <Text color="$gray11">Version {CORE_VERSION}</Text>
        </YStack>

        {/* Dashboard Cards */}
        <YStack space="$3">
          <H3>Overview</H3>
          <XStack space="$3" flexWrap="wrap">
            {dashboardCards.map((card, index) => (
              <Card
                key={index}
                flex={1}
                minWidth={150}
                padding="$3"
                backgroundColor={card.color}
                pressStyle={{ scale: 0.95 }}
                onPress={() => router.push(card.route)}
              >
                <YStack space="$2">
                  <Text fontSize="$2" color="white" opacity={0.8}>
                    {card.title}
                  </Text>
                  <Text fontSize="$6" fontWeight="bold" color="white">
                    {card.value}
                  </Text>
                  <Text fontSize="$1" color="white" opacity={0.7}>
                    {card.subtitle}
                  </Text>
                </YStack>
              </Card>
            ))}
          </XStack>
        </YStack>

        {/* Quick Actions */}
        <YStack space="$3">
          <H3>Quick Actions</H3>
          <XStack space="$3" flexWrap="wrap">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                flex={1}
                minWidth={150}
                size="$4"
                theme="blue"
                onPress={() => router.push(action.route)}
              >
                <XStack space="$2" alignItems="center">
                  <Text fontSize="$4">{action.icon}</Text>
                  <Text>{action.title}</Text>
                </XStack>
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Recent Activity */}
        <YStack space="$3">
          <H3>Recent Activity</H3>
          <Card padding="$3">
            <YStack space="$2">
              <Text fontSize="$3" fontWeight="600">
                Latest Transactions
              </Text>
              <Text color="$gray11">
                No recent activity to display.
              </Text>
              <Button size="$3" theme="blue" alignSelf="flex-start">
                View All Activity
              </Button>
            </YStack>
          </Card>
        </YStack>
      </YStack>
    </ScrollView>
  );
}