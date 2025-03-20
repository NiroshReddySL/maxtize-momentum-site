
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ContactCTAProps {
  contactText: string;
  contactCta: string;
  delay?: number;
}

const ContactCTA = ({ contactText, contactCta, delay = 0.4 }: ContactCTAProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 text-center mb-10">
        <h3 className="text-2xl font-bold mb-4">{contactText}</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {contactCta}
            <ArrowRight size={16} className="ml-2" />
          </Link>
          
          <a 
            href="mailto:info@maxtize.com" 
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            <Mail size={18} /> info@maxtize.com
          </a>
          
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            <Phone size={18} /> +1 (234) 567-890
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ContactCTA;
