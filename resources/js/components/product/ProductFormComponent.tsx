import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart, HiLocationMarker } from 'react-icons/hi';
import useFormHandler from '../../hooks/useFormHandler';

const ProductFormComponent = ({ formData, errors, handleChange, handleSubmit }) => {
  const { isSubmitting, handleFormSubmit } = useFormHandler(handleSubmit);

  const basePrice = 170;
  const quantity = Math.max(1, parseInt(formData.quantity || 1));
  const finalPrice = quantity * basePrice;

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    handleChange({ target: { name: 'quantity', value: newQuantity } });
  };

  const formFields = [
    {
      name: 'name',
      icon: <HiUser className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      placeholder: 'Nom & Prénom / الاسم الكامل',
      type: 'text',
    },
    {
      name: 'email',
      icon: <HiMail className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      placeholder: 'Email (facultatif)',
      type: 'email',
    },    
    {
      name: 'phone',
      icon: <HiPhone className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      placeholder: 'Téléphone / رقم الهاتف',
      type: 'tel',
    },
    {
      name: 'address',
      icon: <HiLocationMarker className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      placeholder: 'Adresse ou Ville / العنوان',
      type: 'text',
    },
  ];

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

      {/* Quantité Section */}
      <div className="text-center">
        <p className="font-semibold text-lg mb-2">Quantité</p>
        <div className="flex justify-center items-center gap-3">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="w-10 h-10 text-xl bg-orange-100 dark:bg-orange-900 text-orange-600 rounded-lg shadow hover:scale-105 transition"
          >
            −
          </button>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) =>
              handleChange({
                target: {
                  name: 'quantity',
                  value: Math.max(1, parseInt(e.target.value || 1)),
                },
              })
            }
            className="w-16 text-center text-lg border border-orange-300 dark:border-orange-500 rounded-lg py-2 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
            min="1"
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            className="w-10 h-10 text-xl bg-orange-100 dark:bg-orange-900 text-orange-600 rounded-lg shadow hover:scale-105 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleFormSubmit}
        className="space-y-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl shadow-lg border border-orange-300 dark:border-zinc-700"
      >
        {formFields.map((field, idx) => (
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
          animate={{ y: [0, -6, 0] }}
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
              ACHETEZ - {finalPrice} dh - اشتري الآن
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ProductFormComponent;
