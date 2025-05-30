import React from 'react';
import { motion } from 'framer-motion';
import sliderPcImage from '@/asstes/images/slider/slider-pc.jpg'; 

const SliderComponent = () => {
  return (
    <div className="slider-container relative h-screen overflow-hidden">
      <motion.div
        className="slide absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={sliderPcImage}
          alt="slider"
          className="background-image absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </motion.div>
      <div className="overlay absolute inset-0 pointer-events-none bg-black opacity-0 dark:opacity-70 transition-opacity"></div>
    </div>
  );
};

export default SliderComponent;
