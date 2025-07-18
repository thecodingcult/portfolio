'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="backdrop-blur-md bg-background/70 border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-mono font-semibold">NEURO</Link>
        <button
          className="sm:hidden" onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className={`gap-6 sm:flex ${open ? 'block mt-4' : 'hidden'} sm:mt-0`}> 
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:underline" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
