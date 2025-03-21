
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Feel free to reach out to us through any of the channels below. We're always ready to discuss your project and find the best solutions for your needs.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300">{companyInfo.contact.email.general}</p>
            <p className="text-gray-600 dark:text-gray-300">{companyInfo.contact.email.support}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-300">{companyInfo.contact.phone.primary}</p>
            <p className="text-gray-600 dark:text-gray-300">{companyInfo.contact.phone.secondary}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {companyInfo.location.address}<br />
              {companyInfo.location.city}, {companyInfo.location.state} {companyInfo.location.zipCode}<br />
              {companyInfo.location.country}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {companyInfo.hours.weekdays}<br />
              {companyInfo.hours.saturday}<br />
              {companyInfo.hours.sunday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
