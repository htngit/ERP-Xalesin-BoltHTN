import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { YStack, XStack, H1, Text, Button } from 'tamagui';
import { CORE_VERSION, CORE_NAME } from '@xalesin/core';

function App() {
  return (
    <YStack flex={1} padding="$4" backgroundColor="$background">
      <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
        <H1 color="$color">{CORE_NAME}</H1>
        <Text fontSize="$3" color="$colorPress">
          v{CORE_VERSION}
        </Text>
      </XStack>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/purchasing" element={<PurchasingPage />} />
        <Route path="/financial" element={<FinancialPage />} />
      </Routes>
    </YStack>
  );
}

function HomePage() {
  return (
    <YStack space="$4">
      <H1>Welcome to Xalesin ERP</H1>
      <Text>Enterprise Resource Planning System - Warehouse & Inventory Management Foundation</Text>
      
      <XStack space="$4" flexWrap="wrap">
        <Button theme="blue">Inventory Management</Button>
        <Button theme="green">Sales & CRM</Button>
        <Button theme="orange">Purchasing</Button>
        <Button theme="purple">Financial Management</Button>
      </XStack>
    </YStack>
  );
}

function InventoryPage() {
  return (
    <YStack space="$4">
      <H1>Inventory Management</H1>
      <Text>Multi-warehouse operations with real-time stock tracking</Text>
    </YStack>
  );
}

function SalesPage() {
  return (
    <YStack space="$4">
      <H1>Sales & CRM</H1>
      <Text>Customer relationship management and sales operations</Text>
    </YStack>
  );
}

function PurchasingPage() {
  return (
    <YStack space="$4">
      <H1>Purchasing</H1>
      <Text>Procurement and supplier management</Text>
    </YStack>
  );
}

function FinancialPage() {
  return (
    <YStack space="$4">
      <H1>Financial Management</H1>
      <Text>Multi-currency financial operations and reporting</Text>
    </YStack>
  );
}

export default App;