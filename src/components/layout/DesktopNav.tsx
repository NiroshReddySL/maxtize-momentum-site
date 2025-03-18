
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const DesktopNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  // Translation for nav items
  const getNavLabels = () => {
    const labels = {
      en: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        blog: "Blog",
        about: "About",
        contact: "Contact Us"
      },
      de: {
        home: "Startseite",
        services: "Dienstleistungen",
        projects: "Projekte",
        blog: "Blog",
        about: "Über uns",
        contact: "Kontakt"
      },
      zh: {
        home: "首页",
        services: "服务",
        projects: "项目",
        blog: "博客",
        about: "关于我们",
        contact: "联系我们"
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
      <motion.div variants={itemVariants}>
        <Link
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          {navLabels.home}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/services"
          className={`nav-link ${isActive('/services') ? 'active' : ''}`}
        >
          {navLabels.services}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/projects"
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          {navLabels.projects}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/blog"
          className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
        >
          {navLabels.blog}
        </Link>
      </motion.div>

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
