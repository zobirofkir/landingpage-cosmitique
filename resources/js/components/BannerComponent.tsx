import React from 'react';
import { motion } from 'framer-motion';

const BannerComponent = () => {
  return (
    <div className="relative text-gray-900 dark:text-gray-100">
      {/* Auto Scrolling Banner */}
      <div className="overflow-hidden whitespace-nowrap rounded-lg shadow-lg bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800">
        <motion.div
          className="inline-flex items-center space-x-8 px-6 py-4 animate-scroll"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'linear',
          }}
        >
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-6 text-sm sm:text-base text-orange-700 dark:text-orange-300"
            >
              <div className="flex flex-col items-center">
                <span className="line-through text-gray-500 dark:text-gray-400 text-xs sm:text-sm">200 MAD</span>
                <span className="font-bold text-lg sm:text-xl">170 MAD</span>
              </div>
              <button className="py-2 px-4 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 dark:hover:bg-orange-500 transition-all text-xs sm:text-sm font-medium">
                Acheter | اشتر الآن
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BannerComponent;
