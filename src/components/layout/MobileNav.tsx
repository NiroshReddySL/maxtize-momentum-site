import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../theme/ThemeToggle';

const MobileNav = () => {
  const location = useLocation();
  const { currentLang, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/pricing', label: 'Pricing' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  const closeMenu = () => setIsOpen(false);

  const menuTranslations = {
    en: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      pricing: "Pricing"
    },
    de: {
      home: "Startseite",
      services: "Dienstleistungen",
      projects: "Projekte",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
      faqs: "Häufige Fragen",
      privacy: "Datenschutzerklärung",
      pricing: "Preise"
    }
  };

  return (
    <div className="md:hidden flex items-center space-x-3">
      <LanguageSelector isMobile={true} />
      <ThemeToggle />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="text-foreground p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[350px] p-0">
          <div className="h-full flex flex-col bg-background">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <AnimatePresence>
                <motion.div 
                  className="space-y-1 px-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                          isActive(item.path)
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        onClick={closeMenu}
                      >
                        {menuTranslations[currentLang as keyof typeof menuTranslations]?.[item.label.toLowerCase() as keyof typeof menuTranslations['en']] || item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
