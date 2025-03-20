
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

interface RelatedServicesProps {
  services: ServiceType[];
  currentServiceId: string;
  relatedIds: string[];
}

const RelatedServices = ({ services, currentServiceId, relatedIds }: RelatedServicesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { currentLang } = useLanguage();

  const relatedServices = services.filter(
    service => relatedIds.includes(service.id) && service.id !== currentServiceId
  ).slice(0, 3);

  if (relatedServices.length === 0) {
    return null;
  }

  // Get translated title based on current language
  const getTranslatedTitle = (service: ServiceType) => {
    if (service.translations && service.translations[currentLang]?.title) {
      return service.translations[currentLang].title;
    }
    return service.title;
  };

  const getTranslatedDescription = (service: ServiceType) => {
    if (service.translations && service.translations[currentLang]?.description) {
      return service.translations[currentLang].description;
    }
    return service.description;
  };

  // Section title by language
  const getSectionTitle = () => {
    const titles = {
      en: "Related Services",
      de: "Verwandte Dienstleistungen",
      zh: "相关服务",
      hi: "संबंधित सेवाएँ",
      te: "సంబంధిత సేవలు",
      kn: "ಸಂಬಂಧಿತ ಸೇವೆಗಳು",
      'en-GB': "Related Services"
    };
    
    return titles[currentLang as keyof typeof titles] || titles.en;
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">{getSectionTitle()}</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 rounded-xl hover-card-effect"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-4"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {getTranslatedTitle(service)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {getTranslatedDescription(service)}
                </p>
                
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  {currentLang === 'en' ? 'Learn more' : 
                   currentLang === 'de' ? 'Mehr erfahren' : 
                   currentLang === 'zh' ? '了解更多' : 
                   currentLang === 'hi' ? 'अधिक जानें' : 'Learn more'}
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
