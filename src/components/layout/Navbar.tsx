
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const isActive = (path: string) => {
    return location.pathname === path;
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
        <nav className="hidden md:flex items-center space-x-10">
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
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            <Link
              to="/"
              className={`text-xl font-medium ${isActive('/') ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-xl font-medium ${isActive('/services') ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`text-xl font-medium ${isActive('/projects') ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`text-xl font-medium ${isActive('/about') ? 'text-primary' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
