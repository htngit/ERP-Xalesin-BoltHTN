/**
 * @fileoverview UI providers for theme, context, and global state management
 * @author Xalesin Team
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TamaguiProvider, TamaguiProviderProps } from '@tamagui/core';
import { tamaguiConfig, ThemeName } from '../theme';

// Theme context for managing light/dark mode
interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Toast context for global notifications
interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'error' | 'warning' | 'info') => void;
  hideToast: () => void;
  toast: {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    visible: boolean;
  } | null;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Modal context for global modal management
interface ModalContextType {
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
  isOpen: boolean;
  content: ReactNode;
  options: ModalOptions;
}

interface ModalOptions {
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  backdrop?: boolean;
  centered?: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Loading context for global loading states
interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage?: string;
  setLoadingMessage: (message?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'xalesin-theme',
}) => {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(storageKey) as ThemeName;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeState(savedTheme);
      }
    }
  }, [storageKey]);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const isDark = theme === 'dark';

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Toast Provider Component
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    visible: boolean;
  } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
    setToast({ message, type, visible: true });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  };

  const hideToast = () => {
    setToast(prev => prev ? { ...prev, visible: false } : null);
    
    // Remove from state after animation
    setTimeout(() => {
      setToast(null);
    }, 300);
  };

  const value: ToastContextType = {
    showToast,
    hideToast,
    toast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

// Modal Provider Component
interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [options, setOptions] = useState<ModalOptions>({});

  const openModal = (modalContent: ReactNode, modalOptions: ModalOptions = {}) => {
    setContent(modalContent);
    setOptions({
      size: 'md',
      closable: true,
      backdrop: true,
      centered: true,
      ...modalOptions,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setContent(null);
      setOptions({});
    }, 300);
  };

  const value: ModalContextType = {
    openModal,
    closeModal,
    isOpen,
    content,
    options,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

// Loading Provider Component
interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | undefined>();

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (!loading) {
      setLoadingMessage(undefined);
    }
  };

  const value: LoadingContextType = {
    isLoading,
    setLoading,
    loadingMessage,
    setLoadingMessage,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

// Main UI Provider that combines all providers
interface UIProviderProps extends Omit<TamaguiProviderProps, 'config'> {
  children: ReactNode;
  defaultTheme?: ThemeName;
  themeStorageKey?: string;
}

export const UIProvider: React.FC<UIProviderProps> = ({
  children,
  defaultTheme = 'light',
  themeStorageKey = 'xalesin-theme',
  ...tamaguiProps
}) => {
  return (
    <TamaguiProvider config={tamaguiConfig} {...tamaguiProps}>
      <ThemeProvider defaultTheme={defaultTheme} storageKey={themeStorageKey}>
        <ToastProvider>
          <ModalProvider>
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
};

// Custom hooks for using contexts
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Export types
export type {
  ThemeContextType,
  ToastContextType,
  ModalContextType,
  LoadingContextType,
  ModalOptions,
  UIProviderProps,
  ThemeProviderProps,
  ToastProviderProps,
  ModalProviderProps,
  LoadingProviderProps,
};