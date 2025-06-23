import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  /**
   * Ukuran spinner (dalam piksel)
   */
  size?: number;
  /**
   * Warna spinner
   */
  color?: string;
  /**
   * Teks yang ditampilkan di samping spinner
   */
  text?: string;
  /**
   * Class tambahan untuk container
   */
  className?: string;
}

/**
 * Komponen LoadingSpinner untuk menampilkan indikator loading
 * yang konsisten di seluruh aplikasi
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 20,
  color = 'currentColor',
  text,
  className,
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <svg
        className={`animate-spin -ml-1 mr-2 h-${size / 4} w-${size / 4}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{ height: size, width: size }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill={color}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text && <span>{text}</span>}
    </div>
  );
};