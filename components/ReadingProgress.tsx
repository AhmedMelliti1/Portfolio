'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  label: string
  element: HTMLElement | null
}

export default function ReadingProgress() {
  const [currentSection, setCurrentSection] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sections: Section[] = [
      { id: 'home', label: 'Home', element: document.getElementById('home') },
      { id: 'about', label: 'About', element: document.getElementById('about') },
      { id: 'projects', label: 'Projects', element: document.getElementById('projects') },
      { id: 'experience', label: 'Experience', element: document.getElementById('experience') },
      { id: 'contact', label: 'Contact', element: document.getElementById('contact') },
    ]

    const updateProgress = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollableHeight = documentHeight - windowHeight
      const scrolled = scrollPosition - windowHeight / 2
      const progressPercent = Math.min(100, Math.max(0, (scrolled / scrollableHeight) * 100))
      
      setProgress(progressPercent)

      // Find current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            setCurrentSection(section.label)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  if (progress === 0) return null

  return (
    <div className="fixed bottom-20 right-8 z-40 hidden lg:block">
      <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <div className="text-xs text-white/60 mb-2 text-center">{currentSection}</div>
        <div className="w-32 h-32 relative">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

