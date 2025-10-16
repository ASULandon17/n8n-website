'use client'

import { motion } from 'framer-motion'
import { ProcessStep as ProcessStepType } from '@/types'
import { HiCheck } from 'react-icons/hi2'

interface ProcessStepProps {
  step: ProcessStepType
  index: number
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <div className="relative mb-12 last:mb-0">
      {/* Connector line */}
      {index < 3 && (
        <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary-500 to-transparent" />
      )}

      <div className="flex gap-6">
        {/* Step number */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary-500/30"
          >
            {step.id}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">{step.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {step.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <HiCheck className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}