
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface RelatedServicesProps {
  services: ServiceType[];
  currentServiceId: string;
  relatedIds: string[];
  openContactForm: () => void;
}

const RelatedServices = ({ services, currentServiceId, relatedIds, openContactForm }: RelatedServicesProps) => {
  const { currentLang } = useLanguage();
  
  // Filter related services
  const relatedServices = services
    .filter(service => relatedIds.includes(service.id) && service.id !== currentServiceId)
    .slice(0, 3); // Limit to 3 related services
  
  // No related services
  if (relatedServices.length === 0) {
    return null;
  }
  
  // Translations
  const title = currentLang === 'en' ? 'Related Services' :
               currentLang === 'de' ? 'Verwandte Dienstleistungen' :
               currentLang === 'zh' ? '相关服务' :
               currentLang === 'hi' ? 'संबंधित सेवाएँ' :
               currentLang === 'kn' ? 'ಸಂಬಂಧಿತ ಸೇವೆಗಳು' :
               currentLang === 'te' ? 'సంబంధిత సేవలు' :
               'Related Services';
               
  const learnMoreText = currentLang === 'en' ? 'Learn More' :
                       currentLang === 'de' ? 'Mehr erfahren' :
                       currentLang === 'zh' ? '了解更多' :
                       currentLang === 'hi' ? 'और जानें' :
                       currentLang === 'kn' ? 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ' :
                       currentLang === 'te' ? 'మరింత తెలుసుకోండి' :
                       'Learn More';
                       
  const requestText = currentLang === 'en' ? 'Request Service' :
                     currentLang === 'de' ? 'Service anfragen' :
                     currentLang === 'zh' ? '请求服务' :
                     currentLang === 'hi' ? 'सेवा अनुरोध करें' :
                     currentLang === 'kn' ? 'ಸೇವೆ ವಿನಂತಿಸಿ' :
                     currentLang === 'te' ? 'సేవను అభ్యర్థించండి' :
                     'Request Service';

  return (
    <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => {
            // Get translated title and description
            const serviceTitle = service.translations && service.translations[currentLang]?.title
              ? service.translations[currentLang].title
              : service.title;
              
            const serviceDesc = service.translations && service.translations[currentLang]?.description
              ? service.translations[currentLang].description
              : service.description;
            
            return (
              <motion.div
                key={service.id}
                className="glass-card overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {serviceTitle}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {serviceDesc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-orange-500 hover:text-orange-600 font-medium transition-colors text-sm"
                    >
                      {learnMoreText}
                    </Link>
                    
                    <button
                      onClick={openContactForm}
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 font-medium transition-colors text-sm"
                    >
                      {requestText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default RelatedServices;
