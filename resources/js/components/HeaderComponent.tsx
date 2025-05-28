import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex items-center justify-between py-4 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold cursor-pointer"
        >
          Liderm
        </motion.div>
        <div className="hidden md:flex space-x-6">
          <motion.a whileHover={{ scale: 1.1 }} href="/#" className="cursor-pointer flex items-center font-bold">
            <span>Accueil</span>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/#abouts" className="cursor-pointer flex items-center font-bold">
            <span>À propos</span>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/#faq" className="cursor-pointer flex items-center font-bold">
            <span>FAQ</span>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/#contacts" className="cursor-pointer flex items-center font-bold">
            <span>Contact</span>
          </motion.a>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleDarkMode}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMoon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiSun className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <button onClick={toggleSidebar} className="md:hidden p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
            {isSidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 right-0 w-full h-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} shadow-lg`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <HiX className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 p-6">
              <li>
                <a href="/#" className="cursor-pointer font-bold">Accueil</a>
              </li>
              <li>
                <a href="/#abouts" className="cursor-pointer font-bold">À propos</a>
              </li>
              <li>
                <a href="/#faq" className="cursor-pointer font-bold">FAQ</a>
              </li>
              <li>
                <a href="/#contacts" className="cursor-pointer font-bold">Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;