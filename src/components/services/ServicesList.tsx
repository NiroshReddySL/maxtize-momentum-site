
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceType } from '@/types/service';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ServicesListProps {
  services: ServiceType[];
  openContactForm: (purpose: string) => void;
}

const ServicesList = ({ services, openContactForm }: ServicesListProps) => {
  return (
    <section id="services-list" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Our Comprehensive Services
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <ServiceCard 
                service={service} 
                openContactForm={() => openContactForm(service.title)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
