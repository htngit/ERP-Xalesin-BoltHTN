import { config } from '@tamagui/config/v3'
import { createTamagui } from '@tamagui/core'

// Custom tokens for Xalesin ERP
const tokens = {
  ...config.tokens,
  color: {
    ...config.tokens.color,
    // Primary brand colors
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    primaryDark: '#1d4ed8',
    
    // Secondary colors
    secondary: '#64748b',
    secondaryLight: '#94a3b8',
    secondaryDark: '#475569',
    
    // Success colors
    success: '#10b981',
    successLight: '#34d399',
    successDark: '#059669',
    
    // Warning colors
    warning: '#f59e0b',
    warningLight: '#fbbf24',
    warningDark: '#d97706',
    
    // Error colors
    error: '#ef4444',
    errorLight: '#f87171',
    errorDark: '#dc2626',
    
    // Neutral colors
    neutral: '#6b7280',
    neutralLight: '#9ca3af',
    neutralDark: '#4b5563',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f8fafc',
    backgroundTertiary: '#f1f5f9',
    
    // Text colors
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
    
    // Border colors
    border: '#e5e7eb',
    borderLight: '#f3f4f6',
    borderDark: '#d1d5db',
  },
  space: {
    ...config.tokens.space,
    // Custom spacing for ERP layouts
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
  },
  size: {
    ...config.tokens.size,
    // Custom sizes for ERP components
    buttonSm: 32,
    buttonMd: 40,
    buttonLg: 48,
    inputSm: 32,
    inputMd: 40,
    inputLg: 48,
    cardSm: 200,
    cardMd: 300,
    cardLg: 400,
  },
  radius: {
    ...config.tokens.radius,
    // Custom border radius
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    full: 9999,
  },
}

// Custom themes for Xalesin ERP
const themes = {
  ...config.themes,
  light: {
    ...config.themes.light,
    primary: tokens.color.primary,
    primaryLight: tokens.color.primaryLight,
    primaryDark: tokens.color.primaryDark,
    secondary: tokens.color.secondary,
    success: tokens.color.success,
    warning: tokens.color.warning,
    error: tokens.color.error,
    background: tokens.color.background,
    backgroundSecondary: tokens.color.backgroundSecondary,
    backgroundTertiary: tokens.color.backgroundTertiary,
    textPrimary: tokens.color.textPrimary,
    textSecondary: tokens.color.textSecondary,
    border: tokens.color.border,
  },
  dark: {
    ...config.themes.dark,
    primary: tokens.color.primary,
    primaryLight: tokens.color.primaryLight,
    primaryDark: tokens.color.primaryDark,
    secondary: tokens.color.secondary,
    success: tokens.color.success,
    warning: tokens.color.warning,
    error: tokens.color.error,
    background: '#0f172a',
    backgroundSecondary: '#1e293b',
    backgroundTertiary: '#334155',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    border: '#475569',
  },
}

export const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes,
  // Media queries for responsive design
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { minWidth: 1420 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  // Animation settings
  animations: config.animations,
  // Font settings
  fonts: config.fonts,
  // Shorthands for common style properties
  shorthands: {
    ...config.shorthands,
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    mx: 'marginHorizontal',
    my: 'marginVertical',
  },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}