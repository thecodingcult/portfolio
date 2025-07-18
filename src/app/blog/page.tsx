import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const posts = [
  {
    title: 'Why Event-Based Processing Will Outlive the Von Neumann Model',
    date: '2024-01-01',
    summary: 'A short overview of event-driven architectures.',
    link: '#'
  },
  {
    title: 'Designing for Fault Tolerance in Neuromorphic Meshes',
    date: '2024-02-01',
    summary: 'Building resilient neural fabrics.',
    link: '#'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <ul className="space-y-6">
          {posts.map(p => (
            <li key={p.title} className="border rounded-md p-4">
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
              <p className="text-sm mb-2">{p.summary}</p>
              <a href={p.link} className="text-primary underline text-sm">Read More</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
