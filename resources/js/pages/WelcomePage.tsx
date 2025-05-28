import AboutComponent from '@/components/AboutComponent'
import FaqComponent from '@/components/FaqComponent'
import ProductComponent from '@/components/product/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import React from 'react'
import { HiOutlineChat, HiOutlineStar } from 'react-icons/hi'
import { motion } from 'framer-motion'
import BrandComponent from '@/components/BannerComponent'
import BannerComponent from '@/components/BannerComponent'
import ContactComponent from '@/components/ContactComponent'
import TestimenialComponent from '@/components/TestimenialComponent'
import CtaComponent from '@/components/CtaComponent'

const WelcomePage = () => {
  return (
    <section className="relative">
      <SliderComponent />
      
      <BannerComponent />
      
      <AboutComponent />

      <CtaComponent />

      <ProductComponent />

      <TestimenialComponent />

      <FaqComponent />

      <ContactComponent />


      {/* Social Media Icons */}
      <motion.div
        className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 999 }} // Added zIndex
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
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition flex items-center justify-center"
        >
          <HiOutlineStar size={28} className="animate-spin-slow" />
        </a>
      </motion.div>

      <a href="/#products">
           {/* Submit Button with Bounce Animation */}
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
              <div className="flex flex-col items-center">
                <span className="line-through text-xs text-gray-300 sm:text-xs">200 DH</span>
                <span className="text-base font-bold sm:text-sm">170 DH</span>
              </div>
              <span className="sm:text-xs">إرسال | Envoyer</span>
            </motion.button>
          </motion.div>
      </a>
    </section>
  )
}

export default WelcomePage