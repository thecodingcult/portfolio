'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import CommandPalette from './CommandPalette'
import ScrollNavigator from './ScrollNavigator'

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <CommandPalette />
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
