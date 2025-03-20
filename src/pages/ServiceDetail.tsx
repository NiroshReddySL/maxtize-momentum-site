
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { servicesContent } from '@/data/servicesContent';
import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceSection from '@/components/services/ServiceSection';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import RelatedServices from '@/components/services/RelatedServices';

const ServiceDetail = () => {
  const { id, lang } = useParams<{ id: string; lang?: string }>();
  
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

  return (
    <ServiceLayout service={service}>
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
      />
    </ServiceLayout>
  );
};

export default ServiceDetail;
