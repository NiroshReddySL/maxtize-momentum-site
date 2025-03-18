
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const DesktopNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link
        to="/"
        className={`nav-link ${isActive('/') ? 'active' : ''}`}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={`nav-link ${isActive('/services') ? 'active' : ''}`}
      >
        Services
      </Link>
      <Link
        to="/projects"
        className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
      >
        Projects
      </Link>
      <Link
        to="/blog"
        className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
      >
        Blog
      </Link>
      <Link
        to="/about"
        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
      >
        Contact Us
      </Link>
      
      <LanguageSelector />
      <ThemeToggle />
    </nav>
  );
};

export default DesktopNav;
