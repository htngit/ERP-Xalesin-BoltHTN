import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helpText,
  className,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 transition-colors duration-200',
          'focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500',
          error && 'border-error-300 focus:border-error-500 focus:ring-error-500',
          'disabled:bg-gray-50 disabled:text-gray-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error-600">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};