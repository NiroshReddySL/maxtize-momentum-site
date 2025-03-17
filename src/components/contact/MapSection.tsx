
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';

const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal
            tag="h2"
            text="Find Us on the Map"
            className="text-3xl font-bold"
          />
          
          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Located in the heart of the city, we're easily accessible from all major transportation hubs.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.2}>
          <div className="h-96 rounded-xl overflow-hidden glass-card p-2">
            {/* This would typically be a Google Maps embed or similar */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Interactive map would be displayed here</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MapSection;
