/**
 * @fileoverview Custom UI hooks for common interactions and state management
 * @author Xalesin Team
 */

import { useState, useEffect, useCallback, useRef, RefObject } from 'react';

// Hook for managing disclosure state (modals, dropdowns, etc.)
export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const useDisclosure = (defaultIsOpen = false): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

// Hook for managing hover state
export const useHover = (): [RefObject<HTMLElement>, boolean] => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [ref, isHovered];
};

// Hook for managing focus state
export const useFocus = (): [RefObject<HTMLElement>, boolean] => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, []);

  return [ref, isFocused];
};

// Hook for detecting clicks outside an element
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// Hook for managing clipboard operations
export interface UseClipboardReturn {
  value: string;
  onCopy: (text: string) => Promise<void>;
  hasCopied: boolean;
}

export const useClipboard = (timeout = 2000): UseClipboardReturn => {
  const [value, setValue] = useState('');
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setValue(text);
      setHasCopied(true);
      
      setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }, [timeout]);

  return {
    value,
    onCopy,
    hasCopied,
  };
};

// Hook for managing form field state
export interface UseFieldReturn<T> {
  value: T;
  onChange: (value: T) => void;
  onBlur: () => void;
  error?: string;
  touched: boolean;
  isValid: boolean;
}

export const useField = <T>(
  initialValue: T,
  validator?: (value: T) => string | undefined
): UseFieldReturn<T> => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const onChange = useCallback((newValue: T) => {
    setValue(newValue);
    if (validator) {
      const validationError = validator(newValue);
      setError(validationError);
    }
  }, [validator]);

  const onBlur = useCallback(() => {
    setTouched(true);
  }, []);

  const isValid = !error;

  return {
    value,
    onChange,
    onBlur,
    error,
    touched,
    isValid,
  };
};

// Hook for managing async operations
export interface UseAsyncReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
}

export const useAsync = <T>(
  asyncFunction: (...args: any[]) => Promise<T>
): UseAsyncReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction(...args);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
};

// Hook for managing pagination
export interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

export const usePagination = (
  totalItems: number,
  initialPageSize = 10,
  initialPage = 1
): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const totalPages = Math.ceil(totalItems / pageSize);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  }, [hasNextPage]);

  const previousPage = useCallback(() => {
    if (hasPreviousPage) {
      setCurrentPage(prev => prev - 1);
    }
  }, [hasPreviousPage]);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size);
    setCurrentPage(1); // Reset to first page when page size changes
  }, []);

  return {
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    goToPage,
    setPageSize,
  };
};

// Hook for managing keyboard shortcuts
export const useKeyboard = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  options: {
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    meta?: boolean;
  } = {}
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { ctrl = false, shift = false, alt = false, meta = false } = options;
      
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrl &&
        event.shiftKey === shift &&
        event.altKey === alt &&
        event.metaKey === meta
      ) {
        event.preventDefault();
        callback(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback, options]);
};

// Hook for managing media queries
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
};

// Hook for managing element dimensions
export interface UseDimensionsReturn {
  width: number;
  height: number;
}

export const useDimensions = (ref: RefObject<HTMLElement>): UseDimensionsReturn => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateDimensions = () => {
      const { width, height } = element.getBoundingClientRect();
      setDimensions({ width, height });
    };

    // Initial measurement
    updateDimensions();

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return dimensions;
};

// Export all hooks
export {
  useDisclosure,
  useHover,
  useFocus,
  useClickOutside,
  useClipboard,
  useField,
  useAsync,
  usePagination,
  useKeyboard,
  useMediaQuery,
  useDimensions,
};