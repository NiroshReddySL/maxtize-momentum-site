
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { services } from '@/data/services';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DesktopNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  const isServiceActive = () => {
    return location.pathname.startsWith('/services/');
  };

  // Translation for nav items
  const getNavLabels = () => {
    const labels = {
      en: {
        services: "Services",
        resources: "Resources",
        projects: "Projects",
        blog: "Blog",
        about: "About",
        contact: "Contact Us",
        pricing: "Pricing"
      },
      de: {
        services: "Dienstleistungen",
        resources: "Ressourcen",
        projects: "Projekte",
        blog: "Blog",
        about: "Über uns",
        contact: "Kontakt",
        pricing: "Preise"
      },
      zh: {
        services: "服务",
        resources: "资源",
        projects: "项目",
        blog: "博客",
        about: "关于我们",
        contact: "联系我们",
        pricing: "价格"
      },
      // Add other languages as needed
    };
    
    return labels[currentLang as keyof typeof labels] || labels.en;
  };

  const navLabels = getNavLabels();

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="hidden md:flex items-center space-x-6"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`nav-link ${isActive('/services') || isServiceActive() ? 'active' : ''}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {navLabels.services}
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg min-w-[240px]"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <ul className="grid gap-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/services/${service.id}`}
                        className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-orange-500">{service.icon}</span>
                          <span>{service.translations?.[currentLang]?.title || service.title}</span>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/services"
                      className="block p-2 mt-2 text-center bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {currentLang === 'en' ? 'All Services' : 
                       currentLang === 'de' ? 'Alle Dienstleistungen' : 
                       currentLang === 'zh' ? '所有服务' : 'All Services'}
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`nav-link ${isActive('/projects') || isActive('/blog') ? 'active' : ''}`}
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              {navLabels.resources}
            </NavigationMenuTrigger>
            <NavigationMenuContent 
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg min-w-[180px]"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <ul className="grid gap-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/projects"
                      className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    >
                      {navLabels.projects}
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog"
                      className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    >
                      {navLabels.blog}
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <motion.div variants={itemVariants}>
        <Link
          to="/about"
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
        >
          {navLabels.about}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/pricing"
          className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
        >
          {navLabels.pricing}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/contact"
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          {navLabels.contact}
        </Link>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <LanguageSelector />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ThemeToggle />
      </motion.div>
    </motion.nav>
  );
};

export default DesktopNav;
