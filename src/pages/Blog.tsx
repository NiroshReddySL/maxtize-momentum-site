
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/blog/HeroSection';
import BlogList from '@/components/blog/BlogList';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import CategoriesSection from '@/components/blog/CategoriesSection';
import CTASection from '@/components/blog/CTASection';
import ScrollProgress from '@/components/blog/ScrollProgress';
import SEO from '@/components/common/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPostType } from '@/types/blog';
import { blogPosts, blogCategories } from '@/data/blog';
import { motion } from 'framer-motion';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const searchParam = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const { currentLang } = useLanguage();
  const location = useLocation();
  
  // Use useMemo to compute filtered posts only when dependencies change
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];
    
    // Filter by category if not 'All'
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => 
        post.category === selectedCategory || 
        post.tags.includes(selectedCategory)
      );
    }
    
    // Filter by search query if present
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery, blogPosts]);
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL params
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  // Handle search query changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - Maxtize Digital Insights & Resources";
    
    // Update state from URL params on location change
    const newCategoryParam = searchParams.get('category') || 'All';
    const newSearchParam = searchParams.get('search') || '';
    
    if (newCategoryParam !== selectedCategory) {
      setSelectedCategory(newCategoryParam);
    }
    
    if (newSearchParam !== searchQuery) {
      setSearchQuery(newSearchParam);
    }
    
  }, [location.search]);

  // Define hreflang links for international SEO with current language
  const origin = window.location.origin;
  const hrefLangs = [
    { lang: 'en', href: `${origin}/blog` },
    { lang: 'en-GB', href: `${origin}/en-GB/blog` },
    { lang: 'zh', href: `${origin}/zh/blog` },
    { lang: 'kn', href: `${origin}/kn/blog` },
    { lang: 'te', href: `${origin}/te/blog` },
    { lang: 'hi', href: `${origin}/hi/blog` },
    { lang: 'de', href: `${origin}/de/blog` },
    { lang: 'x-default', href: `${origin}/blog` }
  ];

  // Define translations for different languages
  const getContent = () => {
    const content = {
      en: {
        title: "Blog - Maxtize Digital Insights & Resources",
        description: "Discover the latest insights, trends, and strategies in digital marketing, web development, and business growth."
      },
      de: {
        title: "Blog - Maxtize Digitale Einblicke & Ressourcen",
        description: "Entdecken Sie die neuesten Einblicke, Trends und Strategien im digitalen Marketing, in der Webentwicklung und im Unternehmenswachstum."
      },
      zh: {
        title: "博客 - Maxtize 数字洞察与资源",
        description: "探索数字营销、网站开发和业务增长方面的最新洞察、趋势和策略。"
      },
      hi: {
        title: "ब्लॉग - Maxtize डिजिटल अंतर्दृष्टि और संसाधन",
        description: "डिजिटल मार्केटिंग, वेब विकास और व्यापार विकास में नवीनतम अंतर्दृष्टि, रुझान और रणनीतियों की खोज करें।"
      },
      te: {
        title: "బ్లాగు - Maxtize డిజిటల్ అంతర్దృష్టులు మరియు వనరులు",
        description: "డిజిటల్ మార్కెటింగ్, వెబ్ డెవలప్మెంట్ మరియు వ్యాపార వృద్ధిలో తాజా అంతర్దృష్టులు, ట్రెండ్లు మరియు వ్యూహాలను కనుగొనండి."
      },
      kn: {
        title: "ಬ್ಲಾಗ್ - Maxtize ಡಿಜಿಟಲ್ ಒಳನೋಟಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು",
        description: "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, ವೆಬ್ ಡೆವಲಪ್ಮೆಂಟ್ ಮತ್ತು ವ್ಯಾಪಾರ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಇತ್ತೀಚಿನ ಒಳನೋಟಗಳು, ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ತಂತ್ರಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ."
      },
      'en-GB': {
        title: "Blog - Maxtize Digital Insights & Resources",
        description: "Discover the latest insights, trends, and strategies in digital marketing, web development, and business growth."
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title={content.title}
        description={content.description}
        keywords="digital marketing blog, web development insights, SEO tips, business growth strategies"
        hrefLangs={hrefLangs}
        locale={currentLang === 'en-GB' ? 'en_GB' : currentLang === 'en' ? 'en_US' : currentLang}
      />
      <Navbar />
      <ScrollProgress />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
        />
        
        {!searchQuery && (
          <FeaturedPosts 
            posts={blogPosts.filter(post => post.featured).slice(0, 3)} 
          />
        )}
        
        <CategoriesSection 
          categories={blogCategories} 
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
        
        <BlogList posts={filteredPosts} />
        
        <CTASection />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Blog;
