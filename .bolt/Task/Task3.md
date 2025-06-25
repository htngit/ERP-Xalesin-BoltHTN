# Task 3: Shared Business Logic Layer & Core Packages

## 🎯 Objective
Develop the shared business logic layer in `/packages/core` that provides type-safe, reusable APIs and React hooks for all ERP modules across web and mobile platforms.

## 📋 Requirements
- Implement Supabase client with authentication and RLS
- Create type-safe API modules for all ERP functions
- Develop cross-platform React hooks
- Implement business logic validation and error handling
- Setup real-time subscriptions and optimistic updates

## 🏗️ Implementation Steps

### 1. Core Package Structure Setup
```typescript
packages/core/
├── src/
│   ├── api/                     # Supabase client & queries
│   │   ├── client.ts            # Supabase client configuration
│   │   ├── types.ts             # Database type definitions
│   │   └── modules/
│   │       ├── inventory/       # Inventory operations
│   │       ├── financial/       # Financial operations
│   │       ├── sales/           # Sales operations
│   │       ├── purchasing/      # Purchasing operations
│   │       ├── documents/       # Document operations
│   │       └── analytics/       # Analytics & reporting
│   ├── hooks/                   # React hooks
│   ├── utils/                   # Utility functions
│   ├── types/                   # TypeScript definitions
│   ├── constants/               # Application constants
│   └── validation/              # Business logic validation
├── package.json
└── tsconfig.json
```

### 2. Supabase Client Configuration
```typescript
// api/client.ts
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

// Authentication helpers
export const auth = {
  signIn: async (email: string, password: string) => { /* ... */ },
  signOut: async () => { /* ... */ },
  getCurrentUser: () => { /* ... */ },
  setTenantContext: (tenantId: string) => { /* ... */ }
}
```

### 3. Database Type Generation
```typescript
// api/types.ts - Generated from Supabase
export type Database = {
  public: {
    Tables: {
      parties: {
        Row: { /* ... */ }
        Insert: { /* ... */ }
        Update: { /* ... */ }
      }
      // ... other tables
    }
  }
}

export type Party = Database['public']['Tables']['parties']['Row']
export type PartyInsert = Database['public']['Tables']['parties']['Insert']
export type PartyUpdate = Database['public']['Tables']['parties']['Update']
```

### 4. API Modules Implementation

#### Inventory Module
```typescript
// api/modules/inventory/items.ts
export const itemsApi = {
  getAll: async (filters?: ItemFilters) => {
    const query = supabase
      .from('items')
      .select('*, category:product_categories(*)')
    
    if (filters?.category) {
      query.eq('category_id', filters.category)
    }
    
    return query
  },
  
  create: async (item: ItemInsert) => {
    return supabase
      .from('items')
      .insert(item)
      .select()
      .single()
  },
  
  update: async (id: string, updates: ItemUpdate) => {
    return supabase
      .from('items')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
  },
  
  delete: async (id: string) => {
    return supabase
      .from('items')
      .delete()
      .eq('id', id)
  },
  
  getStockLevels: async (itemId: string) => {
    return supabase
      .rpc('get_item_stock_levels', { item_id: itemId })
  }
}
```

#### Financial Module
```typescript
// api/modules/financial/currencies.ts
export const currenciesApi = {
  getAll: async () => {
    return supabase
      .from('currencies')
      .select('*')
      .eq('is_active', true)
      .order('code')
  },
  
  getExchangeRate: async (fromCurrency: string, toCurrency: string) => {
    return supabase
      .rpc('get_exchange_rate', {
        from_currency: fromCurrency,
        to_currency: toCurrency
      })
  },
  
  convertAmount: async (amount: number, fromCurrency: string, toCurrency: string) => {
    return supabase
      .rpc('convert_currency', {
        amount,
        from_currency: fromCurrency,
        to_currency: toCurrency
      })
  }
}
```

### 5. React Hooks Implementation

