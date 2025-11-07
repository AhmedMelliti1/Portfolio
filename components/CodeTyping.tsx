'use client'

import { useEffect, useState, useRef } from 'react'
import { FaCode } from 'react-icons/fa'

const codeSnippets = [
  `const portfolio = {
  name: "Ahmed Melliti",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "Python"],
  passion: "Building innovative solutions"
};`,
  `function createPortfolio() {
  return {
    design: "Modern & Interactive",
    features: ["Animations", "3D Effects"],
    tech: "Next.js + TypeScript"
  };
}`,
  `async function buildProjects() {
  const projects = await fetchProjects();
  return projects.map(project => ({
    ...project,
    status: "Deployed",
    impact: "High"
  }));
}`,
]

export default function CodeTyping() {
  const [code, setCode] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const snippetIndexRef = useRef(0)
  const charIndexRef = useRef(0)

  useEffect(() => {
    let isActive = true

    const typeCode = () => {
      if (!isActive) return

      const snippet = codeSnippets[snippetIndexRef.current]
      
      if (charIndexRef.current < snippet.length) {
        setCode(snippet.slice(0, charIndexRef.current + 1))
        charIndexRef.current++
        timeoutRef.current = setTimeout(typeCode, 30)
      } else {
        // Wait before switching to next snippet
        timeoutRef.current = setTimeout(() => {
          if (!isActive) return
          setCode('')
          charIndexRef.current = 0
          snippetIndexRef.current = (snippetIndexRef.current + 1) % codeSnippets.length
          // Continue typing next snippet
          typeCode()
        }, 3000)
      }
    }

    // Start typing after a delay
    const startDelay = setTimeout(() => {
      if (isActive) {
        typeCode()
      }
    }, 1000)

    return () => {
      isActive = false
      clearTimeout(startDelay)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <FaCode className="text-blue-400" />
        <span className="text-white font-semibold">Live Code</span>
      </div>
      <pre className="text-sm text-green-400 font-mono overflow-x-auto min-h-[150px]">
        <code className="block whitespace-pre-wrap">
          {code}
          {showCursor && <span className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle animate-blink"></span>}
        </code>
      </pre>
    </div>
  )
}
