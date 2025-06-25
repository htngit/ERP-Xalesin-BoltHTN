# Task 8: Testing & Quality Assurance Framework

## 🎯 Objective
Implement comprehensive testing strategy and quality assurance framework for Xalesin ERP, including unit tests, integration tests, end-to-end tests, performance testing, security testing, and automated quality gates to ensure enterprise-grade reliability and maintainability.

## 📋 Requirements
- Implement multi-layered testing strategy (Unit, Integration, E2E)
- Setup automated testing pipelines with CI/CD integration
- Develop performance and load testing framework
- Create security testing and vulnerability scanning
- Implement code quality gates and metrics
- Setup test data management and fixtures
- Create comprehensive test documentation
- Implement test reporting and analytics

## 🏗️ Implementation Steps

### 1. Testing Infrastructure Setup
```json
// package.json - Testing dependencies
{
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/react-native": "^12.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.4.3",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "vitest": "^1.0.0",
    "@vitest/ui": "^1.0.0",
    "@vitest/coverage-v8": "^1.0.0",
    "playwright": "^1.40.0",
    "@playwright/test": "^1.40.0",
    "cypress": "^13.6.0",
    "@cypress/react": "^8.0.0",
    "supertest": "^6.3.3",
    "msw": "^2.0.0",
    "factory-bot": "^1.0.0",
    "faker": "^6.6.6",
    "artillery": "^2.0.0",
    "lighthouse": "^11.4.0",
    "axe-core": "^4.8.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",
    "commitizen": "^4.3.0",
    "@commitlint/cli": "^18.4.0",
    "@commitlint/config-conventional": "^18.4.0"
  },
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:unit": "vitest run --reporter=verbose",
    "test:integration": "vitest run --config vitest.integration.config.ts",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:mobile": "jest --config jest.mobile.config.js",
    "test:performance": "artillery run tests/performance/load-test.yml",
    "test:security": "npm audit && npm run test:security:snyk",
    "test:security:snyk": "snyk test",
    "test:accessibility": "axe-core tests/accessibility",
    "test:lighthouse": "lighthouse-ci",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "quality:check": "npm run lint && npm run format:check && npm run type-check",
    "test:all": "npm run quality:check && npm run test:unit && npm run test:integration && npm run test:e2e",
    "prepare": "husky install"
  }
}
```

### 2. Vitest Configuration for Unit & Integration Tests
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        '**/dist/**',
        '**/.next/**'
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    },
    testTimeout: 10000,
    hookTimeout: 10000,
    teardownTimeout: 10000,
    isolate: true,
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        isolate: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages'),
      '@core': path.resolve(__dirname, './packages/core/src'),
      '@ui': path.resolve(__dirname, './packages/ui/src'),
      '@web': path.resolve(__dirname, './apps/web/src'),
      '@mobile': path.resolve(__dirname, './apps/mobile/src')
    }
  }
})
```

### 3. Test Setup and Utilities
```typescript
// tests/setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { server } from './mocks/server'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from 'vitest'

// Mock Supabase
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    auth: {
      getSession: vi.fn(),
      getUser: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }))
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      update: vi.fn().mockReturnThis(),
      delete: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn(),
      order: vi.fn().mockReturnThis()
    })),
    channel: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn()
    }))
  }))
}))

// Mock React Native modules for web tests
vi.mock('react-native', () => ({
  Platform: { OS: 'web' },
  Dimensions: { get: vi.fn(() => ({ width: 375, height: 667 })) },
  StyleSheet: { create: vi.fn(styles => styles) }
}))

// Setup MSW
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => server.close())

// Global test utilities
global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

global.matchMedia = vi.fn((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn()
}))
```

### 4. Mock Service Worker (MSW) Setup
```typescript
// tests/mocks/server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)

// tests/mocks/handlers.ts
import { http, HttpResponse } from 'msw'
import { inventoryHandlers } from './inventory'
import { authHandlers } from './auth'
import { financialHandlers } from './financial'

export const handlers = [
  ...authHandlers,
  ...inventoryHandlers,
  ...financialHandlers,
  
  // Fallback handler
  http.all('*', ({ request }) => {
    console.warn(`Unhandled ${request.method} request to ${request.url}`)
    return HttpResponse.json(
      { error: 'Unhandled request' },
      { status: 404 }
    )
  })
]

// tests/mocks/auth.ts
import { http, HttpResponse } from 'msw'

