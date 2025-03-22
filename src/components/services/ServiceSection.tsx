
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LazyImage from '@/components/common/LazyImage';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { generateServicePlaceholder } from '@/utils/servicePlaceholder';
import { ServiceImages } from '@/data/serviceImages';

interface ServiceSectionProps {
  section: {
    id: string;
    title: string;
    content: React.ReactNode;
    image?: string;
    imageAlt?: string;
    flipped?: boolean;
    translations?: Record<string, {
      title: string;
      content: React.ReactNode;
      imageAlt?: string;
    }>;
    className?: string;
    serviceId?: string;
  };
  index?: number;
}

const ServiceSection = ({ section, index = 0 }: ServiceSectionProps) => {
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
    return section.imageAlt || `${section.title} illustration`;
  };

  // Get service-specific image instead of placeholder
  const getImage = () => {
    if (section.image) return section.image;
    
    if (section.serviceId && ServiceImages[section.serviceId] && ServiceImages[section.serviceId][section.id]) {
      return ServiceImages[section.serviceId][section.id];
    }
    
    return section.serviceId 
      ? generateServicePlaceholder(section.serviceId, 'section') 
      : '/images/services/placeholder-service.jpg';
  };

  // Alternating card styles for visual interest
  const getCardStyle = () => {
    const styles = [
      "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/40 dark:to-gray-900/40 shadow-md",
      "bg-gradient-to-tr from-orange-50 to-white dark:from-orange-900/10 dark:to-gray-800/30 shadow-md",
      "bg-gradient-to-bl from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900/30 shadow-md"
    ];
    
    return styles[index % styles.length];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id={section.id} className={`py-16 ${section.className || ''}`}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <div className={`relative rounded-2xl overflow-hidden ${getCardStyle()} p-6 md:p-10`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${section.flipped ? 'lg:flex-row-reverse' : ''}`}>
            <ScrollReveal>
              <motion.div 
                className="relative rounded-xl overflow-hidden group shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                <LazyImage 
                  src={getImage()}
                  alt={getTranslatedImageAlt()}
                  className="w-full h-full object-cover rounded-xl aspect-[4/3]"
                  placeholder="/images/services/placeholder-service.jpg"
                />
                
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <motion.div 
                className={section.flipped ? 'lg:pr-8' : 'lg:pl-8'}
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold mb-6 relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                    {getTranslatedTitle()}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-orange-500"></span>
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {getTranslatedContent()}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
