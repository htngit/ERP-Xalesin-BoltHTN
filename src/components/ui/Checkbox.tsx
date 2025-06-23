"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label untuk checkbox
   */
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    const id = React.useId()
    
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={props.id || id}
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0",
            className
          )}
          {...props}
        />
        {label && (
          <label 
            htmlFor={props.id || id} 
            className="text-sm font-medium text-gray-900 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }