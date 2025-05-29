import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineStar } from 'react-icons/hi'

const SubmitButton = () => {
  return (
    <a href="/#products">
      <motion.div
        className="fixed md:bottom-4 bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          animate={{
            y: [0, -4, 0],
            boxShadow: [
              '0 0 0px rgba(255, 165, 0, 0.5)',
              '0 0 10px rgba(255, 165, 0, 0.8)',
              '0 0 0px rgba(255, 165, 0, 0.5)',
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            ease: 'easeInOut',
          }}
          className="w-full py-2 text-sm font-medium bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition flex items-center justify-center gap-2 sm:py-1 sm:text-xs sm:gap-1"
        >
          <HiOutlineStar size={20} className="text-yellow-400 sm:size-10" />
          <span className="sm:text-[15px] font-bold">أطلب الآن | Commander</span>
        </motion.button>
      </motion.div>
    </a>
  )
}

export default SubmitButton