export const authHandlers = [
  http.post('/auth/v1/token', async ({ request }) => {
    const body = await request.json()
    
    if (body.email === 'test@example.com' && body.password === 'password') {
      return HttpResponse.json({
        access_token: 'mock-access-token',
        refresh_token: 'mock-refresh-token',
        user: {
          id: 'user-1',
          email: 'test@example.com',
          user_metadata: { full_name: 'Test User' }
        }
      })
    }
    
    return HttpResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }),
  
  http.get('/auth/v1/user', () => {
    return HttpResponse.json({
      id: 'user-1',
      email: 'test@example.com',
      user_metadata: { full_name: 'Test User' }
    })
  })
]

// tests/mocks/inventory.ts
import { http, HttpResponse } from 'msw'
import { inventoryItems } from '../fixtures/inventory'

export const inventoryHandlers = [
  http.get('/rest/v1/inventory_items', ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('name')
    
    let items = inventoryItems
    if (search) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    
    return HttpResponse.json(items)
  }),
  
  http.post('/rest/v1/inventory_items', async ({ request }) => {
    const newItem = await request.json()
    return HttpResponse.json({
      ...newItem,
      id: `item-${Date.now()}`,
      created_at: new Date().toISOString()
    })
  }),
  
  http.patch('/rest/v1/inventory_items', async ({ request }) => {
    const updates = await request.json()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    const item = inventoryItems.find(item => item.id === id)
    if (!item) {
      return HttpResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      )
    }
    
    return HttpResponse.json({ ...item, ...updates })
  })
]
```

### 5. Test Fixtures and Factories
```typescript
// tests/fixtures/inventory.ts
export const inventoryItems = [
  {
    id: 'item-1',
    name: 'Laptop Dell XPS 13',
    sku: 'DELL-XPS13-001',
    description: 'High-performance ultrabook',
    category_id: 'cat-electronics',
    unit_price: 1299.99,
    cost_price: 999.99,
    quantity_on_hand: 25,
    quantity_reserved: 5,
    quantity_available: 20,
    reorder_point: 10,
    reorder_quantity: 50,
    status: 'active',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'item-2',
    name: 'Wireless Mouse',
    sku: 'MOUSE-WL-001',
    description: 'Ergonomic wireless mouse',
    category_id: 'cat-accessories',
    unit_price: 29.99,
    cost_price: 15.99,
    quantity_on_hand: 150,
    quantity_reserved: 10,
    quantity_available: 140,
    reorder_point: 50,
    reorder_quantity: 200,
    status: 'active',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

// tests/factories/InventoryFactory.ts
import { faker } from '@faker-js/faker'

export interface InventoryItemData {
  id?: string
  name?: string
  sku?: string
  description?: string
  category_id?: string
  unit_price?: number
  cost_price?: number
  quantity_on_hand?: number
  quantity_reserved?: number
  quantity_available?: number
  reorder_point?: number
  reorder_quantity?: number
  status?: 'active' | 'inactive' | 'discontinued'
  created_at?: string
  updated_at?: string
}

export class InventoryFactory {
  static create(overrides: InventoryItemData = {}): InventoryItemData {
    const basePrice = faker.number.float({ min: 10, max: 2000, precision: 0.01 })
    const costPrice = basePrice * 0.7 // 30% margin
    const quantityOnHand = faker.number.int({ min: 0, max: 500 })
    const quantityReserved = faker.number.int({ min: 0, max: quantityOnHand })
    
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      sku: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      description: faker.commerce.productDescription(),
      category_id: faker.string.uuid(),
      unit_price: basePrice,
      cost_price: costPrice,
      quantity_on_hand: quantityOnHand,
      quantity_reserved: quantityReserved,
      quantity_available: quantityOnHand - quantityReserved,
      reorder_point: faker.number.int({ min: 5, max: 50 }),
      reorder_quantity: faker.number.int({ min: 50, max: 200 }),
      status: faker.helpers.arrayElement(['active', 'inactive', 'discontinued']),
      created_at: faker.date.past().toISOString(),
      updated_at: faker.date.recent().toISOString(),
      ...overrides
    }
  }
  
  static createMany(count: number, overrides: InventoryItemData = {}): InventoryItemData[] {
    return Array.from({ length: count }, () => this.create(overrides))
  }
  
  static createLowStock(overrides: InventoryItemData = {}): InventoryItemData {
    return this.create({
      quantity_on_hand: 5,
      quantity_reserved: 0,
      quantity_available: 5,
      reorder_point: 10,
      ...overrides
    })
  }
  
  static createOutOfStock(overrides: InventoryItemData = {}): InventoryItemData {
    return this.create({
      quantity_on_hand: 0,
      quantity_reserved: 0,
      quantity_available: 0,
      ...overrides
    })
  }
}
```

### 6. Unit Tests Examples
```typescript
// packages/core/src/services/__tests__/InventoryService.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { InventoryService } from '../InventoryService'
import { InventoryFactory } from '../../../../tests/factories/InventoryFactory'
import { supabase } from '../../lib/supabase'

// Mock the supabase client
vi.mock('../../lib/supabase')

describe('InventoryService', () => {
  let inventoryService: InventoryService
  
  beforeEach(() => {
    inventoryService = new InventoryService()
    vi.clearAllMocks()
  })
  
  describe('getItems', () => {
    it('should fetch inventory items successfully', async () => {
      const mockItems = InventoryFactory.createMany(3)
      
      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        order: vi.fn().mockResolvedValue({ data: mockItems, error: null })
      } as any)
      
      const result = await inventoryService.getItems('tenant-1')
      
      expect(result).toEqual(mockItems)
      expect(supabase.from).toHaveBeenCalledWith('inventory_items')
    })
    
    it('should handle errors when fetching items', async () => {
      const mockError = new Error('Database error')
      
      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        order: vi.fn().mockResolvedValue({ data: null, error: mockError })
      } as any)
      
      await expect(inventoryService.getItems('tenant-1')).rejects.toThrow('Database error')
    })
  })
  
  describe('createItem', () => {
    it('should create a new inventory item', async () => {
      const newItem = InventoryFactory.create({ name: 'Test Item' })
      const createdItem = { ...newItem, id: 'new-id' }
      
      vi.mocked(supabase.from).mockReturnValue({
        insert: vi.fn().mockReturnThis(),
        select: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: createdItem, error: null })
      } as any)
      
      const result = await inventoryService.createItem('tenant-1', newItem)
      
      expect(result).toEqual(createdItem)
      expect(supabase.from).toHaveBeenCalledWith('inventory_items')
    })
    
    it('should validate required fields', async () => {
      const invalidItem = { name: '' } // Missing required fields
      
      await expect(
        inventoryService.createItem('tenant-1', invalidItem as any)
      ).rejects.toThrow('Validation error')
    })
  })
  
  describe('updateStock', () => {
    it('should update stock levels correctly', async () => {
      const itemId = 'item-1'
      const quantityChange = 10
      const currentItem = InventoryFactory.create({
        id: itemId,
        quantity_on_hand: 50,
        quantity_available: 45
      })
      
      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: currentItem, error: null }),
        update: vi.fn().mockReturnThis()
      } as any)
      
      await inventoryService.updateStock('tenant-1', itemId, quantityChange, 'adjustment')
      
      expect(supabase.from).toHaveBeenCalledWith('inventory_items')
    })
    
    it('should prevent negative stock levels', async () => {
      const itemId = 'item-1'
      const quantityChange = -100
      const currentItem = InventoryFactory.create({
        id: itemId,
        quantity_on_hand: 50,
        quantity_available: 45
      })
      
      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: currentItem, error: null })
      } as any)
      
      await expect(
        inventoryService.updateStock('tenant-1', itemId, quantityChange, 'sale')
      ).rejects.toThrow('Insufficient stock')
    })
  })
  
  describe('getLowStockItems', () => {
    it('should return items below reorder point', async () => {
      const lowStockItems = [
        InventoryFactory.createLowStock(),
        InventoryFactory.createOutOfStock()
      ]
      
      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        lt: vi.fn().mockReturnThis(),
        order: vi.fn().mockResolvedValue({ data: lowStockItems, error: null })
      } as any)
      
      const result = await inventoryService.getLowStockItems('tenant-1')
      
      expect(result).toEqual(lowStockItems)
      expect(result).toHaveLength(2)
    })
  })
})

