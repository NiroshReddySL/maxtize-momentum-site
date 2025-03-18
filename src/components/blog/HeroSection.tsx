
import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery }: HeroSectionProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLang } = useLanguage();

  // Update input value when search query changes (e.g., from URL)
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Extract search from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchFromUrl = searchParams.get('search') || '';
    if (searchFromUrl && searchFromUrl !== searchQuery) {
      setSearchQuery(searchFromUrl);
      setInputValue(searchFromUrl);
    }
  }, [location.search, setSearchQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    
    // Update URL with search query
    const searchParams = new URLSearchParams(window.location.search);
    if (inputValue.trim()) {
      searchParams.set('search', inputValue);
    } else {
      searchParams.delete('search');
    }
    
    const newSearch = searchParams.toString();
    const basePath = location.pathname;
    
    navigate({
      pathname: basePath,
      search: newSearch ? `?${newSearch}` : ''
    }, { replace: true });
  };

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
      // Add other languages as needed
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-300 to-yellow-200 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            delay: 2
          }}
        />
      </div>
      
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
            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-16 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder={content.placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-colors"
              >
                {content.searchButton}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
