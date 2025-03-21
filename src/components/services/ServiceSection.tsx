
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LazyImage from '@/components/common/LazyImage';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { generateServicePlaceholder } from '@/utils/servicePlaceholder';

interface ServiceSectionProps {
  section: {
    id: string;
    title: string;
    content: React.ReactNode;
    image?: string; // Make image optional to match ServiceContentSection
    imageAlt?: string; // Make imageAlt optional to match ServiceContentSection
    flipped?: boolean;
    translations?: Record<string, {
      title: string;
      content: React.ReactNode;
      imageAlt?: string;
    }>;
    className?: string;
    serviceId?: string; // Add serviceId to generate placeholders
  };
}

const ServiceSection = ({ section }: ServiceSectionProps) => {
  const { currentLang } = useLanguage();
  
  // Get translated content based on current language
  const getTranslatedTitle = () => {
    if (section.translations && section.translations[currentLang]?.title) {
      return section.translations[currentLang].title;
    }
    return section.title;
  };
  
  const getTranslatedContent = () => {
    if (section.translations && section.translations[currentLang]?.content) {
      return section.translations[currentLang].content;
    }
    return section.content;
  };
  
  const getTranslatedImageAlt = () => {
    if (section.translations && section.translations[currentLang]?.imageAlt) {
      return section.translations[currentLang].imageAlt;
    }
    return section.imageAlt || "Service illustration";
  };

  // Generate placeholder image if image is not provided
  const getImage = () => {
    if (section.image) return section.image;
    return section.serviceId 
      ? generateServicePlaceholder(section.serviceId, 'section') 
      : '/images/services/placeholder-service.jpg';
  };

  return (
    <section id={section.id} className={`py-16 mb-16 ${section.className || ''}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${section.flipped ? 'lg:flex-row-reverse' : ''}`}>
          <ScrollReveal>
            <motion.div 
              className="relative rounded-xl overflow-hidden group shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage 
                src={getImage()}
                alt={getTranslatedImageAlt()}
                className="w-full h-full max-h-[500px] object-cover rounded-xl"
                placeholder="/images/services/placeholder-service.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className={section.flipped ? 'lg:pr-8' : 'lg:pl-8'}>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 relative inline-block">
                {getTranslatedTitle()}
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-orange-500"></span>
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {getTranslatedContent()}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
