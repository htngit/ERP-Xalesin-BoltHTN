/**
 * Xalesin ERP UI Type Definitions
 * Common types used across UI components
 */

import { ReactNode } from 'react'
import { SizeTokens, ColorTokens } from '@tamagui/core'

/**
 * Common component props
 */
export interface BaseComponentProps {
  id?: string
  className?: string
  testId?: string
  children?: ReactNode
}

/**
 * Size variants for components
 */
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Color variants for components
 */
export type ComponentVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'ghost'
  | 'outline'

/**
 * Button specific types
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: ComponentVariant
  size?: ComponentSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onPress?: () => void
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

/**
 * Input specific types
 */
export interface InputProps extends BaseComponentProps {
  label?: string
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  error?: string
  helperText?: string
  size?: ComponentSize
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  autoComplete?: string
  autoFocus?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
}

/**
 * Card specific types
 */
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'filled'
  size?: ComponentSize
  interactive?: boolean
  title?: string
  description?: string
  header?: ReactNode
  footer?: ReactNode
  onPress?: () => void
}

/**
 * Data table types
 */
export interface DataTableColumn<T = any> {
  key: string
  title: string
  dataIndex?: keyof T
  width?: number | string
  sortable?: boolean
  filterable?: boolean
  align?: 'left' | 'center' | 'right'
  render?: (value: any, record: T, index: number) => ReactNode
  sorter?: (a: T, b: T) => number
  filter?: {
    type: 'text' | 'select' | 'date' | 'number'
    options?: { label: string; value: any }[]
  }
}

export interface DataTableProps<T = any> extends BaseComponentProps {
  columns: DataTableColumn<T>[]
  data: T[]
  loading?: boolean
  rowKey?: keyof T | ((record: T) => string)
  selectable?: boolean
  selectedRows?: string[]
  onSelectionChange?: (selectedRows: string[]) => void
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  onSort?: (sortBy: string, sortOrder: 'asc' | 'desc') => void
  filters?: Record<string, any>
  onFilter?: (filters: Record<string, any>) => void
  emptyText?: string
  rowClassName?: (record: T, index: number) => string
  onRowClick?: (record: T, index: number) => void
}

/**
 * Form types
 */
export interface FormFieldProps extends BaseComponentProps {
  name: string
  label?: string
  required?: boolean
  error?: string
  helperText?: string
  disabled?: boolean
}

export interface SelectOption {
  label: string
  value: any
  disabled?: boolean
  group?: string
}

export interface SelectProps extends FormFieldProps {
  options: SelectOption[]
  value?: any
  defaultValue?: any
  placeholder?: string
  searchable?: boolean
  multiple?: boolean
  clearable?: boolean
  size?: ComponentSize
  fullWidth?: boolean
  onChange?: (value: any) => void
  onSearch?: (searchText: string) => void
}

/**
 * Modal types
 */
export interface ModalProps extends BaseComponentProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  maskClosable?: boolean
  footer?: ReactNode
  centered?: boolean
  destroyOnClose?: boolean
}

/**
 * Toast/Notification types
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  id?: string
  type: ToastType
  title?: string
  message: string
  duration?: number
  closable?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

/**
 * Loading types
 */
export interface LoadingProps extends BaseComponentProps {
  size?: ComponentSize
  text?: string
  overlay?: boolean
}

/**
 * Avatar types
 */
export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  name?: string
  size?: ComponentSize
  shape?: 'circle' | 'square'
  fallback?: ReactNode
}

/**
 * Badge types
 */
export interface BadgeProps extends BaseComponentProps {
  variant?: ComponentVariant
  size?: ComponentSize
  dot?: boolean
  count?: number
  showZero?: boolean
  max?: number
  offset?: [number, number]
}

/**
 * Progress types
 */
export interface ProgressProps extends BaseComponentProps {
  value: number
  max?: number
  size?: ComponentSize
  variant?: ComponentVariant
  showText?: boolean
  format?: (value: number, max: number) => string
}

/**
 * Tabs types
 */
