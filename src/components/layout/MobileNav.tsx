
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const MobileNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  // Close menu function
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center space-x-3">
      <LanguageSelector isMobile={true} />
      
      <ThemeToggle />
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="text-foreground p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] pt-16 relative">
          {/* Close button */}
          <button 
            onClick={closeMenu}
            className="absolute right-4 top-4 p-1 rounded-sm ring-offset-background transition-opacity hover:opacity-70"
            aria-label="Close menu"
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </button>
          
          <nav className="flex flex-col items-center space-y-8">
            <Link
              to="/"
              className={`text-xl font-medium ${isActive('/') ? 'text-primary' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-xl font-medium ${isActive('/services') ? 'text-primary' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`text-xl font-medium ${isActive('/projects') ? 'text-primary' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`text-xl font-medium ${isActive('/blog') ? 'text-primary' : ''}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-xl font-medium ${isActive('/about') ? 'text-primary' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-xl font-medium text-white bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
