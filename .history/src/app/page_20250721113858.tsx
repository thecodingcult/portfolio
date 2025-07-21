"use client"

import { ArrowRight } from 'lucide-react'
import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <BrainToChipAnimation isHovered={isHovered} />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">LETO HILLZA</h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-400">Senior Staff Software Engineer</p>

        <Link
          href="/about"
          className="mt-12 inline-flex items-center gap-2 px-8 py-3 text-lg text-white border border-neutral-600 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Enter <ArrowRight size={20} />
        </Link>
      </main>
    </div>
  )
}
