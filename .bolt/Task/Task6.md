# Task 6: Mobile Application Development (React Native + Expo)

## 🎯 Objective
Develop the complete mobile application for Xalesin ERP using React Native, Expo, and the shared business logic layer, implementing mobile-first features for field operations, inventory management, and real-time business processes.

## 📋 Requirements
- Setup React Native + Expo application with proper navigation
- Implement mobile-optimized authentication and security
- Develop mobile-first ERP interfaces with touch-friendly design
- Implement native device capabilities (camera, GPS, offline storage)
- Create offline-first architecture with sync capabilities
- Implement push notifications and real-time updates

## 🏗️ Implementation Steps

### 1. Expo + React Native Application Setup
```typescript
// apps/mobile/app.config.ts
import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Xalesin ERP',
  slug: 'xalesin-erp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.xalesin.erp',
    infoPlist: {
      NSCameraUsageDescription: 'This app uses camera to scan barcodes and capture documents',
      NSLocationWhenInUseUsageDescription: 'This app uses location for delivery tracking',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.xalesin.erp',
    permissions: [
      'CAMERA',
      'ACCESS_FINE_LOCATION',
      'ACCESS_COARSE_LOCATION',
      'WRITE_EXTERNAL_STORAGE',
      'READ_EXTERNAL_STORAGE',
    ],
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-camera',
    'expo-location',
    'expo-barcode-scanner',
    'expo-document-picker',
    'expo-notifications',
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 34,
          targetSdkVersion: 34,
          buildToolsVersion: '34.0.0',
        },
        ios: {
          deploymentTarget: '13.0',
        },
      },
    ],
  ],
  extra: {
    eas: {
      projectId: 'your-project-id',
    },
  },
})

// apps/mobile/App.tsx
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider } from '@tamagui/core'
import { ToastProvider } from '@tamagui/toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import config from '@config/tamagui.config'
import { AppNavigator } from './src/navigation/AppNavigator'
import { AuthProvider } from './src/providers/AuthProvider'
import { OfflineProvider } from './src/providers/OfflineProvider'
import { NotificationProvider } from './src/providers/NotificationProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      networkMode: 'offlineFirst',
    },
  },
})

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TamaguiProvider config={config}>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <OfflineProvider>
                  <NotificationProvider>
                    <AppNavigator />
                    <StatusBar style="auto" />
                  </NotificationProvider>
                </OfflineProvider>
              </AuthProvider>
            </QueryClientProvider>
          </ToastProvider>
        </TamaguiProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
```

### 2. Mobile Application Structure
```
apps/mobile/src/
├── components/           # Mobile-specific components
│   ├── Camera/          # Camera and barcode scanning
│   ├── Forms/           # Mobile-optimized forms
│   ├── Lists/           # Touch-friendly lists
│   └── Navigation/      # Mobile navigation
├── screens/             # Screen components
│   ├── auth/           # Authentication screens
│   ├── dashboard/      # Dashboard screens
│   ├── inventory/      # Inventory management
│   ├── sales/          # Sales and orders
│   ├── delivery/       # Delivery tracking
│   └── settings/       # App settings
├── navigation/          # Navigation configuration
├── providers/           # Context providers
├── hooks/              # Mobile-specific hooks
├── utils/              # Mobile utilities
├── services/           # Native services
├── storage/            # Offline storage
└── types/              # Mobile-specific types
```

### 3. Navigation Setup
```typescript
// navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAuth } from '@core/hooks/useAuth'
import { AuthNavigator } from './AuthNavigator'
import { MainTabNavigator } from './MainTabNavigator'
import { LoadingScreen } from '../screens/LoadingScreen'

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// navigation/MainTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Package, ShoppingCart, Truck, Settings } from '@tamagui/lucide-icons'
import { DashboardScreen } from '../screens/dashboard/DashboardScreen'
import { InventoryNavigator } from './InventoryNavigator'
import { SalesNavigator } from './SalesNavigator'
import { DeliveryNavigator } from './DeliveryNavigator'
import { SettingsNavigator } from './SettingsNavigator'

const Tab = createBottomTabNavigator()

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Package size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Sales"
        component={SalesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <ShoppingCart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Truck size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
```

