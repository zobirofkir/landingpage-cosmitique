import { motion } from 'framer-motion';
import sliderPcImage from '@/asstes/images/slider/slider-pc.jpg'; 
import sliderMobileImage from '@/asstes/images/slider/slider-mobile.jpg'; 

const SliderComponent = () => {
  return (
    <div className="slider-container relative h-screen overflow-hidden">
      <motion.div
        className="slide absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Desktop Image - shown on md and larger */}
        <img
          src={sliderPcImage}
          alt="slider desktop"
          className="background-image absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
        />
        
        {/* Mobile Image - shown below md */}
        <img
          src={sliderMobileImage}
          alt="slider mobile"
          className="background-image absolute inset-0 w-full h-full object-cover pointer-events-none block md:hidden"
        />
      </motion.div>

      <div className="overlay absolute inset-0 pointer-events-none bg-black opacity-0 dark:opacity-70 transition-opacity"></div>
    </div>
  );
};

export default SliderComponent;
