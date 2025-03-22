
import { ReactNode, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceLayoutProps {
  service: ServiceType;
  children?: ReactNode;
  openContactForm: () => void;
}

const ServiceLayout = ({ service, children, openContactForm }: ServiceLayoutProps) => {
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

  // Define appropriate image for the service
  const getServiceHeroImage = () => {
    return `/images/services/${service.id}-hero.jpg`;
  };
  
  // Set up parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroBackground = document.getElementById('hero-background');
      const heroContent = document.getElementById('hero-content');
      
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroContent.style.opacity = `${1 - Math.min(1, scrollY / 700)}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title={`${getTranslatedTitle()} - Maxtize`}
        description={getTranslatedDescription()}
        keywords={getTranslatedFeatures().join(', ')}
      />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        
        {/* Improved Hero Section with Parallax Effect */}
        <section className="pt-24 pb-20 relative overflow-hidden h-[75vh] min-h-[600px] max-h-[800px] flex items-center">
          <div className="absolute inset-0 z-0" id="hero-background">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
            <img 
              src={getServiceHeroImage()} 
              alt={getTranslatedTitle()}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/services/placeholder-service.jpg';
              }}
            />
            
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/30 filter blur-[100px]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-128 h-128 rounded-full bg-blue-500/20 filter blur-[120px]"></div>
            </div>
          </div>
          
          <div className="container-custom relative z-10" id="hero-content">
            <ScrollReveal>
              <Link 
                to="/services" 
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
                aria-label="Back to services page"
              >
                <ArrowLeft size={16} className="mr-2" />
                {backToServices}
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <ScrollReveal className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-white"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-orange-500/40 to-orange-600/40 backdrop-blur-md text-orange-400 rounded-xl mb-8 border border-orange-500/30 shadow-lg">
                    {service.icon}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {getTranslatedTitle()}
                  </h1>
                  <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl">
                    {getTranslatedDescription()}
                  </p>
                  
                  <motion.button 
                    onClick={openContactForm}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-orange-500/50 focus:outline-none"
                    aria-label={`Request ${getTranslatedTitle()} service`}
                  >
                    {ctaText}
                    <ArrowRight size={18} className="ml-2" />
                  </motion.button>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:col-span-4">
                <div className="glass-card p-8 rounded-xl border border-white/10 shadow-xl backdrop-blur-md bg-white/10">
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    {currentLang === 'en' ? 'Key Features' : 
                     currentLang === 'de' ? 'Hauptmerkmale' : 
                     currentLang === 'zh' ? '主要特点' : 
                     currentLang === 'hi' ? 'प्रमुख विशेषताएं' : 'Key Features'}
                  </h3>
                  <ul className="space-y-4" aria-label="Service features">
                    {getTranslatedFeatures().map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                      >
                        <CheckCircle size={18} className="text-orange-400 mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-white/90">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </section>

        <main className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServiceLayout;