// packages/ui/src/components/__tests__/Button.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../tamagui.config'

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={config}>
    {children}
  </TamaguiProvider>
)

describe('Button', () => {
  it('renders with correct text', () => {
    render(
      <TestWrapper>
        <Button>Click me</Button>
      </TestWrapper>
    )
    
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
  
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    
    render(
      <TestWrapper>
        <Button onPress={handleClick}>Click me</Button>
      </TestWrapper>
    )
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('applies variant styles correctly', () => {
    render(
      <TestWrapper>
        <Button variant="primary">Primary Button</Button>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('variant-primary')
  })
  
  it('is disabled when disabled prop is true', () => {
    render(
      <TestWrapper>
        <Button disabled>Disabled Button</Button>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
  
  it('shows loading state correctly', () => {
    render(
      <TestWrapper>
        <Button loading>Loading Button</Button>
      </TestWrapper>
    )
    
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

### 7. Integration Tests
```typescript
// tests/integration/inventory.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InventoryListPage } from '../../apps/web/src/pages/InventoryListPage'
import { TestProviders } from '../utils/TestProviders'
import { InventoryFactory } from '../factories/InventoryFactory'
import { server } from '../mocks/server'
import { http, HttpResponse } from 'msw'

describe('Inventory Management Integration', () => {
  const user = userEvent.setup()
  
  beforeEach(() => {
    // Setup test data
    const mockItems = InventoryFactory.createMany(5)
    
    server.use(
      http.get('/rest/v1/inventory_items', () => {
        return HttpResponse.json(mockItems)
      })
    )
  })
  
  it('should display inventory items and allow searching', async () => {
    render(
      <TestProviders>
        <InventoryListPage />
      </TestProviders>
    )
    
    // Wait for items to load
    await waitFor(() => {
      expect(screen.getByText('Inventory Items')).toBeInTheDocument()
    })
    
    // Check if items are displayed
    expect(screen.getAllByTestId('inventory-item')).toHaveLength(5)
    
    // Test search functionality
    const searchInput = screen.getByPlaceholderText('Search items...')
    await user.type(searchInput, 'Laptop')
    
    await waitFor(() => {
      expect(screen.getAllByTestId('inventory-item')).toHaveLength(1)
    })
  })
  
  it('should create new inventory item', async () => {
    const newItem = InventoryFactory.create({ name: 'New Test Item' })
    
    server.use(
      http.post('/rest/v1/inventory_items', async ({ request }) => {
        const body = await request.json()
        return HttpResponse.json({ ...body, id: 'new-item-id' })
      })
    )
    
    render(
      <TestProviders>
        <InventoryListPage />
      </TestProviders>
    )
    
    // Click add new item button
    const addButton = screen.getByText('Add Item')
    await user.click(addButton)
    
    // Fill form
    await user.type(screen.getByLabelText('Name'), newItem.name!)
    await user.type(screen.getByLabelText('SKU'), newItem.sku!)
    await user.type(screen.getByLabelText('Unit Price'), newItem.unit_price!.toString())
    
    // Submit form
    const submitButton = screen.getByText('Create Item')
    await user.click(submitButton)
    
    // Verify success message
    await waitFor(() => {
      expect(screen.getByText('Item created successfully')).toBeInTheDocument()
    })
  })
  
  it('should handle stock updates', async () => {
    const itemId = 'item-1'
    
    server.use(
      http.patch(`/rest/v1/inventory_items`, async ({ request }) => {
        const body = await request.json()
        return HttpResponse.json({ id: itemId, ...body })
      })
    )
    
    render(
      <TestProviders>
        <InventoryListPage />
      </TestProviders>
    )
    
    // Find and click stock adjustment button
    const adjustButton = screen.getAllByText('Adjust Stock')[0]
    await user.click(adjustButton)
    
    // Enter adjustment
    const quantityInput = screen.getByLabelText('Quantity Change')
    await user.type(quantityInput, '10')
    
    // Submit adjustment
    const submitButton = screen.getByText('Update Stock')
    await user.click(submitButton)
    
    // Verify success
    await waitFor(() => {
      expect(screen.getByText('Stock updated successfully')).toBeInTheDocument()
    })
  })
})
```

### 8. End-to-End Tests with Playwright
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }
    }
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI
  }
})

// tests/e2e/inventory-workflow.spec.ts
import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { InventoryPage } from './pages/InventoryPage'

test.describe('Inventory Management Workflow', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login('test@example.com', 'password')
  })
  
  test('should complete full inventory management workflow', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    
    // Navigate to inventory
    await inventoryPage.goto()
    
    // Verify page loaded
    await expect(page.getByText('Inventory Management')).toBeVisible()
    
    // Create new item
    await inventoryPage.clickAddItem()
    await inventoryPage.fillItemForm({
      name: 'E2E Test Item',
      sku: 'E2E-001',
      unitPrice: '99.99',
      costPrice: '69.99',
      quantity: '100'
    })
    await inventoryPage.submitForm()
    
    // Verify item created
    await expect(page.getByText('E2E Test Item')).toBeVisible()
    
    // Search for item
    await inventoryPage.searchItems('E2E Test Item')
    await expect(page.getByTestId('inventory-item')).toHaveCount(1)
    
    // Update stock
    await inventoryPage.adjustStock('E2E Test Item', 50)
    await expect(page.getByText('150')).toBeVisible() // New quantity
    
    // Delete item
    await inventoryPage.deleteItem('E2E Test Item')
    await expect(page.getByText('E2E Test Item')).not.toBeVisible()
  })
  
  test('should handle low stock alerts', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    
    await inventoryPage.goto()
    
    // Create item with low stock
    await inventoryPage.clickAddItem()
    await inventoryPage.fillItemForm({
      name: 'Low Stock Item',
      sku: 'LOW-001',
      unitPrice: '29.99',
      quantity: '5',
      reorderPoint: '10'
    })
    await inventoryPage.submitForm()
    
    // Check for low stock indicator
    await expect(page.getByTestId('low-stock-indicator')).toBeVisible()
    
    // Navigate to low stock report
    await page.getByText('Low Stock Report').click()
    await expect(page.getByText('Low Stock Item')).toBeVisible()
  })
})

