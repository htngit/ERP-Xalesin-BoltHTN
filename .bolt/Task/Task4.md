# Task 4: Universal UI Components & Tamagui Setup

## 🎯 Objective
Develop a comprehensive cross-platform UI component library using Tamagui that provides consistent, responsive, and accessible components for both web and mobile applications.

## 📋 Requirements
- Setup Tamagui configuration for cross-platform compatibility
- Create reusable UI components for ERP functionality
- Implement responsive design patterns
- Develop form components with validation
- Create data display components (tables, cards, lists)
- Implement navigation and layout components

## 🏗️ Implementation Steps

### 1. Tamagui Configuration Setup
```typescript
// packages/ui/tamagui.config.ts
import { createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'

const interFont = createInterFont()

const appConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    heading: interFont,
    body: interFont,
  },
  themes: {
    ...config.themes,
    // Custom ERP themes
    light_erp: {
      ...config.themes.light,
      primary: '#2563eb',
      secondary: '#64748b',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      background: '#ffffff',
      surface: '#f8fafc',
    },
    dark_erp: {
      ...config.themes.dark,
      primary: '#3b82f6',
      secondary: '#94a3b8',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      background: '#0f172a',
      surface: '#1e293b',
    }
  },
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

export default appConfig
export type AppConfig = typeof appConfig
```

### 2. Core UI Components

#### Button Components
```typescript
// components/Button/Button.tsx
import { Button as TamaguiButton, ButtonProps, styled } from '@tamagui/core'
import { forwardRef } from 'react'

export const Button = styled(TamaguiButton, {
  name: 'ERPButton',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$primary',
        borderWidth: 1,
        color: '$primary',
        hoverStyle: {
          backgroundColor: '$primaryLight',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
        hoverStyle: {
          backgroundColor: '$primaryLight',
        },
      },
      danger: {
        backgroundColor: '$error',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$errorHover',
        },
      },
    },
    size: {
      sm: {
        height: '$3',
        paddingHorizontal: '$3',
        fontSize: '$3',
      },
      md: {
        height: '$4',
        paddingHorizontal: '$4',
        fontSize: '$4',
      },
      lg: {
        height: '$5',
        paddingHorizontal: '$5',
        fontSize: '$5',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
```

#### Form Components
```typescript
// components/Form/Input.tsx
import { Input as TamaguiInput, Label, YStack, Text } from '@tamagui/core'
import { forwardRef } from 'react'

interface InputProps {
  label?: string
  error?: string
  required?: boolean
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
}

export const Input = forwardRef<any, InputProps>((
  { label, error, required, ...props },
  ref
) => {
  return (
    <YStack space="$2">
      {label && (
        <Label htmlFor={props.id}>
          {label}
          {required && <Text color="$error"> *</Text>}
        </Label>
      )}
      <TamaguiInput
        ref={ref}
        borderColor={error ? '$error' : '$borderColor'}
        focusStyle={{
          borderColor: error ? '$error' : '$primary',
        }}
        {...props}
      />
      {error && (
        <Text color="$error" fontSize="$2">
          {error}
        </Text>
      )}
    </YStack>
  )
})

// components/Form/Select.tsx
import { Select as TamaguiSelect, Adapt, Sheet } from '@tamagui/select'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
}

export const Select = ({ options, label, error, ...props }: SelectProps) => {
  return (
    <YStack space="$2">
      {label && <Label>{label}</Label>}
      <TamaguiSelect {...props}>
        <TamaguiSelect.Trigger iconAfter={ChevronDown}>
          <TamaguiSelect.Value placeholder={props.placeholder} />
        </TamaguiSelect.Trigger>
        
        <Adapt when="sm" platform="touch">
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>
        
        <TamaguiSelect.Content zIndex={200000}>
          <TamaguiSelect.ScrollUpButton>
            <ChevronUp size={20} />
          </TamaguiSelect.ScrollUpButton>
          
          <TamaguiSelect.Viewport>
            {options.map((option) => (
              <TamaguiSelect.Item key={option.value} value={option.value}>
                <TamaguiSelect.ItemText>{option.label}</TamaguiSelect.ItemText>
                <TamaguiSelect.ItemIndicator marginLeft="auto">
                  <Check size={16} />
                </TamaguiSelect.ItemIndicator>
              </TamaguiSelect.Item>
            ))}
          </TamaguiSelect.Viewport>
          
          <TamaguiSelect.ScrollDownButton>
            <ChevronDown size={20} />
          </TamaguiSelect.ScrollDownButton>
        </TamaguiSelect.Content>
      </TamaguiSelect>
      
      {error && (
        <Text color="$error" fontSize="$2">
          {error}
        </Text>
      )}
    </YStack>
  )
}
```

