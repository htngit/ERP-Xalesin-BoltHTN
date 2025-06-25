/**
 * @fileoverview Card component with header, body, and footer sections
 * @author Xalesin Team
 */

import React, { forwardRef } from 'react';
import { styled, Stack, StackProps } from '@tamagui/core';

// Card variant types
type CardVariant = 'elevated' | 'outlined' | 'filled' | 'ghost';

// Card size types
type CardSize = 'sm' | 'md' | 'lg';

// Base card props
export interface CardProps extends StackProps {
  variant?: CardVariant;
  size?: CardSize;
  hoverable?: boolean;
  clickable?: boolean;
}

// Card header props
export interface CardHeaderProps extends StackProps {
  divider?: boolean;
}

// Card body props
export interface CardBodyProps extends StackProps {
  // No additional props for now
}

// Card footer props
export interface CardFooterProps extends StackProps {
  divider?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between';
}

// Styled card container
const StyledCard = styled(Stack, {
  name: 'Card',
  backgroundColor: '$backgroundPrimary',
  borderRadius: '$4',
  overflow: 'hidden',
  position: 'relative',
  
  variants: {
    variant: {
      elevated: {
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 0,
      },
      
      outlined: {
        borderWidth: 1,
        borderColor: '$borderPrimary',
        shadowColor: 'transparent',
      },
      
      filled: {
        backgroundColor: '$backgroundSecondary',
        borderWidth: 0,
        shadowColor: 'transparent',
      },
      
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        shadowColor: 'transparent',
      },
    },
    
    size: {
      sm: {
        borderRadius: '$3',
      },
      
      md: {
        borderRadius: '$4',
      },
      
      lg: {
        borderRadius: '$5',
      },
    },
    
    hoverable: {
      true: {
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        
        hoverStyle: {
          transform: 'translateY(-2px)',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 6,
        },
      },
    },
    
    clickable: {
      true: {
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
        
        pressStyle: {
          backgroundColor: '$backgroundPress',
          transform: 'scale(0.98)',
        },
        
        focusStyle: {
          outline: 'none',
          borderColor: '$borderFocus',
          shadowColor: '$borderFocus',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
      },
    },
  },
  
  defaultVariants: {
    variant: 'elevated',
    size: 'md',
  },
});

// Styled card header
const StyledCardHeader = styled(Stack, {
  name: 'CardHeader',
  padding: '$4',
  
  variants: {
    divider: {
      true: {
        borderBottomWidth: 1,
        borderBottomColor: '$borderPrimary',
      },
    },
    
    size: {
      sm: {
        padding: '$3',
      },
      
      md: {
        padding: '$4',
      },
      
      lg: {
        padding: '$5',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

// Styled card body
const StyledCardBody = styled(Stack, {
  name: 'CardBody',
  padding: '$4',
  flex: 1,
  
  variants: {
    size: {
      sm: {
        padding: '$3',
      },
      
      md: {
        padding: '$4',
      },
      
      lg: {
        padding: '$5',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

// Styled card footer
const StyledCardFooter = styled(Stack, {
  flexDirection: 'row',
  name: 'CardFooter',
  padding: '$4',
  alignItems: 'center',
  
  variants: {
    divider: {
      true: {
        borderTopWidth: 1,
        borderTopColor: '$borderPrimary',
      },
    },
    
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      
      center: {
        justifyContent: 'center',
      },
      
      end: {
        justifyContent: 'flex-end',
      },
      
      between: {
        justifyContent: 'space-between',
      },
    },
    
    size: {
      sm: {
        padding: '$3',
      },
      
      md: {
        padding: '$4',
      },
      
      lg: {
        padding: '$5',
      },
    },
  },
  
  defaultVariants: {
    justify: 'end',
    size: 'md',
  },
});

// Card context for sharing size between components
const CardContext = React.createContext<{ size: CardSize }>({ size: 'md' });

// Main Card component
export const Card = forwardRef<
  React.ElementRef<typeof StyledCard>,
  CardProps
>((
  {
    variant = 'elevated',
    size = 'md',
    hoverable = false,
    clickable = false,
    children,
    ...props
  },
  ref
) => {
  return (
    <CardContext.Provider value={{ size }}>
      <StyledCard
        ref={ref}
        variant={variant}
        size={size}
        hoverable={hoverable}
        clickable={clickable}
        {...props}
      >
        {children}
      </StyledCard>
    </CardContext.Provider>
  );
});

// Card Header component
export const CardHeader = forwardRef<
  React.ElementRef<typeof StyledCardHeader>,
  CardHeaderProps
>((
  {
    divider = false,
    children,
    ...props
  },
  ref
) => {
  const { size } = React.useContext(CardContext);
  
  return (
    <StyledCardHeader
      ref={ref}
      divider={divider}
      size={size}
      {...props}
    >
      {children}
    </StyledCardHeader>
  );
});

// Card Body component
export const CardBody = forwardRef<
  React.ElementRef<typeof StyledCardBody>,
  CardBodyProps
>((
  {
    children,
    ...props
  },
  ref
) => {
  const { size } = React.useContext(CardContext);
  
  return (
    <StyledCardBody
      ref={ref}
      size={size}
      {...props}
    >
      {children}
    </StyledCardBody>
  );
});

// Card Footer component
export const CardFooter = forwardRef<
  React.ElementRef<typeof StyledCardFooter>,
  CardFooterProps
>((
  {
    divider = false,
    justify = 'end',
    children,
    ...props
  },
  ref
) => {
  const { size } = React.useContext(CardContext);
  
  return (
    <StyledCardFooter
      ref={ref}
      divider={divider}
      justify={justify}
      size={size}
      {...props}
    >
      {children}
    </StyledCardFooter>
  );
});

// Set display names
Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';