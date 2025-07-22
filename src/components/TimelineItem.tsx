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
  const IconOrFallback = () => {
    if (Icon) {
      return <Icon className="h-4 w-4 text-primary" />
    }
    return <span className="text-primary text-sm">?</span>
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-1 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-2 ring-primary">
        <IconOrFallback />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{period}</p>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-base leading-relaxed">
        {children}
      </ul>
    </motion.li>
  )
}
