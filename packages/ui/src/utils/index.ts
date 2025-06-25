/**
 * @fileoverview UI utility functions for styling, animations, and common operations
 * @author Xalesin Team
 */

import { getToken } from '../theme';

// Color utilities
export const colorUtils = {
  /**
   * Convert hex color to RGB
   */
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  },

  /**
   * Convert RGB to hex
   */
  rgbToHex: (r: number, g: number, b: number): string => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  },

  /**
   * Add alpha to hex color
   */
  addAlpha: (hex: string, alpha: number): string => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return hex;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  },

  /**
   * Lighten a color by a percentage
   */
  lighten: (hex: string, percent: number): string => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return hex;
    
    const factor = 1 + percent / 100;
    const r = Math.min(255, Math.round(rgb.r * factor));
    const g = Math.min(255, Math.round(rgb.g * factor));
    const b = Math.min(255, Math.round(rgb.b * factor));
    
    return colorUtils.rgbToHex(r, g, b);
  },

  /**
   * Darken a color by a percentage
   */
  darken: (hex: string, percent: number): string => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return hex;
    
    const factor = 1 - percent / 100;
    const r = Math.max(0, Math.round(rgb.r * factor));
    const g = Math.max(0, Math.round(rgb.g * factor));
    const b = Math.max(0, Math.round(rgb.b * factor));
    
    return colorUtils.rgbToHex(r, g, b);
  },
};

// Spacing utilities
export const spacingUtils = {
  /**
   * Get spacing value from theme tokens
   */
  getSpacing: (size: string | number): string => {
    if (typeof size === 'number') {
      return `${size}px`;
    }
    return getToken('space', size) || size;
  },

  /**
   * Create margin/padding shorthand
   */
  createSpacing: (
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
  ): string => {
    const values = [top, right, bottom, left]
      .map(val => val !== undefined ? spacingUtils.getSpacing(val) : undefined)
      .filter(val => val !== undefined);
    
    return values.join(' ');
  },
};

// Animation utilities
export const animationUtils = {
  /**
   * Easing functions
   */
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  /**
   * Duration presets
   */
  duration: {
    fastest: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slowest: '800ms',
  },

  /**
   * Create transition string
   */
  createTransition: (
    property: string | string[],
    duration = 'normal',
    easing = 'easeInOut'
  ): string => {
    const props = Array.isArray(property) ? property : [property];
    const dur = animationUtils.duration[duration as keyof typeof animationUtils.duration] || duration;
    const ease = animationUtils.easing[easing as keyof typeof animationUtils.easing] || easing;
    
    return props.map(prop => `${prop} ${dur} ${ease}`).join(', ');
  },

  /**
   * Fade in animation
   */
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  /**
   * Fade out animation
   */
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },

  /**
   * Slide in from top
   */
  slideInTop: {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },

  /**
   * Slide in from bottom
   */
  slideInBottom: {
    from: { transform: 'translateY(100%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },

  /**
   * Scale in animation
   */
  scaleIn: {
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
};

// Layout utilities
export const layoutUtils = {
  /**
   * Create flexbox styles
   */
  flex: (
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'row',
    justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start',
    align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' = 'stretch',
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap'
  ) => ({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
  }),

  /**
   * Create grid styles
   */
  grid: (
    columns?: number | string,
    rows?: number | string,
    gap?: string | number
  ) => ({
    display: 'grid',
    ...(columns && {
      gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    }),
    ...(rows && {
      gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    }),
    ...(gap && { gap: spacingUtils.getSpacing(gap) }),
  }),

  /**
   * Create absolute positioning
   */
  absolute: (
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
  ) => ({
    position: 'absolute' as const,
    ...(top !== undefined && { top: spacingUtils.getSpacing(top) }),
    ...(right !== undefined && { right: spacingUtils.getSpacing(right) }),
    ...(bottom !== undefined && { bottom: spacingUtils.getSpacing(bottom) }),
    ...(left !== undefined && { left: spacingUtils.getSpacing(left) }),
  }),

  /**
   * Create fixed positioning
   */
  fixed: (
    top?: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
  ) => ({
    position: 'fixed' as const,
    ...(top !== undefined && { top: spacingUtils.getSpacing(top) }),
    ...(right !== undefined && { right: spacingUtils.getSpacing(right) }),
    ...(bottom !== undefined && { bottom: spacingUtils.getSpacing(bottom) }),
    ...(left !== undefined && { left: spacingUtils.getSpacing(left) }),
  }),
};

// Typography utilities
export const typographyUtils = {
  /**
   * Truncate text with ellipsis
   */
  truncate: (lines = 1) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical' as const,
    ...(lines === 1 && { whiteSpace: 'nowrap' as const }),
  }),

  /**
   * Create responsive font size
   */
  responsiveText: (
    mobile: string,
    tablet?: string,
    desktop?: string
  ) => ({
    fontSize: mobile,
    ...(tablet && {
      '@media (min-width: 768px)': {
        fontSize: tablet,
      },
    }),
    ...(desktop && {
      '@media (min-width: 1024px)': {
        fontSize: desktop,
      },
    }),
  }),
};

