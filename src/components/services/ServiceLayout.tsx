
import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceLayoutProps {
  service: ServiceType;
  children?: ReactNode;
}

const ServiceLayout = ({ service, children }: ServiceLayoutProps) => {
  const { currentLang } = useLanguage();

  // Get translated content based on current language
  const getTranslatedTitle = () => {
    if (service.translations && service.translations[currentLang]?.title) {
      return service.translations[currentLang].title;
    }
    return service.title;
  };

  const getTranslatedDescription = () => {
    if (service.translations && service.translations[currentLang]?.description) {
      return service.translations[currentLang].description;
    }
    return service.description;
  };

  const getTranslatedFeatures = () => {
    if (service.translations && service.translations[currentLang]?.features) {
      return service.translations[currentLang].features;
    }
    return service.features;
  };

  const ctaText = currentLang === 'en' ? 'Request Service' : 
                 currentLang === 'de' ? 'Service anfragen' : 
                 currentLang === 'zh' ? '请求服务' : 
                 currentLang === 'hi' ? 'सेवा अनुरोध' : 
                 currentLang === 'kn' ? 'ಸೇವೆ ವಿನಂತಿಸಿ' : 
                 currentLang === 'te' ? 'సేవ అభ్యర్థించండి' : 'Request Service';

  const backToServices = currentLang === 'en' ? 'Back to Services' : 
                        currentLang === 'de' ? 'Zurück zu Dienstleistungen' : 
                        currentLang === 'zh' ? '返回服务' : 
                        currentLang === 'hi' ? 'सेवाओं पर वापस जाएं' : 
                        currentLang === 'kn' ? 'ಸೇವೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ' : 
                        currentLang === 'te' ? 'సేవలకు తిరిగి' : 'Back to Services';

  return (
    <>
      <SEO 
        title={`${getTranslatedTitle()} - Maxtize`}
        description={getTranslatedDescription()}
        keywords={getTranslatedFeatures().join(', ')}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-custom">
            <ScrollReveal>
              <Link 
                to="/services" 
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 mb-6 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                {backToServices}
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <ScrollReveal className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-xl mb-6">
                    {service.icon}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                    {getTranslatedTitle()}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {getTranslatedDescription()}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {ctaText}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass-card p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                    {currentLang === 'en' ? 'Key Features' : 
                     currentLang === 'de' ? 'Hauptmerkmale' : 
                     currentLang === 'zh' ? '主要特点' : 
                     currentLang === 'hi' ? 'प्रमुख विशेषताएं' : 'Key Features'}
                  </h3>
                  <ul className="space-y-4">
                    {getTranslatedFeatures().map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                      >
                        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceLayout;
