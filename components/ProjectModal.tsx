'use client'

import { useEffect } from 'react'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTag } from 'react-icons/fa'

interface ProjectModalProps {
  project: {
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    icon: React.ReactNode
    gradient: string
    category: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden transform transition-all duration-300 scale-100 my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-white/10 active:bg-white/20 sm:hover:bg-white/20 rounded-full transition-colors z-10 touch-manipulation"
          aria-label="Close modal"
        >
          <FaTimes className="text-white text-lg sm:text-xl" />
        </button>

        {/* Header with Gradient */}
        <div className={`h-32 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl text-white mb-2 sm:mb-4 transform scale-110 sm:scale-125">
              {project.icon}
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 mb-2 sm:mb-4">
              <FaTag className="text-white text-xs sm:text-sm" />
              <span className="text-white text-xs sm:text-sm font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">{project.title}</h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-lg border border-white/20 active:bg-white/20 sm:hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 active:bg-white/20 sm:hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm sm:text-base font-medium transition-all duration-300 active:scale-95 sm:hover:scale-105 group touch-manipulation"
              >
                <FaGithub className="text-lg sm:text-xl group-active:rotate-12 sm:group-hover:rotate-12 transition-transform duration-300" />
                <span>View Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${project.gradient} text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 active:scale-95 sm:hover:scale-105 sm:hover:shadow-xl group touch-manipulation`}
              >
                <FaExternalLinkAlt className="text-lg sm:text-xl group-active:translate-x-1 sm:group-hover:translate-x-1 transition-transform duration-300" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

