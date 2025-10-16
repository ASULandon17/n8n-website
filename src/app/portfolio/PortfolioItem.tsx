'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { PortfolioItem as PortfolioItemType } from '@/types'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi2'

interface PortfolioItemProps {
  item: PortfolioItemType
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card hover className="overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-6xl opacity-50">{item.technologies[0] === 'n8n' ? '⚡' : '🤖'}</div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-primary-400 text-sm font-medium mb-1">{item.client}</p>
            <p className="text-gray-500 text-sm">{item.industry}</p>
          </div>
        </div>

        <p className="text-gray-400">{item.description}</p>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300">Key Results:</h4>
          {item.results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isExpanded ? 1 : index < 2 ? 1 : 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={index >= 2 && !isExpanded ? 'hidden' : 'flex items-center gap-2'}
            >
              <HiCheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">{result}</span>
            </motion.div>
          ))}
        </div>

        {item.results.length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-400 text-sm font-medium flex items-center gap-1 hover:text-primary-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            <HiArrowRight className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        )}

        <div className="pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}