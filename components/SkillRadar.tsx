'use client'

import { useEffect, useRef } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

export default function SkillRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const skills: Skill[] = [
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Java', level: 75, color: '#ed8b00' },
    { name: 'DevOps', level: 80, color: '#2396ed' },
    { name: 'Database', level: 80, color: '#336791' },
    { name: 'Mobile', level: 70, color: '#61dafb' },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawChart = () => {
      // Set canvas size
      const size = Math.min(400, window.innerWidth - 64)
      canvas.width = size
      canvas.height = size

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(centerX, centerY) - 40
      const numSkills = skills.length
      const angleStep = (Math.PI * 2) / numSkills

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid circles
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw grid lines
      for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      // Draw skill labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.font = '12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      skills.forEach((skill, i) => {
        const angle = i * angleStep - Math.PI / 2
        const labelRadius = radius + 25
        const x = centerX + Math.cos(angle) * labelRadius
        const y = centerY + Math.sin(angle) * labelRadius
        ctx.fillText(skill.name, x, y)
      })

      // Draw skill area
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)'
      ctx.lineWidth = 2
      ctx.beginPath()

      skills.forEach((skill, i) => {
        const angle = i * angleStep - Math.PI / 2
        const skillRadius = (radius * skill.level) / 100
        const x = centerX + Math.cos(angle) * skillRadius
        const y = centerY + Math.sin(angle) * skillRadius

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw skill points
      skills.forEach((skill, i) => {
        const angle = i * angleStep - Math.PI / 2
        const skillRadius = (radius * skill.level) / 100
        const x = centerX + Math.cos(angle) * skillRadius
        const y = centerY + Math.sin(angle) * skillRadius

        ctx.fillStyle = skill.color
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    drawChart()

    const handleResize = () => {
      drawChart()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Skills Radar Chart
      </h3>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto w-full max-w-md"
          style={{ aspectRatio: '1 / 1' }}
        />
      </div>
    </div>
  )
}
