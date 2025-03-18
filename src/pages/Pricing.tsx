
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { currentLang } = useLanguage();

  const translations = {
    en: {
      title: "Flexible Solutions for Your Business",
      subtitle: "Contact us for customized pricing tailored to your needs",
      cta: "Contact Us",
      features: [
        "Customized Solutions",
        "Flexible Pricing",
        "24/7 Support",
        "Dedicated Team"
      ]
    },
    de: {
      title: "Flexible Lösungen für Ihr Unternehmen",
      subtitle: "Kontaktieren Sie uns für maßgeschneiderte Preise nach Ihren Bedürfnissen",
      cta: "Kontaktieren Sie uns",
      features: [
        "Maßgeschneiderte Lösungen",
        "Flexible Preisgestaltung",
        "24/7 Support",
        "Dediziertes Team"
      ]
    },
    // Add other languages
  };

  const content = translations[currentLang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {content.subtitle}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                {content.cta}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-lg font-medium">{feature}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
