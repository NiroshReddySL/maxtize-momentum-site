
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/service';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
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

  return (
    <div id={service.id} className="glass-card p-8 hover-card-effect">
      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-6">
        {service.icon}
      </div>
      
      <h2 className="text-2xl font-bold mb-4">{getTranslatedTitle()}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {getTranslatedDescription()}
      </p>
      
      <ul className="space-y-3 mb-8">
        {getTranslatedFeatures().map((feature, idx) => (
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
      
      <Link 
        to="/contact" 
        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
      >
        {currentLang === 'en' ? 'Request Service' : 
         currentLang === 'de' ? 'Service anfragen' : 
         currentLang === 'zh' ? '请求服务' : 
         currentLang === 'hi' ? 'सेवा अनुरोध' : 
         currentLang === 'kn' ? 'ಸೇವೆ ವಿನಂತಿಸಿ' : 
         currentLang === 'te' ? 'సేవ అభ్యర్థించండి' : 'Request Service'} 
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
