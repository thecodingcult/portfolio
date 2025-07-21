"use client"

import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center p-6 bg-background/80 rounded-xl shadow-lg border backdrop-blur-md w-72">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src="/images/hillza.jpeg"
          alt="Leto Hillza"
          fill
          className="rounded-full object-cover border-2 border-primary"
        />
      </div>
      <h2 className="text-2xl font-semibold">Leto Hillza</h2>
      <p className="text-muted-foreground">Senior Staff Software Engineer</p>
    </div>
  )
}
