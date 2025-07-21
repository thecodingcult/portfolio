'use client'

export default function MobileCommandButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Command Menu"
      className="fixed bottom-4 right-4 sm:hidden p-3 rounded-full border bg-background shadow-lg"
    >
      ⌘
    </button>
  )
}
