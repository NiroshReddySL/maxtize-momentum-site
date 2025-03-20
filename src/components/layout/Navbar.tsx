
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import ThemeToggle from '@/components/theme/ThemeToggle';
import ScrollProgress from '@/components/blog/ScrollProgress';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { currentLang } = useLanguage();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);
  const height = useTransform(scrollYProgress, [0, 0.05], ['5.5rem', '4.5rem']);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ opacity, scale, height }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-2xl"
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {getLogoText()}
            </motion.span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </motion.header>
      <ScrollProgress />
    </>
  );
};

export default Navbar;
