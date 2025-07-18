import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>My work bridges biology and silicon — designing chips that don’t just compute, but think.</p>
        <p>Currently a Staff Software Engineer at Google focusing on advanced neuromorphic computing.</p>
      </main>
      <Footer />
    </div>
  )
}
