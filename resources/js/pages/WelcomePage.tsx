import AboutComponent from '@/components/AboutComponent'
import FaqComponent from '@/components/FaqComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import React from 'react'
import { HiOutlineChat, HiOutlineStar } from 'react-icons/hi'
import { motion } from 'framer-motion'

const WelcomePage = () => {
  return (
    <section className="relative">
      <SliderComponent />

      <AboutComponent />

      <ProductComponent />

      <FaqComponent />

      {/* Social Media Icons */}
      <motion.div
        className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <HiOutlineChat size={24} />
        </a>
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          <HiOutlineStar size={24} />
        </a>
      </motion.div>
    </section>
  )
}

export default WelcomePage