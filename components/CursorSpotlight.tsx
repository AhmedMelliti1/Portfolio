'use client'

import { useEffect, useState } from 'react'

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div
      className="fixed pointer-events-none z-[9996] mix-blend-difference"
      style={{
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
      }}
    />
  )
}

