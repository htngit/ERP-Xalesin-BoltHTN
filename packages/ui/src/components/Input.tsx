import React from 'react'
import { Input as TamaguiInput, InputProps as TamaguiInputProps, YStack, XStack, Text, styled } from 'tamagui'
import { Eye, EyeOff, AlertCircle } from '@tamagui/lucide-icons'
import { Button } from './Button'

const StyledInput = styled(TamaguiInput, {
  name: 'XalesinInput',
  variants: {
    intent: {
      default: {
        borderColor: '$borderColor',
        focusStyle: {
          borderColor: '$primary',
          borderWidth: 2,
        },
      },
      error: {
        borderColor: '$error',
        focusStyle: {
          borderColor: '$error',
          borderWidth: 2,
        },
      },
      success: {
        borderColor: '$success',
        focusStyle: {
          borderColor: '$success',
          borderWidth: 2,
        },
      },
    },
    hasIcon: {
      true: {
        paddingLeft: '$10',
      },
    },
  } as const,
  defaultVariants: {
    intent: 'default',
  },
})

export interface InputProps extends Omit<TamaguiInputProps, 'size'> {
  /**
   * Label for the input field
   */
  label?: string
  /**
   * Helper text to display below the input
   */
  helperText?: string
  /**
   * Error message to display
   */
  error?: string
  /**
   * Whether the field is required
   */
  required?: boolean
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode
  /**
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Whether the input should take full width
   */
  fullWidth?: boolean
  /**
   * Input type for password visibility toggle
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}

/**
 * Enhanced Input component for Xalesin ERP
 * 
 * Features:
 * - Label and helper text support
 * - Error state with validation messages
 * - Left and right icon support
 * - Password visibility toggle
 * - Multiple sizes
 * - Full width option
 * - Required field indicator
 * - Accessibility support
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email Address"
 *   type="email"
 *   required
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 * />
 * 
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 * />
 * ```
 */
export const Input = React.forwardRef<
  React.ElementRef<typeof StyledInput>,
  InputProps
>(({ 
  label, 
  helperText, 
  error, 
  required, 
  leftIcon, 
  rightIcon, 
  size = 'medium', 
  fullWidth, 
  type = 'text',
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [internalType, setInternalType] = React.useState(type)
  
  React.useEffect(() => {
    if (type === 'password') {
      setInternalType(showPassword ? 'text' : 'password')
    } else {
      setInternalType(type)
    }
  }, [type, showPassword])
  
  const sizeProps = {
    small: { height: '$3', fontSize: '$3', paddingHorizontal: '$3' },
    medium: { height: '$4', fontSize: '$4', paddingHorizontal: '$4' },
    large: { height: '$5', fontSize: '$5', paddingHorizontal: '$5' },
  }[size]
  
  const intent = error ? 'error' : 'default'
  
  return (
    <YStack space="$2" width={fullWidth ? '100%' : undefined}>
      {label && (
        <XStack alignItems="center" space="$1">
          <Text fontSize="$4" fontWeight="500" color="$color">
            {label}
          </Text>
          {required && (
            <Text fontSize="$4" color="$error">
              *
            </Text>
          )}
        </XStack>
      )}
      
      <XStack position="relative" alignItems="center">
        {leftIcon && (
          <XStack
            position="absolute"
            left="$3"
            zIndex={1}
            alignItems="center"
            justifyContent="center"
            pointerEvents="none"
          >
            {leftIcon}
          </XStack>
        )}
        
        <StyledInput
          ref={ref}
          intent={intent}
          hasIcon={!!leftIcon}
          secureTextEntry={internalType === 'password'}
          keyboardType={
            type === 'email' ? 'email-address' :
            type === 'number' ? 'numeric' :
            type === 'tel' ? 'phone-pad' :
            type === 'url' ? 'url' :
            'default'
          }
          autoCapitalize={
            type === 'email' || type === 'url' ? 'none' :
            type === 'password' ? 'none' :
            'sentences'
          }
          autoCorrect={type !== 'email' && type !== 'password' && type !== 'url'}
          width={fullWidth ? '100%' : undefined}
          paddingRight={type === 'password' || rightIcon ? '$10' : undefined}
          {...sizeProps}
          {...props}
        />
        
        {(type === 'password' || rightIcon) && (
          <XStack
            position="absolute"
            right="$3"
            alignItems="center"
            justifyContent="center"
          >
            {type === 'password' ? (
              <Button
                intent="ghost"
                size="$2"
                padding="$1"
                onPress={() => setShowPassword(!showPassword)}
                accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            ) : (
              rightIcon
            )}
          </XStack>
        )}
      </XStack>
      
      {(error || helperText) && (
        <XStack alignItems="center" space="$2">
          {error && <AlertCircle size={16} color="$error" />}
          <Text
            fontSize="$3"
            color={error ? '$error' : '$colorTransparent'}
            flexShrink={1}
          >
            {error || helperText}
          </Text>
        </XStack>
      )}
    </YStack>
  )
})

Input.displayName = 'Input'

export default Input