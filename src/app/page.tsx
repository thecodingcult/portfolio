"use client"

import { ArrowRight } from 'lucide-react'
import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <BrainToChipAnimation isHovered={isHovered} />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <div>
          <ProfileCard />
        </div>
        <Link
          href="/about"
          // Increased margin, padding, text size, and icon size for better scale
          className="mt-12 inline-flex items-center gap-2.5 px-10 py-4 text-xl text-white border border-neutral-600 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          Enter <ArrowRight size={22} />
        </Link>
      </main>
    </div>
  )
}
