import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiPhone, HiShoppingCart } from 'react-icons/hi';
import FeatureProductComponent from './FeatureProductComponent';
import LidermSticker from '@/asstes/images/liderm-sticker.jpg';
import axios from 'axios';

const ProductComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // Modal state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await axios.post('/products', formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: '', email: '', quantity: '', phone: '', address: '' });
      setShowModal(true); // Show modal on success
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <section
      id="products"
      className="py-16 px-4 md:px-8 transition-colors duration-500 bg-white text-gray-800 dark:bg-zinc-900 dark:text-white mt-10"
    >
      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center text-orange-600">
              Succès / نجاح
            </h3>
            <p className="text-center mb-6">
              Merci beaucoup, nous vous contacterons bientôt. / شكراً جزيلاً، سنتواصل معكم قريباً.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800 text-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Fermer / إغلاق
            </button>
          </div>
        </motion.div>
      )}

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
          <form
            onSubmit={handleSubmit}
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

            {/* Submit Button */}
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

      <FeatureProductComponent />
    </section>
  );
};

export default ProductComponent;
