/**
 * Application store for Xalesin ERP
 * Global state management for application-wide settings and UI state
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { Currency } from '../types/database'
import type { NotificationLevel } from '../types/business'

/**
 * Theme configuration
 */
interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  primaryColor: string
  accentColor: string
  fontSize: 'small' | 'medium' | 'large'
  compactMode: boolean
}

/**
 * Notification settings
 */
interface NotificationSettings {
  enabled: boolean
  sound: boolean
  desktop: boolean
  email: boolean
  levels: NotificationLevel[]
}

/**
 * Language and localization
 */
interface LocalizationConfig {
  language: string
  region: string
  timezone: string
  dateFormat: string
  timeFormat: '12h' | '24h'
  numberFormat: string
  currencyDisplay: 'symbol' | 'code' | 'name'
}

/**
 * Application preferences
 */
interface AppPreferences {
  defaultCurrency: string
  defaultWarehouse: string | null
  defaultPriceList: string | null
  autoSave: boolean
  autoSaveInterval: number // in seconds
  confirmBeforeDelete: boolean
  showTooltips: boolean
  enableKeyboardShortcuts: boolean
  pageSize: number
  rememberFilters: boolean
}

/**
 * Navigation state
 */
interface NavigationState {
  sidebarCollapsed: boolean
  currentModule: string | null
  breadcrumbs: Array<{ label: string; path: string }>
  recentPages: Array<{ label: string; path: string; timestamp: Date }>
  pinnedPages: Array<{ label: string; path: string }>
}

/**
 * Loading states
 */
interface LoadingStates {
  global: boolean
  navigation: boolean
  data: boolean
  saving: boolean
}

/**
 * Error states
 */
interface ErrorStates {
  global: string | null
  network: string | null
  validation: Record<string, string[]>
}

/**
 * Modal state
 */
interface ModalState {
  isOpen: boolean
  type: string | null
  data: any
  options: Record<string, any>
}

/**
 * Toast notification
 */
interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  actions?: Array<{ label: string; action: () => void }>
  timestamp: Date
}

/**
 * Application state interface
 */
interface AppState {
  // Configuration
  theme: ThemeConfig
  notifications: NotificationSettings
  localization: LocalizationConfig
  preferences: AppPreferences

  // UI State
  navigation: NavigationState
  loading: LoadingStates
  errors: ErrorStates
  modal: ModalState
  toasts: ToastNotification[]

  // System state
  isOnline: boolean
  lastSync: Date | null
  version: string
  buildNumber: string

  // Actions - Theme
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void
  setThemeColors: (primary: string, accent: string) => void
  setFontSize: (size: 'small' | 'medium' | 'large') => void
  toggleCompactMode: () => void

  // Actions - Notifications
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void

  // Actions - Localization
  setLanguage: (language: string) => void
  setTimezone: (timezone: string) => void
  setDateFormat: (format: string) => void
  setTimeFormat: (format: '12h' | '24h') => void

  // Actions - Preferences
  updatePreferences: (preferences: Partial<AppPreferences>) => void
  setDefaultCurrency: (currency: string) => void
  setDefaultWarehouse: (warehouseId: string | null) => void
  setDefaultPriceList: (priceListId: string | null) => void

  // Actions - Navigation
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setCurrentModule: (module: string | null) => void
  setBreadcrumbs: (breadcrumbs: Array<{ label: string; path: string }>) => void
  addRecentPage: (page: { label: string; path: string }) => void
  togglePinnedPage: (page: { label: string; path: string }) => void

  // Actions - Loading
  setGlobalLoading: (loading: boolean) => void
  setNavigationLoading: (loading: boolean) => void
  setDataLoading: (loading: boolean) => void
  setSavingLoading: (loading: boolean) => void

  // Actions - Errors
  setGlobalError: (error: string | null) => void
  setNetworkError: (error: string | null) => void
  setValidationErrors: (field: string, errors: string[]) => void
  clearValidationErrors: (field?: string) => void
  clearAllErrors: () => void

  // Actions - Modal
  openModal: (type: string, data?: any, options?: Record<string, any>) => void
  closeModal: () => void

  // Actions - Toasts
  addToast: (toast: Omit<ToastNotification, 'id' | 'timestamp'>) => void
  removeToast: (id: string) => void
  clearToasts: () => void

  // Actions - System
  setOnlineStatus: (online: boolean) => void
  updateLastSync: () => void
  setVersion: (version: string, buildNumber: string) => void

  // Actions - Reset
  reset: () => void
}

/**
 * Default theme configuration
 */
const defaultTheme: ThemeConfig = {
  mode: 'system',
  primaryColor: '#3b82f6',
  accentColor: '#10b981',
  fontSize: 'medium',
  compactMode: false
}

/**
 * Default notification settings
 */
const defaultNotifications: NotificationSettings = {
  enabled: true,
  sound: true,
  desktop: true,
  email: false,
  levels: ['error', 'warning', 'info']
}

/**
 * Default localization configuration
 */
