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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ScrollNavigator>
    </ThemeProvider>
  )
}
