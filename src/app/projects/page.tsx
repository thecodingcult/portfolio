import ContentShell from '@/components/ContentShell'
import AnimatedProjectCard from '@/components/AnimatedProjectCard'
import { getRepoStats } from '@/lib/github'

const projects = [
  {
    title: 'NeuroSim v2',
    description: 'High-efficiency event-driven simulator for brain-like architectures.',
    stack: ['Rust', 'CUDA', 'PyTorch'],
    github: 'https://github.com/example/neurosim'
  },
  {
    title: 'CortexX',
    description: 'Neuromorphic hardware toolkit for rapid prototyping.',
    stack: ['Go', 'WebGPU'],
    github: '#'
  },
  {
    title: 'Synaptron',
    description: 'Low-power spiking network accelerator research platform.',
    stack: ['C++', 'OpenCL'],
    github: '#'
  }
]

export default async function Projects() {
  const projectsWithStats = await Promise.all(projects.map(async p => {
    if (p.github && p.github.startsWith('https://github.com')) {
      return { ...p, githubStats: await getRepoStats(p.github) }
    }
    return p
  }))
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projectsWithStats.map((p, i) => (
          <AnimatedProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </ContentShell>
  )
}
