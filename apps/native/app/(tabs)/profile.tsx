import React from 'react';
import { ScrollView, Alert } from 'react-native';
import {
  YStack,
  XStack,
  Card,
  H2,
  H4,
  Text,
  Button,
  Avatar,
  Separator,
  Switch,
} from 'tamagui';
import { router } from 'expo-router';
import { CORE_NAME, CORE_VERSION } from '@xalesin/core';

export default function ProfileScreen() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Store Manager',
    avatar: 'https://via.placeholder.com/100',
    joinDate: '2023-06-15',
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Handle logout logic here
            router.replace('/auth/login');
          },
        },
      ]
    );
  };

  const menuItems = [
    {
      title: 'Account Settings',
      subtitle: 'Update your personal information',
      icon: '👤',
      onPress: () => router.push('/profile/settings'),
    },
    {
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      icon: '🔔',
      onPress: () => router.push('/profile/notifications'),
    },
    {
      title: 'Security',
      subtitle: 'Password and security settings',
      icon: '🔒',
      onPress: () => router.push('/profile/security'),
    },
    {
      title: 'Data & Privacy',
      subtitle: 'Control your data and privacy',
      icon: '🛡️',
      onPress: () => router.push('/profile/privacy'),
    },
    {
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      icon: '❓',
      onPress: () => router.push('/profile/help'),
    },
    {
      title: 'About',
      subtitle: 'App version and information',
      icon: 'ℹ️',
      onPress: () => router.push('/profile/about'),
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '$background' }}>
      <YStack padding="$4" space="$4">
        {/* Header */}
        <H2>Profile</H2>

        {/* User Info Card */}
        <Card padding="$4">
          <YStack space="$4">
            <XStack space="$4" alignItems="center">
              <Avatar circular size="$8">
                <Avatar.Image src={user.avatar} />
                <Avatar.Fallback backgroundColor="$blue10">
                  <Text color="white" fontSize="$6" fontWeight="bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </Text>
                </Avatar.Fallback>
              </Avatar>
              <YStack flex={1} space="$1">
                <H4>{user.name}</H4>
                <Text color="$gray11">{user.email}</Text>
                <Text fontSize="$2" color="$blue11" fontWeight="600">
                  {user.role}
                </Text>
              </YStack>
            </XStack>
            
            <Separator />
            
            <XStack justifyContent="space-between">
              <Text color="$gray11">Member since</Text>
              <Text fontWeight="600">{user.joinDate}</Text>
            </XStack>
          </YStack>
        </Card>

        {/* Quick Stats */}
        <XStack space="$3">
          <Card flex={1} padding="$3" backgroundColor="$blue2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$blue11">
                156
              </Text>
              <Text fontSize="$2" color="$blue11" textAlign="center">
                Orders Processed
              </Text>
            </YStack>
          </Card>
          <Card flex={1} padding="$3" backgroundColor="$green2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$green11">
                98%
              </Text>
              <Text fontSize="$2" color="$green11" textAlign="center">
                Accuracy Rate
              </Text>
            </YStack>
          </Card>
        </XStack>

        {/* Settings Menu */}
        <YStack space="$2">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              padding="$3"
              pressStyle={{ scale: 0.98 }}
              onPress={item.onPress}
            >
              <XStack space="$3" alignItems="center">
                <Text fontSize="$5">{item.icon}</Text>
                <YStack flex={1} space="$1">
                  <Text fontSize="$4" fontWeight="600">
                    {item.title}
                  </Text>
                  <Text fontSize="$2" color="$gray11">
                    {item.subtitle}
                  </Text>
                </YStack>
                <Text color="$gray11">›</Text>
              </XStack>
            </Card>
          ))}
        </YStack>

        {/* Quick Settings */}
        <Card padding="$4">
          <YStack space="$3">
            <H4>Quick Settings</H4>
            
            <XStack justifyContent="space-between" alignItems="center">
              <YStack flex={1}>
                <Text fontSize="$3" fontWeight="600">
                  Dark Mode
                </Text>
                <Text fontSize="$2" color="$gray11">
                  Switch between light and dark themes
                </Text>
              </YStack>
              <Switch size="$3" />
            </XStack>
            
            <Separator />
            
            <XStack justifyContent="space-between" alignItems="center">
              <YStack flex={1}>
                <Text fontSize="$3" fontWeight="600">
                  Push Notifications
                </Text>
                <Text fontSize="$2" color="$gray11">
                  Receive notifications for important updates
                </Text>
              </YStack>
              <Switch size="$3" defaultChecked />
            </XStack>
          </YStack>
        </Card>

        {/* App Info */}
        <Card padding="$4" backgroundColor="$gray2">
          <YStack space="$2" alignItems="center">
            <Text fontSize="$3" fontWeight="600" color="$gray11">
              {CORE_NAME}
            </Text>
            <Text fontSize="$2" color="$gray11">
              Version {CORE_VERSION}
            </Text>
          </YStack>
        </Card>

        {/* Logout Button */}
        <Button
          theme="red"
          size="$4"
          onPress={handleLogout}
        >
          Logout
        </Button>

        {/* Bottom Spacing */}
        <YStack height="$4" />
      </YStack>
    </ScrollView>
  );
}