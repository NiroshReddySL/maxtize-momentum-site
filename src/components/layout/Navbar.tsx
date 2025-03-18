
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <DesktopNav />

        {/* Mobile Menu Button and Theme Toggle */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
