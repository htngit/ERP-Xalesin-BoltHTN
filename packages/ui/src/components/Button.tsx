import React from 'react'
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps, Spinner } from 'tamagui'
import { styled } from '@tamagui/core'

// Extended button variants for ERP use cases
const StyledButton = styled(TamaguiButton, {
  name: 'XalesinButton',
  variants: {
    intent: {
      primary: {
        backgroundColor: '$primary',
        borderColor: '$primary',
        color: '$primaryForeground',
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
        borderColor: '$secondary',
        color: '$secondaryForeground',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
          borderColor: '$secondaryHover',
        },
        pressStyle: {
          backgroundColor: '$secondaryActive',
          borderColor: '$secondaryActive',
        },
      },
      success: {
        backgroundColor: '$success',
        borderColor: '$success',
        color: '$successForeground',
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
        borderColor: '$warning',
        color: '$warningForeground',
        hoverStyle: {
          backgroundColor: '$warningHover',
          borderColor: '$warningHover',
        },
        pressStyle: {
          backgroundColor: '$warningActive',
          borderColor: '$warningActive',
        },
      },
      error: {
        backgroundColor: '$error',
        borderColor: '$error',
        color: '$errorForeground',
        hoverStyle: {
          backgroundColor: '$errorHover',
          borderColor: '$errorHover',
        },
        pressStyle: {
          backgroundColor: '$errorActive',
          borderColor: '$errorActive',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$borderColor',
        color: '$color',
        borderWidth: 1,
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
        pressStyle: {
          backgroundColor: '$backgroundPress',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '$color',
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
        pressStyle: {
          backgroundColor: '$backgroundPress',
        },
      },
    },
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: 'none',
      },
    },
  } as const,
  defaultVariants: {
    intent: 'primary',
  },
})

export interface ButtonProps extends Omit<TamaguiButtonProps, 'variant'> {
  /**
   * The visual intent of the button
   */
  intent?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost'
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean
}

/**
 * Enhanced Button component for Xalesin ERP
 * 
 * Features:
 * - Multiple visual intents (primary, secondary, success, warning, error, outline, ghost)
 * - Loading state with spinner
 * - Left and right icon support
 * - Full width option
 * - Accessibility support
 * - Consistent styling across platforms
 * 
 * @example
 * ```tsx
 * <Button intent="primary" onPress={() => console.log('Pressed')}>
 *   Save Changes
 * </Button>
 * 
 * <Button intent="outline" loading leftIcon={<Plus />}>
 *   Add Item
 * </Button>
 * ```
 */
export const Button = React.forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(({ intent = 'primary', loading, leftIcon, rightIcon, children, fullWidth, disabled, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      intent={intent}
      loading={loading}
      disabled={disabled || loading}
      width={fullWidth ? '100%' : undefined}
      {...props}
    >
      {loading && (
        <Spinner size="small" color="$color" marginRight={children ? '$2' : 0} />
      )}
      {!loading && leftIcon && (
        <React.Fragment>
          {leftIcon}
          {children && <>&nbsp;</>}
        </React.Fragment>
      )}
      {children}
      {!loading && rightIcon && (
        <React.Fragment>
          {children && <>&nbsp;</>}
          {rightIcon}
        </React.Fragment>
      )}
    </StyledButton>
  )
})

Button.displayName = 'Button'

export default Button