'use client'

import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'
import Toast from './Toast'

export default function CopyEmailButton() {
  const [showToast, setShowToast] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ahmedmelliti70@gmail.com')
      setCopied(true)
      setShowToast(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <>
      <button
        onClick={copyEmail}
        className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
        aria-label="Copy email to clipboard"
      >
        {copied ? (
          <>
            <FaCheck className="text-green-400" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <FaCopy className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Copy Email</span>
          </>
        )}
      </button>
      {showToast && (
        <Toast
          message="Email copied to clipboard!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

