# Task 5: Web Application Development (React + Vite)

## 🎯 Objective
Develop the complete web application for Xalesin ERP using React, Vite, and the shared business logic layer, implementing all core ERP modules with responsive design and enterprise-grade features.

## 📋 Requirements
- Setup React + Vite application with proper routing
- Implement authentication and authorization flows
- Develop all ERP module interfaces (Inventory, Financial, Sales, etc.)
- Create responsive layouts and navigation
- Implement real-time features and notifications
- Setup state management and data fetching

## 🏗️ Implementation Steps

### 1. Vite + React Application Setup
```typescript
// apps/web/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, '../../packages/core/src'),
      '@ui': resolve(__dirname, '../../packages/ui/src'),
      '@config': resolve(__dirname, '../../packages/config/src'),
    },
  },
  define: {
    'process.env': process.env,
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})

// apps/web/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TamaguiProvider } from '@tamagui/core'
import { ToastProvider } from '@tamagui/toast'
import config from '@config/tamagui.config'
import App from './App'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ToastProvider>
    </TamaguiProvider>
  </React.StrictMode>
)
```

### 2. Application Structure
```
apps/web/src/
├── components/           # Shared web components
│   ├── Layout/          # Layout components
│   ├── Navigation/      # Navigation components
│   └── Common/          # Common UI components
├── modules/             # Feature-based modules
│   ├── auth/           # Authentication module
│   ├── dashboard/      # Dashboard module
│   ├── inventory/      # Inventory management
│   ├── financial/      # Financial management
│   ├── sales/          # Sales & CRM
│   ├── purchasing/     # Procurement
│   ├── documents/      # Document management
│   └── analytics/      # Reporting & BI
├── hooks/              # Web-specific hooks
├── utils/              # Web utilities
├── types/              # Web-specific types
├── constants/          # Web constants
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

### 3. Authentication Module
```typescript
// modules/auth/components/LoginForm.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { YStack, XStack, Text, Button, Input, Card } from '@ui/components'
import { useAuth } from '@core/hooks/useAuth'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { signIn, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const data = loginSchema.parse({ email, password })
      await signIn(data.email, data.password)
      navigate('/dashboard')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      }
    }
  }

  return (
    <Card maxWidth={400} margin="auto" marginTop="$10">
      <YStack space="$4" padding="$6">
        <Text fontSize="$8" fontWeight="600" textAlign="center">
          Sign In to Xalesin ERP
        </Text>
        
        <form onSubmit={handleSubmit}>
          <YStack space="$3">
            <Input
              label="Email"
              type="email"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              required
            />
            
            <Input
              label="Password"
              type="password"
              value={password}
              onChangeText={setPassword}
              error={errors.password}
              required
            />
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              marginTop="$3"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </YStack>
        </form>
      </YStack>
    </Card>
  )
}

// modules/auth/pages/LoginPage.tsx
import { YStack } from '@ui/components'
import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
  return (
    <YStack flex={1} backgroundColor="$backgroundSoft" justifyContent="center">
      <LoginForm />
    </YStack>
  )
}
```

### 4. Dashboard Module
```typescript
// modules/dashboard/components/DashboardStats.tsx
import { XStack, YStack, Text, Card } from '@ui/components'
import { TrendingUp, Package, DollarSign, Users } from '@tamagui/lucide-icons'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  icon: React.ReactNode
  color: string
}

const StatCard = ({ title, value, change, icon, color }: StatCardProps) => {
  return (
    <Card flex={1}>
      <XStack justifyContent="space-between" alignItems="flex-start">
        <YStack space="$2">
          <Text fontSize="$3" color="$colorPress">
            {title}
          </Text>
          <Text fontSize="$7" fontWeight="600">
            {value}
          </Text>
          {change && (
            <Text fontSize="$2" color="$success">
              {change}
            </Text>
          )}
        </YStack>
        <YStack
          backgroundColor={color}
          padding="$3"
          borderRadius="$4"
          opacity={0.1}
        >
          {icon}
        </YStack>
      </XStack>
    </Card>
  )
}

export const DashboardStats = () => {
  return (
    <XStack space="$4" flexWrap="wrap">
      <StatCard
        title="Total Revenue"
        value="$124,563"
        change="+12.5% from last month"
        icon={<DollarSign size={24} />}
        color="$success"
      />
      <StatCard
        title="Total Items"
        value="1,247"
        change="+3.2% from last month"
        icon={<Package size={24} />}
        color="$primary"
      />
      <StatCard
        title="Active Customers"
        value="892"
        change="+8.1% from last month"
        icon={<Users size={24} />}
        color="$warning"
      />
      <StatCard
        title="Growth Rate"
        value="23.5%"
        change="+2.3% from last month"
        icon={<TrendingUp size={24} />}
        color="$info"
      />
    </XStack>
  )
}

