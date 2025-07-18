import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostPage({ params }: any) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`)
  if (!fs.existsSync(filePath)) {
    notFound()
  }
  const file = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(file)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 prose dark:prose-invert">
        <h1 className="mb-4">{data.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
      <Footer />
    </div>
  )
}
