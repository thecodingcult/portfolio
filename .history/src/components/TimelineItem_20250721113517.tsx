"use client"

import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export interface TimelineItemProps {
  icon: LucideIcon
  title: string
  period: string
  children: React.ReactNode
}

export default function TimelineItem({ icon: Icon, title, period, children }: TimelineItemProps) {
  // Defensive: fallback if Icon is undefined
  if (!Icon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative pl-10"
      >
        <div className="absolute left-0 top-1">
          <span className="text-primary text-lg">?</span>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{period}</p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-base leading-relaxed">
          {children}
        </ul>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-1">
        <Icon className="text-primary" size={20} />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{period}</p>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-base leading-relaxed">
        {children}
      </ul>
    </motion.div>
  )
}