// tests/e2e/pages/InventoryPage.ts
import { Page, Locator } from '@playwright/test'

export class InventoryPage {
  readonly page: Page
  readonly addItemButton: Locator
  readonly searchInput: Locator
  readonly itemForm: Locator
  
  constructor(page: Page) {
    this.page = page
    this.addItemButton = page.getByText('Add Item')
    this.searchInput = page.getByPlaceholder('Search items...')
    this.itemForm = page.getByTestId('item-form')
  }
  
  async goto() {
    await this.page.goto('/inventory')
  }
  
  async clickAddItem() {
    await this.addItemButton.click()
  }
  
  async fillItemForm(data: {
    name: string
    sku: string
    unitPrice: string
    costPrice?: string
    quantity: string
    reorderPoint?: string
  }) {
    await this.page.getByLabel('Name').fill(data.name)
    await this.page.getByLabel('SKU').fill(data.sku)
    await this.page.getByLabel('Unit Price').fill(data.unitPrice)
    
    if (data.costPrice) {
      await this.page.getByLabel('Cost Price').fill(data.costPrice)
    }
    
    await this.page.getByLabel('Quantity').fill(data.quantity)
    
    if (data.reorderPoint) {
      await this.page.getByLabel('Reorder Point').fill(data.reorderPoint)
    }
  }
  
