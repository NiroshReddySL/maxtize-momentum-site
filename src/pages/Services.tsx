
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/services/HeroSection';
import ServicesList from '@/components/services/ServicesList';
import CTASection from '@/components/services/CTASection';
import { services } from '@/data/services';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services - Maxtize';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesList services={services} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
