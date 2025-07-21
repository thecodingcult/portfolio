"use client"

import { ArrowRight } from 'lucide-react'
import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <BrainToChipAnimation isHovered={isHovered} />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">LETO HILLZA</h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-400">
          <Image
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
            alt="Google logo"
            width={20}
            height={20}
            className="inline w-5 h-5 ml-1 align-text-bottom"
            style={{ display: 'inline', verticalAlign: 'text-bottom', marginLeft: '0.25rem' }}
            unoptimized
          />
          />
        </p>

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
