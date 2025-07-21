'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const order = ['/', '/about', '/projects', '/publications', '/blog', '/contact']

export default function ScrollNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    let last = 0
    const onWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - last < 1000) return
      const index = order.indexOf(pathname)
      if (index === -1) return
      if (e.deltaY > 50 && index < order.length - 1) {
        last = now
        router.push(order[index + 1])
      } else if (e.deltaY < -50 && index > 0) {
        last = now
        router.push(order[index - 1])
      }
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [pathname, router])

  return <>{children}</>
}
