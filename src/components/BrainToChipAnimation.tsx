'use client'

import Image from 'next/image'
import { motion, useCycle } from 'framer-motion'
import { useEffect } from 'react'

export default function BrainToChipAnimation() {
  const [brain, toggle] = useCycle(true, false)

  useEffect(() => {
    const id = setInterval(() => toggle(), 8000)
    return () => clearInterval(id)
  }, [toggle])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: brain ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <Image src="/assets/brain.svg" alt="brain" fill className="object-contain opacity-30" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: brain ? 0 : 1 }}
        transition={{ duration: 2 }}
      >
        <Image src="/assets/chip.svg" alt="chip" fill className="object-contain opacity-30" />
      </motion.div>
    </div>
  )
}
