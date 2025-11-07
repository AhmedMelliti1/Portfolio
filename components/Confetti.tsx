'use client'

import { useEffect, useState } from 'react'

interface ConfettiParticle {
  id: number
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

interface ConfettiProps {
  trigger: boolean
  duration?: number
}

export default function Confetti({ trigger, duration = 3000 }: ConfettiProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([])
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    if (trigger) {
      setIsActive(true)
      const newParticles: ConfettiParticle[] = []
      const particleColors = [
        '#3b82f6', // blue
        '#8b5cf6', // purple
        '#ec4899', // pink
        '#f59e0b', // orange
        '#10b981', // green
        '#ef4444', // red
      ]
      
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -20,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 6,
          speedY: Math.random() * 5 + 5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
        })
      }
      
      setParticles(newParticles)

      const timer = setTimeout(() => {
        setIsActive(false)
        setParticles([])
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [trigger, duration])

  useEffect(() => {
    if (!isActive || particles.length === 0) return

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            speedY: particle.speedY + 0.3, // gravity
            rotation: particle.rotation + particle.rotationSpeed,
          }))
          .filter((particle) => particle.y < window.innerHeight + 50)
      )
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [isActive, particles.length])

  if (!isActive || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-sm"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  )
}