### 4. Mobile Authentication
```typescript
// screens/auth/LoginScreen.tsx
import { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { YStack, XStack, Text, Button, Input, Card } from '@ui/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '@core/hooks/useAuth'
import { useBiometricAuth } from '../hooks/useBiometricAuth'
import { Fingerprint } from '@tamagui/lucide-icons'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, loading } = useAuth()
  const { isBiometricAvailable, authenticateWithBiometric } = useBiometricAuth()

  const handleLogin = async () => {
    try {
      await signIn(email, password)
    } catch (error) {
      // Handle error
    }
  }

  const handleBiometricLogin = async () => {
    try {
      const result = await authenticateWithBiometric()
      if (result.success) {
        // Auto-login with stored credentials
      }
    } catch (error) {
      // Handle error
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <YStack flex={1} justifyContent="center" padding="$6">
          <Card>
            <YStack space="$4" padding="$6">
              <Text fontSize="$8" fontWeight="600" textAlign="center">
                Welcome to Xalesin ERP
              </Text>
              
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
              
              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="password"
              />
              
              <Button
                variant="primary"
                size="lg"
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
              
              {isBiometricAvailable && (
                <Button
                  variant="outline"
                  onPress={handleBiometricLogin}
                  icon={Fingerprint}
                >
                  Use Biometric
                </Button>
              )}
            </YStack>
          </Card>
        </YStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
```

### 5. Mobile Inventory Management
```typescript
// screens/inventory/InventoryListScreen.tsx
import { useState, useCallback } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { YStack, XStack, Text, Button, Input, Card } from '@ui/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useItems } from '@core/hooks/inventory/useItems'
import { Search, Plus, QrCode } from '@tamagui/lucide-icons'
import { ItemCard } from '../../components/inventory/ItemCard'
import { useNavigation } from '@react-navigation/native'

export const InventoryListScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()
  
  const { data: items, loading, refetch } = useItems({ search: searchTerm })

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }, [refetch])

  const renderItem = ({ item }: { item: any }) => (
    <ItemCard
      item={item}
      onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })}
    />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} padding="$4">
        {/* Header */}
        <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
          <Text fontSize="$6" fontWeight="600">
            Inventory
          </Text>
          <XStack space="$2">
            <Button
              variant="outline"
              size="sm"
              icon={QrCode}
              onPress={() => navigation.navigate('BarcodeScanner')}
            />
            <Button
              variant="primary"
              size="sm"
              icon={Plus}
              onPress={() => navigation.navigate('AddItem')}
            />
          </XStack>
        </XStack>

        {/* Search */}
        <XStack space="$2" alignItems="center" marginBottom="$4">
          <Search size={20} color="$colorPress" />
          <Input
            placeholder="Search items..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            flex={1}
          />
        </XStack>

        {/* Items List */}
        <FlatList
          data={items || []}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </YStack>
    </SafeAreaView>
  )
}

// components/inventory/ItemCard.tsx
import { TouchableOpacity } from 'react-native'
import { XStack, YStack, Text, Card } from '@ui/components'
import { StockLevelIndicator } from '@ui/components/Inventory/StockLevelIndicator'
import { Package } from '@tamagui/lucide-icons'

interface ItemCardProps {
  item: any
  onPress: () => void
}

export const ItemCard = ({ item, onPress }: ItemCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card marginBottom="$3">
        <XStack padding="$4" alignItems="center" space="$3">
          <YStack
            backgroundColor="$primary"
            padding="$3"
            borderRadius="$4"
            opacity={0.1}
          >
            <Package size={24} color="$primary" />
          </YStack>
          
          <YStack flex={1} space="$1">
            <Text fontSize="$4" fontWeight="600">
              {item.name}
            </Text>
            <Text fontSize="$3" color="$colorPress">
              SKU: {item.sku}
            </Text>
            <StockLevelIndicator
              current={item.currentStock}
              minimum={item.minimumStock}
              maximum={item.maximumStock}
              size="sm"
            />
          </YStack>
          
          <YStack alignItems="flex-end">
            <Text fontSize="$4" fontWeight="600">
              ${item.unitPrice.toFixed(2)}
            </Text>
            <Text fontSize="$3" color="$colorPress">
              {item.currentStock} units
            </Text>
          </YStack>
        </XStack>
      </Card>
    </TouchableOpacity>
  )
}
```

