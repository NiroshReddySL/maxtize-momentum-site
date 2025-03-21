import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import BlogSection from '@/components/home/BlogSection';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/common/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { Toaster } from 'sonner';
import { useAnimation } from '@/contexts/AnimationContext';

const Index = () => {
  const { lang } = useParams<{ lang?: string }>();
  const { currentLang } = useLanguage();
  const { setTheme, theme, systemTheme } = useTheme();
  const { shouldAnimate } = useAnimation();
  
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });
  
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.95],
    { clamp: true } // Prevent overshooting
  );
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (!theme || theme === 'system') {
      setTheme(prefersDark ? 'dark' : 'light');
    }
    
    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);
    
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, [theme, setTheme]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Index page mounted with language:", lang || currentLang);
    document.title = "Maxtize - Digital Excellence for Growing Businesses";
    
    const isLowEndDevice = () => {
      return !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    };
    
    if (isLowEndDevice()) {
      document.body.classList.add('reduced-motion');
    }
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.willChange = 'opacity';
      return () => {
        mainElement.style.willChange = 'auto';
      };
    }
  }, [lang, currentLang]);

  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/` },
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/` },
    { lang: 'zh', href: `${window.location.origin}/zh/` },
    { lang: 'kn', href: `${window.location.origin}/kn/` },
    { lang: 'te', href: `${window.location.origin}/te/` },
    { lang: 'hi', href: `${window.location.origin}/hi/` },
    { lang: 'de', href: `${window.location.origin}/de/` },
    { lang: 'x-default', href: `${window.location.origin}/` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950" ref={scrollRef}>
      <SEO 
        title="Maxtize - Digital Excellence for Growing Businesses"
        description="We're a young, dynamic team specializing in digital marketing, SEO, and full-stack development. No challenge is too complex for us."
        keywords="digital agency, web development, SEO, digital marketing, app development"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <Toaster position="top-right" />
      
      <motion.main 
        style={{ opacity: shouldAnimate ? backgroundOpacity : 1 }}
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-200/30 to-pink-300/30 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full filter blur-[100px] transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full filter blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="relative z-10">
          <Hero />
          <Services />
          <About />
          <Projects />
          <BlogSection />
          <Contact />
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Index;
