import React from 'react';
import { motion } from 'framer-motion';
import video from '@/asstes/videos/slider/slider.mp4';

const SliderComponent = () => {
  return (
    <div className="slider-container relative h-screen overflow-hidden">
      <motion.div
        className="slide absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          className="background-video absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="content relative z-10 text-center">
          <h1 className="title text-4xl md:text-6xl font-bold text-950 dark:text-gray-200">
            Bienvenue chez Cosmitique
          </h1>
          <p className="description mt-4 text-lg md:text-xl text-gray-900 dark:text-gray-400">
            Découvrez le meilleur de la beauté et du style.
          </p>
        </div>
      </motion.div>
      <div className="overlay absolute inset-0 pointer-events-none bg-black opacity-0 dark:opacity-70 transition-opacity"></div>
    </div>
  );
};

export default SliderComponent;