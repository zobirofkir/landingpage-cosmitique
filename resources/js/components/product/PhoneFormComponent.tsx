import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiShoppingCart } from 'react-icons/hi';

const PhoneFormComponent = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/phones';
    
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
      const csrfInput = document.createElement('input');
      csrfInput.type = 'hidden';
      csrfInput.name = '_token';
      csrfInput.value = csrfToken;
      form.appendChild(csrfInput);
    }
    
    const phoneInput = document.createElement('input');
    phoneInput.type = 'hidden';
    phoneInput.name = 'phone_number';
    phoneInput.value = phone;
    form.appendChild(phoneInput);
    
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-green-50 to-green-100 dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl shadow-lg border border-green-300 dark:border-zinc-700 mt-8"
    >
      <h3 className="text-2xl font-bold text-center mb-4 text-green-700 dark:text-green-400">
        Quick Phone Order - طلب سريع عبر الهاتف
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <HiPhone className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <input
            type="tel"
            placeholder="Your phone number / رقم الهاتف الخاص بك"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500 transition bg-white text-gray-900 border-green-200 shadow-sm hover:shadow-md dark:bg-zinc-800 dark:text-white dark:border-green-400"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          disabled={isSubmitting || !phone}
          className={`w-full py-3 text-lg font-bold bg-gradient-to-r from-green-500 to-green-600 dark:from-green-700 dark:to-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 ${
            isSubmitting || !phone ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span>Please wait... / يرجى الانتظار</span>
          ) : (
            <>
              <HiShoppingCart className="w-5 h-5" />
              Quick Order - طلب سريع
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default PhoneFormComponent;