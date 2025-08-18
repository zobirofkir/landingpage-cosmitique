import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiHeart, HiPhone, HiMail } from 'react-icons/hi';

const ThanksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-zinc-900 dark:to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-8 md:p-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <HiCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Merci beaucoup ! 
          <HiHeart className="inline w-8 h-8 text-red-500 ml-2" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          شكراً جزيلاً! تم استلام طلبكم بنجاح
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-orange-50 dark:bg-zinc-700 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4">
            Prochaines étapes
          </h2>
          <div className="space-y-3 text-left">
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Notre équipe vous contactera dans les 24h
            </p>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Confirmation de votre commande par téléphone
            </p>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Livraison rapide à votre adresse
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <HiPhone className="w-5 h-5 text-orange-500" />
            <span>Support: 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <HiMail className="w-5 h-5 text-orange-500" />
            <span>contact@lidermcosmetique.com</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.location.href = '/'}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ThanksPage;