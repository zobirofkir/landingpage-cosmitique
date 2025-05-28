import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">À propos de Liderm</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Liderm propose des produits de soin de la peau conçus pour protéger, hydrater et améliorer la santé de votre peau. Découvrez nos écrans solaires et soins anti-âge.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  Produits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Liderm. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;