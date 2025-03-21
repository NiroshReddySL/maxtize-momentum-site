
import { motion } from 'framer-motion';
import { Check, X, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingFeature {
  name: string;
  included: boolean;
  tooltip?: string;
}

interface PricingCardProps {
  name: string;
  description: string;
  valueProposition: string;
  valuePoints: string[];
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  index: number;
  icon: React.ElementType;
}

const PricingCard = ({ 
  name, 
  description, 
  valueProposition, 
  valuePoints, 
  features, 
  cta, 
  popular = false,
  index,
  icon: Icon
}: PricingCardProps) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div 
        className={`h-full flex flex-col rounded-2xl overflow-hidden transition-all ${
          popular 
            ? 'bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-900/20 dark:via-gray-800 dark:to-gray-800 shadow-xl border border-orange-200 dark:border-orange-900/50 scale-105 z-10' 
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700'
        }`}
        whileHover={{ translateY: -5 }}
      >
        {popular && (
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-medium text-sm">
            Most Popular
          </div>
        )}
        
        <div className="p-8 flex-grow">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-lg mr-3 ${
              popular 
                ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}>
              <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          
          <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium mb-1">{valueProposition}</p>
            <ul className="mt-4 space-y-2">
              {valuePoints.map((point, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          <h4 className="font-semibold mb-4">Features include:</h4>
          <ul className="space-y-4 mb-8">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                {feature.included ? (
                  <Check size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                ) : (
                  <X size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                )}
                <span className={feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                  {feature.name}
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <button className="inline-flex items-center ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-opacity-50 rounded-full">
                            <HelpCircle size={14} className="inline-block ml-1 mb-0.5 text-gray-400 cursor-help" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center" className="bg-gray-900 text-white dark:bg-gray-700 p-3 rounded-lg shadow-lg max-w-xs text-sm">
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="px-8 pb-8 mt-auto">
          <Link to="/contact">
            <Button 
              className={`w-full py-6 ${
                popular 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                  : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
              size="lg"
            >
              {cta}
            </Button>
          </Link>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default PricingCard;
