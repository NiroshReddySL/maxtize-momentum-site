
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/blog/HeroSection';
import BlogList from '@/components/blog/BlogList';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import CategoriesSection from '@/components/blog/CategoriesSection';
import CTASection from '@/components/blog/CTASection';
import SEO from '@/components/common/SEO';
import { BlogPostType } from '@/types/blog';
import { blogPosts, blogCategories } from '@/data/blog';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>(blogPosts);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter(post => 
          post.category === selectedCategory || 
          post.tags.includes(selectedCategory)
        )
      );
    }
  }, [selectedCategory]);

  // Define hreflang links for international SEO
  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/blog` },
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/blog` },
    { lang: 'zh', href: `${window.location.origin}/zh/blog` },
    { lang: 'kn', href: `${window.location.origin}/kn/blog` },
    { lang: 'te', href: `${window.location.origin}/te/blog` },
    { lang: 'hi', href: `${window.location.origin}/hi/blog` },
    { lang: 'de', href: `${window.location.origin}/de/blog` },
    { lang: 'x-default', href: `${window.location.origin}/blog` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Blog - Maxtize Digital Insights & Resources"
        description="Discover the latest insights, trends, and strategies in digital marketing, web development, and business growth."
        keywords="digital marketing blog, web development insights, SEO tips, business growth strategies"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <main>
        <HeroSection />
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
