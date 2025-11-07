'use client'

import { useEffect, useState } from 'react'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={`fixed top-4 right-4 z-[10001] transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-md border ${
          type === 'success'
            ? 'bg-green-500/20 border-green-500/50 text-green-400'
            : type === 'error'
            ? 'bg-red-500/20 border-red-500/50 text-red-400'
            : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
        }`}
      >
        <FaCheckCircle className="text-xl" />
        <span className="font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(onClose, 300)
          }}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

