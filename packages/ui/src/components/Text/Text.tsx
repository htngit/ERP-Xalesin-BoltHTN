/**
 * @fileoverview Text component with typography variants and styles
 * @author Xalesin Team
 */

import React, { forwardRef } from 'react';
import { styled, Text as TamaguiText, TextProps as TamaguiTextProps } from '@tamagui/core';

// Text variant types
export type TextVariant = 
  | 'display'
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'overline'
  | 'code'
  | 'link';

// Text size types
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Text weight types
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

// Text props interface
export interface TextProps extends Omit<TamaguiTextProps, 'size'> {
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  truncate?: boolean;
  noWrap?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  italic?: boolean;
  gradient?: boolean;
  gradientColors?: [string, string];
  highlight?: boolean;
  highlightColor?: string;
}

// Styled text component
const StyledText = styled(TamaguiText, {
  name: 'Text',
  color: '$textPrimary',
  fontFamily: '$body',
  
  variants: {
    variant: {
      display: {
        fontSize: '$9',
        lineHeight: '$9',
        fontWeight: '$8',
        letterSpacing: '$-2',
      },
      
      heading: {
        fontSize: '$8',
        lineHeight: '$8',
        fontWeight: '$7',
        letterSpacing: '$-1',
      },
      
      title: {
        fontSize: '$6',
        lineHeight: '$6',
        fontWeight: '$6',
        letterSpacing: '$0',
      },
      
      subtitle: {
        fontSize: '$5',
        lineHeight: '$5',
        fontWeight: '$5',
        letterSpacing: '$0',
        color: '$textSecondary',
      },
      
      body: {
        fontSize: '$4',
        lineHeight: '$4',
        fontWeight: '$4',
        letterSpacing: '$0',
      },
      
      caption: {
        fontSize: '$3',
        lineHeight: '$3',
        fontWeight: '$4',
        letterSpacing: '$1',
        color: '$textTertiary',
      },
      
      overline: {
        fontSize: '$2',
        lineHeight: '$2',
        fontWeight: '$6',
        letterSpacing: '$2',
        textTransform: 'uppercase',
        color: '$textTertiary',
      },
      
      code: {
        fontSize: '$3',
        lineHeight: '$3',
        fontWeight: '$4',
        fontFamily: '$mono',
        backgroundColor: '$backgroundSecondary',
        color: '$textCode',
        paddingHorizontal: '$1',
        paddingVertical: '$0.5',
        borderRadius: '$2',
      },
      
      link: {
        fontSize: '$4',
        lineHeight: '$4',
        fontWeight: '$4',
        color: '$brandPrimary',
        textDecorationLine: 'underline',
        cursor: 'pointer',
        
        hoverStyle: {
          color: '$brandSecondary',
          textDecorationLine: 'underline',
        },
        
        pressStyle: {
          color: '$brandTertiary',
        },
        
        focusStyle: {
          outline: 'none',
          textDecorationLine: 'underline',
          textDecorationColor: '$borderFocus',
          textDecorationThickness: 2,
        },
      },
    },
    
    size: {
      xs: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      
      sm: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      
      md: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      
      lg: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      
      xl: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      
      '2xl': {
        fontSize: '$6',
        lineHeight: '$6',
      },
      
      '3xl': {
        fontSize: '$7',
        lineHeight: '$7',
      },
      
      '4xl': {
        fontSize: '$8',
        lineHeight: '$8',
      },
    },
    
    weight: {
      light: {
        fontWeight: '$2',
      },
      
      normal: {
        fontWeight: '$4',
      },
      
      medium: {
        fontWeight: '$5',
      },
      
      semibold: {
        fontWeight: '$6',
      },
      
      bold: {
        fontWeight: '$7',
      },
      
      extrabold: {
        fontWeight: '$8',
      },
    },
    
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    
    noWrap: {
      true: {
        whiteSpace: 'nowrap',
      },
    },
    
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    
    strikethrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    
    gradient: {
      true: {
        backgroundImage: 'linear-gradient(45deg, $brandPrimary, $brandSecondary)',
        backgroundClip: 'text',
        color: 'transparent',
      },
    },
    
    highlight: {
      true: {
        backgroundColor: '$warningLight',
        color: '$warningDark',
        paddingHorizontal: '$1',
        borderRadius: '$1',
      },
    },
  },
  
  defaultVariants: {
    variant: 'body',
  },
});

// Main Text component
export const Text = forwardRef<
  React.ElementRef<typeof StyledText>,
  TextProps
>((
  {
    variant = 'body',
    size,
    weight,
    truncate = false,
    noWrap = false,
    underline = false,
    strikethrough = false,
    italic = false,
    gradient = false,
    gradientColors,
    highlight = false,
    highlightColor,
    style,
    children,
    ...props
  },
  ref
) => {
  // Custom gradient colors
  const gradientStyle = gradient && gradientColors ? {
    backgroundImage: `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`,
    backgroundClip: 'text',
    color: 'transparent',
  } : {};
  
  // Custom highlight color
  const highlightStyle = highlight && highlightColor ? {
    backgroundColor: highlightColor,
  } : {};
  
  // Combine styles
  const combinedStyle = {
    ...gradientStyle,
    ...highlightStyle,
    ...style,
  };
  
  return (
    <StyledText
      ref={ref}
      variant={variant}
      size={size}
      weight={weight}
      truncate={truncate}
      noWrap={noWrap}
      underline={underline}
      strikethrough={strikethrough}
      italic={italic}
      gradient={gradient && !gradientColors}
      highlight={highlight && !highlightColor}
      style={combinedStyle}
      {...props}
    >
      {children}
    </StyledText>
  );
});

// Set display name
Text.displayName = 'Text';