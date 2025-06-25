/**
 * @fileoverview ProgressBar component for showing progress indicators
 * @author Xalesin Team
 */

import React from 'react';
import { styled } from '@tamagui/core';
import { Progress } from '@tamagui/progress';

// Styled progress container
const ProgressContainer = styled(Progress, {
  name: 'ProgressBar',
  backgroundColor: '$backgroundHover',
  borderRadius: '$2',
  height: 8,
  overflow: 'hidden',
  
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

const ProgressIndicator = styled(Progress.Indicator, {
  name: 'ProgressIndicator',
  backgroundColor: '$blue9',
  height: '100%',
  transition: 'transform 0.3s ease',
  
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

export interface ProgressBarProps {
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
 * @returns JSX element representing the progress bar
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
          color: '$color'
        }}>
          {label && <span>{label}</span>}
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      
      <ProgressContainer
        value={percentage}
        max={100}
        size={size}
        variant={variant}
      >
        <ProgressIndicator variant={variant} />
      </ProgressContainer>
    </div>
  );
};

// Export types
export type { ProgressBarProps };