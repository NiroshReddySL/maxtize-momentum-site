
import React from 'react';
import PageHero from '@/components/common/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { currentLang } = useLanguage();
  
  // Get translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "About Us",
        title: "Young, Dynamic Team",
        description: "We're not just another digital agency. We're a team of passionate young professionals who thrive on tackling complex problems and delivering exceptional results."
      },
      de: {
        badge: "Über uns",
        title: "Junges, dynamisches Team",
        description: "Wir sind nicht nur eine weitere digitale Agentur. Wir sind ein Team von leidenschaftlichen jungen Fachleuten, die komplexe Probleme gerne anpacken und außergewöhnliche Ergebnisse liefern."
      },
      zh: {
        badge: "关于我们",
        title: "年轻，充满活力的团队",
        description: "我们不仅仅是另一家数字机构。我们是一支充满激情的年轻专业团队，擅长解决复杂问题并提供卓越成果。"
      },
      'en-GB': {
        badge: "About Us",
        title: "Young, Dynamic Team",
        description: "We're not just another digital agency. We're a team of passionate young professionals who thrive on tackling complex problems and delivering exceptional results."
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <PageHero
      badge={content.badge}
      title={content.title}
      titleHighlight="Dynamic Team"
      description={content.description}
    />
  );
};

export default HeroSection;