  async submitForm() {
    await this.page.getByText('Create Item').click()
  }
  
  async searchItems(query: string) {
    await this.searchInput.fill(query)
    await this.page.keyboard.press('Enter')
  }
  
  async adjustStock(itemName: string, quantity: number) {
    const itemRow = this.page.getByText(itemName).locator('..')
    await itemRow.getByText('Adjust Stock').click()
    await this.page.getByLabel('Quantity Change').fill(quantity.toString())
    await this.page.getByText('Update Stock').click()
  }
  
  async deleteItem(itemName: string) {
    const itemRow = this.page.getByText(itemName).locator('..')
    await itemRow.getByText('Delete').click()
    await this.page.getByText('Confirm Delete').click()
  }
}
```

### 9. Performance Testing
```yaml
# tests/performance/load-test.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Ramp up load"
    - duration: 300
      arrivalRate: 100
      name: "Sustained load"
  processor: "./load-test-processor.js"
  
scenarios:
  - name: "Inventory Management Workflow"
    weight: 70
    flow:
      - post:
          url: "/api/auth/login"
          json:
            email: "test@example.com"
            password: "password"
          capture:
            - json: "$.access_token"
              as: "token"
      - get:
          url: "/api/inventory/items"
          headers:
            Authorization: "Bearer {{ token }}"
      - post:
          url: "/api/inventory/items"
          headers:
            Authorization: "Bearer {{ token }}"
          json:
            name: "Load Test Item {{ $randomString() }}"
            sku: "LT-{{ $randomString() }}"
            unit_price: 99.99
            quantity_on_hand: 100
      - get:
          url: "/api/inventory/items/search?q=Load"
          headers:
            Authorization: "Bearer {{ token }}"
            
  - name: "Dashboard Analytics"
    weight: 20
    flow:
      - post:
          url: "/api/auth/login"
          json:
            email: "test@example.com"
            password: "password"
          capture:
            - json: "$.access_token"
              as: "token"
      - get:
          url: "/api/dashboard/stats"
          headers:
            Authorization: "Bearer {{ token }}"
      - get:
          url: "/api/reports/inventory-summary"
          headers:
            Authorization: "Bearer {{ token }}"
            
  - name: "Real-time Updates"
    weight: 10
    flow:
      - post:
          url: "/api/auth/login"
          json:
            email: "test@example.com"
            password: "password"
          capture:
            - json: "$.access_token"
              as: "token"
      - ws:
          url: "ws://localhost:3000/realtime"
          headers:
            Authorization: "Bearer {{ token }}"
