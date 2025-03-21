
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingHeroProps {
  title: string;
  subtitle: string;
}

const PricingHero = ({ title, subtitle }: PricingHeroProps) => {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <motion.span 
          className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Pricing
        </motion.span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default PricingHero;