#### Data Display Components
```typescript
// components/DataDisplay/DataTable.tsx
import { ScrollView, XStack, YStack, Text } from '@tamagui/core'
import { Card } from '../Layout/Card'

interface Column<T> {
  key: keyof T
  title: string
  width?: number
  render?: (value: any, record: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  onRowPress?: (record: T) => void
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading,
  onRowPress,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <Card>
        <Text>Loading...</Text>
      </Card>
    )
  }

  return (
    <Card>
      <ScrollView horizontal>
        <YStack>
          {/* Header */}
          <XStack backgroundColor="$surface" padding="$3" borderBottomWidth={1} borderBottomColor="$borderColor">
            {columns.map((column) => (
              <Text
                key={String(column.key)}
                width={column.width || 150}
                fontWeight="600"
                fontSize="$3"
              >
                {column.title}
              </Text>
            ))}
          </XStack>
          
          {/* Rows */}
          {data.map((record, index) => (
            <XStack
              key={index}
              padding="$3"
              borderBottomWidth={1}
              borderBottomColor="$borderColor"
              pressStyle={{ backgroundColor: '$backgroundHover' }}
              onPress={() => onRowPress?.(record)}
            >
              {columns.map((column) => (
                <YStack key={String(column.key)} width={column.width || 150}>
                  {column.render
                    ? column.render(record[column.key], record)
                    : <Text fontSize="$3">{String(record[column.key] || '')}</Text>
                  }
                </YStack>
              ))}
            </XStack>
          ))}
        </YStack>
      </ScrollView>
    </Card>
  )
}
```

#### Layout Components
```typescript
// components/Layout/Card.tsx
import { styled, YStack } from '@tamagui/core'

export const Card = styled(YStack, {
  name: 'Card',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
})

// components/Layout/Page.tsx
import { YStack, XStack, Text, Separator } from '@tamagui/core'
import { ReactNode } from 'react'

interface PageProps {
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export const Page = ({ title, subtitle, actions, children }: PageProps) => {
  return (
    <YStack flex={1} backgroundColor="$backgroundSoft" padding="$4">
      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
        <YStack>
          <Text fontSize="$8" fontWeight="600" color="$color">
            {title}
          </Text>
          {subtitle && (
            <Text fontSize="$4" color="$colorPress" marginTop="$1">
              {subtitle}
            </Text>
          )}
        </YStack>
        {actions && <XStack space="$2">{actions}</XStack>}
      </XStack>
      
      <Separator marginBottom="$4" />
      
      {/* Content */}
      <YStack flex={1}>
        {children}
      </YStack>
    </YStack>
  )
}
```

### 3. ERP-Specific Components

#### Inventory Components
```typescript
// components/Inventory/StockLevelIndicator.tsx
import { XStack, Text, Circle } from '@tamagui/core'

interface StockLevelIndicatorProps {
  current: number
  minimum: number
  maximum?: number
}

export const StockLevelIndicator = ({ current, minimum, maximum }: StockLevelIndicatorProps) => {
  const getStatus = () => {
    if (current <= 0) return { color: '$error', label: 'Out of Stock' }
    if (current <= minimum) return { color: '$warning', label: 'Low Stock' }
    if (maximum && current >= maximum) return { color: '$info', label: 'Overstock' }
    return { color: '$success', label: 'In Stock' }
  }
  
  const status = getStatus()
  
  return (
    <XStack alignItems="center" space="$2">
      <Circle size={8} backgroundColor={status.color} />
      <Text fontSize="$2" color={status.color}>
        {status.label}
      </Text>
      <Text fontSize="$2" color="$colorPress">
        ({current} units)
      </Text>
    </XStack>
  )
}

// components/Inventory/ItemCard.tsx
import { Card } from '../Layout/Card'
import { XStack, YStack, Text, Image } from '@tamagui/core'
import { StockLevelIndicator } from './StockLevelIndicator'

interface ItemCardProps {
  item: {
    id: string
    name: string
    sku: string
    image?: string
    currentStock: number
    minimumStock: number
    unitPrice: number
  }
  onPress?: () => void
}

export const ItemCard = ({ item, onPress }: ItemCardProps) => {
  return (
    <Card pressStyle={{ scale: 0.98 }} onPress={onPress}>
      <XStack space="$3">
        {item.image && (
          <Image
            source={{ uri: item.image }}
            width={60}
            height={60}
            borderRadius="$2"
          />
        )}
        <YStack flex={1} space="$2">
          <Text fontSize="$5" fontWeight="600">
            {item.name}
          </Text>
          <Text fontSize="$3" color="$colorPress">
            SKU: {item.sku}
          </Text>
          <StockLevelIndicator
            current={item.currentStock}
            minimum={item.minimumStock}
          />
          <Text fontSize="$4" fontWeight="500" color="$primary">
            ${item.unitPrice.toFixed(2)}
          </Text>
        </YStack>
      </XStack>
    </Card>
  )
}
```

