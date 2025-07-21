import ContentShell from '@/components/ContentShell'

const publications = [
  {
    title:
      'Above the Spikes: Architectures for Neuromorphic Supremacy Beyond Traditional Silicon',
    journal: 'Medium',
    link:
      'https://medium.com/@hillzadev/above-the-spikes-architectures-for-neuromorphic-supremacy-beyond-traditional-silicon-atsa-by-e7b86ca7ec9e',
    abstract:
      'Leto Hillza explores novel designs poised to outpace conventional silicon.'
  },
  {
    title:
      'Above the Spikes III: A Path to Neuromorphic-Nuclear Symbiosis',
    journal: 'Medium',
    link:
      'https://medium.com/@hillzadev/above-the-spikes-iii-energy-sovereign-cognitive-systems-a-path-to-neuromorphic-nuclear-9c00422a4abb',
    abstract:
      'Investigating energy-sovereign cognitive systems that marry neuromorphic computing with nuclear power.'
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
