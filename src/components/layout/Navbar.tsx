
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { currentLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translate the logo text based on current language if needed
  const getLogoText = () => {
    // You could customize the logo text per language if needed
    return "Maxtize";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-2xl animate-fade-in"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">{getLogoText()}</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button and Theme Toggle */}
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Navbar;
