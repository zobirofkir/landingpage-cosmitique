import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart, HiShieldCheck, HiSparkles, HiClock } from 'react-icons/hi';

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
                  className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-zinc-100 text-gray-900 border-zinc-300 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
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
              className="w-full py-4 text-lg font-bold bg-orange-600 text-white rounded-xl shadow-md hover:bg-orange-700 transition flex items-center justify-center gap-2"
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

      {/* Product Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 container md:px-0 px-5 mx-auto text-center space-y-8"
      >
        <h3 className="text-4xl font-extrabold leading-snug tracking-tight">
          Pourquoi choisir Liderm ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Protection SPF50+",
              description: "Offre une protection solaire optimale pour votre peau.",
            },
            {
              icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              title: "Hydratation Intense",
              description: "Garde votre peau douce et hydratée toute la journée.",
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Formule Anti-âge",
              description: "Réduit les signes de vieillissement et améliore l’éclat.",
            },
            {
              icon: "M3 10h11M9 21V3m-6 6h11M9 21V3",
              title: "Texture Légère",
              description: "S'absorbe rapidement sans laisser de résidu gras.",
            },
            {
              icon: "M12 2a10 10 0 0110 10m-10-10a10 10 0 00-10 10m10-10v10m0 0l-3-3m3 3l3-3",
              title: "Résistance à l'eau",
              description: "Idéal pour les activités en extérieur et les baignades.",
            },
            {
              icon: "M12 8v8m4-4H8m8 0a4 4 0 11-8 0 4 4 0 018 0z",
              title: "Convient à tous types de peau",
              description: "Formulé pour être doux et efficace sur toutes les peaux.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent border border-orange-200/50 dark:border-orange-700/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-700/30 dark:to-orange-600/30 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-700 dark:text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </motion.div>
              <h4 className="text-2xl font-semibold text-orange-700 dark:text-orange-400 text-center mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-700 dark:text-orange-100/90 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductComponent;
