import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BannerComponent from './components/BannerComponent';
import React, { useState, useEffect } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/**
 * Apply saved theme mode from localStorage
 */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
}

const WelcomePopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            setIsVisible(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Bienvenue sur notre site !
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Découvrez notre produit phare, <span className="text-orange-600 font-bold">Liderm Extreme Glow Fluid SPF50+</span>, pour une peau éclatante et protégée.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Profitez de notre offre spéciale dès maintenant !
                </p>
                <button
                    onClick={closePopup}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                    Fermer
                </button>
            </div>
        </div>
    ) : null;
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <WelcomePopup />
                {
                    /**
                     * Header Component
                     */
                }
                <HeaderComponent />
                
                {
                    /**
                     * Logic
                     */
                }
                <App {...props} />

                {
                    /**
                     * Footer Component
                     */
                }
                <FooterComponent />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
