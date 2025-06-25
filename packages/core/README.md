# @xalesin/core

Core business logic and utilities for Xalesin ERP system. This package provides the foundational components, services, and utilities needed to build ERP applications.

## Features

### 🏗️ **Architecture**
- **Type-safe**: Full TypeScript support with comprehensive type definitions
- **Modular**: Clean separation of concerns with well-defined interfaces
- **Scalable**: Designed for enterprise-level applications
- **Testable**: Built with testing in mind using dependency injection

### 🔐 **Authentication & Authorization**
- Multi-tenant authentication system
- Role-based access control (RBAC)
- Permission-based authorization
- Session management with automatic refresh
- Secure password handling

### 📊 **Business Logic**
- Comprehensive ERP data models
- Business rule validation
- Document status management
- Price and tax calculations
- Inventory management
- Currency conversion

### 🛠️ **Services**
- **SupabaseService**: Database operations and real-time subscriptions
- **AuthService**: Authentication and authorization
- **ApiService**: HTTP client with retry logic and caching

### ⚛️ **React Integration**
- Custom hooks for data fetching
- State management with Zustand
- Authentication hooks
- Business logic hooks

### 🔧 **Utilities**
- Date and time utilities
- Money and quantity calculations
- String and number formatting
- Array and object manipulation
- Error handling and validation

## Installation

```bash
npm install @xalesin/core
# or
yarn add @xalesin/core
# or
pnpm add @xalesin/core
```

## Quick Start

### 1. Setup Configuration

First, ensure you have the configuration package set up:

```typescript
// In your app's configuration
import { DATABASE_CONFIG } from '@xalesin/config'

// The core package will use this configuration automatically
```

### 2. Initialize Services

```typescript
import { createSupabaseService, AuthService, ApiService } from '@xalesin/core'

// Initialize Supabase service
const supabaseService = createSupabaseService()

// Initialize authentication service
const authService = new AuthService(supabaseService.getMainClient())

// Initialize API service
const apiService = new ApiService('https://api.example.com')
```

### 3. Use React Hooks

```typescript
import { useAuth, useQuery, useAuthStore } from '@xalesin/core'

function MyComponent() {
  const { signIn, signOut, user } = useAuth()
  const { data: customers } = useQuery('/customers')
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user?.email}</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn({ email: 'user@example.com', password: 'password' })}>
          Sign In
        </button>
      )}
    </div>
  )
}
```

### 4. Use Business Logic

```typescript
import { 
  usePriceCalculation, 
  useTaxCalculation, 
  useInventoryManagement,
  Money,
  Quantity 
} from '@xalesin/core'

function ProductCalculator() {
  const { calculateItemPrice } = usePriceCalculation()
  const { calculateTax } = useTaxCalculation()
  const { checkStock } = useInventoryManagement()

  const basePrice = Money.create(100, 'USD')
  const quantity = Quantity.create(5, 'pcs')
  
  const totalPrice = calculateItemPrice({
    basePrice,
    quantity,
    discountPercent: 10
  })
  
  const tax = calculateTax(totalPrice, 8.5) // 8.5% tax rate
  const finalPrice = totalPrice.add(tax)

  return (
    <div>
      <p>Base Price: {basePrice.format()}</p>
      <p>Total Price: {totalPrice.format()}</p>
      <p>Tax: {tax.format()}</p>
      <p>Final Price: {finalPrice.format()}</p>
    </div>
  )
}
```

## API Reference

### Types

The package exports comprehensive TypeScript types for all ERP entities:

```typescript
import type {
  User,
  Tenant,
  Customer,
  Supplier,
  Item,
  SalesOrder,
  PurchaseOrder,
  Invoice,
  Payment,
  InventoryTransaction,
  Money,
  Quantity,
  DocumentStatus,
  UserRole,
  Permission
} from '@xalesin/core/types'
```

### Services

```typescript
import {
  SupabaseService,
  AuthService,
  ApiService,
  createSupabaseService
} from '@xalesin/core/services'
```

### Utilities

```typescript
import {
  dateUtils,
  moneyUtils,
  quantityUtils,
  stringUtils,
  numberUtils,
  arrayUtils,
  objectUtils,
  validationUtils,
  ErrorFactory,
  ErrorHandler,
  Result,
  ResultUtils
} from '@xalesin/core/utils'
```

### Hooks

```typescript
import {
  useAuth,
  usePermissions,
  useSession,
  useAuthGuard,
  useQuery,
  useMutation,
  usePaginatedQuery,
  useInfiniteQuery,
  useDebouncedQuery,
  useApiService,
  usePriceCalculation,
  useTaxCalculation,
  useDiscountCalculation,
  useCurrencyConversion,
  useInventoryManagement,
  useDocumentValidation,
  useDocumentStatus,
  useBusinessMetrics
} from '@xalesin/core/hooks'
```

