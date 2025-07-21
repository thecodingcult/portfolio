"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative flex flex-col items-center text-center p-6 w-96 group"
    >
      {/* Increased blur and spread for a softer, larger glow */}
      <div className="absolute -inset-8 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Larger image */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/images/hillza.jpeg"
          alt="Leto Hillza"
          fill
          className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="160px"
          priority
        />
        {/* Larger ring accent */}
        <div className="absolute -inset-2 rounded-full border-2 border-primary/20 dark:border-primary/30 group-hover:border-primary/50 transition-all duration-500" />
      </div>

      {/* Increased font size and weight for the name */}
      <h2 className="text-4xl font-bold tracking-tight text-foreground">Leto Hillza</h2>
      {/* Clearer, larger title */}
      <p className="text-lg text-foreground/80 mt-2">Senior Staff Software Engineer</p>

      {/* Company and Location information */}
      <div className="mt-3 text-md text-muted-foreground flex items-center gap-x-3">
        <span>Google</span>
        <span className="text-xs">•</span>
        <span>Atlanta, GA</span>
      </div>
    </motion.div>
  )
}
