'use client'

import { useEffect, useState } from 'react'
import { FaDownload, FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'
import FloatingElements from './FloatingElements'

const roles = [
  'Information Systems Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Software Engineer',
  'Problem Solver',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && typedText === currentRole) {
      // Pause at end of typing
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && typedText === '') {
      // Move to next role after deleting
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      // Deleting
      timeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1))
      }, 50)
    } else {
      // Typing
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1))
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentIndex])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AhmedMelliti1', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmedmelliti', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:ahmedmelliti70@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      {/* Animated Background */}
      <ParticleBackground />
      <FloatingElements />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 animate-fade-in">
            <span className="text-xs sm:text-sm text-white/90">👋 Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold">
              <span className="block text-white mb-1 sm:mb-2">
                Hello, I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Ahmed Melliti
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center px-4">
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/90">
                <span className="inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] text-left">
                  {typedText}
                  <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-16 bg-primary-400 ml-1 sm:ml-2 animate-blink">|</span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              3rd Year License Student in{' '}
              <span className="font-semibold text-white">Information Systems Development</span>
              <br className="hidden sm:block" />
              <span className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">
                ISET RADES | Passionate about building innovative software solutions and turning ideas into reality
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 animate-fade-in-delay">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 hover:bg-white/20 active:scale-95 sm:hover:scale-110 transition-all duration-300 touch-manipulation"
                  aria-label={social.label}
                >
                  <Icon className="text-white text-xl sm:text-2xl group-hover:text-primary-400 transition-colors" />
                </a>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-delay-2 px-4">
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 touch-manipulation"
            >
              <span className="flex items-center justify-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-6 sm:pt-8 animate-fade-in-delay-3 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">3+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70">Technologies</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">
              <FaArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
