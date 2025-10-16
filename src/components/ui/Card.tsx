import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6',
        {
          'transition-all duration-300 hover:scale-105 hover:border-primary-500/50': hover,
          'shadow-lg shadow-primary-500/10 hover:shadow-primary-500/30': glow,
        },
        className
      )}
    >
      {children}
    </div>
  )
}