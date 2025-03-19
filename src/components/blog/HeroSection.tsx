
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchForm from './hero/SearchForm';
import HeroBackground from './hero/HeroBackground';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery }: HeroSectionProps) => {
  const location = useLocation();
  const { currentLang } = useLanguage();

  // Extract search from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchFromUrl = searchParams.get('search') || '';
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [location.search, setSearchQuery]);

  // Get translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Our Blog",
        title: "Insights for Digital Growth",
        description: "Stay updated with the latest trends, strategies, and insights in digital marketing, web development, and business growth.",
        placeholder: "Search articles, topics, or keywords...",
        searchButton: "Search"
      },
      de: {
        badge: "Unser Blog",
        title: "Einblicke für digitales Wachstum",
        description: "Bleiben Sie auf dem Laufenden mit den neuesten Trends, Strategien und Einblicken in digitales Marketing, Webentwicklung und Unternehmenswachstum.",
        placeholder: "Artikel, Themen oder Schlüsselwörter suchen...",
        searchButton: "Suchen"
      },
      zh: {
        badge: "我们的博客",
        title: "数字增长见解",
        description: "及时了解数字营销、网站开发和业务增长方面的最新趋势、策略和见解。",
        placeholder: "搜索文章、主题或关键词...",
        searchButton: "搜索"
      },
      hi: {
        badge: "हमारा ब्लॉग",
        title: "डिजिटल विकास के लिए अंतर्दृष्टि",
        description: "डिजिटल मार्केटिंग, वेब विकास और व्यापार विकास में नवीनतम रुझानों, रणनीतियों और अंतर्दृष्टि के साथ अपडेट रहें।",
        placeholder: "लेख, विषय या कीवर्ड खोजें...",
        searchButton: "खोज"
      },
      te: {
        badge: "మా బ్లాగు",
        title: "డిజిటల్ వృద్ధి కోసం అంతర్దృష్టులు",
        description: "డిజిటల్ మార్కెటింగ్, వెబ్ డెవలప్మెంట్ మరియు వ్యాపార వృద్ధిలో తాజా ట్రెండ్స్, వ్యూహాలు మరియు అంతర్దృష్టులతో అప్డేట్గా ఉండండి.",
        placeholder: "వ్యాసాలు, అంశాలు లేదా కీవర్డ్లను శోధించండి...",
        searchButton: "శోధన"
      },
      kn: {
        badge: "ನಮ್ಮ ಬ್ಲಾಗ್",
        title: "ಡಿಜಿಟಲ್ ಬೆಳವಣಿಗೆಗಾಗಿ ಒಳನೋಟಗಳು",
        description: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, ವೆಬ್ ಡೆವಲಪ್ಮೆಂಟ್ ಮತ್ತು ವ್ಯಾಪಾರ ಬೆಳವಣಿಗೆಯಲ್ಲಿನ ಇತ್ತೀಚಿನ ಪ್ರವೃತ್ತಿಗಳು, ತಂತ್ರಗಳು ಮತ್ತು ಒಳನೋಟಗಳೊಂದಿಗೆ ನವೀಕರಿಸಿದ ಮಾಹಿತಿಗಳನ್ನು ಪಡೆಯಿರಿ.",
        placeholder: "ಲೇಖನಗಳು, ವಿಷಯಗಳು ಅಥವಾ ಕೀವರ್ಡ್��ಗಳನ್ನು ಹುಡುಕಿ...",
        searchButton: "ಹುಡುಕಿ"
      },
      'en-GB': {
        badge: "Our Blog",
        title: "Insights for Digital Growth",
        description: "Stay updated with the latest trends, strategies, and insights in digital marketing, web development, and business growth.",
        placeholder: "Search articles, topics, or keywords...",
        searchButton: "Search"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50 relative overflow-hidden">
      <HeroBackground />
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <motion.span 
              className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800/30"
              whileHover={{ scale: 1.05 }}
            >
              {content.badge}
            </motion.span>
            <TextReveal
              tag="h1"
              text={content.title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              {content.description}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <SearchForm 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              placeholder={content.placeholder}
              searchButtonText={content.searchButton}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
