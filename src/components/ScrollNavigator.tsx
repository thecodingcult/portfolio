'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const order = ['/', '/about', '/projects', '/publications', '/contact']

export default function ScrollNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    let last = 0
    let touchStart = 0
    const navigate = (deltaY: number) => {
      const now = Date.now()
      if (now - last < 1000) return
      const index = order.indexOf(pathname)
      if (index === -1) return

      const doc = document.documentElement
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 50
      const atTop = window.scrollY <= 50

      if (deltaY > 50 && atBottom && index < order.length - 1) {
        last = now
        router.push(order[index + 1])
      } else if (deltaY < -50 && atTop && index > 0) {
        last = now
        router.push(order[index - 1])
      }
    }
    const onWheel = (e: WheelEvent) => {
      navigate(e.deltaY)
    }
    const onTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStart - e.changedTouches[0].clientY
      navigate(deltaY)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [pathname, router])

  return <>{children}</>
}
