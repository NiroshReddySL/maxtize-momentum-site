
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/contact/HeroSection';
import ContactSection from '@/components/contact/ContactSection';
import MapSection from '@/components/contact/MapSection';
import SEO from '@/components/common/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define hreflang links for international SEO
  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/contact` },
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/contact` },
    { lang: 'zh', href: `${window.location.origin}/zh/contact` },
    { lang: 'kn', href: `${window.location.origin}/kn/contact` },
    { lang: 'te', href: `${window.location.origin}/te/contact` },
    { lang: 'hi', href: `${window.location.origin}/hi/contact` },
    { lang: 'de', href: `${window.location.origin}/de/contact` },
    { lang: 'x-default', href: `${window.location.origin}/contact` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Contact Maxtize - Get in Touch With Our Team"
        description="Have a complex digital challenge? We're ready to help. Reach out to discuss how we can work together."
        keywords="contact, digital agency, get in touch, project inquiry"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <main>
        <HeroSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
