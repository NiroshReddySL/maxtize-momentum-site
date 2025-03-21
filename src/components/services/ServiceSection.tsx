
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LazyImage from '@/components/common/LazyImage';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ServiceSectionProps {
  section: {
    id: string;
    title: string;
    content: React.ReactNode;
    image: string;
    imageAlt: string;
    flipped?: boolean;
    translations?: Record<string, {
      title: string;
      content: React.ReactNode;
      imageAlt?: string;
    }>;
    className?: string;
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
    return section.imageAlt;
  };

  return (
    <section id={section.id} className={`py-16 ${section.className || ''}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.flipped ? 'lg:flex-row-reverse' : ''}`}>
        <ScrollReveal>
          <motion.div 
            className="relative rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <LazyImage 
              src={section.image}
              alt={getTranslatedImageAlt()}
              className="w-full h-full max-h-[500px] object-cover shadow-lg rounded-xl"
              placeholder="/images/services/placeholder-service.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className={section.flipped ? 'lg:pr-8' : 'lg:pl-8'}>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              {getTranslatedTitle()}
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {getTranslatedContent()}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceSection;
