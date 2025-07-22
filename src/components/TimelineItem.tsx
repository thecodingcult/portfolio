"use client"

import type { LucideIcon } from 'lucide-react'

export interface TimelineItemProps {
  icon: LucideIcon
  title: string
  period: string
  children: React.ReactNode
}

export default function TimelineItem({ icon: Icon, title, period, children }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-8">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-background rounded-full -left-4 ring-4 ring-background">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <h2 className="text-xl font-semibold leading-tight">{title}</h2>
      <p className="text-sm text-muted-foreground mt-0.5">{period}</p>
      <ul className="list-disc ml-5 mt-3 space-y-2 text-base leading-relaxed text-muted-foreground">
        {children}
      </ul>
    </li>
  )
}
