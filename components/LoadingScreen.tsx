'use client'

import { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20">
            <FaCode className="text-6xl text-white animate-spin" style={{ animationDuration: '2s' }} />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ahmed Melliti
        </h1>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-white/60 text-sm">{progress}%</p>
      </div>
    </div>
  )
}