// modules/dashboard/pages/DashboardPage.tsx
import { YStack, Text } from '@ui/components'
import { Page } from '@ui/components/Layout/Page'
import { DashboardStats } from '../components/DashboardStats'
import { RecentActivities } from '../components/RecentActivities'
import { QuickActions } from '../components/QuickActions'

export const DashboardPage = () => {
  return (
    <Page title="Dashboard" subtitle="Welcome back! Here's what's happening.">
      <YStack space="$6">
        <DashboardStats />
        
        <XStack space="$4" flex={1}>
          <YStack flex={2} space="$4">
            <RecentActivities />
          </YStack>
          <YStack flex={1}>
            <QuickActions />
          </YStack>
        </XStack>
      </YStack>
    </Page>
  )
}
```

### 5. Inventory Module
```typescript
// modules/inventory/components/ItemsList.tsx
import { useState } from 'react'
import { YStack, XStack, Button, Input } from '@ui/components'
import { DataTable } from '@ui/components/DataDisplay/DataTable'
import { useItems } from '@core/hooks/inventory/useItems'
import { Plus, Search, Filter } from '@tamagui/lucide-icons'
import { StockLevelIndicator } from '@ui/components/Inventory/StockLevelIndicator'

export const ItemsList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({})
  
  const { data: items, loading, error } = useItems({ search: searchTerm, ...filters })

  const columns = [
    {
      key: 'name' as const,
      title: 'Item Name',
      width: 200,
    },
    {
      key: 'sku' as const,
      title: 'SKU',
      width: 150,
    },
    {
      key: 'category' as const,
      title: 'Category',
      width: 150,
      render: (value: any) => value?.name || '-',
    },
    {
      key: 'currentStock' as const,
      title: 'Stock Level',
      width: 200,
      render: (value: number, record: any) => (
        <StockLevelIndicator
          current={value}
          minimum={record.minimumStock}
          maximum={record.maximumStock}
        />
      ),
    },
    {
      key: 'unitPrice' as const,
      title: 'Unit Price',
      width: 120,
      render: (value: number) => `$${value.toFixed(2)}`,
    },
  ]

  return (
    <YStack space="$4">
      {/* Search and Filters */}
      <XStack space="$3" alignItems="center">
        <XStack flex={1} space="$2" alignItems="center">
          <Search size={20} color="$colorPress" />
          <Input
            placeholder="Search items..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            flex={1}
          />
        </XStack>
        
        <Button variant="outline" icon={Filter}>
          Filters
        </Button>
        
        <Button variant="primary" icon={Plus}>
          Add Item
        </Button>
      </XStack>

      {/* Items Table */}
      <DataTable
        data={items || []}
        columns={columns}
        loading={loading}
        onRowPress={(item) => {
          // Navigate to item details
        }}
      />
    </YStack>
  )
}

// modules/inventory/pages/InventoryPage.tsx
import { Page } from '@ui/components/Layout/Page'
import { ItemsList } from '../components/ItemsList'

export const InventoryPage = () => {
  return (
    <Page
      title="Inventory Management"
      subtitle="Manage your items, stock levels, and warehouse operations"
    >
      <ItemsList />
    </Page>
  )
}
```

### 6. Layout and Navigation
```typescript
// components/Layout/AppLayout.tsx
import { XStack, YStack } from '@ui/components'
import { Sidebar } from '../Navigation/Sidebar'
import { Header } from '../Navigation/Header'
import { useAuth } from '@core/hooks/useAuth'
import { Navigate } from 'react-router-dom'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <XStack flex={1} height="100vh">
      <Sidebar />
      <YStack flex={1}>
        <Header />
        <YStack flex={1} overflow="auto">
          {children}
        </YStack>
      </YStack>
    </XStack>
  )
}

