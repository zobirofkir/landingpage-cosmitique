import React from 'react'
import { motion } from 'framer-motion'

const BrandComponent = () => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-6 px-4 sm:px-8 lg:px-16">

      {/* Auto Scrolling Banner */}
      <div className="overflow-hidden whitespace-nowrap rounded-lg shadow-md bg-orange-100 dark:bg-orange-900">
        <motion.div
          className="inline-flex items-center space-x-6 px-4 py-3 animate-scroll"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-sm sm:text-base text-orange-700 dark:text-orange-300"
            >
              <span className="line-through text-gray-500 dark:text-gray-400">200 MAD</span>
              <span className="font-bold">170 MAD</span>
              <button className="py-1 px-3 bg-orange-600 text-white rounded-md shadow hover:bg-orange-700 dark:hover:bg-orange-500 transition text-xs font-medium">
                Acheter | اشتر الآن
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BrandComponent
