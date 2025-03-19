
import React from 'react';
import PageHero from '@/components/common/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { currentLang } = useLanguage();
  
  // Get translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Get in Touch",
        title: "Contact Maxtize",
        description: "Have a complex digital challenge? We're ready to help. Reach out to discuss how we can work together."
      },
      de: {
        badge: "Kontaktieren Sie uns",
        title: "Kontakt Maxtize",
        description: "Haben Sie eine komplexe digitale Herausforderung? Wir sind bereit zu helfen. Kontaktieren Sie uns, um zu besprechen, wie wir zusammenarbeiten können."
      },
      zh: {
        badge: "联系我们",
        title: "联系 Maxtize",
        description: "有复杂的数字挑战？我们随时准备帮助您。请联系我们，讨论如何一起合作。"
      },
      'en-GB': {
        badge: "Get in Touch",
        title: "Contact Maxtize",
        description: "Have a complex digital challenge? We're ready to help. Reach out to discuss how we can work together."
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <PageHero
      badge={content.badge}
      title={content.title}
      description={content.description}
    />
  );
};

export default HeroSection;
