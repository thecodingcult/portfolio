"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative flex flex-col items-center text-center p-6 w-80 group"
    >
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative w-32 h-32 mb-6">
        <Image
          src="/images/hillza.jpeg"
          alt="Leto Hillza"
          fill
          className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="128px"
        />
        {/* Ring accent */}
        <div className="absolute -inset-1 rounded-full border-2 border-primary/20 dark:border-primary/30 group-hover:border-primary/50 transition-all duration-500" />
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">Leto Hillza</h2>
      <p className="text-muted-foreground mt-1">Senior Staff Software Engineer</p>
    </motion.div>
  )
}
