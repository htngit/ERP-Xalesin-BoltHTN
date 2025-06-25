/**
 * @fileoverview Input component with validation states and icons
 * @author Xalesin Team
 */

import React, { forwardRef, useState } from 'react';
import { styled, Stack, StackProps, Text } from '@tamagui/core';
import { Eye, EyeOff, AlertCircle, CheckCircle, Info } from 'lucide-react';

// Input variant types
export type InputVariant = 'default' | 'filled' | 'flushed' | 'unstyled';

// Input size types
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Input state types
type InputState = 'default' | 'error' | 'success' | 'warning';

// Extended input props
export interface InputProps extends Omit<StackProps, 'size' | 'variant'> {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  showPasswordToggle?: boolean;
}

// Styled input wrapper
const InputWrapper = styled(Stack, {
  name: 'InputWrapper',
  width: '100%',
  gap: '$1',
});

// Styled label
const InputLabel = styled(Text, {
  name: 'InputLabel',
  fontSize: '$3',
  fontWeight: '500',
  color: '$textPrimary',
  lineHeight: '$3',
  
  variants: {
    required: {
      true: {
        '&::after': {
          content: '" *"',
          color: '$error',
        },
      },
    },
    
    disabled: {
      true: {
        color: '$textDisabled',
      },
    },
  },
});

