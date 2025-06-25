/**
 * @fileoverview Modal component with overlay, content sections, and animations
 * @author Xalesin Team
 */

import React, { forwardRef, useEffect } from 'react';
import { styled, YStack, XStack, YStackProps, XStackProps } from '@tamagui/core';
import { AnimatePresence } from '@tamagui/animations-moti';
import { X } from 'lucide-react';
import { Button } from '../Button';

// Modal size types
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Base modal props
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  preventScroll?: boolean;
  children: React.ReactNode;
}

// Modal overlay props
export interface ModalOverlayProps extends YStackProps {
  onPress?: () => void;
}

// Modal content props
export interface ModalContentProps extends YStackProps {
  size?: ModalSize;
}

// Modal header props
export interface ModalHeaderProps extends XStackProps {
  showCloseButton?: boolean;
  onClose?: () => void;
}

// Modal body props
export interface ModalBodyProps extends YStackProps {
  // No additional props for now
}

// Modal footer props
export interface ModalFooterProps extends XStackProps {
  justify?: 'start' | 'center' | 'end' | 'between';
}

// Modal close button props
export interface ModalCloseButtonProps {
  onPress?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

// Styled modal overlay
const StyledModalOverlay = styled(YStack, {
  name: 'ModalOverlay',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$4',
  zIndex: 1000,
  
  // Animation variants
  variants: {
    entering: {
      true: {
        opacity: 0,
        animation: 'quick',
        animateOnly: ['opacity'],
      },
    },
    
    exiting: {
      true: {
        opacity: 0,
        animation: 'quick',
        animateOnly: ['opacity'],
      },
    },
  },
});

// Styled modal content
const StyledModalContent = styled(YStack, {
  name: 'ModalContent',
  backgroundColor: '$backgroundPrimary',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.25,
  shadowRadius: 25,
  elevation: 10,
  maxHeight: '90vh',
  overflow: 'hidden',
  
  variants: {
    size: {
      xs: {
        width: 320,
        maxWidth: '90vw',
      },
      
      sm: {
        width: 400,
        maxWidth: '90vw',
      },
      
      md: {
        width: 500,
        maxWidth: '90vw',
      },
      
      lg: {
        width: 700,
        maxWidth: '90vw',
      },
      
      xl: {
        width: 900,
        maxWidth: '90vw',
      },
      
      full: {
        width: '95vw',
        height: '95vh',
        maxWidth: 'none',
        maxHeight: 'none',
      },
    },
    
    entering: {
      true: {
        opacity: 0,
        scale: 0.95,
        y: -20,
        animation: 'bouncy',
        animateOnly: ['opacity', 'scale', 'y'],
      },
    },
    
    exiting: {
      true: {
        opacity: 0,
        scale: 0.95,
        y: -20,
        animation: 'quick',
        animateOnly: ['opacity', 'scale', 'y'],
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

// Styled modal header
const StyledModalHeader = styled(XStack, {
  name: 'ModalHeader',
  padding: '$5',
  borderBottomWidth: 1,
  borderBottomColor: '$borderPrimary',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 60,
});

// Styled modal body
const StyledModalBody = styled(YStack, {
  name: 'ModalBody',
  padding: '$5',
  flex: 1,
  overflow: 'auto',
});

// Styled modal footer
const StyledModalFooter = styled(XStack, {
  name: 'ModalFooter',
  padding: '$5',
  borderTopWidth: 1,
  borderTopColor: '$borderPrimary',
  alignItems: 'center',
  gap: '$3',
  
  variants: {
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
  },
  
  defaultVariants: {
    justify: 'end',
  },
});

// Modal context for sharing props between components
const ModalContext = React.createContext<{
  size: ModalSize;
  onClose: () => void;
}>({ size: 'md', onClose: () => {} });

// Main Modal component
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  preventScroll = true,
  children,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!closeOnEsc || !isOpen) return;
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEsc, isOpen, onClose]);
  
  // Handle body scroll
  useEffect(() => {
    if (!preventScroll) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preventScroll]);
  
  return (
    <ModalContext.Provider value={{ size, onClose }}>
      <AnimatePresence>
        {isOpen && (
          <ModalOverlay
            onPress={closeOnOverlayClick ? onClose : undefined}
          >
            {children}
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

// Modal Overlay component
export const ModalOverlay = forwardRef<
  React.ElementRef<typeof StyledModalOverlay>,
  ModalOverlayProps
>((
  {
    onPress,
    children,
    ...props
  },
  ref
) => {
  const handlePress = (event: any) => {
    // Only trigger onPress if clicking the overlay itself, not its children
    if (event.target === event.currentTarget && onPress) {
      onPress();
    }
  };
  
  return (
    <StyledModalOverlay
      ref={ref}
      onPress={handlePress}
      {...props}
    >
      {children}
    </StyledModalOverlay>
  );
});

// Modal Content component
export const ModalContent = forwardRef<
  React.ElementRef<typeof StyledModalContent>,
  ModalContentProps
>((
  {
    size,
    children,
    ...props
  },
  ref
) => {
  const { size: contextSize } = React.useContext(ModalContext);
  const finalSize = size || contextSize;
  
  return (
    <StyledModalContent
      ref={ref}
      size={finalSize}
      {...props}
    >
      {children}
    </StyledModalContent>
  );
});

// Modal Header component
export const ModalHeader = forwardRef<
  React.ElementRef<typeof StyledModalHeader>,
  ModalHeaderProps
>((
  {
    showCloseButton = true,
    onClose,
    children,
    ...props
  },
  ref
) => {
  const { onClose: contextOnClose } = React.useContext(ModalContext);
  const handleClose = onClose || contextOnClose;
  
  return (
    <StyledModalHeader
      ref={ref}
      {...props}
    >
      <YStack flex={1}>
        {children}
      </YStack>
      
      {showCloseButton && (
        <ModalCloseButton onPress={handleClose} />
      )}
    </StyledModalHeader>
  );
});

// Modal Body component
export const ModalBody = forwardRef<
  React.ElementRef<typeof StyledModalBody>,
  ModalBodyProps
>((
  {
    children,
    ...props
  },
  ref
) => {
  return (
    <StyledModalBody
      ref={ref}
      {...props}
    >
      {children}
    </StyledModalBody>
  );
});

// Modal Footer component
export const ModalFooter = forwardRef<
  React.ElementRef<typeof StyledModalFooter>,
  ModalFooterProps
>((
  {
    justify = 'end',
    children,
    ...props
  },
  ref
) => {
  return (
    <StyledModalFooter
      ref={ref}
      justify={justify}
      {...props}
    >
      {children}
    </StyledModalFooter>
  );
});

// Modal Close Button component
export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onPress,
  size = 'sm',
}) => {
  const { onClose } = React.useContext(ModalContext);
  const handlePress = onPress || onClose;
  
  return (
    <Button
      variant="ghost"
      size={size}
      onPress={handlePress}
      icon={X}
      aria-label="Close modal"
    />
  );
};

// Set display names
Modal.displayName = 'Modal';
ModalOverlay.displayName = 'ModalOverlay';
ModalContent.displayName = 'ModalContent';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';
ModalCloseButton.displayName = 'ModalCloseButton';