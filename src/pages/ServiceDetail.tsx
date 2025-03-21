
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { servicesContent } from '@/data/servicesContent';
import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceSection from '@/components/services/ServiceSection';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import RelatedServices from '@/components/services/RelatedServices';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ContactForm from '@/components/contact/ContactForm';
import { X } from 'lucide-react';

const ServiceDetail = () => {
  const { id, lang } = useParams<{ id: string; lang?: string }>();
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Find the requested service
  const service = services.find(s => s.id === id);
  const serviceContent = id ? servicesContent[id] : undefined;

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0);
      document.title = `${service.title} - Maxtize`;
    }
  }, [service, id]);

  // If service not found, redirect to services page
  if (!service || !serviceContent) {
    return <Navigate to="/services" replace />;
  }

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <ServiceLayout service={service} openContactForm={handleOpenContactForm}>
        {/* Service content sections */}
        {serviceContent.sections.map((section) => (
          <ServiceSection 
            key={section.id} 
            section={{
              ...section,
              serviceId: service.id // Pass serviceId to generate proper placeholders
            }} 
          />
        ))}
        
        {/* Testimonials */}
        {serviceContent.testimonials && serviceContent.testimonials.length > 0 && (
          <ServiceTestimonials testimonials={serviceContent.testimonials} />
        )}
        
        {/* FAQ section */}
        {serviceContent.faq && serviceContent.faq.length > 0 && (
          <ServiceFAQ faq={serviceContent.faq} />
        )}
        
        {/* Related services */}
        <RelatedServices 
          services={services} 
          currentServiceId={service.id} 
          relatedIds={serviceContent.relatedServices} 
          openContactForm={handleOpenContactForm}
        />
      </ServiceLayout>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md sm:max-w-[500px] p-0 overflow-hidden max-h-[90vh] sm:max-h-[auto] overflow-y-auto rounded-lg">
          <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <h2 className="text-xl font-semibold mb-1">Request {service.title}</h2>
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
              purpose={service.title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetail;
