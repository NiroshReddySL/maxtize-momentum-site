
import { useEffect, useState, useRef } from 'react';
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
import { X } from 'lucide-react';
import ServiceVisualizer from '@/components/services/ServiceVisualizer';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ServiceDetail = () => {
  const { id, lang } = useParams<{ id: string; lang?: string }>();
  const [showContactForm, setShowContactForm] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    toast.error("Service not found");
    return <Navigate to="/services" replace />;
  }

  const handleOpenContactForm = () => {
    setShowContactForm(true);
  };

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceLayout service={service} openContactForm={handleOpenContactForm}>
        {/* Interactive 3D Visualizer with scroll prompt */}
        <div className="relative mb-12 md:mb-24">
          <ServiceVisualizer serviceId={service.id} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 dark:text-gray-300 mb-2">Scroll to explore</span>
            <button 
              onClick={scrollToContent}
              aria-label="Scroll to content"
              className="w-8 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center"
            >
              <motion.div 
                className="w-1.5 h-3 bg-orange-500 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </button>
          </motion.div>
        </div>
        
        <div ref={contentRef}>
          {/* Service intro section with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 shadow-md"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                  {service.title} Service Overview
                </span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800/50 shadow-sm"
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{feature}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Service content sections with enhanced visuals */}
          <div className="space-y-32">
            {serviceContent.sections.map((section, index) => (
              <ServiceSection 
                key={section.id} 
                section={{
                  ...section,
                  serviceId: service.id
                }}
                index={index}
              />
            ))}
          </div>
          
          {/* Enhanced testimonials section */}
          {serviceContent.testimonials && serviceContent.testimonials.length > 0 && (
            <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30 my-24 rounded-2xl">
              <ServiceTestimonials testimonials={serviceContent.testimonials} />
            </div>
          )}
          
          {/* FAQ section with improved styling */}
          {serviceContent.faq && serviceContent.faq.length > 0 && (
            <div className="mb-24 p-8 rounded-2xl bg-white dark:bg-gray-800/20 shadow-lg border border-gray-100 dark:border-gray-700/20">
              <ServiceFAQ faq={serviceContent.faq} />
            </div>
          )}
          
          {/* CTA section */}
          <div className="mb-24 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to get started with {service.title}?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take the first step towards transforming your digital presence with our professional {service.title.toLowerCase()} services.
              </p>
              <button 
                onClick={handleOpenContactForm}
                className="px-8 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 focus:ring-4 focus:ring-white/50 shadow-lg"
              >
                Request a Free Consultation
              </button>
            </motion.div>
          </div>
          
          {/* Related services with updated styling */}
          <div className="mb-12">
            <RelatedServices 
              services={services} 
              currentServiceId={service.id} 
              relatedIds={serviceContent.relatedServices} 
              openContactForm={handleOpenContactForm}
            />
          </div>
        </div>
      </ServiceLayout>

      {/* Contact Form Dialog with accessibility improvements */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md sm:max-w-[500px] p-0 overflow-hidden max-h-[90vh] overflow-y-auto rounded-lg sm:max-h-[85vh]">
          <DialogTitle className="sr-only">Request {service.title} service</DialogTitle>
          <DialogDescription className="sr-only">Fill out the form below and our team will get back to you shortly.</DialogDescription>
          
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
              onSuccess={() => {
                setShowContactForm(false);
                window.location.href = `/thank-you?service=${encodeURIComponent(service.id)}`;
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetail;
