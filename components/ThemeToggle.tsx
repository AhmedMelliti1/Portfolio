'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-8 p-3 sm:p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 rounded-full active:scale-95 sm:hover:scale-110 dark:hover:bg-gray-700/50 transition-all duration-300 transform z-50 shadow-2xl touch-manipulation"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg sm:text-xl" />
      ) : (
        <FaMoon className="text-blue-400 text-lg sm:text-xl" />
      )}
    </button>
  )
}

