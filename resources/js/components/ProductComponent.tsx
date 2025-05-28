import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart, HiShieldCheck, HiSparkles, HiClock } from 'react-icons/hi';

const ProductComponent = () => {
  return (
    <section
      id="products"
      className="py-16 px-4 md:px-8 transition-colors duration-500 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white mt-10"
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
        className="mt-16 max-w-6xl mx-auto text-center space-y-8"
      >
        <h3 className="text-4xl font-extrabold leading-snug tracking-tight">
          Pourquoi choisir Liderm ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Protection SPF50+',
              description: 'Offre une protection solaire optimale pour votre peau.',
              icon: <HiShieldCheck className="w-6 h-6 text-orange-600" />,
            },
            {
              title: 'Hydratation Intense',
              description: 'Garde votre peau douce et hydratée toute la journée.',
              icon: <HiSparkles className="w-6 h-6 text-orange-600" />,
            },
            {
              title: 'Formule Anti-âge',
              description: 'Réduit les signes de vieillissement et améliore l’éclat.',
              icon: <HiClock className="w-6 h-6 text-orange-600" />,
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-lg bg-zinc-100 dark:bg-zinc-800 flex items-center gap-4"
            >
              {feature.icon}
              <div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Customer Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 max-w-6xl mx-auto text-center space-y-8"
      >
        <h3 className="text-4xl font-extrabold leading-snug tracking-tight">
          Témoignages de nos clients
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: 'Sarah L.',
              feedback: 'Un produit incroyable qui a transformé ma peau !',
            },
            {
              name: 'Ahmed K.',
              feedback: 'Je recommande vivement Liderm à tous mes amis.',
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-lg bg-zinc-100 dark:bg-zinc-800"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-bold mt-4">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductComponent;
