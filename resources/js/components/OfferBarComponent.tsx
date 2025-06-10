import React from 'react';
import { motion } from 'framer-motion';

const OfferBarComponent = () => {
  const offerText = "Offre de lancement : jusqu'à -47% 🎉 Livraison gratuite ⏰ Offre limitée";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 shadow-lg">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-semibold text-sm sm:text-base tracking-wide animate-marquee"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      >
        {[...Array(10)].map((_, i) => (
          <span className="px-4" key={i}>{offerText}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default OfferBarComponent;
