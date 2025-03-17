
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery }: HeroSectionProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const navigate = useNavigate();

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
    navigate({
      pathname: window.location.pathname,
      search: newSearch ? `?${newSearch}` : ''
    });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
              Our Blog
            </span>
            <TextReveal
              tag="h1"
              text="Insights for Digital Growth"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Stay updated with the latest trends, strategies, and insights in digital marketing, web development, and business growth.
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
                placeholder="Search articles, topics, or keywords..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Search
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