export interface TabItem {
  key: string
  label: string
  content: ReactNode
  disabled?: boolean
  closable?: boolean
}

export interface TabsProps extends BaseComponentProps {
  items: TabItem[]
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (activeKey: string) => void
  onTabClose?: (key: string) => void
  size?: ComponentSize
  type?: 'line' | 'card' | 'editable-card'
  position?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Menu types
 */
export interface MenuItem {
  key: string
  label: string
  icon?: ReactNode
  disabled?: boolean
  children?: MenuItem[]
  onClick?: () => void
}

export interface MenuProps extends BaseComponentProps {
  items: MenuItem[]
  selectedKeys?: string[]
  openKeys?: string[]
  mode?: 'horizontal' | 'vertical' | 'inline'
  theme?: 'light' | 'dark'
  onSelect?: (selectedKeys: string[]) => void
  onOpenChange?: (openKeys: string[]) => void
}

/**
 * Breadcrumb types
 */
export interface BreadcrumbItem {
  title: string
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
}

/**
 * Pagination types
 */
export interface PaginationProps extends BaseComponentProps {
  current: number
  total: number
  pageSize?: number
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => ReactNode
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
}

/**
 * Upload types
 */
export interface UploadFile {
  uid: string
  name: string
  status: 'uploading' | 'done' | 'error' | 'removed'
  url?: string
  thumbUrl?: string
  size?: number
  type?: string
  percent?: number
  error?: any
  response?: any
}

export interface UploadProps extends BaseComponentProps {
  accept?: string
  multiple?: boolean
  maxCount?: number
  maxSize?: number
  fileList?: UploadFile[]
  defaultFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<boolean>
  onChange?: (info: { file: UploadFile; fileList: UploadFile[] }) => void
  onRemove?: (file: UploadFile) => boolean | Promise<boolean>
  onPreview?: (file: UploadFile) => void
  customRequest?: (options: any) => void
  showUploadList?: boolean
  listType?: 'text' | 'picture' | 'picture-card'
  disabled?: boolean
}

/**
 * Date picker types
 */
export interface DatePickerProps extends FormFieldProps {
  value?: Date
  defaultValue?: Date
  format?: string
  placeholder?: string
  size?: ComponentSize
  fullWidth?: boolean
  disabled?: boolean
  readOnly?: boolean
  clearable?: boolean
  showTime?: boolean
  showToday?: boolean
  disabledDate?: (date: Date) => boolean
  onChange?: (date: Date | null) => void
}

/**
 * Range picker types
 */
export interface RangePickerProps extends FormFieldProps {
  value?: [Date, Date]
  defaultValue?: [Date, Date]
  format?: string
  placeholder?: [string, string]
  size?: ComponentSize
  fullWidth?: boolean
  disabled?: boolean
  readOnly?: boolean
  clearable?: boolean
  showTime?: boolean
  disabledDate?: (date: Date) => boolean
  onChange?: (dates: [Date, Date] | null) => void
}

/**
 * Theme types
 */
export interface ThemeConfig {
  primaryColor?: string
  borderRadius?: number
  fontSize?: {
    sm: number
    md: number
    lg: number
    xl: number
  }
  spacing?: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}

/**
 * Responsive types
 */
export type ResponsiveValue<T> = T | {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

/**
 * Animation types
 */
export interface AnimationConfig {
  duration?: number
  easing?: string
  delay?: number
}

/**
 * Accessibility types
 */
export interface AccessibilityProps {
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-hidden'?: boolean
  'aria-disabled'?: boolean
  'aria-required'?: boolean
  'aria-invalid'?: boolean
  role?: string
  tabIndex?: number
}

/**
 * Event handler types
 */
export interface EventHandlers {
  onPress?: () => void
  onLongPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  onHoverIn?: () => void
  onHoverOut?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

/**
 * Layout types
 */
export interface LayoutProps {
  flex?: number
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  width?: number | string
  height?: number | string
  minWidth?: number | string
  minHeight?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  margin?: number | string
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
  padding?: number | string
  paddingTop?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
}