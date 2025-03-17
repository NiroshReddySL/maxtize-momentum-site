
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/common/SEO';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define hreflang links for international SEO
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
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Maxtize - Digital Excellence for Growing Businesses"
        description="We're a young, dynamic team specializing in digital marketing, SEO, and full-stack development. No challenge is too complex for us."
        keywords="digital agency, web development, SEO, digital marketing, app development"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
