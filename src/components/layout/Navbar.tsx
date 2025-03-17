
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Available languages
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'de', name: 'German', flag: '🇩🇪' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();

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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    // In a real app, this would redirect to the localized version
    // For now, we'll just simulate by storing the selection
    localStorage.setItem('preferredLanguage', langCode);
    
    // Optional: You could reload the page with the new language path
    // window.location.href = `/${langCode}${location.pathname}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-2xl animate-fade-in"
        >
          <span className="text-gradient">Maxtize</span>
        </Link>

        {/* Desktop Navigation */}
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
          
          {/* Language Selector */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <Globe size={18} />
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end">
              <div className="grid gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center px-3 py-2 rounded-md text-sm ${
                      currentLang === lang.code
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Language Selector for Mobile */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-1 text-sm font-medium">
                <Globe size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end">
              <div className="grid gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center px-3 py-2 rounded-md text-sm ${
                      currentLang === lang.code
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
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
            <SheetContent side="right" className="w-[280px] pt-16">
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
      </div>
    </header>
  );
};

export default Navbar;
