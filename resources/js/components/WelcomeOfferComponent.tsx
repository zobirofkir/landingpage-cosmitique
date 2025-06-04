import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeOfferComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      // Show welcome offer for first-time visitors
      setIsVisible(true);
      // Set flag in localStorage
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  const closeOffer = () => {
    setIsVisible(false);
  };

  const handleClaim = () => {
    // Copy promo code to clipboard
    navigator.clipboard.writeText('BIENVENUE20').catch(err => {
      console.error('Failed to copy code: ', err);
    });
    
    // Close the offer
    closeOffer();
  };

  const emojis = ['✨', '🎁', '💫', '🌟', '💝', '🎉', '💎', '🔥', '⭐', '🌈'];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative max-w-md w-full mx-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            {/* Floating emojis background */}
            <div className="absolute inset-0 overflow-hidden">
              {emojis.map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  initial={{ 
                    x: Math.random() * 100 - 50, 
                    y: Math.random() * 100 - 50,
                    opacity: 0.7
                  }}
                  animate={{ 
                    x: Math.random() * 100 - 50, 
                    y: Math.random() * 100 - 50,
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3 + Math.random() * 5,
                    repeatType: "reverse"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            
            {/* Content */}
            <div className="relative p-6 md:p-8 text-center">
              <motion.div 
                className="mb-2 text-3xl font-bold"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                <span className="text-yellow-300">✨</span> OFFRE SPÉCIALE <span className="text-yellow-300">✨</span>
              </motion.div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Bienvenue sur Cosmitique!
              </motion.h2>
              
              <motion.div
                className="mb-6 text-white text-opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="mb-3">Pour célébrer votre première visite:</p>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <p className="text-2xl font-bold text-white">-20% sur votre première commande</p>
                  <p className="text-lg mt-2">Code: <span className="font-mono bg-white bg-opacity-30 px-2 py-1 rounded text-white">BIENVENUE20</span></p>
                </div>
                <p className="text-sm">Offre valable pour toute commande supérieure à 50 MAD</p>
              </motion.div>
              
              <motion.button
                className="w-full py-3 px-6 bg-white text-orange-600 font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
                onClick={handleClaim}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                J'en profite maintenant! 🎁
              </motion.button>
              
              <button 
                onClick={closeOffer}
                className="absolute top-4 right-4 text-white text-opacity-80 hover:text-opacity-100"
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOfferComponent;