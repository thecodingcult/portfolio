import ContentShell from '@/components/ContentShell'
import Link from 'next/link'

export default function NotFound() {
  return (
    <ContentShell>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6 text-muted-foreground">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link href="/" className="underline text-primary">
        Go back home
      </Link>
    </ContentShell>
  )
}
