
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { servicesContent } from '@/data/servicesContent';
import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceSection from '@/components/services/ServiceSection';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import RelatedServices from '@/components/services/RelatedServices';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ContactForm from '@/components/contact/ContactForm';
import { useToast } from '@/hooks/use-toast';

const ServiceDetail = () => {
  const { id, lang } = useParams<{ id: string; lang?: string }>();
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();
  
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
          <ServiceSection key={section.id} section={section} />
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
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
          <DialogTitle className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            Request {service.title} Information
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
              purpose={service.title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetail;
