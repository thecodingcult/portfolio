import ContentShell from '@/components/ContentShell'

const publications = [
  {
    title: 'Neuromorphic Circuits for Adaptive Control',
    journal: 'Journal of Neural Engineering',
    link: '#',
    abstract: 'Exploring circuitry that adjusts to environmental feedback for ultra-low-power robotics.'
  },
  {
    title: 'Hybrid Memristor Networks',
    journal: 'Proceedings of Future Computing',
    link: '#',
    abstract: 'A speculative review of memristive devices and their application in resilient computing.'
  }
]

export default function Publications() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-4">Publications</h1>
      <ul className="space-y-4">
        {publications.map(p => (
          <li key={p.title} className="border p-4 rounded-md">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.journal}</p>
            <p className="text-sm mt-2">{p.abstract}</p>
            <a href={p.link} className="text-primary underline text-sm mt-2 inline-block">Read</a>
          </li>
        ))}
      </ul>
    </ContentShell>
  )
}