// Styled input container
const InputContainer = styled(Stack, {
  flexDirection: 'row',
  name: 'InputContainer',
  position: 'relative',
  alignItems: 'center',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderPrimary',
  backgroundColor: '$backgroundPrimary',
  transition: 'all 0.2s ease-in-out',
  
  focusWithinStyle: {
    borderColor: '$borderFocus',
    boxShadow: '0 0 0 1px $colors$borderFocus',
  },
  
  variants: {
    variant: {
      default: {
        borderWidth: 1,
      },
      
      filled: {
        backgroundColor: '$backgroundSecondary',
        borderWidth: 0,
        borderBottomWidth: 2,
        borderRadius: '$2 $2 0 0',
      },
      
      flushed: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderRadius: 0,
        paddingHorizontal: 0,
      },
      
      unstyled: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        paddingHorizontal: 0,
      },
    },
    
    size: {
      xs: {
        height: '$6',
        paddingHorizontal: '$2',
      },
      
      sm: {
        height: '$8',
        paddingHorizontal: '$3',
      },
      
      md: {
        height: '$10',
        paddingHorizontal: '$4',
      },
      
      lg: {
        height: '$12',
        paddingHorizontal: '$4',
      },
      
      xl: {
        height: '$14',
        paddingHorizontal: '$5',
      },
    },
    
    state: {
      default: {
        borderColor: '$borderPrimary',
      },
      
      error: {
        borderColor: '$borderError',
        
        focusWithinStyle: {
          borderColor: '$borderError',
          boxShadow: '0 0 0 1px $colors$borderError',
        },
      },
      
      success: {
        borderColor: '$borderSuccess',
        
        focusWithinStyle: {
          borderColor: '$borderSuccess',
          boxShadow: '0 0 0 1px $colors$borderSuccess',
        },
      },
      
      warning: {
        borderColor: '$warning',
        
        focusWithinStyle: {
          borderColor: '$warning',
          boxShadow: '0 0 0 1px $colors$warning',
        },
      },
    },
    
    disabled: {
      true: {
        backgroundColor: '$backgroundTertiary',
        borderColor: '$borderSecondary',
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
    
    readOnly: {
      true: {
        backgroundColor: '$backgroundSecondary',
        cursor: 'default',
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'md',
    state: 'default',
  },
});

// Styled input field
const StyledInput = styled('input', {
  name: 'StyledInput',
  flex: 1,
  borderWidth: 0,
  backgroundColor: 'transparent',
  color: '$textPrimary',
  fontSize: '$3',
  lineHeight: '$3',
  
  focusStyle: {
    outline: 'none',
  },
  
  placeholderTextColor: '$placeholderColor',
  
  variants: {
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
    },
    
    disabled: {
      true: {
        color: '$textDisabled',
        cursor: 'not-allowed',
      },
    },
    
    readOnly: {
      true: {
        cursor: 'default',
      },
    },
  },
});

// Icon wrapper
const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: '$textSecondary',
  cursor: 'pointer',
  
  variants: {
    size: {
      xs: {
        width: '$4',
        height: '$4',
      },
      
      sm: {
        width: '$4',
        height: '$4',
      },
      
      md: {
        width: '$5',
        height: '$5',
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
    
    position: {
      left: {
        marginRight: '$2',
      },
      
      right: {
        marginLeft: '$2',
      },
    },
    
    clickable: {
      true: {
        '&:hover': {
          color: '$textPrimary',
        },
      },
      
      false: {
        cursor: 'default',
      },
    },
  },
});

// Helper text component
const HelperText = styled(Text, {
  name: 'HelperText',
  fontSize: '$2',
  lineHeight: '$2',
  marginTop: '$1',
  
  variants: {
    state: {
      default: {
        color: '$textSecondary',
      },
      
      error: {
        color: '$error',
      },
      
      success: {
        color: '$success',
      },
      
      warning: {
        color: '$warning',
      },
    },
  },
});

// Get state icon
const getStateIcon = (state: InputState, size: InputSize) => {
  const iconSize = size === 'xs' || size === 'sm' ? 14 : 16;
  
  switch (state) {
    case 'error':
      return <AlertCircle size={iconSize} color="currentColor" />;
    case 'success':
      return <CheckCircle size={iconSize} color="currentColor" />;
    case 'warning':
      return <Info size={iconSize} color="currentColor" />;
    default:
      return null;
  }
};

// Main Input component
export const Input = forwardRef<
  React.ElementRef<typeof StyledInput>,
  InputProps
>((
  {
    variant = 'default',
    size = 'md',
    state = 'default',
    label,
    helperText,
    errorMessage,
    leftIcon,
    rightIcon,
    isRequired = false,
    isDisabled = false,
    isReadOnly = false,
    isInvalid = false,
    showPasswordToggle = false,
    type = 'text',
    ...props
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Determine the actual state
  const actualState = isInvalid || errorMessage ? 'error' : state;
  
  // Determine input type
  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password')
    : type;
  
  // Get the appropriate helper text
  const displayHelperText = errorMessage || helperText;
  
  // Handle password toggle
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  
  // Get right icon
  const getRightIcon = () => {
    if (showPasswordToggle && type === 'password') {
      const iconSize = size === 'xs' || size === 'sm' ? 14 : 16;
      return (
        <IconWrapper 
          size={size} 
          position="right" 
          clickable
          onClick={handlePasswordToggle}
        >
          {showPassword ? (
            <EyeOff size={iconSize} />
          ) : (
            <Eye size={iconSize} />
          )}
        </IconWrapper>
      );
    }
    
    if (rightIcon) {
      return (
        <IconWrapper size={size} position="right" clickable={false}>
          {rightIcon}
        </IconWrapper>
      );
    }
    
    const stateIcon = getStateIcon(actualState, size);
    if (stateIcon) {
      return (
        <IconWrapper size={size} position="right" clickable={false}>
          {stateIcon}
        </IconWrapper>
      );
    }
    
    return null;
  };
  
  return (
    <InputWrapper>
      {label && (
        <InputLabel 
          required={isRequired}
          disabled={isDisabled}
        >
          {label}
        </InputLabel>
      )}
      
      <InputContainer
        variant={variant}
        size={size}
        state={actualState}
        disabled={isDisabled}
        readOnly={isReadOnly}
      >
        {leftIcon && (
          <IconWrapper size={size} position="left" clickable={false}>
            {leftIcon}
          </IconWrapper>
        )}
        
        <StyledInput
          ref={ref}
          type={inputType}
          size={size}
          disabled={isDisabled}
          readOnly={isReadOnly}
          {...props}
        />
        
        {getRightIcon()}
      </InputContainer>
      
      {displayHelperText && (
        <HelperText state={actualState}>
          {displayHelperText}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';