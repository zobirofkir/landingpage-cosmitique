import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BannerComponent from './components/BannerComponent';
import React from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/**
 * Apply saved theme mode from localStorage
 */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
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
