import ContentShell from '@/components/ContentShell'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

const posts = getSortedPostsData()

export default function Blog() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.title} className="border rounded-md p-4">
            <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
            <p className="text-sm mb-2">{p.summary}</p>
            <Link href={`/blog/${p.id}`} className="text-primary underline text-sm">Read More</Link>
          </li>
        ))}
      </ul>
    </ContentShell>
  )
}
