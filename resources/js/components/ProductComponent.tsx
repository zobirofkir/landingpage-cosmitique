import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart } from 'react-icons/hi';
import FeatureProductComponent from './FeatureProductComponent';
import LidermSticker from '@/asstes/images/liderm-sticker.jpg';

const ProductComponent = () => {
  return (
    <section
      id="products"
      className="py-16 px-4 md:px-8 transition-colors duration-500 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white mt-10"
    >
      <div className="container md:px-0 px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl font-extrabold leading-snug tracking-tight mb-4 text-center">
            Commandez votre produit
          </h3>
          <form className="space-y-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl shadow-lg border border-orange-300 dark:border-zinc-700">
            {/* Input Group Template */}
            {[
              {
                icon: <HiUser className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
                placeholder: 'Nom / الاسم',
                type: 'text',
              },
              {
                icon: <HiMail className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
                placeholder: 'Email / البريد الإلكتروني',
                type: 'email',
              },
              {
                icon: <HiShoppingCart className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
                placeholder: 'Quantité / الكمية',
                type: 'number',
              },
              {
                icon: <HiPhone className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
                placeholder: 'Numéro de téléphone / رقم الهاتف',
                type: 'tel',
              },
            ].map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-3 flex items-center">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white text-gray-900 border-orange-200 shadow-sm hover:shadow-md dark:bg-zinc-800 dark:text-white dark:border-orange-400"
                />
              </motion.div>
            ))}

            {/* Submit Button with Enhanced Animation */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1, rotate: 2 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 2,
                ease: 'easeInOut',
              }}
              className="w-full py-4 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800 text-white rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              <HiShoppingCart className="w-5 h-5" />
              Commander / إرسال
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl bg-orange-100 dark:bg-orange-900/20">
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
      </div>
      
      {
        /**
         * Featured Product
         */
      }
      <FeatureProductComponent />

    </section>
  );
};

export default ProductComponent;