const defaultLocalization: LocalizationConfig = {
  language: 'en',
  region: 'US',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  dateFormat: 'MM/dd/yyyy',
  timeFormat: '12h',
  numberFormat: 'en-US',
  currencyDisplay: 'symbol'
}

/**
 * Default application preferences
 */
const defaultPreferences: AppPreferences = {
  defaultCurrency: 'USD',
  defaultWarehouse: null,
  defaultPriceList: null,
  autoSave: true,
  autoSaveInterval: 30,
  confirmBeforeDelete: true,
  showTooltips: true,
  enableKeyboardShortcuts: true,
  pageSize: 20,
  rememberFilters: true
}

/**
 * Initial state
 */
const initialState = {
  theme: defaultTheme,
  notifications: defaultNotifications,
  localization: defaultLocalization,
  preferences: defaultPreferences,
  navigation: {
    sidebarCollapsed: false,
    currentModule: null,
    breadcrumbs: [],
    recentPages: [],
    pinnedPages: []
  },
  loading: {
    global: false,
    navigation: false,
    data: false,
    saving: false
  },
  errors: {
    global: null,
    network: null,
    validation: {}
  },
  modal: {
    isOpen: false,
    type: null,
    data: null,
    options: {}
  },
  toasts: [],
  isOnline: navigator.onLine,
  lastSync: null,
  version: '1.0.0',
  buildNumber: '1'
}

/**
 * Application store
 */
export const useAppStore = create<AppState>()()
  persist(
    immer((set, get) => ({
      ...initialState,

      // Theme actions
      setThemeMode: (mode) => {
        set((state) => {
          state.theme.mode = mode
        })
      },

      setThemeColors: (primary, accent) => {
        set((state) => {
          state.theme.primaryColor = primary
          state.theme.accentColor = accent
        })
      },

      setFontSize: (size) => {
        set((state) => {
          state.theme.fontSize = size
        })
      },

      toggleCompactMode: () => {
        set((state) => {
          state.theme.compactMode = !state.theme.compactMode
        })
      },

      // Notification actions
      updateNotificationSettings: (settings) => {
        set((state) => {
          Object.assign(state.notifications, settings)
        })
      },

      // Localization actions
      setLanguage: (language) => {
        set((state) => {
          state.localization.language = language
        })
      },

      setTimezone: (timezone) => {
        set((state) => {
          state.localization.timezone = timezone
        })
      },

      setDateFormat: (format) => {
        set((state) => {
          state.localization.dateFormat = format
        })
      },

      setTimeFormat: (format) => {
        set((state) => {
          state.localization.timeFormat = format
        })
      },

      // Preference actions
      updatePreferences: (preferences) => {
        set((state) => {
          Object.assign(state.preferences, preferences)
        })
      },

      setDefaultCurrency: (currency) => {
        set((state) => {
          state.preferences.defaultCurrency = currency
        })
      },

      setDefaultWarehouse: (warehouseId) => {
        set((state) => {
          state.preferences.defaultWarehouse = warehouseId
        })
      },

      setDefaultPriceList: (priceListId) => {
        set((state) => {
          state.preferences.defaultPriceList = priceListId
        })
      },

      // Navigation actions
      toggleSidebar: () => {
        set((state) => {
          state.navigation.sidebarCollapsed = !state.navigation.sidebarCollapsed
        })
      },

      setSidebarCollapsed: (collapsed) => {
        set((state) => {
          state.navigation.sidebarCollapsed = collapsed
        })
      },

      setCurrentModule: (module) => {
        set((state) => {
          state.navigation.currentModule = module
        })
      },

      setBreadcrumbs: (breadcrumbs) => {
        set((state) => {
          state.navigation.breadcrumbs = breadcrumbs
        })
      },

      addRecentPage: (page) => {
        set((state) => {
          const recentPages = state.navigation.recentPages.filter(p => p.path !== page.path)
          recentPages.unshift({ ...page, timestamp: new Date() })
          state.navigation.recentPages = recentPages.slice(0, 10) // Keep only 10 recent pages
        })
      },

      togglePinnedPage: (page) => {
        set((state) => {
          const pinnedPages = state.navigation.pinnedPages
          const existingIndex = pinnedPages.findIndex(p => p.path === page.path)
          
          if (existingIndex >= 0) {
            pinnedPages.splice(existingIndex, 1)
          } else {
            pinnedPages.push(page)
          }
        })
      },

      // Loading actions
      setGlobalLoading: (loading) => {
        set((state) => {
          state.loading.global = loading
        })
      },

      setNavigationLoading: (loading) => {
        set((state) => {
          state.loading.navigation = loading
        })
      },

      setDataLoading: (loading) => {
        set((state) => {
          state.loading.data = loading
        })
      },

      setSavingLoading: (loading) => {
        set((state) => {
          state.loading.saving = loading
        })
      },

      // Error actions
      setGlobalError: (error) => {
        set((state) => {
          state.errors.global = error
        })
      },

      setNetworkError: (error) => {
        set((state) => {
          state.errors.network = error
        })
      },

      setValidationErrors: (field, errors) => {
        set((state) => {
          state.errors.validation[field] = errors
        })
      },

      clearValidationErrors: (field) => {
        set((state) => {
          if (field) {
            delete state.errors.validation[field]
          } else {
            state.errors.validation = {}
          }
        })
      },

      clearAllErrors: () => {
        set((state) => {
          state.errors.global = null
          state.errors.network = null
          state.errors.validation = {}
        })
      },

      // Modal actions
      openModal: (type, data, options) => {
        set((state) => {
          state.modal.isOpen = true
          state.modal.type = type
          state.modal.data = data || null
          state.modal.options = options || {}
        })
      },

      closeModal: () => {
        set((state) => {
          state.modal.isOpen = false
          state.modal.type = null
          state.modal.data = null
          state.modal.options = {}
        })
      },

      // Toast actions
      addToast: (toast) => {
        set((state) => {
          const id = Math.random().toString(36).substr(2, 9)
          const newToast: ToastNotification = {
            ...toast,
            id,
            timestamp: new Date()
          }
          state.toasts.push(newToast)
          
          // Auto-remove toast after duration
          if (toast.duration !== 0) {
            setTimeout(() => {
              const currentState = get()
              currentState.removeToast(id)
            }, toast.duration || 5000)
          }
        })
      },

      removeToast: (id) => {
        set((state) => {
          state.toasts = state.toasts.filter(toast => toast.id !== id)
        })
      },

      clearToasts: () => {
        set((state) => {
          state.toasts = []
        })
      },

      // System actions
      setOnlineStatus: (online) => {
        set((state) => {
          state.isOnline = online
        })
      },

      updateLastSync: () => {
        set((state) => {
          state.lastSync = new Date()
        })
      },

      setVersion: (version, buildNumber) => {
        set((state) => {
          state.version = version
          state.buildNumber = buildNumber
        })
      },

      // Reset
      reset: () => {
        set(() => ({ ...initialState }))
      }
    })),
    {
      name: 'xalesin-app-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        notifications: state.notifications,
        localization: state.localization,
        preferences: state.preferences,
        navigation: {
          sidebarCollapsed: state.navigation.sidebarCollapsed,
          pinnedPages: state.navigation.pinnedPages
        }
      })
    }
  )

