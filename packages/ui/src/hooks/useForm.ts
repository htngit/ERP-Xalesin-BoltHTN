import { useState, useCallback, useMemo } from 'react'

export interface ValidationRule<T = any> {
  required?: boolean | string
  minLength?: number | { value: number; message: string }
  maxLength?: number | { value: number; message: string }
  min?: number | { value: number; message: string }
  max?: number | { value: number; message: string }
  pattern?: RegExp | { value: RegExp; message: string }
  validate?: (value: T) => string | boolean
  custom?: (value: T, formData: Record<string, any>) => string | boolean
}

export interface FieldConfig<T = any> {
  defaultValue?: T
  rules?: ValidationRule<T>
}

export interface FormConfig<T extends Record<string, any> = Record<string, any>> {
  defaultValues?: Partial<T>
  fields?: Record<keyof T, FieldConfig>
  mode?: 'onChange' | 'onBlur' | 'onSubmit'
}

export interface FieldState {
  value: any
  error?: string
  touched: boolean
  dirty: boolean
}

export interface FormState<T extends Record<string, any> = Record<string, any>> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  dirty: Partial<Record<keyof T, boolean>>
  isValid: boolean
  isSubmitting: boolean
  submitCount: number
}

export interface UseFormReturn<T extends Record<string, any> = Record<string, any>> {
  // Form state
  formState: FormState<T>
  
  // Field methods
  register: (name: keyof T, config?: FieldConfig) => {
    value: any
    onChangeText?: (value: string) => void
    onBlur?: () => void
    error?: string
  }
  setValue: (name: keyof T, value: any, options?: { shouldValidate?: boolean; shouldTouch?: boolean }) => void
  getValue: (name: keyof T) => any
  clearErrors: (name?: keyof T) => void
  setError: (name: keyof T, error: string) => void
  
  // Form methods
  handleSubmit: (onSubmit: (data: T) => void | Promise<void>) => () => Promise<void>
  reset: (values?: Partial<T>) => void
  validate: (name?: keyof T) => Promise<boolean>
  
  // Utility methods
  watch: (name?: keyof T) => any
  getFieldState: (name: keyof T) => FieldState
}

/**
 * Enhanced form hook for Xalesin ERP
 * 
 * Features:
 * - Field validation with multiple rules
 * - Form state management
 * - Touch and dirty state tracking
 * - Async validation support
 * - Custom validation functions
 * - Multiple validation modes
 * - TypeScript support
 * 
 * @example
 * ```tsx
 * interface LoginForm {
 *   email: string
 *   password: string
 * }
 * 
 * const { register, handleSubmit, formState } = useForm<LoginForm>({
 *   defaultValues: { email: '', password: '' },
 *   fields: {
 *     email: {
 *       rules: {
 *         required: 'Email is required',
 *         pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
 *       }
 *     },
 *     password: {
 *       rules: {
 *         required: 'Password is required',
 *         minLength: { value: 8, message: 'Password must be at least 8 characters' }
 *       }
 *     }
 *   }
 * })
 * 
 * const onSubmit = (data: LoginForm) => {
 *   console.log(data)
 * }
 * 
 * return (
 *   <>
 *     <Input {...register('email')} placeholder="Email" />
 *     <Input {...register('password')} placeholder="Password" type="password" />
 *     <Button onPress={handleSubmit(onSubmit)} loading={formState.isSubmitting}>
 *       Submit
 *     </Button>
 *   </>
 * )
 * ```
 */
