import BrainToChipAnimation from '@/components/BrainToChipAnimation'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <Link href="/about" className="relative flex flex-col min-h-screen group">
      <BrainToChipAnimation />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-6 backdrop-blur-sm bg-black/60 dark:bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold">Engineering the Future of Thought</h1>
        <p className="text-lg md:text-xl">Staff Software Engineer @ Google • Neuromorphic Hardware • Systems Design</p>
        <Link href="/projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-md">See My Work</Link>
      </main>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <ArrowDown size={24} />
      </div>
    </Link>
  )
}
