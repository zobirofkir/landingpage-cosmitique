import React from 'react';
import { motion } from 'framer-motion';

const ModalComponent = ({ setShowModal }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
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
);

export default ModalComponent;
