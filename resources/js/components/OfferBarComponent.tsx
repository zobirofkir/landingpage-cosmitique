import React from 'react';
import { motion } from 'framer-motion';

const OfferBarComponent = () => {
  const offerText = "🎉 -33% + 20%  Jusqu’à -47% OFF Prix initial : 268,50 DH → 179 DH → 143,20 DH ! 🚚 Livraison gratuite - Offre limitée ⏰";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 shadow-lg">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-semibold text-sm sm:text-base tracking-wide animate-marquee"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      >
        {[...Array(10)].map((_, i) => (
          <span className="px-4" key={i}>{offerText}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default OfferBarComponent;
