
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-bold text-gradient">Maxtize</h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Ready to tackle any challenge, we deliver exceptional digital solutions that help your business grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-orange-500" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Innovation Street, Tech City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-orange-500" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-orange-500" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  info@maxtize.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Maxtize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
