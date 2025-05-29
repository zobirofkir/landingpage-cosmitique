import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const OfferBarComponent = () => {
  const offerText =
    "Offre : -30 % sur le produit Liderm ! Offre limitée dans le temps. Livraison gratuite.";
  const containerRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const textElement = containerRef.current.querySelector('.offer-text');
      setTextWidth(textElement?.scrollWidth || 0);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const animationDistance = textWidth > containerWidth ? textWidth : containerWidth;

  return (
    <div
      ref={containerRef}
      className="bg-orange-500 text-white text-center py-2 font-bold overflow-hidden relative"
    >
      <motion.div
        className="inline-flex whitespace-nowrap offer-text"
        animate={{ x: [0, -animationDistance] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <span className="px-4">{offerText}</span>
        <span className="px-4">{offerText}</span>
      </motion.div>
    </div>
  );
};

export default OfferBarComponent;