### 6. Barcode Scanner
```typescript
// screens/inventory/BarcodeScannerScreen.tsx
import { useState, useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { YStack, XStack, Text, Button, Card } from '@ui/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { X, Flashlight } from '@tamagui/lucide-icons'
import { useItems } from '@core/hooks/inventory/useItems'

const { width, height } = Dimensions.get('window')

export const BarcodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)
  const [flashOn, setFlashOn] = useState(false)
  const navigation = useNavigation()
  const { searchByBarcode } = useItems()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setScanned(true)
    
    try {
      const item = await searchByBarcode(data)
      if (item) {
        navigation.navigate('ItemDetail', { itemId: item.id })
      } else {
        navigation.navigate('AddItem', { barcode: data })
      }
    } catch (error) {
      // Handle error
    }
  }

  if (hasPermission === null) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1} justifyContent="center" alignItems="center">
          <Text>Requesting camera permission...</Text>
        </YStack>
      </SafeAreaView>
    )
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1} justifyContent="center" alignItems="center" padding="$6">
          <Text textAlign="center" marginBottom="$4">
            Camera permission is required to scan barcodes
          </Text>
          <Button onPress={() => navigation.goBack()}>
            Go Back
          </Button>
        </YStack>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1}>
        {/* Header */}
        <XStack
          justifyContent="space-between"
          alignItems="center"
          padding="$4"
          backgroundColor="rgba(0,0,0,0.8)"
        >
          <Button
            variant="ghost"
            icon={X}
            onPress={() => navigation.goBack()}
            color="white"
          />
          <Text color="white" fontSize="$5" fontWeight="600">
            Scan Barcode
          </Text>
          <Button
            variant="ghost"
            icon={Flashlight}
            onPress={() => setFlashOn(!flashOn)}
            color={flashOn ? "yellow" : "white"}
          />
        </XStack>

        {/* Scanner */}
        <YStack flex={1} position="relative">
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            flashMode={flashOn ? 'torch' : 'off'}
          />
          
          {/* Overlay */}
          <YStack
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            justifyContent="center"
            alignItems="center"
          >
            <YStack
              width={250}
              height={250}
              borderWidth={2}
              borderColor="white"
              borderRadius="$4"
              backgroundColor="transparent"
            />
            <Text
              color="white"
              textAlign="center"
              marginTop="$4"
              fontSize="$4"
            >
              Position the barcode within the frame
            </Text>
          </YStack>
        </YStack>

        {/* Bottom Actions */}
        {scanned && (
          <Card margin="$4">
            <YStack padding="$4" space="$3">
              <Text textAlign="center">
                Barcode scanned successfully!
              </Text>
              <Button
                variant="primary"
                onPress={() => setScanned(false)}
              >
                Scan Again
              </Button>
            </YStack>
          </Card>
        )}
      </YStack>
    </SafeAreaView>
  )
}
```

### 7. Offline Storage and Sync
```typescript
// services/OfflineStorageService.ts
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-netinfo/'
import { supabase } from '@core/lib/supabase'

interface OfflineAction {
  id: string
  type: 'CREATE' | 'UPDATE' | 'DELETE'
  table: string
  data: any
  timestamp: number
}

class OfflineStorageService {
  private readonly OFFLINE_ACTIONS_KEY = 'offline_actions'
  private readonly CACHED_DATA_KEY = 'cached_data'

  async storeOfflineAction(action: Omit<OfflineAction, 'id' | 'timestamp'>) {
    const offlineAction: OfflineAction = {
      ...action,
      id: Date.now().toString(),
      timestamp: Date.now(),
    }

    const existingActions = await this.getOfflineActions()
    const updatedActions = [...existingActions, offlineAction]
    
    await AsyncStorage.setItem(
      this.OFFLINE_ACTIONS_KEY,
      JSON.stringify(updatedActions)
    )
  }

  async getOfflineActions(): Promise<OfflineAction[]> {
    try {
      const actions = await AsyncStorage.getItem(this.OFFLINE_ACTIONS_KEY)
      return actions ? JSON.parse(actions) : []
    } catch (error) {
      return []
    }
  }

  async syncOfflineActions() {
    const netInfo = await NetInfo.fetch()
    if (!netInfo.isConnected) return

    const actions = await this.getOfflineActions()
    const successfulActions: string[] = []

    for (const action of actions) {
      try {
        switch (action.type) {
          case 'CREATE':
            await supabase.from(action.table).insert(action.data)
            break
          case 'UPDATE':
            await supabase
              .from(action.table)
              .update(action.data)
              .eq('id', action.data.id)
            break
          case 'DELETE':
            await supabase
              .from(action.table)
              .delete()
              .eq('id', action.data.id)
            break
        }
        successfulActions.push(action.id)
      } catch (error) {
        console.error('Failed to sync action:', action, error)
      }
    }

    // Remove successful actions
    const remainingActions = actions.filter(
      (action) => !successfulActions.includes(action.id)
    )
    await AsyncStorage.setItem(
      this.OFFLINE_ACTIONS_KEY,
      JSON.stringify(remainingActions)
    )
  }

  async cacheData(key: string, data: any) {
    const cachedData = await this.getCachedData()
    cachedData[key] = {
      data,
      timestamp: Date.now(),
    }
    
    await AsyncStorage.setItem(
      this.CACHED_DATA_KEY,
      JSON.stringify(cachedData)
    )
  }

  async getCachedData(key?: string) {
    try {
      const cached = await AsyncStorage.getItem(this.CACHED_DATA_KEY)
      const data = cached ? JSON.parse(cached) : {}
      return key ? data[key] : data
    } catch (error) {
      return key ? null : {}
    }
  }
}

export const offlineStorage = new OfflineStorageService()

// providers/OfflineProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import NetInfo from '@react-native-netinfo/'
import { offlineStorage } from '../services/OfflineStorageService'

interface OfflineContextType {
  isOnline: boolean
  pendingActions: number
  syncData: () => Promise<void>
}

const OfflineContext = createContext<OfflineContextType | undefined>(undefined)

export const OfflineProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true)
  const [pendingActions, setPendingActions] = useState(0)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected ?? false)
      
      if (state.isConnected) {
        syncData()
      }
    })

    return unsubscribe
  }, [])

  const syncData = async () => {
    try {
      await offlineStorage.syncOfflineActions()
      const actions = await offlineStorage.getOfflineActions()
      setPendingActions(actions.length)
    } catch (error) {
      console.error('Sync failed:', error)
    }
  }

  return (
    <OfflineContext.Provider value={{ isOnline, pendingActions, syncData }}>
      {children}
    </OfflineContext.Provider>
  )
}

export const useOffline = () => {
  const context = useContext(OfflineContext)
  if (!context) {
    throw new Error('useOffline must be used within OfflineProvider')
  }
  return context
}
```