```

### 10. Security Testing
```typescript
// tests/security/auth.security.test.ts
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../../apps/api/src/app'

describe('Authentication Security', () => {
  describe('SQL Injection Protection', () => {
    it('should prevent SQL injection in login', async () => {
      const maliciousPayload = {
        email: "admin@example.com'; DROP TABLE users; --",
        password: "password"
      }
      
      const response = await request(app)
        .post('/api/auth/login')
        .send(maliciousPayload)
        .expect(401)
      
      expect(response.body.error).toBe('Invalid credentials')
    })
  })
  
  describe('Rate Limiting', () => {
    it('should rate limit login attempts', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'wrongpassword'
      }
      
      // Make multiple failed attempts
      for (let i = 0; i < 6; i++) {
        await request(app)
          .post('/api/auth/login')
          .send(loginData)
      }
      
      // Next attempt should be rate limited
      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(429)
      
      expect(response.body.error).toContain('Too many requests')
    })
  })
  
  describe('XSS Protection', () => {
    it('should sanitize user input', async () => {
      const xssPayload = {
        name: '<script>alert("XSS")</script>',
        email: 'test@example.com'
      }
      
      const response = await request(app)
        .post('/api/users/profile')
        .send(xssPayload)
        .set('Authorization', 'Bearer valid-token')
      
      expect(response.body.name).not.toContain('<script>')
    })
  })
  
  describe('CSRF Protection', () => {
    it('should require CSRF token for state-changing operations', async () => {
      const response = await request(app)
        .post('/api/inventory/items')
        .send({ name: 'Test Item' })
        .set('Authorization', 'Bearer valid-token')
        // Missing CSRF token
        .expect(403)
      
      expect(response.body.error).toContain('CSRF')
    })
  })
})
```

### 11. Quality Gates and CI/CD Integration
```yaml
# .github/workflows/quality-gates.yml
name: Quality Gates

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main, develop]

jobs:
  quality-check:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type checking
        run: npm run type-check
      
      - name: Linting
        run: npm run lint
      
      - name: Code formatting
        run: npm run format:check
      
      - name: Unit tests
        run: npm run test:unit
      
      - name: Integration tests
        run: npm run test:integration
      
      - name: Coverage check
        run: npm run test:coverage
        
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
      
      - name: Security audit
        run: npm run test:security
      
      - name: Performance tests
        run: npm run test:performance
        if: github.event_name == 'push'
      
      - name: E2E tests
        run: npm run test:e2e
        if: github.event_name == 'push'
      
      - name: Quality gate check
        run: |
          if [ "$(npm run test:coverage --silent | grep -o '[0-9]*\.[0-9]*' | head -1)" \< "80" ]; then
            echo "Coverage below 80%"
            exit 1
          fi
```

### 12. Test Reporting and Analytics
```typescript
// tests/utils/TestReporter.ts
import fs from 'fs'
import path from 'path'

export interface TestMetrics {
  totalTests: number
  passedTests: number
  failedTests: number
  skippedTests: number
  coverage: {
    lines: number
    functions: number
    branches: number
    statements: number
  }
  duration: number
  performance: {
    averageResponseTime: number
    maxResponseTime: number
    throughput: number
  }
}

