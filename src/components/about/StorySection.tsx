
import React from 'react';
import { Link } from 'react-router-dom';

const StorySection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-in">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Maxtize team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 right-10 glass-card p-6 max-w-xs animate-float shadow-xl">
                <div className="text-4xl font-bold text-gradient mb-2">5+ Years</div>
                <p className="text-gray-600 dark:text-gray-300">Solving complex digital challenges</p>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-200 rounded-full z-0 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full z-0 animate-pulse-slow"></div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                Our Story
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              The Beginning of <span className="text-gradient">Maxtize</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2019, Maxtize emerged from a simple vision: to create a digital agency that approaches problems differently. We started as a small team with big dreams, focused on delivering solutions that actually work for our clients.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              Our founder recognized a gap in the market for an agency that could tackle the most complex digital challenges with a fresh perspective and cutting-edge technical skills. From those humble beginnings, we've grown into a full-service digital partner trusted by businesses across multiple industries.
            </p>
            
            <div className="pt-4">
              <Link to="/contact" className="btn-primary">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
