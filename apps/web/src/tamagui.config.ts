import { config } from '@tamagui/config/v3'
import { createTamagui } from '@tamagui/core'

// Custom theme tokens
const customTokens = {
  color: {
    // Brand colors
    brand: '#3B82F6',
    brandHover: '#2563EB',
    brandActive: '#1D4ED8',
    
    // Semantic colors
    success: '#10B981',
    successHover: '#059669',
    warning: '#F59E0B',
    warningHover: '#D97706',
    error: '#EF4444',
    errorHover: '#DC2626',
    
    // Neutral colors
    neutral50: '#F9FAFB',
    neutral100: '#F3F4F6',
    neutral200: '#E5E7EB',
    neutral300: '#D1D5DB',
    neutral400: '#9CA3AF',
    neutral500: '#6B7280',
    neutral600: '#4B5563',
    neutral700: '#374151',
    neutral800: '#1F2937',
    neutral900: '#111827',
  },
  space: {
    // Custom spacing values
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 80,
    '5xl': 96,
  },
  size: {
    // Custom size values
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    '2xl': 36,
    '3xl': 40,
    '4xl': 44,
    '5xl': 48,
  },
  radius: {
    // Custom border radius values
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
    full: 9999,
  },
}

// Custom themes
const customThemes = {
  light: {
    background: customTokens.color.neutral50,
    backgroundHover: customTokens.color.neutral100,
    backgroundPress: customTokens.color.neutral200,
    backgroundFocus: customTokens.color.neutral100,
    color: customTokens.color.neutral900,
    colorHover: customTokens.color.neutral800,
    colorPress: customTokens.color.neutral700,
    colorFocus: customTokens.color.neutral800,
    borderColor: customTokens.color.neutral200,
    borderColorHover: customTokens.color.neutral300,
    borderColorPress: customTokens.color.neutral400,
    borderColorFocus: customTokens.color.brand,
    placeholderColor: customTokens.color.neutral400,
  },
  dark: {
    background: customTokens.color.neutral900,
    backgroundHover: customTokens.color.neutral800,
    backgroundPress: customTokens.color.neutral700,
    backgroundFocus: customTokens.color.neutral800,
    color: customTokens.color.neutral100,
    colorHover: customTokens.color.neutral200,
    colorPress: customTokens.color.neutral300,
    colorFocus: customTokens.color.neutral200,
    borderColor: customTokens.color.neutral700,
    borderColorHover: customTokens.color.neutral600,
    borderColorPress: customTokens.color.neutral500,
    borderColorFocus: customTokens.color.brand,
    placeholderColor: customTokens.color.neutral500,
  },
}

// Create the tamagui configuration
const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    ...customTokens,
  },
  themes: {
    ...config.themes,
    ...customThemes,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
    autocompleteSpecificTokens: 'except-special',
  },
})

export default tamaguiConfig

// Export type for TypeScript
export type AppConfig = typeof tamaguiConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}