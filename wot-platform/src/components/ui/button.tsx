import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variants
          {
            // Primary - Deep Blue
            "bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg":
              variant === "primary",

            // Secondary - Warm Gold
            "bg-amber-500 text-blue-900 hover:bg-amber-600 shadow-md hover:shadow-lg":
              variant === "secondary",

            // Outline
            "border-2 border-blue-700 text-blue-700 hover:bg-blue-50":
              variant === "outline",

            // Ghost
            "text-blue-700 hover:bg-blue-50":
              variant === "ghost",
          },

          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },

          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
