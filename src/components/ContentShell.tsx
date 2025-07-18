import Navbar from './Navbar'
import Footer from './Footer'

export default function ContentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl mx-auto border rounded-lg bg-background/80 backdrop-blur-xl shadow-2xl shadow-black/10">
        <Navbar />
        <main className="p-8 md:p-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
