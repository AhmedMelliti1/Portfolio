'use client'

import { useEffect, useState, useRef } from 'react'
import { FaTerminal } from 'react-icons/fa'

const commands = [
  { text: 'npm install innovation', delay: 100 },
  { text: 'npm run build-awesome-portfolio', delay: 150 },
  { text: 'git commit -m "Add innovative features"', delay: 120 },
  { text: 'npm start', delay: 80 },
]

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const commandIndexRef = useRef(0)
  const charIndexRef = useRef(0)

  useEffect(() => {
    let isActive = true

    const typeCommand = () => {
      if (!isActive) return

      if (commandIndexRef.current >= commands.length) {
        // Reset after showing all commands
        timeoutRef.current = setTimeout(() => {
          if (!isActive) return
          setLines([])
          setCurrentLine('')
          setIsTyping(false)
          commandIndexRef.current = 0
          charIndexRef.current = 0
          // Restart after reset
          timeoutRef.current = setTimeout(() => {
            if (isActive) {
              setIsTyping(true)
              typeCommand()
            }
          }, 2000)
        }, 3000)
        return
      }

      const command = commands[commandIndexRef.current]

      if (charIndexRef.current < command.text.length) {
        setCurrentLine(command.text.slice(0, charIndexRef.current + 1))
        charIndexRef.current++
        timeoutRef.current = setTimeout(typeCommand, command.delay)
      } else {
        // Command complete, add to lines
        setLines((prev) => [...prev, command.text])
        setCurrentLine('')
        commandIndexRef.current++
        charIndexRef.current = 0
        timeoutRef.current = setTimeout(typeCommand, 800)
      }
    }

    // Start typing after a delay
    const startDelay = setTimeout(() => {
      if (isActive) {
        setIsTyping(true)
        typeCommand()
      }
    }, 2000)

    return () => {
      isActive = false
      clearTimeout(startDelay)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="p-6 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 font-mono">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <FaTerminal className="text-green-400" />
          <span className="text-white/80 text-sm">Terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-1 text-sm min-h-[150px]">
        {lines.map((line, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span className="text-white">{line}</span>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span className="text-white">
              {currentLine}
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-blink"></span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
