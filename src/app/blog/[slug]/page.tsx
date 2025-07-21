import { notFound } from 'next/navigation'
import ContentShell from '@/components/ContentShell'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    notFound()
  }
  const file = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(file)

  return (
    <ContentShell>
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="mb-4">{data.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </ContentShell>
  )
}
