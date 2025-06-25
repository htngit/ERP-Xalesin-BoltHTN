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
  Badge,
} from 'tamagui';
import { router } from 'expo-router';

interface SaleOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  items: number;
}

export default function SalesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - in a real app, this would come from your backend
  const salesOrders: SaleOrder[] = [
    {
      id: '1',
      orderNumber: 'ORD-001',
      customerName: 'John Doe',
      total: 299.97,
      status: 'processing',
      date: '2024-01-15',
      items: 3,
    },
    {
      id: '2',
      orderNumber: 'ORD-002',
      customerName: 'Jane Smith',
      total: 149.99,
      status: 'shipped',
      date: '2024-01-14',
      items: 2,
    },
    {
      id: '3',
      orderNumber: 'ORD-003',
      customerName: 'Bob Johnson',
      total: 79.99,
      status: 'delivered',
      date: '2024-01-13',
      items: 1,
    },
    {
      id: '4',
      orderNumber: 'ORD-004',
      customerName: 'Alice Brown',
      total: 199.98,
      status: 'pending',
      date: '2024-01-15',
      items: 2,
    },
  ];

  const filteredOrders = salesOrders.filter(order =>
    order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: SaleOrder['status']) => {
    switch (status) {
      case 'pending': return '$orange10';
      case 'processing': return '$blue10';
      case 'shipped': return '$purple10';
      case 'delivered': return '$green10';
      case 'cancelled': return '$red10';
      default: return '$gray10';
    }
  };

  const renderSaleOrder = ({ item }: { item: SaleOrder }) => (
    <Card
      margin="$2"
      padding="$3"
      pressStyle={{ scale: 0.98 }}
      onPress={() => router.push(`/sales/${item.id}`)}
    >
      <YStack space="$2">
        <XStack justifyContent="space-between" alignItems="flex-start">
          <YStack flex={1} space="$1">
            <H4>{item.orderNumber}</H4>
            <Text fontSize="$3" color="$gray11">
              {item.customerName}
            </Text>
            <Text fontSize="$2" color="$gray11">
              {item.items} item{item.items !== 1 ? 's' : ''} • {item.date}
            </Text>
          </YStack>
          <YStack alignItems="flex-end" space="$2">
            <Text fontSize="$4" fontWeight="bold">
              ${item.total.toFixed(2)}
            </Text>
            <Badge
              backgroundColor={getStatusColor(item.status)}
              color="white"
              size="$2"
            >
              {item.status.toUpperCase()}
            </Badge>
          </YStack>
        </XStack>
      </YStack>
    </Card>
  );

  const totalSales = salesOrders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = salesOrders.filter(order => order.status === 'pending').length;
  const completedOrders = salesOrders.filter(order => order.status === 'delivered').length;

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <YStack padding="$4" space="$3">
        <XStack justifyContent="space-between" alignItems="center">
          <H2>Sales</H2>
          <Button
            size="$3"
            theme="blue"
            onPress={() => router.push('/sales/new')}
          >
            New Sale
          </Button>
        </XStack>
        
        {/* Search */}
        <Input
          placeholder="Search orders..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          size="$4"
        />
        
        {/* Stats */}
        <XStack space="$3">
          <Card flex={1} padding="$3" backgroundColor="$green2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$green11">
                ${totalSales.toFixed(0)}
              </Text>
              <Text fontSize="$2" color="$green11">
                Total Sales
              </Text>
            </YStack>
          </Card>
          <Card flex={1} padding="$3" backgroundColor="$orange2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$orange11">
                {pendingOrders}
              </Text>
              <Text fontSize="$2" color="$orange11">
                Pending
              </Text>
            </YStack>
          </Card>
          <Card flex={1} padding="$3" backgroundColor="$blue2">
            <YStack alignItems="center" space="$1">
              <Text fontSize="$5" fontWeight="bold" color="$blue11">
                {completedOrders}
              </Text>
              <Text fontSize="$2" color="$blue11">
                Completed
              </Text>
            </YStack>
          </Card>
        </XStack>
      </YStack>

      <Separator />

      {/* Sales Orders List */}
      <FlatList
        data={filteredOrders}
        renderItem={renderSaleOrder}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </YStack>
  );
}