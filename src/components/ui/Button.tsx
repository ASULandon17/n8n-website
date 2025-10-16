'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden',
          {
            'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/50 hover:shadow-primary-500/75':
              variant === 'primary',
            'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:from-accent-500 hover:to-accent-400 shadow-lg shadow-accent-500/50 hover:shadow-accent-500/75':
              variant === 'secondary',
            'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10':
              variant === 'outline',
            'text-gray-300 hover:text-white hover:bg-white/5':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm rounded-lg': size === 'sm',
            'px-6 py-3 text-base rounded-xl': size === 'md',
            'px-8 py-4 text-lg rounded-xl': size === 'lg',
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button