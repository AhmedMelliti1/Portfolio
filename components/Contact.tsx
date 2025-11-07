'use client'

import { useState, useRef, useEffect } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import CopyEmailButton from './CopyEmailButton'
import Confetti from './Confetti'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    // You can add your email service integration here (e.g., EmailJS, Formspree)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setShowConfetti(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setIsSubmitted(false)
      setShowConfetti(false)
    }, 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ahmedmelliti70@gmail.com',
      href: 'mailto:ahmedmelliti70@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+216 96580095',
      href: 'tel:+21696580095',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Siliana, Tunisia',
      href: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ahmedmelliti',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/AhmedMelliti1',
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-800',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com',
      label: 'Twitter',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:ahmedmelliti70@gmail.com',
      label: 'Email',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
            <FaPaperPlane className="text-blue-400 text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-white/90">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 active:border-white/20 sm:hover:border-white/20 active:bg-white/10 sm:hover:bg-white/10 transition-all duration-300 transform active:scale-[0.98] sm:hover:scale-105 touch-manipulation"
                  >
                    <div
                      className={`p-3 sm:p-4 bg-gradient-to-br ${info.gradient} rounded-lg sm:rounded-xl transform group-active:rotate-3 group-active:scale-105 sm:group-hover:rotate-6 sm:group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                    >
                      <div className="text-xl sm:text-2xl text-white">{info.icon}</div>
                    </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-white/60 mb-1">{info.label}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-base sm:text-lg font-semibold text-white group-active:text-transparent group-active:bg-gradient-to-r group-active:from-blue-400 group-active:to-purple-400 group-active:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-blue-400 sm:group-hover:to-purple-400 sm:group-hover:bg-clip-text transition-all duration-300 truncate">
                        {info.value}
                      </p>
                      {info.label === 'Email' && (
                        <div onClick={(e) => e.stopPropagation()} className="flex-shrink-0">
                          <CopyEmailButton />
                        </div>
                      )}
                    </div>
                  </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 sm:p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 active:border-white/20 sm:hover:border-white/20 transition-all duration-300 transform active:scale-[0.98] sm:hover:scale-105 sm:hover:-translate-y-1 touch-manipulation`}
                      aria-label={social.label}
                    >
                      <div className={`inline-flex p-2.5 sm:p-3 bg-gradient-to-br ${social.gradient} rounded-lg mb-2 sm:mb-3 transform group-active:rotate-3 group-active:scale-105 sm:group-hover:rotate-6 sm:group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="text-white text-lg sm:text-xl" />
                      </div>
                      <p className="text-white/90 text-sm sm:text-base font-medium">{social.label}</p>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-4 sm:px-0">
            <div className="p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Send a Message
                </span>
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <p className="text-green-400 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`block text-xs sm:text-sm font-medium text-white/80 mb-2 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-blue-400' : ''
                    }`}
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 outline-none"
                      placeholder="Your name"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`block text-xs sm:text-sm font-medium text-white/80 mb-2 transition-all duration-300 ${
                      focusedField === 'email' ? 'text-blue-400' : ''
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 outline-none"
                      placeholder="your.email@example.com"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-xs sm:text-sm font-medium text-white/80 mb-2 transition-all duration-300 ${
                      focusedField === 'message' ? 'text-blue-400' : ''
                    }`}
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 outline-none resize-none"
                      placeholder="Your message..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 transform active:scale-95 sm:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:scale-100 touch-manipulation"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-sm sm:text-base">Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FaCheckCircle className="text-base sm:text-lg" />
                        <span className="text-sm sm:text-base">Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-base sm:text-lg group-active:translate-x-1 group-active:-translate-y-1 sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1 transition-transform duration-300" />
                        <span className="text-sm sm:text-base">Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-active:opacity-50 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Confetti trigger={showConfetti} />
    </section>
  )
}
