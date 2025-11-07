'use client'

import { useState, useEffect, useRef } from 'react'
import { FaCode, FaDatabase, FaMobile, FaCloud, FaRocket, FaBrain, FaLaptop, FaServer, FaCog, FaChartLine } from 'react-icons/fa'
import InteractiveTerminal from './InteractiveTerminal'
import SkillRadar from './SkillRadar'
import CodeTyping from './CodeTyping'
import GitHubStats from './GitHubStats'

export default function About() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const skillsRef = useRef<HTMLDivElement>(null)
  const [counterValues, setCounterValues] = useState({ projects: 0, experience: 0, technologies: 0 })

  const skills = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications with modern frameworks',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Designing and managing efficient database systems and data structures',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications for iOS and Android',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Services',
      description: 'Deploying and managing scalable cloud-based solutions and APIs',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and RESTful APIs',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <FaRocket />,
      title: 'System Design',
      description: 'Architecting scalable systems and optimizing performance',
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  const technologies = [
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Flutter', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Jenkins', level: 80 },
    { name: 'Angular', level: 70 },
    { name: 'Symfony', level: 65 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0')
            setVisibleSkills((prev) => {
              if (!prev.includes(skillIndex)) {
                return [...prev, skillIndex]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill-index]')
    skillElements?.forEach((el) => observer.observe(el))

    // Counter animation
    const countersObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let projects = 0
            let experience = 0
            let technologies = 0

            const projectsInterval = setInterval(() => {
              projects += 1
              setCounterValues((prev) => ({ ...prev, projects }))
              if (projects >= 10) clearInterval(projectsInterval)
            }, 100)

            const experienceInterval = setInterval(() => {
              experience += 0.1
              setCounterValues((prev) => ({ ...prev, experience: Math.round(experience * 10) / 10 }))
              if (experience >= 3) clearInterval(experienceInterval)
            }, 50)

            const techInterval = setInterval(() => {
              technologies += 1
              setCounterValues((prev) => ({ ...prev, technologies }))
              if (technologies >= 8) clearInterval(techInterval)
            }, 80)

            countersObserver.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    const statsSection = document.getElementById('about-stats')
    if (statsSection) countersObserver.observe(statsSection)

    return () => {
      observer.disconnect()
      countersObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <FaBrain className="text-purple-400" />
            <span className="text-sm text-white/90">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Passionate developer dedicated to creating innovative solutions and
            pushing the boundaries of technology
          </p>
        </div>

        {/* Stats Section */}
        <div id="about-stats" className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 active:scale-95 sm:hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counterValues.projects}+
            </div>
            <div className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg">Projects</div>
          </div>
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 active:scale-95 sm:hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counterValues.experience}+
            </div>
            <div className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 active:scale-95 sm:hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counterValues.technologies}+
            </div>
            <div className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg">Technologies</div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GitHub Activity
            </span>
          </h3>
          <GitHubStats />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
            <div className="p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  My Journey
                </span>
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-3 sm:mb-4">
                I'm a 3rd year license student in{' '}
                <span className="font-semibold text-white">Information Systems Development</span> at{' '}
                <span className="font-semibold text-white">ISET RADES</span>. I wish to put my skills into practice in a stimulating environment. Rigorous, I distinguish myself by my synthetic mind, my motivation, and my commitment.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Curious and open-minded, I like to work on varied problems. My journey has included internships at SAGEMCOM (GitOps/DevOps) and Télécom Siliana (network infrastructure), where I gained practical experience in CI/CD pipelines, automation, and telecommunications.
              </p>
            </div>

            {/* Technologies Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 active:bg-white/20 sm:hover:bg-white/20 active:border-white/30 sm:hover:border-white/30 transition-all duration-300 touch-manipulation"
                >
                  <span className="text-white text-sm sm:text-base font-medium">{tech.name}</span>
                  <div className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {skills.map((skill, index) => {
              const isVisible = visibleSkills.includes(index)
              return (
                <div
                  key={index}
                  data-skill-index={index}
                  className={`group relative p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-500 transform active:scale-[0.98] sm:hover:-translate-y-2 sm:hover:scale-105 touch-manipulation ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-active:opacity-5 sm:group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${skill.gradient} rounded-lg sm:rounded-xl mb-3 sm:mb-4 transform group-active:rotate-3 group-active:scale-105 sm:group-hover:rotate-6 sm:group-hover:scale-110 transition-all duration-300`}
                    >
                      <div className="text-2xl sm:text-3xl text-white">{skill.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-active:text-transparent group-active:bg-gradient-to-r group-active:from-purple-400 group-active:to-pink-400 group-active:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-purple-400 sm:group-hover:to-pink-400 sm:group-hover:bg-clip-text transition-all duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center active:border-white/20 sm:hover:border-white/20 transition-all duration-300 touch-manipulation">
            <FaLaptop className="text-3xl sm:text-4xl text-purple-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">Responsive Design</h4>
            <p className="text-white/70 text-xs sm:text-sm">Mobile-first approach</p>
          </div>
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center active:border-white/20 sm:hover:border-white/20 transition-all duration-300 touch-manipulation">
            <FaCog className="text-3xl sm:text-4xl text-pink-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">Clean Code</h4>
            <p className="text-white/70 text-xs sm:text-sm">Best practices & standards</p>
          </div>
          <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-center active:border-white/20 sm:hover:border-white/20 transition-all duration-300 touch-manipulation">
            <FaChartLine className="text-3xl sm:text-4xl text-blue-400 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">Performance</h4>
            <p className="text-white/70 text-xs sm:text-sm">Optimized & scalable</p>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          <InteractiveTerminal />
          <CodeTyping />
        </div>

        {/* Skill Radar Chart */}
        <div className="mt-12">
          <SkillRadar />
        </div>
      </div>
    </section>
  )
}
