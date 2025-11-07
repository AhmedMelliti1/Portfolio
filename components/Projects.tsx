'use client'

import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaTasks, FaCloudSun, FaGraduationCap, FaBlog, FaDumbbell, FaCode, FaDatabase, FaMobile, FaLaptop, FaThermometerHalf, FaTools } from 'react-icons/fa'
import ProjectModal from './ProjectModal'
import Confetti from './Confetti'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  icon: React.ReactNode
  gradient: string
  category: string
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Full Stack', 'Mobile']

  // Projects from CV
  const projects: Project[] = [
    {
      id: 1,
      title: 'GitOps Approach Integrated with Jenkins',
      description:
        'Development and automation of CI/CD pipelines for deployment and dependency management. Integration of DevOps tools such as Jenkins, GitLab, Docker, Nexus, and Dependency Track to optimize traceability, security, and efficiency of the continuous delivery process.',
      technologies: ['GitOps', 'Jenkins', 'CI/CD', 'GitLab', 'Docker', 'Nexus', 'Dependency Track', 'Python'],
      githubUrl: 'https://github.com/AhmedMelliti1',
      icon: <FaTools />,
      gradient: 'from-purple-500 to-pink-500',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Temperature and Humidity Measurement Device',
      description:
        'Mini-project based on an Arduino board to measure temperature and humidity using sensors. Data is displayed on an LCD screen and can be used to monitor environmental conditions.',
      technologies: ['Arduino', 'DHT11/DHT22', 'LCD Screen', 'C/C++'],
      githubUrl: 'https://github.com/AhmedMelliti1',
      icon: <FaThermometerHalf />,
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Backend',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills. Built with Next.js, TypeScript, and Tailwind CSS. Features include animated sections, project filtering, and a contact form.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AhmedMelliti1',
      liveUrl: 'https://example.com',
      icon: <FaCode />,
      gradient: 'from-indigo-500 to-blue-500',
      category: 'Web Development',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0')
            setVisibleProjects((prev) => {
              if (!prev.includes(projectId)) {
                return [...prev, projectId]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const projectElements = projectsRef.current?.querySelectorAll('[data-project-id]')
    projectElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
            <FaCode className="text-primary-400 text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-white/90">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            A collection of projects showcasing my skills in web development,
            mobile applications, and system design. Each project represents a
            unique challenge and learning experience.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform active:scale-95 sm:hover:scale-105 touch-manipulation whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white/80 active:bg-white/20 sm:hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {projects
            .filter((project) => selectedCategory === 'All' || project.category === selectedCategory)
            .map((project, index) => {
              const isVisible = visibleProjects.includes(project.id)
            return (
              <div
                key={project.id}
                data-project-id={project.id}
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                  setShowConfetti(true)
                  setTimeout(() => setShowConfetti(false), 2000)
                }}
                className={`group relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-500 transform active:scale-[0.98] sm:hover:-translate-y-2 sm:hover:scale-105 cursor-pointer touch-manipulation ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon Header */}
                <div
                  className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-4xl sm:text-5xl md:text-6xl text-white transform group-active:scale-105 sm:group-hover:scale-110 sm:group-hover:rotate-6 transition-all duration-500">
                    {project.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs text-white font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-active:text-transparent group-active:bg-gradient-to-r group-active:from-blue-400 group-active:to-purple-400 group-active:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-blue-400 sm:group-hover:to-purple-400 sm:group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-md sm:rounded-lg border border-white/10 active:bg-white/20 sm:hover:bg-white/20 sm:hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 active:bg-white/20 sm:hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm sm:text-base font-medium transition-all duration-300 active:scale-95 sm:hover:scale-105 group/btn touch-manipulation"
                      >
                        <FaGithub className="text-base sm:text-lg group-active/btn:rotate-12 sm:group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r ${project.gradient} text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 active:scale-95 sm:hover:scale-105 sm:hover:shadow-xl group/btn touch-manipulation`}
                      >
                        <FaExternalLinkAlt className="text-base sm:text-lg group-active/btn:translate-x-1 sm:group-hover/btn:translate-x-1 transition-transform duration-300" />
                        <span>Demo</span>
                      </a>
                    )}
                    {!project.liveUrl && project.githubUrl && (
                      <div className="flex-1"></div>
                    )}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <a
            href="https://github.com/AhmedMelliti1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 active:bg-white/20 sm:hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95 sm:hover:scale-105 group touch-manipulation"
          >
            <FaGithub className="text-lg sm:text-xl md:text-2xl group-active:rotate-12 sm:group-hover:rotate-12 transition-transform duration-300" />
            <span className="whitespace-nowrap">View All Projects on GitHub</span>
            <FaExternalLinkAlt className="text-base sm:text-lg group-active:translate-x-1 sm:group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline-block" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Confetti trigger={showConfetti} duration={2000} />
    </section>
  )
}
