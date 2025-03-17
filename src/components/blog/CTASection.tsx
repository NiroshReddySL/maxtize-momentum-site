
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="glass-card p-10 md:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our digital marketing and development expertise can help you achieve your business goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
