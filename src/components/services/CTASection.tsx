
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900/50 py-20">
      <div className="container-custom">
        <div className="glass-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Solve Your <span className="text-gradient">Digital Challenges?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Get in touch with our expert team. We're eager to help you navigate even the most complex digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/projects" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
