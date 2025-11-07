'use client'

import { useEffect, useState } from 'react'

interface TrailPoint {
  x: number
  y: number
  id: number
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
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
    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 15

    const updateTrail = (e: MouseEvent) => {
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: trailId++ },
        ]
        return newTrail.slice(-maxTrailLength)
      })
    }

    window.addEventListener('mousemove', updateTrail)

    return () => window.removeEventListener('mousemove', updateTrail)
  }, [isDesktop])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      {trail.map((point, index) => {
        const size = (trail.length - index) * 3
        const opacity = (index + 1) / trail.length * 0.3
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              transform: `translate(-50%, -50%)`,
            }}
          />
        )
      })}
    </div>
  )
}

