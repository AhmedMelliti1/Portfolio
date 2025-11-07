'use client'

import { useEffect, useState, useRef } from 'react'
import { FaSearch, FaHome, FaUser, FaFolder, FaBriefcase, FaEnvelope, FaTimes, FaArrowRight } from 'react-icons/fa'

interface Command {
  id: string
  label: string
  category: string
  icon: React.ReactNode
  action: () => void
  keywords: string[]
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Home',
      category: 'Navigation',
      icon: <FaHome />,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      keywords: ['home', 'hero', 'start'],
    },
    {
      id: 'about',
      label: 'Go to About',
      category: 'Navigation',
      icon: <FaUser />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      keywords: ['about', 'me', 'skills'],
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      category: 'Navigation',
      icon: <FaFolder />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      keywords: ['projects', 'work', 'portfolio', 'apps'],
    },
    {
      id: 'experience',
      label: 'Go to Experience',
      category: 'Navigation',
      icon: <FaBriefcase />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      keywords: ['experience', 'timeline', 'career', 'education'],
    },
    {
      id: 'contact',
      label: 'Go to Contact',
      category: 'Navigation',
      icon: <FaEnvelope />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      keywords: ['contact', 'email', 'message', 'reach'],
    },
    {
      id: 'github',
      label: 'Open GitHub',
      category: 'External',
      icon: <FaSearch />,
      action: () => {
        window.open('https://github.com/AhmedMelliti1', '_blank')
        setIsOpen(false)
      },
      keywords: ['github', 'code', 'repositories'],
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      category: 'External',
      icon: <FaSearch />,
      action: () => {
        window.open('https://www.linkedin.com/in/ahmedmelliti', '_blank')
        setIsOpen(false)
      },
      keywords: ['linkedin', 'profile', 'network'],
    },
  ]

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setSearchQuery('')
        setSelectedIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands])

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-start justify-center pt-[10vh] sm:pt-[15vh] md:pt-[20vh] px-4"
      onClick={() => {
        setIsOpen(false)
        setSearchQuery('')
      }}
    >
      <div
        className="w-full max-w-2xl bg-slate-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-white/10">
          <FaSearch className="text-white/60 text-lg sm:text-xl" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm sm:text-base md:text-lg"
          />
          <button
            onClick={() => {
              setIsOpen(false)
              setSearchQuery('')
            }}
            className="p-2 active:bg-white/10 sm:hover:bg-white/10 rounded-lg transition-colors touch-manipulation"
          >
            <FaTimes className="text-white/60 text-lg sm:text-xl" />
          </button>
        </div>

        {/* Commands List */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            <div className="space-y-1">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={command.action}
                  className={`w-full flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg transition-all touch-manipulation ${
                    index === selectedIndex
                      ? 'bg-blue-600/50 text-white'
                      : 'text-white/80 active:bg-white/10 sm:hover:bg-white/10'
                  }`}
                >
                  <div className="text-lg sm:text-xl flex-shrink-0">{command.icon}</div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="font-medium text-sm sm:text-base truncate">{command.label}</div>
                    <div className="text-xs text-white/50">{command.category}</div>
                  </div>
                  {index === selectedIndex && (
                    <FaArrowRight className="text-white/60 text-sm sm:text-base flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center text-white/60 text-sm sm:text-base">
              No commands found. Try a different search.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="hidden sm:flex items-center justify-between p-3 border-t border-white/10 text-xs text-white/40">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 rounded text-xs">↑</kbd>
              <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 rounded text-xs">↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 rounded text-xs">Enter</kbd> Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 rounded text-xs">Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

