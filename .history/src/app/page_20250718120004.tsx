import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <BrainToChipAnimation />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-6 backdrop-blur-sm bg-black/60 dark:bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold">Engineering the Future of Thought</h1>
        <p className="text-lg md:text-xl">SenStaff Software Engineer @ Google • Neuromorphic Hardware • Systems Design</p>
        <Link href="/projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-md">See My Work</Link>
      </main>
      <Footer />
    </div>
  )
}
