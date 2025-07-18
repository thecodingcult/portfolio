import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'NeuroSim v2',
    description: 'High-efficiency event-driven simulator for brain-like architectures.',
    stack: ['Rust', 'CUDA', 'PyTorch'],
    github: 'https://github.com/example/neurosim'
  },
  {
    title: 'CortexX',
    description: 'High-throughput Neuromorphic Simulator',
    stack: ['Go', 'WebGPU'],
    github: '#'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
