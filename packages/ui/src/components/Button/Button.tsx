/**
 * @fileoverview Button component with multiple variants and sizes
 * @author Xalesin Team
 */

import React, { forwardRef } from 'react';
import { styled, Button as TamaguiButton, ButtonProps as TamaguiButtonProps } from '@tamagui/core';
import { Loader2 } from 'lucide-react';

// Button variant types
export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive'
  | 'success'
  | 'warning';

// Button size types
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Extended button props
export interface ButtonProps extends Omit<TamaguiButtonProps, 'size' | 'variant'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

// Styled button component with variants
const StyledButton = styled(TamaguiButton, {
  name: 'Button',
  context: { inButtonGroup: false },
  
  // Base styles
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  borderRadius: '$4',
  fontWeight: '500',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  
  // Focus styles
  focusStyle: {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$backgroundPrimary, 0 0 0 4px $colors$borderFocus',
  },
  
  // Disabled styles
  disabledStyle: {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$textInverse',
        borderWidth: 1,
        borderColor: '$primary',
        
        hoverStyle: {
          backgroundColor: '$primaryHover',
          borderColor: '$primaryHover',
        },
        
        pressStyle: {
          backgroundColor: '$primaryActive',
          borderColor: '$primaryActive',
        },
      },
      
      secondary: {
        backgroundColor: '$secondary',
        color: '$textInverse',
        borderWidth: 1,
        borderColor: '$secondary',
        
        hoverStyle: {
          backgroundColor: '$secondaryHover',
          borderColor: '$secondaryHover',
        },
        
        pressStyle: {
          backgroundColor: '$secondaryActive',
          borderColor: '$secondaryActive',
        },
      },
      
      outline: {
        backgroundColor: 'transparent',
        color: '$textPrimary',
        borderWidth: 1,
        borderColor: '$borderPrimary',
        
        hoverStyle: {
          backgroundColor: '$backgroundSecondary',
          borderColor: '$borderSecondary',
        },
        
        pressStyle: {
          backgroundColor: '$backgroundTertiary',
        },
      },
      
      ghost: {
        backgroundColor: 'transparent',
        color: '$textPrimary',
        borderWidth: 0,
        
        hoverStyle: {
          backgroundColor: '$backgroundSecondary',
        },
        
        pressStyle: {
          backgroundColor: '$backgroundTertiary',
        },
      },
      
      link: {
        backgroundColor: 'transparent',
        color: '$primary',
        borderWidth: 0,
        textDecorationLine: 'underline',
        
        hoverStyle: {
          color: '$primaryHover',
        },
        
        pressStyle: {
          color: '$primaryActive',
        },
      },
      
      destructive: {
        backgroundColor: '$error',
        color: '$textInverse',
        borderWidth: 1,
        borderColor: '$error',
        
        hoverStyle: {
          backgroundColor: '$errorHover',
          borderColor: '$errorHover',
        },
        
        pressStyle: {
          backgroundColor: '$errorActive',
          borderColor: '$errorActive',
        },
      },
      
      success: {
        backgroundColor: '$success',
        color: '$textInverse',
        borderWidth: 1,
        borderColor: '$success',
        
        hoverStyle: {
          backgroundColor: '$successHover',
          borderColor: '$successHover',
        },
        
        pressStyle: {
          backgroundColor: '$successActive',
          borderColor: '$successActive',
        },
      },
      
      warning: {
        backgroundColor: '$warning',
        color: '$textInverse',
        borderWidth: 1,
        borderColor: '$warning',
        
        hoverStyle: {
          backgroundColor: '$warningHover',
          borderColor: '$warningHover',
        },
        
        pressStyle: {
          backgroundColor: '$warningActive',
          borderColor: '$warningActive',
        },
      },
    },
    
    size: {
      xs: {
        height: '$6',
        paddingHorizontal: '$2',
        fontSize: '$1',
        lineHeight: '$1',
      },
      
      sm: {
        height: '$8',
        paddingHorizontal: '$3',
        fontSize: '$2',
        lineHeight: '$2',
      },
      
      md: {
        height: '$10',
        paddingHorizontal: '$4',
        fontSize: '$3',
        lineHeight: '$3',
      },
      
      lg: {
        height: '$12',
        paddingHorizontal: '$6',
        fontSize: '$4',
        lineHeight: '$4',
      },
      
      xl: {
        height: '$14',
        paddingHorizontal: '$8',
        fontSize: '$5',
        lineHeight: '$5',
      },
    },
    
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    
    loading: {
      true: {
        color: 'transparent',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Loading spinner component
const LoadingSpinner = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  inset: 0,
});

// Button content wrapper
const ButtonContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
});

// Icon wrapper
const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  
  variants: {
    size: {
      xs: {
        width: '$3',
        height: '$3',
      },
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$4',
        height: '$4',
      },
      lg: {
        width: '$5',
        height: '$5',
      },
      xl: {
        width: '$6',
        height: '$6',
      },
    },
  },
});

// Main Button component
export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>((
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    children,
    ...props
  },
  ref
) => {
  const isDisabled = disabled || loading;
  
  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <LoadingSpinner>
          <Loader2 size={16} className="animate-spin" />
        </LoadingSpinner>
      )}
      
      <ButtonContent>
        {leftIcon && !loading && (
          <IconWrapper size={size}>
            {leftIcon}
          </IconWrapper>
        )}
        
        {loading && loadingText ? loadingText : children}
        
        {rightIcon && !loading && (
          <IconWrapper size={size}>
            {rightIcon}
          </IconWrapper>
        )}
      </ButtonContent>
    </StyledButton>
  );
});

Button.displayName = 'Button';