import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import ActifImage from '@/asstes/images/liderm-banner.jpg';
import useCards from '../hooks/useCards';
import useToggleExpand from '../hooks/useToggleExpand';

const ActifComponent: React.FC = () => {
  const cards = useCards();
  const { expandedIndex, toggleExpand } = useToggleExpand();

  return (
    <section
      className={cn(
        "py-16 px-4 md:px-8 transition-colors",
        "bg-orange-50 dark:bg-gray-950"
      )}
      id="actif"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Une formule pour <span className="text-orange-600">protéger, hydrater et corriger</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-center dark:text-white text-black md:text-xl text-md font-bold text-orange-600">
                Des Actifs Puissants pour une Peau Éclatante
              </h4>
            </div>
            {cards.map((card, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left flex justify-between items-center text-lg font-bold text-gray-800 dark:text-gray-100 mb-2"
                >
                  {card.title}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-600"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden text-gray-600 dark:text-gray-300"
                >
                  <p>{card.description}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:sticky top-20"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-orange-100 dark:bg-orange-900/20">
              <img
                src={ActifImage}
                alt="Actif Image"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ width: '100%' }}
                whileInView={{ width: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-orange-600 z-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-full hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActifComponent;