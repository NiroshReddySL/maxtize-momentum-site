
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface PricingCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

const PricingCTA = ({ title, description, buttonText }: PricingCTAProps) => {
  return (
    <ScrollReveal delay={0.4}>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                {buttonText}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <Users size={160} className="text-orange-100 dark:text-orange-900/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users size={120} className="text-orange-200 dark:text-orange-800/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Users size={80} className="text-orange-300 dark:text-orange-700/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Users size={40} className="text-orange-500 dark:text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PricingCTA;
