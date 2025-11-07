'use client'

import { useEffect } from 'react'

export default function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Navigation shortcuts
      switch (e.key.toLowerCase()) {
        case 'h':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'a':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'p':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'e':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'c':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'g':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault()
            window.open('https://github.com/AhmedMelliti1', '_blank')
          }
          break
        case '?':
          // Show help (can be implemented later)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return null // This component doesn't render anything
}

