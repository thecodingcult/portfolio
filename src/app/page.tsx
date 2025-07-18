import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <BrainToChipAnimation />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">LETO HILLZA</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Neuromorphic Systems Architect
        </p>
        <Link
          href="/about"
          className="mt-12 inline-flex items-center gap-2 px-6 py-3 text-lg text-primary hover:text-foreground transition-colors duration-300"
        >
          Explore Work <ArrowRight size={20} />
        </Link>
      </main>
    </div>
  )
}
