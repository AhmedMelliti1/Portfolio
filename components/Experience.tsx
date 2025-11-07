'use client'

import { useState, useEffect, useRef } from 'react'
import { FaGraduationCap, FaBriefcase, FaAward, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

interface TimelineItem {
  id: number
  type: 'education' | 'experience' | 'certification'
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  icon: React.ReactNode
  gradient: string
}

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor\'s Degree in Information Technology',
      organization: 'ISET RADES',
      location: 'Rades, Tunisia',
      period: '09/2023 - 09/2026',
      description: [
        '3rd year student in Information Systems Development',
        'Specializing in System Development and Computer Science',
        'Learning software engineering, database management, and system design',
        'Building practical projects and applying theoretical knowledge',
      ],
      icon: <FaGraduationCap />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      type: 'experience',
      title: 'Advanced Training Internship',
      organization: 'SAGEMCOM',
      location: 'Le Kram, Tunisia',
      period: '01/2025 - 02/2025',
      description: [
        'Implemented GitOps approach integrated with Jenkins',
        'Automated CI/CD pipelines for deployment and dependency management',
        'Integrated DevOps tools: GitLab, Nexus, Docker, Dependency Track',
        'Optimized traceability, security, and efficiency of continuous delivery process',
      ],
      icon: <FaBriefcase />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      type: 'certification',
      title: 'Python Essentials 1',
      organization: 'Cisco',
      location: 'Online',
      period: '2024',
      description: [
        'Completed Python Essentials 1 certification from Cisco Networking Academy',
        'Mastered fundamental Python programming concepts',
        'Learned data types, control structures, and basic algorithms',
        'Gained practical experience in Python programming and problem-solving',
      ],
      icon: <FaAward />,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 4,
      type: 'experience',
      title: 'Initiation Internship',
      organization: 'Regional Directorate of Telecommunications of Siliana (Telecom)',
      location: 'Siliana, Tunisia',
      period: '01/2024 - 02/2024',
      description: [
        'Assisted with installation and testing of network equipment (routers, modems)',
        'Monitored technicians and participated in maintenance activities',
        'Organized and managed network equipment inventory',
        'Gained hands-on experience in telecommunications infrastructure',
      ],
      icon: <FaBriefcase />,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      type: 'education',
      title: 'Baccalaureate in Mathematics',
      organization: 'Lycée Ibnou khaldoun Siliana',
      location: 'Siliana, Tunisia',
      period: '2018 - 2023',
      description: [
        'Baccalaureate in Mathematics',
        'Strong foundation in mathematics and sciences',
        'Developed analytical and problem-solving skills',
      ],
      icon: <FaGraduationCap />,
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0')
            setVisibleItems((prev) => {
              if (!prev.includes(itemId)) {
                return [...prev, itemId]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const timelineElements = timelineRef.current?.querySelectorAll('[data-item-id]')
    timelineElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
            <FaBriefcase className="text-indigo-400 text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-white/90">Experience & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            A timeline of my educational background, professional experience, and
            certifications
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative px-4 sm:px-0">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {timelineItems.map((item, index) => {
              const isVisible = visibleItems.includes(item.id)
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                    transition: 'all 0.6s ease-out',
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl border-2 sm:border-4 border-slate-900 transform active:scale-95 sm:hover:scale-110 transition-transform duration-300 touch-manipulation`}
                    >
                      <div className="text-white text-base sm:text-lg md:text-xl">{item.icon}</div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 sm:ml-20 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'
                    }`}
                  >
                    <div className="p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 transform active:scale-[0.98] sm:hover:scale-105 group touch-manipulation">
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-active:opacity-5 sm:group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-white/10 rounded-full mb-3 sm:mb-4">
                          <span className="text-xs text-white/80 uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-active:text-transparent group-active:bg-gradient-to-r group-active:from-indigo-400 group-active:to-purple-400 group-active:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-indigo-400 sm:group-hover:to-purple-400 sm:group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-base sm:text-lg text-white/90 font-semibold mb-2">
                          {item.organization}
                        </p>

                        {/* Period & Location */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-white/70 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <FaCalendarAlt className="text-xs sm:text-sm" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <FaMapMarkerAlt className="text-xs sm:text-sm" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-1.5 sm:space-y-2">
                          {item.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start gap-2 text-white/80 text-xs sm:text-sm leading-relaxed"
                            >
                              <span className="text-indigo-400 mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl opacity-0 sm:group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

