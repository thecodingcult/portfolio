import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Home() {
  return (
    <Link href="/about" className="relative flex flex-col min-h-screen group">
      <BrainToChipAnimation />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">LETO HILLZA</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2">
          Neuromorphic Systems Architect
        </p>
      </main>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <ArrowDown size={24} />
      </div>
    </Link>
  )
}
