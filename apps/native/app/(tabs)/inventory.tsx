import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  YStack,
  XStack,
  Card,
  H2,
  H4,
  Text,
  Button,
  Input,
  Separator,
} from 'tamagui';
import { router } from 'expo-router';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
  lowStock: boolean;
}

export default function InventoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - in a real app, this would come from your backend
  const inventoryItems: InventoryItem[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      sku: 'WH-001',
      quantity: 45,
      price: 99.99,
      category: 'Electronics',
      lowStock: false,
    },
    {
      id: '2',
      name: 'USB Cable',
      sku: 'USB-002',
      quantity: 5,
      price: 12.99,
      category: 'Accessories',
      lowStock: true,
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      sku: 'BT-003',
      quantity: 23,
      price: 79.99,
      category: 'Electronics',
      lowStock: false,
    },
    {
      id: '4',
      name: 'Phone Case',
      sku: 'PC-004',
      quantity: 2,
      price: 24.99,
      category: 'Accessories',
      lowStock: true,
    },
  ];

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderInventoryItem = ({ item }: { item: InventoryItem }) => (
    <Card
      margin="$2"
      padding="$3"
      pressStyle={{ scale: 0.98 }}
      onPress={() => router.push(`/inventory/${item.id}`)}
    >
      <YStack space="$2">
        <XStack justifyContent="space-between" alignItems="flex-start">
          <YStack flex={1} space="$1">
            <H4>{item.name}</H4>
            <Text fontSize="$2" color="$gray11">
              SKU: {item.sku}
            </Text>
            <Text fontSize="$2" color="$gray11">
              Category: {item.category}
            </Text>
          </YStack>
          <YStack alignItems="flex-end" space="$1">
            <Text fontSize="$4" fontWeight="bold">
              ${item.price.toFixed(2)}
            </Text>
            <XStack space="$2" alignItems="center">
              <Text
                fontSize="$3"
                color={item.lowStock ? '$red10' : '$green10'}
                fontWeight="600"
              >
                {item.quantity} in stock
              </Text>
              {item.lowStock && (
                <Text fontSize="$1" color="$red10" fontWeight="bold">
                  LOW
                </Text>
              )}
            </XStack>
          </YStack>
        </XStack>
      </YStack>
    </Card>
  );

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <YStack padding="$4" space="$3">
        <XStack justifyContent="space-between" alignItems="center">
          <H2>Inventory</H2>
          <Button
            size="$3"
            theme="blue"
            onPress={() => router.push('/inventory/add')}
          >
            Add Item
          </Button>
        </XStack>
        
        {/* Search */}
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          size="$4"
        />
        
        {/* Stats */}
        <XStack space="$3">
          <Card flex={1} padding="$3" backgroundColor="$blue2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$blue11">
                {inventoryItems.length}
              </Text>
              <Text fontSize="$2" color="$blue11">
                Total Items
              </Text>
            </YStack>
          </Card>
          <Card flex={1} padding="$3" backgroundColor="$red2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$red11">
                {inventoryItems.filter(item => item.lowStock).length}
              </Text>
              <Text fontSize="$2" color="$red11">
                Low Stock
              </Text>
            </YStack>
          </Card>
          <Card flex={1} padding="$3" backgroundColor="$green2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$green11">
                ${inventoryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(0)}
              </Text>
              <Text fontSize="$2" color="$green11">
                Total Value
              </Text>
            </YStack>
          </Card>
        </XStack>
      </YStack>

      <Separator />

      {/* Inventory List */}
      <FlatList
        data={filteredItems}
        renderItem={renderInventoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </YStack>
  );
}