### 8. Push Notifications
```typescript
// services/NotificationService.ts
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { Platform } from 'react-native'
import { supabase } from '@core/lib/supabase'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

class NotificationService {
  async registerForPushNotifications() {
    let token

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      
      if (finalStatus !== 'granted') {
        throw new Error('Failed to get push token for push notification!')
      }
      
      token = (await Notifications.getExpoPushTokenAsync()).data
    } else {
      throw new Error('Must use physical device for Push Notifications')
    }

    return token
  }

  async savePushToken(userId: string, token: string) {
    await supabase
      .from('user_push_tokens')
      .upsert({
        user_id: userId,
        push_token: token,
        platform: Platform.OS,
        updated_at: new Date().toISOString(),
      })
  }

  async scheduleLocalNotification(title: string, body: string, data?: any) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: { seconds: 1 },
    })
  }
}

export const notificationService = new NotificationService()

// providers/NotificationProvider.tsx
import { createContext, useContext, useEffect, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import { useAuth } from '@core/hooks/useAuth'
import { notificationService } from '../services/NotificationService'

interface NotificationContextType {
  scheduleNotification: (title: string, body: string, data?: any) => Promise<void>
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const notificationListener = useRef<Notifications.Subscription>()
  const responseListener = useRef<Notifications.Subscription>()

  useEffect(() => {
    if (user) {
      registerForPushNotifications()
    }

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        // Handle received notification
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // Handle notification tap
      }
    )

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current)
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [user])

  const registerForPushNotifications = async () => {
    try {
      const token = await notificationService.registerForPushNotifications()
      if (user && token) {
        await notificationService.savePushToken(user.id, token)
      }
    } catch (error) {
      console.error('Failed to register for push notifications:', error)
    }
  }

  const scheduleNotification = async (title: string, body: string, data?: any) => {
    await notificationService.scheduleLocalNotification(title, body, data)
  }

  return (
    <NotificationContext.Provider value={{ scheduleNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider')
  }
  return context
}
```

## ✅ Acceptance Criteria
- [ ] React Native + Expo application is properly configured
- [ ] Mobile authentication with biometric support works
- [ ] All ERP modules have mobile-optimized interfaces
- [ ] Barcode scanning functionality is implemented
- [ ] Offline-first architecture with sync capabilities
- [ ] Push notifications are configured and working
- [ ] Touch-friendly UI with proper gestures
- [ ] Camera and location permissions are handled
- [ ] Performance is optimized for mobile devices
- [ ] App works on both iOS and Android platforms

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer
- Task 4: Universal UI Components & Tamagui Setup

## 📊 Estimated Effort
- **Complexity**: Very High
- **Time Estimate**: 28-36 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Implement proper error boundaries for mobile
- Add haptic feedback for better UX
- Optimize for different screen sizes and orientations
- Implement deep linking for navigation
- Add analytics and crash reporting
- Plan for app store deployment

## 🎯 Success Metrics
- App launches in under 3 seconds
- Offline functionality works seamlessly
- Barcode scanning is accurate and fast
- Push notifications are delivered reliably
- Battery usage is optimized
- App store ratings above 4.5 stars

## 📱 Mobile-Specific Features
- Biometric authentication (Face ID, Touch ID, Fingerprint)
- Camera integration for barcode scanning and document capture
- GPS tracking for delivery and field operations
- Offline data storage and synchronization
- Push notifications for real-time alerts
- Haptic feedback for better user experience
- Native performance optimizations