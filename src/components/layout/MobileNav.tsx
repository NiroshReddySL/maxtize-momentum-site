import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../theme/ThemeToggle';
import { services } from '@/data/services';

const MobileNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const menuItems = [
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/privacy-policy', label: 'Privacy Policy' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  const isServiceActive = (id: string) => {
    return location.pathname === `/services/${id}`;
  };

  const closeMenu = () => setIsOpen(false);

  const menuTranslations = {
    en: {
      services: "Services",
      resources: "Resources",
      projects: "Projects",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      pricing: "Pricing",
      allServices: "All Services"
    },
    de: {
      services: "Dienstleistungen",
      resources: "Ressourcen",
      projects: "Projekte",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
      faqs: "Häufige Fragen",
      privacy: "Datenschutzerklärung",
      pricing: "Preise",
      allServices: "Alle Dienstleistungen"
    }
  };

  const labels = menuTranslations[currentLang as keyof typeof menuTranslations] || menuTranslations.en;

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
        <SheetContent side="right" className="w-full sm:w-[350px] p-0 max-h-screen overflow-y-auto">
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
                  {/* Services Dropdown */}
                  <div className="mb-2">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors ${
                        location.pathname.includes('/services')
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span>{labels.services}</span>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-4"
                        >
                          <Link
                            to="/services"
                            className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                              isActive('/services') && !location.pathname.includes('/services/')
                                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                            onClick={closeMenu}
                          >
                            {labels.allServices}
                          </Link>
                          
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                                isServiceActive(service.id)
                                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`}
                              onClick={closeMenu}
                            >
                              <span className="mr-2 text-orange-500">{service.icon}</span>
                              {service.translations?.[currentLang]?.title || service.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Resources Dropdown */}
                  <div className="mb-2">
                    <button
                      onClick={() => setResourcesExpanded(!resourcesExpanded)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors ${
                        (isActive('/projects') || isActive('/blog'))
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span>{labels.resources}</span>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform ${resourcesExpanded ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {resourcesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-4"
                        >
                          <Link
                            to="/projects"
                            className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                              isActive('/projects')
                                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                            onClick={closeMenu}
                          >
                            {labels.projects}
                          </Link>
                          
                          <Link
                            to="/blog"
                            className={`flex items-center w-full px-4 py-3 rounded-md transition-colors ${
                              isActive('/blog')
                                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                            onClick={closeMenu}
                          >
                            {labels.blog}
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other menu items */}
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
                        {labels[item.label.toLowerCase() as keyof typeof labels] || item.label}
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
