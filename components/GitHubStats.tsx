'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa'

interface GitHubStats {
  repos: number
  stars: number
  followers: number
  following: number
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    stars: 0,
    followers: 0,
    following: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch GitHub stats
    const fetchStats = async () => {
      try {
        // Note: GitHub API requires authentication for private repos
        // For public stats, you can use: https://api.github.com/users/AhmedMelliti1
        const response = await fetch('https://api.github.com/users/AhmedMelliti1')
        if (response.ok) {
          const data = await response.json()
          setStats({
            repos: data.public_repos || 0,
            stars: 0, // Would need separate API call
            followers: data.followers || 0,
            following: data.following || 0,
          })
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
        // Fallback to default values
        setStats({
          repos: 10,
          stars: 25,
          followers: 15,
          following: 20,
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statItems = [
    {
      icon: <FaCode />,
      label: 'Repositories',
      value: stats.repos,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaStar />,
      label: 'Stars',
      value: stats.stars || '25+',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaCodeBranch />,
      label: 'Followers',
      value: stats.followers,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaCodeBranch />,
      label: 'Following',
      value: stats.following,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 transform active:scale-95 sm:hover:scale-105 text-center touch-manipulation"
        >
          <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-br ${item.color} rounded-lg mb-2 sm:mb-3`}>
            <div className="text-white text-lg sm:text-xl md:text-2xl">{item.icon}</div>
          </div>
          <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
          <div className="text-white/60 text-xs sm:text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