// components/Navigation/Sidebar.tsx
import { YStack, XStack, Text, Button } from '@ui/components'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  Package,
  DollarSign,
  Users,
  FileText,
  ShoppingCart,
  BarChart3,
  Settings,
} from '@tamagui/lucide-icons'

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Package, label: 'Inventory', path: '/inventory' },
  { icon: DollarSign, label: 'Financial', path: '/financial' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: ShoppingCart, label: 'Sales', path: '/sales' },
  { icon: FileText, label: 'Documents', path: '/documents' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

export const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <YStack
      width={250}
      backgroundColor="$surface"
      borderRightWidth={1}
      borderRightColor="$borderColor"
      padding="$4"
    >
      {/* Logo */}
      <XStack alignItems="center" space="$3" marginBottom="$6">
        <Text fontSize="$6" fontWeight="600" color="$primary">
          Xalesin ERP
        </Text>
      </XStack>

      {/* Menu Items */}
      <YStack space="$2">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path)
          const Icon = item.icon

          return (
            <Button
              key={item.path}
              variant={isActive ? 'primary' : 'ghost'}
              justifyContent="flex-start"
              onPress={() => navigate(item.path)}
            >
              <XStack alignItems="center" space="$3">
                <Icon size={20} />
                <Text>{item.label}</Text>
              </XStack>
            </Button>
          )
        })}
      </YStack>
    </YStack>
  )
}
```

### 7. Routing Setup
```typescript
// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout'
import { LoginPage } from './modules/auth/pages/LoginPage'
import { DashboardPage } from './modules/dashboard/pages/DashboardPage'
import { InventoryPage } from './modules/inventory/pages/InventoryPage'
import { FinancialPage } from './modules/financial/pages/FinancialPage'
import { SalesPage } from './modules/sales/pages/SalesPage'
import { CustomersPage } from './modules/customers/pages/CustomersPage'
import { DocumentsPage } from './modules/documents/pages/DocumentsPage'
import { AnalyticsPage } from './modules/analytics/pages/AnalyticsPage'
import { SettingsPage } from './modules/settings/pages/SettingsPage'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected Routes */}
      <Route path="/" element={<AppLayout><Navigate to="/dashboard" replace /></AppLayout>} />
      <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
      <Route path="/inventory/*" element={<AppLayout><InventoryPage /></AppLayout>} />
      <Route path="/financial/*" element={<AppLayout><FinancialPage /></AppLayout>} />
      <Route path="/sales/*" element={<AppLayout><SalesPage /></AppLayout>} />
      <Route path="/customers/*" element={<AppLayout><CustomersPage /></AppLayout>} />
      <Route path="/documents/*" element={<AppLayout><DocumentsPage /></AppLayout>} />
      <Route path="/analytics/*" element={<AppLayout><AnalyticsPage /></AppLayout>} />
      <Route path="/settings/*" element={<AppLayout><SettingsPage /></AppLayout>} />
    </Routes>
  )
}

export default App
```

### 8. Real-time Features
```typescript
// hooks/useRealtimeNotifications.ts
import { useEffect } from 'react'
import { useToast } from '@tamagui/toast'
import { useRealtimeSubscription } from '@core/hooks/shared/useRealtime'

export const useRealtimeNotifications = () => {
  const toast = useToast()
  
  // Subscribe to inventory changes
  useRealtimeSubscription('inventory_movements', ['inventory'], (payload) => {
    if (payload.eventType === 'INSERT') {
      toast.show('Stock movement recorded', {
        message: `${payload.new.quantity} units ${payload.new.movement_type}`,
      })
    }
  })
  
  // Subscribe to low stock alerts
  useRealtimeSubscription('items', ['items'], (payload) => {
    if (payload.new.current_stock <= payload.new.minimum_stock) {
      toast.show('Low Stock Alert', {
        message: `${payload.new.name} is running low`,
        variant: 'warning',
      })
    }
  })
}
```

## ✅ Acceptance Criteria
- [ ] React + Vite application is properly configured
- [ ] Authentication flow is implemented and secure
- [ ] All ERP modules have functional interfaces
- [ ] Responsive design works across screen sizes
- [ ] Real-time features update data automatically
- [ ] Navigation is intuitive and accessible
- [ ] Performance meets enterprise standards
- [ ] Error handling provides meaningful feedback
- [ ] State management is efficient and scalable
- [ ] Code splitting and lazy loading are implemented

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer
- Task 4: Universal UI Components & Tamagui Setup

## 📊 Estimated Effort
- **Complexity**: Very High
- **Time Estimate**: 24-32 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Implement progressive web app (PWA) features
- Use code splitting for optimal performance
- Implement comprehensive error boundaries
- Add analytics and monitoring integration
- Plan for internationalization (i18n) support

## 🎯 Success Metrics
- Application loads in under 3 seconds
- All user interactions are responsive (<100ms)
- Real-time updates work reliably
- Accessibility audit passes with high scores
- Bundle size is optimized for web performance
- User experience is smooth and intuitive

## 🚀 Performance Optimizations
- Implement virtual scrolling for large datasets
- Use React.memo and useMemo for expensive computations
- Implement proper caching strategies
- Optimize images and assets
- Use service workers for offline capabilities