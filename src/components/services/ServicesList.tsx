
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceType } from '@/types/service';

interface ServicesListProps {
  services: ServiceType[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  return (
    <section id="services-list" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