export function useForm<T extends Record<string, any> = Record<string, any>>(
  config: FormConfig<T> = {}
): UseFormReturn<T> {
  const { defaultValues = {} as T, fields = {}, mode = 'onChange' } = config
  
  // Initialize form state
  const [formState, setFormState] = useState<FormState<T>>(() => ({
    values: { ...defaultValues } as T,
    errors: {},
    touched: {},
    dirty: {},
    isValid: true,
    isSubmitting: false,
    submitCount: 0,
  }))
  
  // Validation function
  const validateField = useCallback((name: keyof T, value: any, allValues: T): string | undefined => {
    const fieldConfig = fields[name]
    if (!fieldConfig?.rules) return undefined
    
    const { rules } = fieldConfig
    
    // Required validation
    if (rules.required) {
      const isEmpty = value === undefined || value === null || value === ''
      if (isEmpty) {
        return typeof rules.required === 'string' ? rules.required : `${String(name)} is required`
      }
    }
    
    // Skip other validations if value is empty and not required
    if (value === undefined || value === null || value === '') {
      return undefined
    }
    
    // String length validations
    if (typeof value === 'string') {
      if (rules.minLength) {
        const minLength = typeof rules.minLength === 'number' ? rules.minLength : rules.minLength.value
        const message = typeof rules.minLength === 'object' ? rules.minLength.message : `Minimum length is ${minLength}`
        if (value.length < minLength) return message
      }
      
      if (rules.maxLength) {
        const maxLength = typeof rules.maxLength === 'number' ? rules.maxLength : rules.maxLength.value
        const message = typeof rules.maxLength === 'object' ? rules.maxLength.message : `Maximum length is ${maxLength}`
        if (value.length > maxLength) return message
      }
    }
    
    // Numeric validations
    if (typeof value === 'number') {
      if (rules.min !== undefined) {
        const min = typeof rules.min === 'number' ? rules.min : rules.min.value
        const message = typeof rules.min === 'object' ? rules.min.message : `Minimum value is ${min}`
        if (value < min) return message
      }
      
      if (rules.max !== undefined) {
        const max = typeof rules.max === 'number' ? rules.max : rules.max.value
        const message = typeof rules.max === 'object' ? rules.max.message : `Maximum value is ${max}`
        if (value > max) return message
      }
    }
    
    // Pattern validation
    if (rules.pattern && typeof value === 'string') {
      const pattern = typeof rules.pattern === 'object' ? rules.pattern.value : rules.pattern
      const message = typeof rules.pattern === 'object' ? rules.pattern.message : 'Invalid format'
      if (!pattern.test(value)) return message
    }
    
    // Custom validation function
    if (rules.validate) {
      const result = rules.validate(value)
      if (typeof result === 'string') return result
      if (result === false) return 'Invalid value'
    }
    
    // Custom validation with form data
    if (rules.custom) {
      const result = rules.custom(value, allValues)
      if (typeof result === 'string') return result
      if (result === false) return 'Invalid value'
    }
    
    return undefined
  }, [fields])
  
  // Update form state
  const updateFormState = useCallback((updater: (prev: FormState<T>) => FormState<T>) => {
    setFormState(prev => {
      const newState = updater(prev)
      // Recalculate isValid
      const hasErrors = Object.values(newState.errors).some(error => error)
      return {
        ...newState,
        isValid: !hasErrors,
      }
    })
  }, [])
  
  // Set field value
  const setValue = useCallback((name: keyof T, value: any, options: { shouldValidate?: boolean; shouldTouch?: boolean } = {}) => {
    const { shouldValidate = mode === 'onChange', shouldTouch = true } = options
    
    updateFormState(prev => {
      const newValues = { ...prev.values, [name]: value }
      const newState = {
        ...prev,
        values: newValues,
        dirty: { ...prev.dirty, [name]: true },
      }
      
      if (shouldTouch) {
        newState.touched = { ...prev.touched, [name]: true }
      }
      
      if (shouldValidate) {
        const error = validateField(name, value, newValues)
        newState.errors = { ...prev.errors, [name]: error }
      }
      
      return newState
    })
  }, [mode, validateField, updateFormState])
  
  // Get field value
  const getValue = useCallback((name: keyof T) => {
    return formState.values[name]
  }, [formState.values])
  
  // Clear errors
  const clearErrors = useCallback((name?: keyof T) => {
    updateFormState(prev => ({
      ...prev,
      errors: name ? { ...prev.errors, [name]: undefined } : {},
    }))
  }, [updateFormState])
  
  // Set error
  const setError = useCallback((name: keyof T, error: string) => {
    updateFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [name]: error },
    }))
  }, [updateFormState])
  
  // Validate field or entire form
  const validate = useCallback(async (name?: keyof T): Promise<boolean> => {
    if (name) {
      const value = formState.values[name]
      const error = validateField(name, value, formState.values)
      updateFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [name]: error },
      }))
      return !error
    } else {
      // Validate all fields
      const newErrors: Partial<Record<keyof T, string>> = {}
      let isValid = true
      
      for (const fieldName of Object.keys(fields) as (keyof T)[]) {
        const value = formState.values[fieldName]
        const error = validateField(fieldName, value, formState.values)
        if (error) {
          newErrors[fieldName] = error
          isValid = false
        }
      }
      
      updateFormState(prev => ({
        ...prev,
        errors: newErrors,
      }))
      
      return isValid
    }
  }, [formState.values, validateField, updateFormState, fields])
  
  // Register field
  const register = useCallback((name: keyof T, config?: FieldConfig) => {
    // Merge field config
    if (config && !fields[name]) {
      fields[name] = config
    }
    
    // Initialize field value if not exists
    if (!(name in formState.values)) {
      const defaultValue = config?.defaultValue ?? fields[name]?.defaultValue ?? ''
      setValue(name, defaultValue, { shouldValidate: false, shouldTouch: false })
    }
    
    return {
      value: formState.values[name] ?? '',
      onChangeText: (value: string) => setValue(name, value),
      onBlur: () => {
        updateFormState(prev => ({
          ...prev,
          touched: { ...prev.touched, [name]: true },
        }))
        
        if (mode === 'onBlur') {
          const error = validateField(name, formState.values[name], formState.values)
          updateFormState(prev => ({
            ...prev,
            errors: { ...prev.errors, [name]: error },
          }))
        }
      },
      error: formState.errors[name],
    }
  }, [formState.values, formState.errors, fields, setValue, validateField, updateFormState, mode])
  
  // Handle form submission
  const handleSubmit = useCallback((onSubmit: (data: T) => void | Promise<void>) => {
    return async () => {
      updateFormState(prev => ({
        ...prev,
        isSubmitting: true,
        submitCount: prev.submitCount + 1,
      }))
      
      try {
        const isValid = await validate()
        
        if (isValid) {
          await onSubmit(formState.values)
        }
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        updateFormState(prev => ({
          ...prev,
          isSubmitting: false,
        }))
      }
    }
  }, [formState.values, validate, updateFormState])
  
  // Reset form
  const reset = useCallback((values?: Partial<T>) => {
    const newValues = values ? { ...defaultValues, ...values } : defaultValues
    setFormState({
      values: newValues as T,
      errors: {},
      touched: {},
      dirty: {},
      isValid: true,
      isSubmitting: false,
      submitCount: 0,
    })
  }, [defaultValues])
  
  // Watch field value
  const watch = useCallback((name?: keyof T) => {
    return name ? formState.values[name] : formState.values
  }, [formState.values])
  
  // Get field state
  const getFieldState = useCallback((name: keyof T): FieldState => {
    return {
      value: formState.values[name],
      error: formState.errors[name],
      touched: !!formState.touched[name],
      dirty: !!formState.dirty[name],
    }
  }, [formState])
  
  return {
    formState,
    register,
    setValue,
    getValue,
    clearErrors,
    setError,
    handleSubmit,
    reset,
    validate,
    watch,
    getFieldState,
  }
}

export default useForm