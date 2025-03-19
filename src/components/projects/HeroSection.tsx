
import React from 'react';
import PageHero from '@/components/common/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { currentLang } = useLanguage();
  
  // Get translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Our Portfolio",
        title: "Our Success Stories",
        description: "Explore our portfolio of successful projects across various industries. We take pride in solving complex challenges and delivering exceptional results."
      },
      de: {
        badge: "Unser Portfolio",
        title: "Unsere Erfolgsgeschichten",
        description: "Entdecken Sie unser Portfolio erfolgreicher Projekte in verschiedenen Branchen. Wir sind stolz darauf, komplexe Herausforderungen zu lösen und außergewöhnliche Ergebnisse zu liefern."
      },
      zh: {
        badge: "我们的作品集",
        title: "我们的成功案例",
        description: "探索我们在各行业的成功项目组合。我们以解决复杂挑战和提供卓越成果为荣。"
      },
      'en-GB': {
        badge: "Our Portfolio",
        title: "Our Success Stories",
        description: "Explore our portfolio of successful projects across various industries. We take pride in solving complex challenges and delivering exceptional results."
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <PageHero
      badge={content.badge}
      title={content.title}
      titleHighlight="Success Stories"
      description={content.description}
    />
  );
};

export default HeroSection;
