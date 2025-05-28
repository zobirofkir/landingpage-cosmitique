import React from 'react';
import { motion } from 'framer-motion';

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
          className="background-video absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content relative z-10 text-center">
          <h1 className="title text-4xl md:text-6xl font-bold text-white dark:text-gray-200">
            Welcome to Cosmitique
          </h1>
          <p className="description mt-4 text-lg md:text-xl text-gray-300 dark:text-gray-400">
            Experience the best in beauty and style.
          </p>
        </div>
      </motion.div>
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div>
    </div>
  );
};

export default SliderComponent;