
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
            Contact <span className="text-gradient">Maxtize</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Have a complex digital challenge? We're ready to help. Reach out to discuss how we can work together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
