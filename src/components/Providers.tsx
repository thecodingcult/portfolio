'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CommandPalette from './CommandPalette'
import ScrollNavigator from './ScrollNavigator'
import MobileCommandButton from './MobileCommandButton'

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [commandOpen, setCommandOpen] = useState(false)
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <CommandPalette open={commandOpen} setOpen={setCommandOpen} />
      <MobileCommandButton onClick={() => setCommandOpen(true)} />
      <ScrollNavigator>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ScrollNavigator>
    </ThemeProvider>
  )
}
