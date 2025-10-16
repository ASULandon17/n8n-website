'use client'

import { motion } from 'framer-motion'
import { PORTFOLIO_ITEMS } from '@/lib/constants'
import PortfolioItem from './PortfolioItem'

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {PORTFOLIO_ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <PortfolioItem item={item} />
        </motion.div>
      ))}
    </div>
  )
}