import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const publications = [
  {
    title: 'Neuromorphic Circuits for Adaptive Control',
    journal: 'Journal of Neural Engineering',
    link: '#',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export default function Publications() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6">
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
      </main>
      <Footer />
    </div>
  )
}
