
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  const { currentLang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 18, 2024",
      contactLabel: "Questions about our Privacy Policy?",
      contactCta: "Contact us",
      sections: [
        {
          title: "Introduction",
          content: "At Maxtize, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services. We are committed to ensuring the privacy and security of your data in compliance with applicable privacy laws and regulations."
        },
        {
          title: "Information We Collect",
          content: (
            <>
              <p className="mb-4">We collect information that you provide directly to us, such as when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Complete forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation or service</li>
                <li>Correspond with us via email or other communication channels</li>
              </ul>
              <p>We may also automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior through cookies and similar technologies.</p>
            </>
          )
        },
        {
          title: "How We Use Your Information",
          content: (
            <>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and fulfill requests</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </>
          )
        },
        {
          title: "Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
        {
          title: "Your Rights",
          content: (
            <>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to our processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time, where processing is based on consent</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided at the end of this policy.</p>
            </>
          )
        },
        {
          title: "Cookies and Similar Technologies",
          content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service."
        },
        {
          title: "Changes to This Privacy Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. You are advised to review this Privacy Policy periodically for any changes."
        },
        {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@maxtize.com or through the Contact page on our website."
        }
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 18. März 2024",
      contactLabel: "Fragen zu unserer Datenschutzerklärung?",
      contactCta: "Kontaktieren Sie uns",
      sections: [
        {
          title: "Einführung",
          content: "Bei Maxtize nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen, wenn Sie unsere Website oder Dienstleistungen nutzen. Wir sind bestrebt, die Privatsphäre und Sicherheit Ihrer Daten in Übereinstimmung mit den geltenden Datenschutzgesetzen und -vorschriften zu gewährleisten."
        },
        {
          title: "Informationen, die wir sammeln",
          content: (
            <>
              <p className="mb-4">Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Formulare auf unserer Website ausfüllen</li>
                <li>Sich für unseren Newsletter anmelden</li>
                <li>Eine Beratung oder einen Service anfragen</li>
                <li>Mit uns per E-Mail oder andere Kommunikationskanäle korrespondieren</li>
              </ul>
              <p>Wir können auch automatisch bestimmte Informationen über Ihr Gerät erfassen, einschließlich Ihrer IP-Adresse, Browsertyp, Betriebssystem und Surfverhalten durch Cookies und ähnliche Technologien.</p>
            </>
          )
        }
      ]
    },
    // Add other language translations
  };

  const content = translations[currentLang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${content.title} - Maxtize`}
        description="Privacy policy and data handling practices of Maxtize."
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {content.title}
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-300">
                {content.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">{content.lastUpdated}</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
            <ScrollReveal className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-4">
                    {currentLang === 'en' ? 'Contents' : 
                     currentLang === 'de' ? 'Inhalt' : 
                     currentLang === 'zh' ? '目录' : 'Contents'}
                  </h3>
                  <nav className="space-y-2">
                    {content.sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">{content.contactLabel}</h3>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="mailto:privacy@maxtize.com" 
                      className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <Mail size={16} /> privacy@maxtize.com
                    </a>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors mt-2"
                    >
                      {content.contactCta} <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="lg:col-span-3" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <div className="prose dark:prose-invert max-w-none">
                  {content.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      id={`section-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-12"
                    >
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      {typeof section.content === 'string' ? (
                        <p>{section.content}</p>
                      ) : (
                        section.content
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
