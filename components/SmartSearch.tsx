'use client'

import { useState, useEffect, useRef } from 'react'
import { FaSearch, FaTimes, FaFolder, FaCode, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'

interface SearchResult {
  id: string
  type: 'section' | 'project' | 'skill' | 'technology'
  title: string
  description?: string
  icon: React.ReactNode
  action: () => void
}

export default function SmartSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const allResults: SearchResult[] = [
    // Sections
    {
      id: 'home',
      type: 'section',
      title: 'Home',
      description: 'Landing page with hero section',
      icon: <FaUser />,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'about',
      type: 'section',
      title: 'About Me',
      description: 'Skills, technologies, and information',
      icon: <FaUser />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'projects',
      type: 'section',
      title: 'Projects',
      description: 'Portfolio projects and applications',
      icon: <FaFolder />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'experience',
      type: 'section',
      title: 'Experience',
      description: 'Work experience and education timeline',
      icon: <FaBriefcase />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'contact',
      type: 'section',
      title: 'Contact',
      description: 'Get in touch and send a message',
      icon: <FaEnvelope />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    // Projects
    {
      id: 'gitops',
      type: 'project',
      title: 'GitOps Approach with Jenkins',
      description: 'CI/CD pipelines and DevOps tools',
      icon: <FaCode />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'arduino',
      type: 'project',
      title: 'Temperature Measurement Device',
      description: 'Arduino project with sensors',
      icon: <FaCode />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'portfolio',
      type: 'project',
      title: 'Portfolio Website',
      description: 'This portfolio website',
      icon: <FaCode />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    // Technologies
    {
      id: 'react',
      type: 'technology',
      title: 'React',
      description: 'JavaScript library for building user interfaces',
      icon: <FaCode />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'python',
      type: 'technology',
      title: 'Python',
      description: 'Programming language',
      icon: <FaCode />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      id: 'javascript',
      type: 'technology',
      title: 'JavaScript',
      description: 'Programming language for web development',
      icon: <FaCode />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
  ]

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const filtered = allResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description?.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+F or Ctrl+F to open search (different from Command Palette)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setQuery('')
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

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-44 right-4 sm:bottom-40 sm:right-6 md:right-8 p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 active:bg-white/20 sm:hover:bg-white/20 transition-all duration-300 transform active:scale-95 sm:hover:scale-110 z-40 touch-manipulation"
        aria-label="Search"
      >
        <FaSearch className="text-white text-lg sm:text-xl" />
      </button>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[10002] flex items-start justify-center pt-[15vh] px-4"
      onClick={() => {
        setIsOpen(false)
        setQuery('')
      }}
    >
      <div
        className="w-full max-w-xl bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <FaSearch className="text-white/60" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, projects, technologies..."
            className="flex-1 bg-transparent text-white placeholder-white/40 outline-none"
          />
          <button
            onClick={() => {
              setIsOpen(false)
              setQuery('')
            }}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            <FaTimes className="text-white/60" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={result.action}
                  className="w-full flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg text-left active:bg-white/10 sm:hover:bg-white/10 transition-colors text-white/80 active:text-white sm:hover:text-white touch-manipulation"
                >
                  <div className="text-lg sm:text-xl flex-shrink-0">{result.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm sm:text-base truncate">{result.title}</div>
                    {result.description && (
                      <div className="text-xs text-white/50 line-clamp-1">{result.description}</div>
                    )}
                  </div>
                  <span className="text-xs text-white/40 px-2 py-1 bg-white/10 rounded flex-shrink-0 hidden sm:inline-block">
                    {result.type}
                  </span>
                </button>
              ))}
            </div>
          ) : query.trim() !== '' ? (
            <div className="p-6 sm:p-8 text-center text-white/60 text-sm sm:text-base">
              No results found for "{query}"
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center text-white/60 text-sm sm:text-base">
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