### Stores

```typescript
import {
  useAuthStore,
  useAppStore,
  authActions,
  authSelectors,
  appSelectors
} from '@xalesin/core/stores'
```

## Advanced Usage

### Custom Error Handling

```typescript
import { ErrorHandler, ErrorFactory, XalesinError } from '@xalesin/core'

const errorHandler = new ErrorHandler({
  retryAttempts: 3,
  retryDelay: 1000,
  enableLogging: true
})

try {
  // Some operation that might fail
  await riskyOperation()
} catch (error) {
  const normalizedError = errorHandler.normalize(error)
  
  if (normalizedError instanceof XalesinError) {
    // Handle Xalesin-specific errors
    console.error('Business error:', normalizedError.message)
  } else {
    // Handle other errors
    console.error('Unexpected error:', normalizedError)
  }
}
```

### Result Pattern

```typescript
import { Result, ResultUtils } from '@xalesin/core'

function divideNumbers(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return Result.failure('Division by zero')
  }
  return Result.success(a / b)
}

const result = divideNumbers(10, 2)

if (result.isSuccess()) {
  console.log('Result:', result.getValue()) // 5
} else {
  console.error('Error:', result.getError())
}

// Or use the utility functions
const value = ResultUtils.getValueOrDefault(result, 0)
const values = ResultUtils.collectSuccesses([
  divideNumbers(10, 2),
  divideNumbers(20, 4),
  divideNumbers(30, 0) // This will be filtered out
])
```

### Custom Business Logic

```typescript
import { Money, Quantity, dateUtils } from '@xalesin/core'

// Create custom business calculations
function calculateSubscriptionPrice(
  basePrice: Money,
  months: number,
  discountTiers: Array<{ minMonths: number; discountPercent: number }>
): Money {
  let totalPrice = basePrice.multiply(months)
  
  // Apply volume discount
  const applicableDiscount = discountTiers
    .filter(tier => months >= tier.minMonths)
    .sort((a, b) => b.discountPercent - a.discountPercent)[0]
  
  if (applicableDiscount) {
    const discountAmount = totalPrice.multiply(applicableDiscount.discountPercent / 100)
    totalPrice = totalPrice.subtract(discountAmount)
  }
  
  return totalPrice
}

// Use date utilities for business logic
function calculateDueDate(invoiceDate: Date, paymentTerms: number): Date {
  return dateUtils.addDays(invoiceDate, paymentTerms)
}

function isOverdue(dueDate: Date): boolean {
  return dateUtils.isAfter(new Date(), dueDate)
}
```

## Configuration

The core package uses configuration from `@xalesin/config`. Make sure to set up your environment variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# API Configuration
API_BASE_URL=your_api_base_url
API_TIMEOUT=30000

# App Configuration
APP_NAME=Xalesin ERP
APP_VERSION=1.0.0
```

## Testing

The package includes comprehensive utilities for testing:

```typescript
import { ErrorFactory, Result, Money } from '@xalesin/core'

// Test error handling
test('should handle validation errors', () => {
  const error = ErrorFactory.createValidationError('Invalid email format')
  expect(error.code).toBe('VALIDATION_ERROR')
  expect(error.message).toBe('Invalid email format')
})

// Test business logic
test('should calculate money correctly', () => {
  const price1 = Money.create(100, 'USD')
  const price2 = Money.create(50, 'USD')
  const total = price1.add(price2)
  
  expect(total.amount.toNumber()).toBe(150)
  expect(total.currency).toBe('USD')
})

// Test Result pattern
test('should handle success and failure results', () => {
  const successResult = Result.success(42)
  const failureResult = Result.failure('Something went wrong')
  
  expect(successResult.isSuccess()).toBe(true)
  expect(successResult.getValue()).toBe(42)
  
  expect(failureResult.isFailure()).toBe(true)
  expect(failureResult.getError()).toBe('Something went wrong')
})
```

## Contributing

When contributing to the core package:

1. **Follow TypeScript best practices**
2. **Write comprehensive tests**
3. **Document new features**
4. **Follow the existing code style**
5. **Update this README if needed**

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

## Support

For support and questions:

- 📧 Email: support@xalesin.com
- 📖 Documentation: [docs.xalesin.com](https://docs.xalesin.com)
- 🐛 Issues: [GitHub Issues](https://github.com/xalesin/erp-xalesin/issues)

---

**Built with ❤️ by the Xalesin Team**