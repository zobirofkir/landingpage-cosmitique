import React from 'react';
import { motion } from 'framer-motion';

const CtaComponent = () => {
  return (
    <section
      className="py-20 px-4 md:px-8 transition-colors bg-white dark:bg-gray-950"
      id="cta"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            id="cta-title"
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight"
          >
            Transformez votre peau avec <span className="text-orange-600">Liderm</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Découvrez la solution naturelle et innovante pour une peau éclatante, saine et protégée. Rejoignez les milliers de clients satisfaits.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block py-4 px-10 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800"
            aria-label="Essayez Liderm maintenant"
          >
            Essayez Liderm maintenant
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaComponent;
