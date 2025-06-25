/**
 * Xalesin ERP UI Components
 * Export all shared UI components
 */

// Core components
export { Button, type ButtonProps } from './Button'
export { Input, type InputProps } from './Input'
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './Card'
export { DataTable, type DataTableProps, type Column, type SortConfig, type PaginationConfig } from './DataTable'

// Re-export commonly used Tamagui components with consistent styling
export {
  YStack,
  XStack,
  ZStack,
  Text,
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  ScrollView,
  Separator,
  Spinner,
  Switch,
  Tabs,
  Sheet,
  Dialog,
  Popover,
  Toast,
  Avatar,
  Progress,
  Slider,
  RadioGroup,
  Checkbox,
  Select,
  Form,
  Label,
  Fieldset,
  Legend,
} from 'tamagui'

// Re-export Tamagui icons
export * from '@tamagui/lucide-icons'