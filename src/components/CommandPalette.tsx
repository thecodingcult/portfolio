'use client'

import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { useTheme } from 'next-themes'

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
]

export default function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [setOpen])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50"
    >
      <div className="bg-background border rounded-md w-80 max-w-md p-4 shadow-lg">
        <Command.Input
          placeholder="Type a command..."
          className="w-full border-b mb-2 px-2 py-1 bg-transparent focus:outline-none"
        />
        <Command.List>
          {pages.map((p) => (
            <Command.Item
              key={p.href}
              onSelect={() => {
                router.push(p.href)
                setOpen(false)
              }}
            >
              {p.label}
            </Command.Item>
          ))}
          <Command.Item
            onSelect={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark')
              setOpen(false)
            }}
          >
            Toggle Theme
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
