
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface FAQ {
  question: string;
  answer: string;
}

interface PricingFAQsProps {
  title: string;
  faqs: FAQ[];
}

const PricingFAQs = ({ title, faqs }: PricingFAQsProps) => {
  return (
    <ScrollReveal delay={0.5}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PricingFAQs;
