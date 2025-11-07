'use client'

import { FaCode, FaLaptopCode, FaRocket, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa'

const floatingIcons = [
  { icon: FaCode, left: '10%', top: '20%', delay: '0s', duration: '6s' },
  { icon: FaLaptopCode, left: '25%', top: '35%', delay: '1s', duration: '7s' },
  { icon: FaRocket, left: '40%', top: '15%', delay: '2s', duration: '8s' },
  { icon: FaBrain, left: '60%', top: '25%', delay: '0.5s', duration: '6.5s' },
  { icon: FaDatabase, left: '75%', top: '40%', delay: '1.5s', duration: '7.5s' },
  { icon: FaCloud, left: '85%', top: '20%', delay: '2.5s', duration: '8.5s' },
]

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {floatingIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className="absolute opacity-10 dark:opacity-5 animate-float"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            <Icon
              className="text-primary-400"
              size={40}
            />
          </div>
        )
      })}
    </div>
  )
}

