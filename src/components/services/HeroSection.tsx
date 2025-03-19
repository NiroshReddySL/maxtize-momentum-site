
import React from 'react';
import PageHero from '@/components/common/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { currentLang } = useLanguage();
  
  // Get translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Our Services",
        title: "Comprehensive Digital Solutions",
        description: "From strategic marketing to complex development challenges, we offer a full spectrum of services designed to solve even the most difficult digital problems.",
        startProject: "Start a Project",
        exploreServices: "Explore Services"
      },
      de: {
        badge: "Unsere Dienstleistungen",
        title: "Umfassende digitale Lösungen",
        description: "Vom strategischen Marketing bis hin zu komplexen Entwicklungsherausforderungen bieten wir ein vollständiges Spektrum an Dienstleistungen, die darauf ausgelegt sind, selbst die schwierigsten digitalen Probleme zu lösen.",
        startProject: "Projekt starten",
        exploreServices: "Dienstleistungen erkunden"
      },
      zh: {
        badge: "我们的服务",
        title: "全面的数字解决方案",
        description: "从战略营销到复杂的开发挑战，我们提供全方位的服务，旨在解决最困难的数字问题。",
        startProject: "开始项目",
        exploreServices: "探索服务"
      },
      'en-GB': {
        badge: "Our Services",
        title: "Comprehensive Digital Solutions",
        description: "From strategic marketing to complex development challenges, we offer a full spectrum of services designed to solve even the most difficult digital problems.",
        startProject: "Start a Project",
        exploreServices: "Explore Services"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <PageHero
      badge={content.badge}
      title={content.title}
      titleHighlight="Digital Solutions"
      description={content.description}
      buttons={{
        primary: {
          text: content.startProject,
          link: "/contact"
        },
        secondary: {
          text: content.exploreServices,
          link: "#services-list"
        }
      }}
    />
  );
};

export default HeroSection;
