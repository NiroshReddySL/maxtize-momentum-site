
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Maxtize - Digital Excellence';
  }, []);

  return (
    <div className="min-h-screen">
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
