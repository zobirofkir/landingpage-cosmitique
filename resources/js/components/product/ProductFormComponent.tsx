import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart } from 'react-icons/hi';

const ProductFormComponent = ({ formData, errors, handleChange, handleSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(event);
    setIsSubmitting(false);
  };

  return (
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
      <form
        onSubmit={handleFormSubmit}
        className="space-y-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl shadow-lg border border-orange-300 dark:border-zinc-700"
      >
        {[
          {
            name: 'name',
            icon: <HiUser className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
            placeholder: 'Nom / الاسم',
            type: 'text',
          },
          {
            name: 'email',
            icon: <HiMail className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
            placeholder: 'Email / البريد الإلكتروني',
            type: 'email',
          },
          {
            name: 'quantity',
            icon: <HiShoppingCart className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
            placeholder: 'Quantité / الكمية',
            type: 'number',
          },
          {
            name: 'phone',
            icon: <HiPhone className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
            placeholder: 'Numéro de téléphone / رقم الهاتف',
            type: 'tel',
          },
          {
            name: 'address',
            icon: <HiUser className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
            placeholder: 'Adresse / العنوان',
            type: 'text',
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
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white text-gray-900 border-orange-200 shadow-sm hover:shadow-md dark:bg-zinc-800 dark:text-white dark:border-orange-400"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name][0]}</p>
            )}
          </motion.div>
        ))}
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
          disabled={isSubmitting}
          className={`w-full py-4 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800 text-white rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span>يرجى الانتظار...</span>
          ) : (
            <>
              <HiShoppingCart className="w-5 h-5" />
              Commander / إرسال
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ProductFormComponent;
