import React from 'react'
import { motion } from 'framer-motion'

const RandomStars = ({ size = 'md' }) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return Math.random() * 5 + 2 
      case 'md':
        return Math.random() * 10 + 5 
      case 'lg':
        return Math.random() * 15 + 10 
      default:
        return Math.random() * 10 + 5 
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-[9999]">
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute text-gray-400 dark:text-white"
          style={{
            width: `${getSize()}px`,
            height: `${getSize()}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 10 - 5, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: Math.random() * 3 + 2,
            ease: 'easeInOut',
          }}
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.158L12 18.896l-7.334 3.854 1.4-8.158L.132 9.21l8.2-1.192L12 .587z" />
        </motion.svg>
      ))}
    </div>
  )
}

export default RandomStars