/**
 * Application store selectors
 */
export const appSelectors = {
  // Theme
  theme: () => useAppStore((state) => state.theme),
  themeMode: () => useAppStore((state) => state.theme.mode),
  primaryColor: () => useAppStore((state) => state.theme.primaryColor),
  accentColor: () => useAppStore((state) => state.theme.accentColor),
  fontSize: () => useAppStore((state) => state.theme.fontSize),
  compactMode: () => useAppStore((state) => state.theme.compactMode),

  // Notifications
  notifications: () => useAppStore((state) => state.notifications),

  // Localization
  localization: () => useAppStore((state) => state.localization),
  language: () => useAppStore((state) => state.localization.language),
  timezone: () => useAppStore((state) => state.localization.timezone),

  // Preferences
  preferences: () => useAppStore((state) => state.preferences),
  defaultCurrency: () => useAppStore((state) => state.preferences.defaultCurrency),
  defaultWarehouse: () => useAppStore((state) => state.preferences.defaultWarehouse),
  defaultPriceList: () => useAppStore((state) => state.preferences.defaultPriceList),

  // Navigation
  navigation: () => useAppStore((state) => state.navigation),
  sidebarCollapsed: () => useAppStore((state) => state.navigation.sidebarCollapsed),
  currentModule: () => useAppStore((state) => state.navigation.currentModule),
  breadcrumbs: () => useAppStore((state) => state.navigation.breadcrumbs),
  recentPages: () => useAppStore((state) => state.navigation.recentPages),
  pinnedPages: () => useAppStore((state) => state.navigation.pinnedPages),

  // Loading
  loading: () => useAppStore((state) => state.loading),
  isGlobalLoading: () => useAppStore((state) => state.loading.global),
  isNavigationLoading: () => useAppStore((state) => state.loading.navigation),
  isDataLoading: () => useAppStore((state) => state.loading.data),
  isSaving: () => useAppStore((state) => state.loading.saving),

  // Errors
  errors: () => useAppStore((state) => state.errors),
  globalError: () => useAppStore((state) => state.errors.global),
  networkError: () => useAppStore((state) => state.errors.network),
  validationErrors: () => useAppStore((state) => state.errors.validation),

  // Modal
  modal: () => useAppStore((state) => state.modal),
  isModalOpen: () => useAppStore((state) => state.modal.isOpen),

  // Toasts
  toasts: () => useAppStore((state) => state.toasts),

  // System
  isOnline: () => useAppStore((state) => state.isOnline),
  lastSync: () => useAppStore((state) => state.lastSync),
  version: () => useAppStore((state) => state.version),
  buildNumber: () => useAppStore((state) => state.buildNumber)
}