### 4. Form Validation Integration
```typescript
// components/Form/FormProvider.tsx
import { createContext, useContext } from 'react'
import { useForm, FormProvider as RHFProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface FormContextValue {
  errors: Record<string, any>
  register: any
  handleSubmit: any
  watch: any
  setValue: any
  getValues: any
}

const FormContext = createContext<FormContextValue | null>(null)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider')
  }
  return context
}

interface FormProviderProps {
  schema: z.ZodSchema
  onSubmit: (data: any) => void
  defaultValues?: any
  children: React.ReactNode
}

export const FormProvider = ({ schema, onSubmit, defaultValues, children }: FormProviderProps) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })
  
  return (
    <RHFProvider {...methods}>
      <FormContext.Provider value={methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormContext.Provider>
    </RHFProvider>
  )
}
```

### 5. Responsive Design Patterns
```typescript
// hooks/useResponsive.ts
import { useMedia } from '@tamagui/core'

export const useResponsive = () => {
  const media = useMedia()
  
  return {
    isMobile: media.xs || media.sm,
    isTablet: media.md,
    isDesktop: media.lg || media.xl || media.xxl,
    gtMobile: media.gtSm,
    gtTablet: media.gtMd,
  }
}

// components/Layout/ResponsiveGrid.tsx
import { XStack, YStack } from '@tamagui/core'
import { useResponsive } from '../../hooks/useResponsive'

interface ResponsiveGridProps {
  children: React.ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

export const ResponsiveGrid = ({ children, columns = { mobile: 1, tablet: 2, desktop: 3 } }: ResponsiveGridProps) => {
  const { isMobile, isTablet, isDesktop } = useResponsive()
  
  const getColumns = () => {
    if (isMobile) return columns.mobile || 1
    if (isTablet) return columns.tablet || 2
    return columns.desktop || 3
  }
  
  const columnCount = getColumns()
  
  return (
    <XStack flexWrap="wrap" space="$3">
      {React.Children.map(children, (child, index) => (
        <YStack
          key={index}
          width={`${100 / columnCount}%`}
          paddingRight={index % columnCount === columnCount - 1 ? 0 : '$3'}
        >
          {child}
        </YStack>
      ))}
    </XStack>
  )
}
```

## ✅ Acceptance Criteria
- [ ] Tamagui is properly configured for cross-platform use
- [ ] Core UI components are implemented and tested
- [ ] Form components integrate with validation libraries
- [ ] Data display components handle large datasets efficiently
- [ ] Layout components provide consistent spacing and structure
- [ ] ERP-specific components meet business requirements
- [ ] Responsive design works across all screen sizes
- [ ] Components are accessible and follow WCAG guidelines
- [ ] Theming system supports light/dark modes
- [ ] Performance is optimized for both web and mobile

## 🔗 Dependencies
- Task 1: Project Infrastructure Setup
- Task 3: Shared Business Logic Layer (for type definitions)

## 📊 Estimated Effort
- **Complexity**: High
- **Time Estimate**: 14-18 hours
- **Priority**: Critical (Blocking)

## 📝 Notes
- Focus on reusability and consistency across platforms
- Implement comprehensive accessibility features
- Optimize for performance on mobile devices
- Create comprehensive Storybook documentation
- Follow design system principles for scalability

## 🎯 Success Metrics
- Components render consistently across web and mobile
- Performance benchmarks meet target metrics
- Accessibility audit passes with high scores
- Developer experience is smooth with good TypeScript support
- Design system is easily extensible for new components

## 🎨 Design Considerations
- Follow Material Design 3 and iOS Human Interface Guidelines
- Implement consistent spacing and typography scales
- Support both light and dark themes
- Ensure touch targets meet accessibility requirements
- Optimize for different screen densities and sizes