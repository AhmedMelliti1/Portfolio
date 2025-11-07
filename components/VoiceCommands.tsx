'use client'

import { useEffect, useState } from 'react'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'

export default function VoiceCommands() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [transcript, setTranscript] = useState('')

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    setIsSupported(true)
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase()
      setTranscript(command)

      // Process voice commands
      if (command.includes('home') || command.includes('start')) {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
      } else if (command.includes('about') || command.includes('who')) {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      } else if (command.includes('project') || command.includes('work')) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      } else if (command.includes('experience') || command.includes('timeline')) {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
      } else if (command.includes('contact') || command.includes('email')) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      } else if (command.includes('github')) {
        window.open('https://github.com/AhmedMelliti1', '_blank')
      }

      setIsListening(false)
      setTimeout(() => setTranscript(''), 2000)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    if (isListening) {
      recognition.start()
    } else {
      recognition.stop()
    }

    return () => {
      recognition.stop()
    }
  }, [isListening])

  if (!isSupported) return null

  return (
    <div className="fixed bottom-36 right-4 sm:bottom-32 sm:right-6 md:right-8 z-50">
      <button
        onClick={() => setIsListening(!isListening)}
        className={`p-3 sm:p-4 rounded-full backdrop-blur-md border transition-all duration-300 transform active:scale-95 sm:hover:scale-110 touch-manipulation ${
          isListening
            ? 'bg-red-500/20 border-red-500/50 text-red-400 animate-pulse'
            : 'bg-white/10 border-white/20 text-white active:bg-white/20 sm:hover:bg-white/20'
        }`}
        aria-label="Voice commands"
      >
        {isListening ? (
          <FaMicrophone className="text-lg sm:text-xl" />
        ) : (
          <FaMicrophoneSlash className="text-lg sm:text-xl" />
        )}
      </button>
      {transcript && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-xs sm:text-sm whitespace-nowrap max-w-[200px] sm:max-w-none overflow-hidden text-ellipsis">
          Heard: {transcript}
        </div>
      )}
    </div>
  )
}

