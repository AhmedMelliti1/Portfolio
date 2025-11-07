'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      
      setIsPointer(isInteractive)
      setIsHovering(isInteractive)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateCursor)
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isDesktop) return null

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      
      {/* Cursor Follower */}
      <div
        className={`fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] transition-all duration-500 ease-out ${
          isHovering
            ? 'bg-primary-500/30 scale-150'
            : 'bg-primary-400/10 scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />

      {/* Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  )
}

