/**
 * @fileoverview Spinner component with various loading animations
 * @author Xalesin Team
 */

import React, { forwardRef } from 'react';
import { styled, YStack, YStackProps } from '@tamagui/core';
import { Loader2, RotateCw, RefreshCw } from 'lucide-react';

// Spinner variant types
export type SpinnerVariant = 'default' | 'dots' | 'pulse' | 'bounce' | 'rotate' | 'refresh';

// Spinner size types
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Spinner props interface
export interface SpinnerProps extends Omit<YStackProps, 'size'> {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  color?: string;
  speed?: 'slow' | 'normal' | 'fast';
  label?: string;
  thickness?: number;
}

// Styled spinner container
const StyledSpinnerContainer = styled(YStack, {
  name: 'SpinnerContainer',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    size: {
      xs: {
        width: 16,
        height: 16,
      },
      
      sm: {
        width: 20,
        height: 20,
      },
      
      md: {
        width: 24,
        height: 24,
      },
      
      lg: {
        width: 32,
        height: 32,
      },
      
      xl: {
        width: 40,
        height: 40,
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

// Styled spinner icon
const StyledSpinnerIcon = styled(YStack, {
  name: 'SpinnerIcon',
  
  variants: {
    variant: {
      default: {
        animation: 'spin',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      },
      
      dots: {
        // Will be handled by custom component
      },
      
      pulse: {
        animation: 'pulse',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
      },
      
      bounce: {
        animation: 'bounce',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
      },
      
      rotate: {
        animation: 'spin',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
      },
      
      refresh: {
        animation: 'spin',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      },
    },
    
    speed: {
      slow: {
        animationDuration: '2s',
      },
      
      normal: {
        animationDuration: '1s',
      },
      
      fast: {
        animationDuration: '0.5s',
      },
    },
    
    size: {
      xs: {
        width: 16,
        height: 16,
      },
      
      sm: {
        width: 20,
        height: 20,
      },
      
      md: {
        width: 24,
        height: 24,
      },
      
      lg: {
        width: 32,
        height: 32,
      },
      
      xl: {
        width: 40,
        height: 40,
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
    speed: 'normal',
    size: 'md',
  },
});

// Styled dots container for dots variant
const StyledDotsContainer = styled(YStack, {
  name: 'DotsContainer',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
});

// Styled dot for dots variant
const StyledDot = styled(YStack, {
  name: 'Dot',
  borderRadius: '50%',
  backgroundColor: '$brandPrimary',
  
  variants: {
    size: {
      xs: {
        width: 3,
        height: 3,
      },
      
      sm: {
        width: 4,
        height: 4,
      },
      
      md: {
        width: 5,
        height: 5,
      },
      
      lg: {
        width: 6,
        height: 6,
      },
      
      xl: {
        width: 8,
        height: 8,
      },
    },
    
    animationDelay: {
      0: {
        animationDelay: '0s',
      },
      
      1: {
        animationDelay: '0.1s',
      },
      
      2: {
        animationDelay: '0.2s',
      },
    },
  },
  
  animation: 'pulse',
  animationDuration: '1.4s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  
  defaultVariants: {
    size: 'md',
  },
});

// Styled label
const StyledLabel = styled(YStack, {
  name: 'SpinnerLabel',
  marginTop: '$2',
  
  variants: {
    size: {
      xs: {
        fontSize: '$1',
      },
      
      sm: {
        fontSize: '$2',
      },
      
      md: {
        fontSize: '$3',
      },
      
      lg: {
        fontSize: '$4',
      },
      
      xl: {
        fontSize: '$5',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

// Get icon component based on variant
const getIconComponent = (variant: SpinnerVariant) => {
  switch (variant) {
    case 'rotate':
      return RotateCw;
    case 'refresh':
      return RefreshCw;
    default:
      return Loader2;
  }
};

// Get size value for icons
const getSizeValue = (size: SpinnerSize): number => {
  switch (size) {
    case 'xs':
      return 16;
    case 'sm':
      return 20;
    case 'md':
      return 24;
    case 'lg':
      return 32;
    case 'xl':
      return 40;
    default:
      return 24;
  }
};

// Dots component for dots variant
const DotsSpinner: React.FC<{ size: SpinnerSize; color?: string }> = ({ size, color }) => {
  return (
    <StyledDotsContainer>
      {[0, 1, 2].map((index) => (
        <StyledDot
          key={index}
          size={size}
          animationDelay={index as 0 | 1 | 2}
          style={color ? { backgroundColor: color } : {}}
        />
      ))}
    </StyledDotsContainer>
  );
};

// Main Spinner component
export const Spinner = forwardRef<
  React.ElementRef<typeof StyledSpinnerContainer>,
  SpinnerProps
>((
  {
    variant = 'default',
    size = 'md',
    color,
    speed = 'normal',
    label,
    thickness,
    children,
    ...props
  },
  ref
) => {
  const IconComponent = getIconComponent(variant);
  const iconSize = getSizeValue(size);
  
  // Custom icon style
  const iconStyle = {
    ...(color && { color }),
    ...(thickness && { strokeWidth: thickness }),
  };
  
  const renderSpinner = () => {
    if (variant === 'dots') {
      return <DotsSpinner size={size} color={color} />;
    }
    
    if (variant === 'pulse' || variant === 'bounce') {
      return (
        <StyledSpinnerIcon
          variant={variant}
          speed={speed}
          size={size}
          style={{
            backgroundColor: color || '$brandPrimary',
            borderRadius: '50%',
            width: iconSize,
            height: iconSize,
          }}
        />
      );
    }
    
    return (
      <StyledSpinnerIcon
        variant={variant}
        speed={speed}
        size={size}
      >
        <IconComponent
          size={iconSize}
          style={iconStyle}
        />
      </StyledSpinnerIcon>
    );
  };
  
  return (
    <StyledSpinnerContainer
      ref={ref}
      size={size}
      {...props}
    >
      {renderSpinner()}
      
      {label && (
        <StyledLabel size={size}>
          {label}
        </StyledLabel>
      )}
      
      {children}
    </StyledSpinnerContainer>
  );
});

// Set display name
Spinner.displayName = 'Spinner';