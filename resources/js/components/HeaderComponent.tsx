import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import Logo from '@/asstes/images/logo/logo.png';

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} shadow-md`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex items-center justify-between py-4 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <img src={Logo} alt="Logo" className="md:h-15 md:w-15 h-[40px] " />
        </motion.div>
        <div className="hidden md:flex space-x-6">
          <motion.a whileHover={{ scale: 1.1 }} href="/#" className="cursor-pointer flex items-center font-bold">
            <span>Accueil</span>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/#abouts" className="cursor-pointer flex items-center font-bold">
            <span>À propos</span>
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="/#products" className="cursor-pointer flex items-center font-bold">
            <span>Product</span>
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
          <div className="relative">
            <button onClick={toggleSidebar} className="md:hidden p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
              {isSidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`absolute right-0 mt-2 w-48 bg-white dark:bg-black text-black dark:text-white shadow-lg rounded-md`}
              >
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <a href="/#" className="cursor-pointer font-bold">Accueil</a>
                  </li>
                  <li>
                    <a href="/#abouts" className="cursor-pointer font-bold">À propos</a>
                  </li>
                  <li>
                    <a href="/#products" className="cursor-pointer font-bold">Product</a>
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
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default HeaderComponent;