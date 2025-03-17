
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/blog/HeroSection';
import BlogList from '@/components/blog/BlogList';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import CategoriesSection from '@/components/blog/CategoriesSection';
import CTASection from '@/components/blog/CTASection';
import SEO from '@/components/common/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { BlogPostType } from '@/types/blog';
import { blogPosts, blogCategories } from '@/data/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>(blogPosts);
  const { currentLang } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for search or category params in URL
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);

  useEffect(() => {
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
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Blog - Maxtize Digital Insights & Resources"
        description="Discover the latest insights, trends, and strategies in digital marketing, web development, and business growth."
        keywords="digital marketing blog, web development insights, SEO tips, business growth strategies"
        hrefLangs={hrefLangs}
        locale={currentLang === 'en-GB' ? 'en_GB' : currentLang === 'en' ? 'en_US' : currentLang}
      />
      <Navbar />
      <main>
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FeaturedPosts posts={blogPosts.filter(post => post.featured).slice(0, 3)} />
        <CategoriesSection 
          categories={blogCategories} 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <BlogList posts={filteredPosts} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
