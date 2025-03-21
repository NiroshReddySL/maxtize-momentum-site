
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/services/HeroSection';
import ServicesList from '@/components/services/ServicesList';
import CTASection from '@/components/services/CTASection';
import { services } from '@/data/services';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ContactForm from '@/components/contact/ContactForm';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formPurpose, setFormPurpose] = useState('');
  const { toast } = useToast();

  const handleOpenContactForm = (purpose: string) => {
    setFormPurpose(purpose);
    setShowContactForm(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services - Maxtize';
  }, []);

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
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
          <DialogTitle className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            Request {formPurpose || 'Service'} Information
          </DialogTitle>
          <DialogDescription className="p-6 pt-2 pb-0 text-gray-700 dark:text-gray-300">
            Fill out the form below and our team will get back to you shortly.
          </DialogDescription>
          <div className="p-6 pt-2">
            <ContactForm 
              onSuccess={() => {
                setShowContactForm(false);
                toast({
                  title: "Form submitted successfully",
                  description: "We'll get back to you as soon as possible.",
                  variant: "default",
                });
              }}
              purpose={formPurpose}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
