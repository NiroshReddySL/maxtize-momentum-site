
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <motion.span 
          className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-4"
          whileHover={{ scale: 1.05 }}
        >
          FAQ
        </motion.span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-300">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default HeroSection;
