
import React from 'react';
import { Check } from 'lucide-react';
import { CompanyValue } from '@/types/company';

interface ValuesSectionProps {
  values: CompanyValue[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            What Drives <span className="text-gradient">Our Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            These core principles guide everything we do and every decision we make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8 hover-card-effect">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
