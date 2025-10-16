'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Service } from '@/types'
import { HiCheck } from 'react-icons/hi2'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover glow className="h-full flex flex-col">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
      
      <div className="space-y-2">
        {service.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <HiCheck className="w-5 h-5 text-primary-400 flex-shrink-0" />
            <span className="text-sm text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}