// Shadow utilities
export const shadowUtils = {
  /**
   * Predefined shadow levels
   */
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  /**
   * Create custom shadow
   */
  createShadow: (
    x: number,
    y: number,
    blur: number,
    spread: number,
    color: string,
    inset = false
  ): string => {
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  },
};

// Border utilities
export const borderUtils = {
  /**
   * Create border radius
   */
  radius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },

  /**
   * Create border
   */
  createBorder: (
    width = 1,
    style: 'solid' | 'dashed' | 'dotted' = 'solid',
    color = 'currentColor'
  ): string => {
    return `${width}px ${style} ${color}`;
  },
};

// Responsive utilities
export const responsiveUtils = {
  /**
   * Breakpoints
   */
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  /**
   * Create media query
   */
  mediaQuery: (breakpoint: keyof typeof responsiveUtils.breakpoints, type: 'min' | 'max' = 'min') => {
    const size = responsiveUtils.breakpoints[breakpoint];
    return `@media (${type}-width: ${size})`;
  },

  /**
   * Hide on specific breakpoints
   */
  hideOn: (breakpoint: keyof typeof responsiveUtils.breakpoints) => ({
    [responsiveUtils.mediaQuery(breakpoint)]: {
      display: 'none',
    },
  }),

  /**
   * Show only on specific breakpoints
   */
  showOn: (breakpoint: keyof typeof responsiveUtils.breakpoints) => ({
    display: 'none',
    [responsiveUtils.mediaQuery(breakpoint)]: {
      display: 'block',
    },
  }),
};

// Focus utilities
export const focusUtils = {
  /**
   * Create focus ring
   */
  focusRing: (color = '#3B82F6', width = 2, offset = 2) => ({
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 ${offset}px rgba(255, 255, 255, 1), 0 0 0 ${offset + width}px ${color}`,
    },
  }),

  /**
   * Remove focus styles
   */
  noFocus: {
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
};

// Accessibility utilities
export const a11yUtils = {
  /**
   * Screen reader only styles
   */
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: '0',
  },

  /**
   * Not screen reader only (undo srOnly)
   */
  notSrOnly: {
    position: 'static' as const,
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal' as const,
  },
};

// Export all utilities
export {
  colorUtils,
  spacingUtils,
  animationUtils,
  layoutUtils,
  typographyUtils,
  shadowUtils,
  borderUtils,
  responsiveUtils,
  focusUtils,
  a11yUtils,
};

// Default export with all utilities
export default {
  color: colorUtils,
  spacing: spacingUtils,
  animation: animationUtils,
  layout: layoutUtils,
  typography: typographyUtils,
  shadow: shadowUtils,
  border: borderUtils,
  responsive: responsiveUtils,
  focus: focusUtils,
  a11y: a11yUtils,
};