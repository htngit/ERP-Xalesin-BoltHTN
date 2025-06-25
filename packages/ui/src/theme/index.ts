/**
 * @fileoverview Tamagui theme configuration and custom tokens
 * @author Xalesin Team
 */

import { createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { createInterFont } from '@tamagui/font-inter';

// Custom font configuration
const interFont = createInterFont({
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 22,
    9: 30,
    10: 42,
    11: 52,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 124,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    1: '300',
    2: '400',
    3: '500',
    4: '600',
    5: '700',
    6: '800',
    7: '900',
  },
  color: {
    1: '$colorFocus',
    2: '$color',
  },
  letterSpacing: {
    1: 0,
    2: -0.15,
    3: -0.5,
    4: -0.75,
    5: -1,
    6: -1.5,
    7: -2,
    8: -2.5,
    9: -3,
    10: -3.5,
    11: -4,
    12: -4.5,
    13: -5,
    14: -5.5,
    15: -6,
  },
  // for native only, alternate family based on weight/style
  face: {
    300: { normal: 'InterLight', italic: 'InterLight-Italic' },
    400: { normal: 'Inter', italic: 'Inter-Italic' },
    500: { normal: 'InterMedium', italic: 'InterMedium-Italic' },
    600: { normal: 'InterSemiBold', italic: 'InterSemiBold-Italic' },
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
    800: { normal: 'InterExtraBold', italic: 'InterExtraBold-Italic' },
    900: { normal: 'InterBlack', italic: 'InterBlack-Italic' },
  },
});

// Custom color tokens
const customTokens = {
  color: {
    // Brand colors
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryActive: '#1D4ED8',
    primaryLight: '#DBEAFE',
    primaryDark: '#1E40AF',
    
    // Secondary colors
    secondary: '#6B7280',
    secondaryHover: '#4B5563',
    secondaryActive: '#374151',
    secondaryLight: '#F3F4F6',
    secondaryDark: '#1F2937',
    
    // Success colors
    success: '#10B981',
    successHover: '#059669',
    successActive: '#047857',
    successLight: '#D1FAE5',
    successDark: '#065F46',
    
    // Warning colors
    warning: '#F59E0B',
    warningHover: '#D97706',
    warningActive: '#B45309',
    warningLight: '#FEF3C7',
    warningDark: '#92400E',
    
    // Error colors
    error: '#EF4444',
    errorHover: '#DC2626',
    errorActive: '#B91C1C',
    errorLight: '#FEE2E2',
    errorDark: '#991B1B',
    
    // Info colors
    info: '#3B82F6',
    infoHover: '#2563EB',
    infoActive: '#1D4ED8',
    infoLight: '#DBEAFE',
    infoDark: '#1E40AF',
    
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
    
    // Background colors
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',
    backgroundTertiary: '#F3F4F6',
    backgroundOverlay: 'rgba(0, 0, 0, 0.5)',
    
    // Text colors
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    textInverse: '#FFFFFF',
    textDisabled: '#D1D5DB',
    
    // Border colors
    borderPrimary: '#E5E7EB',
    borderSecondary: '#D1D5DB',
    borderFocus: '#3B82F6',
    borderError: '#EF4444',
    borderSuccess: '#10B981',
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
    full: '100%',
    auto: 'auto',
  },
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 10,
    6: 12,
    7: 14,
    8: 16,
    9: 18,
    10: 20,
    12: 24,
    full: 1000,
  },
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },
};

// Media queries for responsive design
const media = {
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
}

// Create the Tamagui configuration
export const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    ...customTokens,
  },
  fonts: {
    ...config.fonts,
    body: interFont,
    heading: interFont,
  },
  media,
  themes: {
    ...config.themes,
    // Custom light theme
    light: {
      ...config.themes.light,
      background: customTokens.color.backgroundPrimary,
      backgroundHover: customTokens.color.backgroundSecondary,
      backgroundPress: customTokens.color.backgroundTertiary,
      backgroundFocus: customTokens.color.backgroundSecondary,
      color: customTokens.color.textPrimary,
      colorHover: customTokens.color.textSecondary,
      colorPress: customTokens.color.textPrimary,
      colorFocus: customTokens.color.textPrimary,
      borderColor: customTokens.color.borderPrimary,
      borderColorHover: customTokens.color.borderSecondary,
      borderColorFocus: customTokens.color.borderFocus,
      placeholderColor: customTokens.color.textTertiary,
    },
    // Custom dark theme
    dark: {
      ...config.themes.dark,
      background: customTokens.color.neutral900,
      backgroundHover: customTokens.color.neutral800,
      backgroundPress: customTokens.color.neutral700,
      backgroundFocus: customTokens.color.neutral800,
      color: customTokens.color.neutral100,
      colorHover: customTokens.color.neutral200,
      colorPress: customTokens.color.neutral100,
      colorFocus: customTokens.color.neutral100,
      borderColor: customTokens.color.neutral700,
      borderColorHover: customTokens.color.neutral600,
      borderColorFocus: customTokens.color.primary,
      placeholderColor: customTokens.color.neutral500,
    },
  },
});

// Export theme utilities
export const getTheme = (themeName: string) => {
  return tamaguiConfig.themes[themeName];
};

export const getToken = (category: string, key: string) => {
  return tamaguiConfig.tokens[category]?.[key];
};

// Export types
export type TamaguiConfig = typeof tamaguiConfig;
export type ThemeName = keyof typeof tamaguiConfig.themes;
export type TokenCategory = keyof typeof tamaguiConfig.tokens;

// Default export
export default tamaguiConfig;