import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 space-y-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p>You can reach me via email or follow my work online.</p>
        <div className="space-x-4">
          <Link href="mailto:neuromorph@example.com" className="underline">Email</Link>
          <Link href="https://github.com" className="underline">GitHub</Link>
          <Link href="https://linkedin.com" className="underline">LinkedIn</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
