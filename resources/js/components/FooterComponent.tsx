import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-orange-50 dark:bg-gray-900 py-8">
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
                <a href="/#" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/#abouts" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  À propos
                </a>
              </li>
              <li>
                <a href="/#products" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  Product
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contacts" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11 9.95V14.89h-2.7v-2.89h2.7V10.6c0-2.67 1.63-4.12 4.01-4.12 1.14 0 2.12.08 2.41.12v2.79h-1.65c-1.3 0-1.55.62-1.55 1.53v2.01h3.1l-.4 2.89h-2.7v7.06A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.56 8.56 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3.15 4.42a4.26 4.26 0 0 0 1.32 5.68A4.22 4.22 0 0 1 2.8 9.6v.05a4.26 4.26 0 0 0 3.42 4.18 4.28 4.28 0 0 1-1.92.07 4.26 4.26 0 0 0 3.97 2.95A8.54 8.54 0 0 1 2 18.41a12.07 12.07 0 0 0 6.52 1.91c7.84 0 12.12-6.5 12.12-12.12 0-.18 0-.35-.01-.53A8.67 8.67 0 0 0 22.46 6z" />
                </svg>
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