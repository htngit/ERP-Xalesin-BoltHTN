/**
 * @fileoverview ProgressBar component for showing progress indicators
 * @author Xalesin Team
 */

import * as React from 'react';
import { styled } from '@tamagui/core';

// Styled progress container
const ProgressContainer = styled('div', {
  name: 'ProgressBar',
  backgroundColor: '$backgroundHover',
  borderRadius: '$2',
  height: 8,
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  
  variants: {
    size: {
      sm: {
        height: 4,
      },
      md: {
        height: 8,
      },
      lg: {
        height: 12,
      },
    },
    variant: {
      default: {
        backgroundColor: '$backgroundHover',
      },
      success: {
        backgroundColor: '$green2',
      },
      warning: {
        backgroundColor: '$orange2',
      },
      error: {
        backgroundColor: '$red2',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

// Styled progress indicator
const ProgressIndicator = styled('div', {
  name: 'ProgressIndicator',
  backgroundColor: '$blue9',
  height: '100%',
  transition: 'transform 0.3s ease',
  borderRadius: '$2',
  
  variants: {
    variant: {
      default: {
        backgroundColor: '$blue9',
      },
      success: {
        backgroundColor: '$green9',
      },
      warning: {
        backgroundColor: '$orange9',
      },
      error: {
        backgroundColor: '$red9',
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
  },
});

interface ProgressBarProps {
  /** Progress value from 0 to 100 */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Show percentage text */
  showPercentage?: boolean;
  /** Custom label */
  label?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * ProgressBar component for displaying progress indicators
 * 
 * @param props - ProgressBar component props
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showPercentage = false,
  label,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: 4,
          fontSize: 14,
        }}>
          {label && <span>{label}</span>}
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      
      <ProgressContainer
        size={size}
        variant={variant}
      >
        <ProgressIndicator 
          variant={variant}
          style={{ width: `${percentage}%` }}
        />
      </ProgressContainer>
    </div>
  );
};

// Export types
export type { ProgressBarProps };