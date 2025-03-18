
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const MobileNav = () => {
  const location = useLocation();
  const { currentLang } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === `/${currentLang}${path}`;
  };

  return (
    <div className="md:hidden flex items-center space-x-3">
      <LanguageSelector isMobile={true} />
      
      <ThemeToggle />
      
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="text-foreground"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] pt-16 relative">
          {/* Add close button */}
          <SheetClose className="absolute right-4 top-4 p-1 rounded-sm ring-offset-background transition-opacity">
            <X size={18} />
            <span className="sr-only">Close</span>
          </SheetClose>
          
          <nav className="flex flex-col items-center space-y-8">
            <Link
              to="/"
              className={`text-xl font-medium ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-xl font-medium ${isActive('/services') ? 'text-primary' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`text-xl font-medium ${isActive('/projects') ? 'text-primary' : ''}`}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`text-xl font-medium ${isActive('/blog') ? 'text-primary' : ''}`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-xl font-medium ${isActive('/about') ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-xl"
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
