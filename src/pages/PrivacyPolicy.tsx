
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { currentLang } = useLanguage();

  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 18, 2024",
      sections: [
        {
          title: "Introduction",
          content: "At Maxtize, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information."
        },
        // Add more sections
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 18. März 2024",
      sections: [
        {
          title: "Einführung",
          content: "Bei Maxtize nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen."
        }
      ]
    },
    // Add other languages
  };

  const content = translations[currentLang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h1>{content.title}</h1>
            <p className="text-gray-500">{content.lastUpdated}</p>
            
            {content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
