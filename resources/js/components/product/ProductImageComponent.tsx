import React from 'react';
import { motion } from 'framer-motion';
import LidermSticker from '@/asstes/images/product/product-image.png';

const ProductImageComponent = () => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="relative"
  >
    <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
      <img
        src={LidermSticker}
        alt="Liderm Extreme Glow Fluid SPF50+"
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
      <motion.div
        initial={{ width: '100%' }}
        whileInView={{ width: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-0 bg-orange-600 z-10"
      />
    </div>
  </motion.div>
);

export default ProductImageComponent;