export class TestReporter {
  static generateReport(metrics: TestMetrics): void {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: metrics.totalTests,
        passed: metrics.passedTests,
        failed: metrics.failedTests,
        skipped: metrics.skippedTests,
        successRate: (metrics.passedTests / metrics.totalTests) * 100
      },
      coverage: metrics.coverage,
      performance: metrics.performance,
      duration: metrics.duration
    }
    
    // Save to file
    const reportPath = path.join(process.cwd(), 'test-results', 'report.json')
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    
    // Generate HTML report
    this.generateHTMLReport(report)
    
    // Send to analytics service
    this.sendToAnalytics(report)
  }
  
  private static generateHTMLReport(report: any): void {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Test Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .metric { margin: 10px 0; }
          .success { color: green; }
          .failure { color: red; }
          .coverage { background: #f5f5f5; padding: 10px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>Test Report</h1>
        <div class="metric">Generated: ${report.timestamp}</div>
        <div class="metric">Duration: ${report.duration}ms</div>
        
        <h2>Test Summary</h2>
        <div class="metric">Total Tests: ${report.summary.total}</div>
        <div class="metric success">Passed: ${report.summary.passed}</div>
        <div class="metric failure">Failed: ${report.summary.failed}</div>
        <div class="metric">Success Rate: ${report.summary.successRate.toFixed(2)}%</div>
        
        <h2>Coverage</h2>
        <div class="coverage">
          <div>Lines: ${report.coverage.lines}%</div>
          <div>Functions: ${report.coverage.functions}%</div>
          <div>Branches: ${report.coverage.branches}%</div>
          <div>Statements: ${report.coverage.statements}%</div>
        </div>
        
        <h2>Performance</h2>
        <div class="metric">Average Response Time: ${report.performance.averageResponseTime}ms</div>
        <div class="metric">Max Response Time: ${report.performance.maxResponseTime}ms</div>
        <div class="metric">Throughput: ${report.performance.throughput} req/s</div>
      </body>
      </html>
    `
    
    const htmlPath = path.join(process.cwd(), 'test-results', 'report.html')
    fs.writeFileSync(htmlPath, html)
  }
  
  private static async sendToAnalytics(report: any): Promise<void> {
    // Send metrics to analytics service (e.g., DataDog, New Relic)
    try {
      // Implementation depends on your analytics service
      console.log('Test metrics sent to analytics service')
    } catch (error) {
      console.error('Failed to send metrics to analytics:', error)
    }
  }
}
```

## ✅ Acceptance Criteria
- [ ] Unit test coverage above 80% for all core modules
- [ ] Integration tests cover critical user workflows
- [ ] End-to-end tests validate complete user journeys
- [ ] Performance tests ensure response times under SLA
- [ ] Security tests prevent common vulnerabilities
- [ ] Automated quality gates block failing builds
- [ ] Test reports provide comprehensive metrics
- [ ] CI/CD pipeline includes all test types
- [ ] Test data management is automated
- [ ] Accessibility tests ensure WCAG compliance

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 2: Database Architecture & Supabase Setup
- Task 3: Shared Business Logic Layer
- Task 4: Universal UI Components
- Task 5: Web Application Development
- Task 6: Mobile Application Development
- Task 7: Authentication & Security

## 📊 Estimated Effort
- **Complexity**: Very High
- **Time Estimate**: 40-50 hours
- **Priority**: Critical (Quality Assurance)

## 📝 Notes
- Implement test-driven development (TDD) practices
- Setup continuous testing in development environment
- Create test documentation and best practices guide
- Plan for test maintenance and updates
- Implement visual regression testing for UI components
- Add accessibility testing with axe-core
- Setup performance monitoring and alerting

## 🎯 Success Metrics
- Test coverage above 80% across all modules
- Zero critical security vulnerabilities
- Performance tests pass with 95th percentile under 2s
- E2E test success rate above 95%
- Build pipeline execution time under 15 minutes
- Zero production bugs from untested code paths
- Developer productivity metrics show testing efficiency

## 🔧 Testing Tools & Technologies
- **Unit Testing**: Vitest, Jest, React Testing Library
- **Integration Testing**: Supertest, MSW
- **E2E Testing**: Playwright, Cypress
- **Performance Testing**: Artillery, Lighthouse
- **Security Testing**: Snyk, OWASP ZAP
- **Accessibility Testing**: axe-core, Pa11y
- **Visual Testing**: Percy, Chromatic
- **Mobile Testing**: Detox, Appium