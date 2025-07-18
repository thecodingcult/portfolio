import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6">
        <h1 className="text-3xl font-bold mb-4">About Leto Hillza</h1>
        <p>
          Leto Hillza is a neuromorphic engineer and technology researcher best
          known for creating the Above The Spikes Architecture (ATSA), a
          framework for energy‑adaptive artificial intelligence that scales far
          beyond traditional CPU and GPU limits.
        </p>
        <p>
          His work bridges biological efficiency with machine‑native cognition
          through dynamic network evolution, real‑time learning and a focus on
          sustainable AI. Publications such as <em>Above the Spikes</em> (2016) and
          <em>Above the Spikes II: Architectures for Neuromorphic Supremacy Beyond
          Traditional Silicon</em> (2025) continue to push forward
          post‑silicon computing technologies.
        </p>
      </main>
      <Footer />
    </div>
  )
}