#### Inventory Hooks
```typescript
// hooks/inventory/useItems.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { itemsApi } from '../../api/modules/inventory/items'

export const useItems = (filters?: ItemFilters) => {
  return useQuery({
    queryKey: ['items', filters],
    queryFn: () => itemsApi.getAll(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useCreateItem = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: itemsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    },
    onError: (error) => {
      // Handle error with toast notification
    }
  })
}

export const useItemStockLevels = (itemId: string) => {
  return useQuery({
    queryKey: ['item-stock', itemId],
    queryFn: () => itemsApi.getStockLevels(itemId),
    enabled: !!itemId,
    refetchInterval: 30000, // Real-time updates every 30 seconds
  })
}
```

#### Real-time Hooks
```typescript
// hooks/shared/useRealtime.ts
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../api/client'

export const useRealtimeSubscription = (table: string, queryKey: string[]) => {
  const queryClient = useQueryClient()
  
  useEffect(() => {
    const subscription = supabase
      .channel(`${table}_changes`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: table
      }, (payload) => {
        // Invalidate relevant queries
        queryClient.invalidateQueries({ queryKey })
      })
      .subscribe()
    
    return () => {
      subscription.unsubscribe()
    }
  }, [table, queryKey, queryClient])
}
```

### 6. Business Logic Validation
```typescript
// validation/inventory.ts
import { z } from 'zod'

export const itemSchema = z.object({
  name: z.string().min(1, 'Item name is required').max(100),
  sku: z.string().min(1, 'SKU is required').max(50),
  category_id: z.string().uuid('Invalid category'),
  unit_price: z.number().min(0, 'Price must be positive'),
  cost_price: z.number().min(0, 'Cost must be positive'),
  description: z.string().optional(),
})

export const validateItem = (data: unknown) => {
  return itemSchema.parse(data)
}

// Business rules validation
export const validateStockMovement = (movement: StockMovement) => {
  if (movement.movement_type === 'OUT' && movement.quantity > movement.available_stock) {
    throw new Error('Insufficient stock for this movement')
  }
  
  if (movement.batch_id && movement.batch?.expiry_date < new Date()) {
    throw new Error('Cannot move expired batch')
  }
  
  return true
}
```

### 7. Error Handling & Utilities
```typescript
// utils/errors.ts
export class BusinessError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message)
    this.name = 'BusinessError'
  }
}

export const handleApiError = (error: any) => {
  if (error.code === 'PGRST301') {
    throw new BusinessError('Record not found', 'NOT_FOUND')
  }
  
  if (error.code === '23505') {
    throw new BusinessError('Duplicate record', 'DUPLICATE')
  }
  
  throw new BusinessError(error.message || 'Unknown error', 'UNKNOWN', error)
}
```

### 8. Constants & Configuration
```typescript
// constants/index.ts
export const MOVEMENT_TYPES = {
  IN: 'IN',
  OUT: 'OUT',
  TRANSFER: 'TRANSFER',
  ADJUSTMENT: 'ADJUSTMENT'
} as const

export const DOCUMENT_STATUSES = {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
} as const

export const PARTY_TYPES = {
  CUSTOMER: 'CUSTOMER',
  SUPPLIER: 'SUPPLIER',
  EMPLOYEE: 'EMPLOYEE'
} as const
```

## ✅ Acceptance Criteria
- [ ] Supabase client is properly configured with authentication
- [ ] All API modules are implemented with type safety
- [ ] React hooks provide optimistic updates and error handling
- [ ] Real-time subscriptions work across all modules
- [ ] Business logic validation is comprehensive
- [ ] Error handling provides meaningful user feedback
- [ ] Code is fully typed with TypeScript
- [ ] Unit tests cover critical business logic

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup

## 📊 Estimated Effort
- **Complexity**: High
- **Time Estimate**: 16-20 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Focus on type safety and developer experience
- Implement comprehensive error handling
- Use React Query for optimal caching and synchronization
- Ensure hooks work seamlessly across web and mobile
- Plan for offline capabilities in mobile apps

## 🎯 Success Metrics
- All API operations are type-safe and error-free
- React hooks provide smooth user experience
- Real-time updates work reliably
- Business logic validation prevents data corruption
- Code coverage for business logic exceeds 90%

## 🔄 Integration Points
- Web application will consume these hooks directly
- Mobile application will use the same business logic
- All modules share consistent patterns and interfaces
- Real-time updates propagate across all connected clients