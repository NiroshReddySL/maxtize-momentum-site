
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal className="order-2 lg:order-1" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
          
          {/* Contact Info */}
          <ScrollReveal className="order-1 lg:order-2" direction="right" delay={0.1}>
            <ContactInfo />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
