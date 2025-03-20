
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { currentLang } = useLanguage();
  
  const getLinks = () => {
    const links = {
      en: {
        company: "Company",
        about: "About Us",
        services: "Services",
        careers: "Careers",
        contact: "Contact",
        policies: "Policies",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        resources: "Resources",
        blog: "Blog",
        faqs: "FAQs",
        newsletter: "Newsletter",
        subscribe: "Subscribe",
        email: "Email address",
        pricing: "Pricing",
        copyright: "© 2024 Maxtize. All rights reserved."
      },
      de: {
        company: "Unternehmen",
        about: "Über uns",
        services: "Dienstleistungen",
        careers: "Karriere",
        contact: "Kontakt",
        policies: "Richtlinien",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        resources: "Ressourcen",
        blog: "Blog",
        faqs: "FAQs",
        newsletter: "Newsletter",
        subscribe: "Abonnieren",
        email: "E-Mail-Adresse",
        pricing: "Preise",
        copyright: "© 2024 Maxtize. Alle Rechte vorbehalten."
      },
      zh: {
        company: "公司",
        about: "关于我们",
        services: "服务",
        careers: "职业机会",
        contact: "联系我们",
        policies: "政策",
        privacy: "隐私政策",
        terms: "服务条款",
        resources: "资源",
        blog: "博客",
        faqs: "常见问题",
        newsletter: "新闻简报",
        subscribe: "订阅",
        email: "电子邮件地址",
        pricing: "价格",
        copyright: "© 2024 Maxtize. 保留所有权利。"
      },
      // Add other languages as needed
    };
    
    return links[currentLang as keyof typeof links] || links.en;
  };

  const links = getLinks();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:col-span-2" variants={childVariants}>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                Maxtize
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              We help businesses grow through innovative digital solutions, data-driven strategies, and cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300">123 Business Ave, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <a href="tel:+1234567890" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:info@maxtize.com" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  info@maxtize.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={childVariants}>
            <h3 className="text-lg font-semibold mb-6">{links.company}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.services}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.careers}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.contact}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.pricing}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={childVariants}>
            <h3 className="text-lg font-semibold mb-6">{links.resources}</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.blog}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.faqs}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.privacy}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {links.terms}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={childVariants}>
            <h3 className="text-lg font-semibold mb-6">{links.newsletter}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={links.email}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow" 
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  {links.subscribe}
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 mt-6">
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {links.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm transition-colors">
              {links.privacy}
            </Link>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm transition-colors">
              {links.terms}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
