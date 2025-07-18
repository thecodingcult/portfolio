export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Neuromorphic Engineer Portfolio. Built with Next.js.
      </p>
    </footer>
  )
}
