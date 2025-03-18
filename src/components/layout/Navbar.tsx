
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollProgress from '@/components/blog/ScrollProgress';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { currentLang } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Transform properties for scroll animations
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

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
    const translations = {
      en: "Maxtize",
      de: "Maxtize",
      zh: "迈克斯泰兹",
      hi: "मैक्सटाइज़",
      te: "మాక్స్ టైజ్",
      kn: "ಮ್ಯಾಕ್ಸ್ ಟೈಜ್",
      'en-GB': "Maxtize"
    };
    
    return translations[currentLang as keyof typeof translations] || "Maxtize";
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ opacity, scale }}
      >
        <div className="container-custom flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-2xl animate-fade-in"
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {getLogoText()}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button and Theme Toggle */}
          <MobileNav />
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
