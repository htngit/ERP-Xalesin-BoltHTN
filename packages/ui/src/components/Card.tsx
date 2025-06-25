import React from 'react'
import { Card as TamaguiCard, CardProps as TamaguiCardProps, YStack, XStack, Text, styled } from 'tamagui'

const StyledCard = styled(TamaguiCard, {
  name: 'XalesinCard',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
  
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
      },
      outlined: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
        borderWidth: 1,
      },
      elevated: {
        backgroundColor: '$background',
        borderColor: 'transparent',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
      },
      filled: {
        backgroundColor: '$backgroundStrong',
        borderColor: 'transparent',
      },
    },
    interactive: {
      true: {
        cursor: 'pointer',
        hoverStyle: {
          backgroundColor: '$backgroundHover',
          borderColor: '$borderColorHover',
          shadowOpacity: 0.2,
        },
        pressStyle: {
          backgroundColor: '$backgroundPress',
          borderColor: '$borderColorPress',
          shadowOpacity: 0.05,
        },
      },
    },
    size: {
      small: {
        padding: '$3',
        borderRadius: '$3',
      },
      medium: {
        padding: '$4',
        borderRadius: '$4',
      },
      large: {
        padding: '$5',
        borderRadius: '$5',
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
})

const CardHeader = styled(YStack, {
  name: 'CardHeader',
  marginBottom: '$3',
  space: '$2',
})

const CardTitle = styled(Text, {
  name: 'CardTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$color',
  lineHeight: '$6',
})

const CardDescription = styled(Text, {
  name: 'CardDescription',
  fontSize: '$4',
  color: '$colorTransparent',
  lineHeight: '$4',
})

const CardContent = styled(YStack, {
  name: 'CardContent',
  flex: 1,
})

const CardFooter = styled(XStack, {
  name: 'CardFooter',
  marginTop: '$3',
  justifyContent: 'flex-end',
  alignItems: 'center',
  space: '$2',
})

export interface CardProps extends Omit<TamaguiCardProps, 'size'> {
  /**
   * Visual variant of the card
   */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled'
  /**
   * Size of the card
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean
  /**
   * Card title
   */
  title?: string
  /**
   * Card description
   */
  description?: string
  /**
   * Content to display in the card header
   */
  header?: React.ReactNode
  /**
   * Content to display in the card footer
   */
  footer?: React.ReactNode
}

/**
 * Enhanced Card component for Xalesin ERP
 * 
 * Features:
 * - Multiple visual variants (default, outlined, elevated, filled)
 * - Interactive states with hover and press effects
 * - Built-in header, content, and footer sections
 * - Title and description support
 * - Multiple sizes
 * - Consistent styling across platforms
 * - Shadow and elevation support
 * 
 * @example
 * ```tsx
 * <Card
 *   title="Sales Report"
 *   description="Monthly sales performance"
 *   variant="elevated"
 *   interactive
 *   onPress={() => console.log('Card pressed')}
 * >
 *   <Text>Card content goes here</Text>
 * </Card>
 * 
 * <Card
 *   header={<CustomHeader />}
 *   footer={<CustomFooter />}
 *   variant="outlined"
 * >
 *   <Text>Custom header and footer</Text>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<
  React.ElementRef<typeof StyledCard>,
  CardProps
>(({ 
  variant = 'default', 
  size = 'medium', 
  interactive, 
  title, 
  description, 
  header, 
  footer, 
  children, 
  ...props 
}, ref) => {
  const hasHeader = title || description || header
  const hasFooter = footer
  
  return (
    <StyledCard
      ref={ref}
      variant={variant}
      size={size}
      interactive={interactive}
      {...props}
    >
      {hasHeader && (
        <CardHeader>
          {header || (
            <>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </>
          )}
        </CardHeader>
      )}
      
      <CardContent>
        {children}
      </CardContent>
      
      {hasFooter && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </StyledCard>
  )
})

Card.displayName = 'Card'

// Export sub-components for advanced usage
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export default Card