import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineChat, HiOutlineStar } from 'react-icons/hi'

const SocialMediaIcons = () => {
  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 800 }}
    >
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      >
        <HiOutlineChat size={28} className="animate-pulse" />
      </a>
      <a
        href="/#contacts"
        rel="noopener noreferrer"
        className="p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition flex items-center justify-center"
      >
        <HiOutlineStar size={28} className="animate-spin-slow" />
      </a>
    </motion.div>
  )
}

export default SocialMediaIcons
