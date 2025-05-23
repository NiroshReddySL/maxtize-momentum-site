
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import LazyImage from '@/components/common/LazyImage';

interface ServiceCardProps {
  service: ServiceType;
  openContactForm: () => void;
}

const ServiceCard = ({ service, openContactForm }: ServiceCardProps) => {
  const { currentLang } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const learnMoreText = currentLang === 'en' ? 'Learn more' : 
                        currentLang === 'de' ? 'Mehr erfahren' : 
                        currentLang === 'zh' ? '了解更多' : 
                        currentLang === 'hi' ? 'अधिक जानें' : 
                        currentLang === 'kn' ? 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ' : 
                        currentLang === 'te' ? 'మరింత తెలుసుకోండి' : 'Learn more';

  const requestServiceText = currentLang === 'en' ? 'Request Service' : 
                            currentLang === 'de' ? 'Service anfragen' : 
                            currentLang === 'zh' ? '请求服务' : 
                            currentLang === 'hi' ? 'सेवा अनुरोध' : 
                            currentLang === 'kn' ? 'ಸೇವೆ ವಿನಂತಿಸಿ' : 
                            currentLang === 'te' ? 'సేవ అభ్యర్థించండి' : 'Request Service';

  // Image path based on service ID
  const imagePath = `/images/services/${service.id}-card.jpg`;
  const fallbackImage = `/images/services/placeholder-service.jpg`;

  // Scroll card into view if it has the same ID as the URL hash
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === service.id && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [service.id]);

  return (
    <motion.div 
      id={service.id} 
      ref={cardRef}
      className="glass-card overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-52 overflow-hidden group">
        <LazyImage 
          src={imagePath} 
          alt={getTranslatedTitle()}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          placeholder={fallbackImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-6">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">{getTranslatedTitle()}</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg">
            {service.icon}
          </div>
          <div className="h-px flex-grow bg-gray-200 dark:bg-gray-700"></div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {getTranslatedDescription()}
        </p>
        
        <ul className="space-y-3 mb-8">
          {getTranslatedFeatures().slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link 
            to={`/services/${service.id}`}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors group"
          >
            {learnMoreText}
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <button 
            onClick={openContactForm}
            className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors shadow hover:shadow-lg"
          >
            {requestServiceText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
