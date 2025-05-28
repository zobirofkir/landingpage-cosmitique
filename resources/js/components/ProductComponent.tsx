import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart } from 'react-icons/hi';

const ProductComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update dark mode on mount
  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDarkMode(dark);
  }, []);

  return (
    <section
      id="product"
      className={`py-16 px-4 md:px-8 transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-gray-800'
      } mt-10`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl font-extrabold leading-snug tracking-tight mb-4">
            Commandez votre produit
          </h3>
          <form className="space-y-5">
            {/* Input Group Template */}
            {[
              {
                icon: <HiUser className="w-5 h-5 text-orange-600" />,
                placeholder: 'Nom / الاسم',
                type: 'text',
              },
              {
                icon: <HiMail className="w-5 h-5 text-orange-600" />,
                placeholder: 'Email / البريد الإلكتروني',
                type: 'email',
              },
              {
                icon: <HiShoppingCart className="w-5 h-5 text-orange-600" />,
                placeholder: 'Quantité / الكمية',
                type: 'number',
              },
              {
                icon: <HiPhone className="w-5 h-5 text-orange-600" />,
                placeholder: 'Numéro de téléphone / رقم الهاتف',
                type: 'tel',
              },
            ].map((field, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center">
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${
                    isDarkMode
                      ? 'bg-zinc-800 text-white border-zinc-700'
                      : 'bg-zinc-100 text-gray-900 border-zinc-300'
                  }`}
                />
              </div>
            ))}

            {/* Submit Button with Bounce Animation */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 2,
                ease: 'easeInOut',
              }}
              className="w-full py-4 text-lg font-bold bg-orange-600 text-white rounded-xl shadow-md hover:bg-orange-700 transition"
            >
              Envoyer / إرسال
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
              src="https://blueviolet-curlew-711794.hostingersite.com/wp-content/uploads/elementor/thumbs/Liderm-Sticker-1-Mockup-r6fipu2513yigajsooyns09v8v087zz0qf9v19cae4.jpg"
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
    </section>
  );
};

export default ProductComponent;
