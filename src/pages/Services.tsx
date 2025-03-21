
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/services/HeroSection';
import ServicesList from '@/components/services/ServicesList';
import CTASection from '@/components/services/CTASection';
import { services } from '@/data/services';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ContactForm from '@/components/contact/ContactForm';
import { X } from 'lucide-react';

const Services = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formPurpose, setFormPurpose] = useState('');
  const location = useLocation();

  const handleOpenContactForm = (purpose: string) => {
    setFormPurpose(purpose);
    setShowContactForm(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services - Maxtize';
    
    // Check if there's a hash in the URL to scroll to a specific service
    const hash = location.hash.substring(1);
    if (hash) {
      // Wait for components to render
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection openContactForm={handleOpenContactForm} />
        <ServicesList services={services} openContactForm={handleOpenContactForm} />
        <CTASection openContactForm={handleOpenContactForm} />
      </main>
      <Footer />

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md sm:max-w-[500px] p-0 overflow-hidden max-h-[90vh] sm:max-h-[auto] overflow-y-auto rounded-lg">
          <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <h2 className="text-xl font-semibold mb-1">Request {formPurpose || 'Service'}</h2>
            <p className="text-sm text-white/80">
              Fill out the form below and our team will get back to you shortly.
            </p>
            <button 
              onClick={() => setShowContactForm(false)} 
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6">
            <ContactForm 
              purpose={formPurpose}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
