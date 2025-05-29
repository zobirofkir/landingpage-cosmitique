import React from 'react';
import { motion } from 'framer-motion';
import useFaqState from '../hooks/useFaqState';
import useFaqAnimations from '@/hooks/useFaqAnimations';
import faqData, { FaqItem } from '../data/faqData';

const FaqComponent: React.FC = () => {
  const { expandedIndex, toggleExpand } = useFaqState();
  const { containerAnimation, questionAnimation, answerAnimation, arrowAnimation } = useFaqAnimations(expandedIndex);

  return (
    <section className="py-16 px-4 md:px-8 bg-orange-50 dark:bg-gray-950" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Foire aux Questions
          </h2>
          <motion.div
            {...containerAnimation}
            className="w-24 h-1 bg-orange-600 mx-auto mt-2"
          ></motion.div>
        </div>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              {...questionAnimation(index)}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left flex justify-between items-center text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100"
              >
                {item.question}
                <motion.span
                  {...arrowAnimation(index)}
                  className="text-orange-600"
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                {...answerAnimation(index)}
                className="overflow-hidden text-gray-600 dark:text-gray-300 mt-2"
              >
                <p>{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;