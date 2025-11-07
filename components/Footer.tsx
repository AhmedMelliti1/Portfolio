'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/AhmedMelliti1',
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-800',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ahmedmelliti',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com',
      label: 'Twitter',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:ahmedmelliti70@gmail.com',
      label: 'Email',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ahmed Melliti
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Computer Science Student & Full Stack Developer
              <br />
              Building innovative solutions with modern technologies
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <div className={`text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-4"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <a
                href="mailto:ahmedmelliti70@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
              >
                <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span>ahmedmelliti70@gmail.com</span>
              </a>
              <a
                href="tel:+21696580095"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
              >
                <FaPhone className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span>+216 96580095</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm flex items-center gap-2">
            © {currentYear} Ahmed Melliti. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> and{' '}
            <FaCode className="text-blue-400" /> using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
