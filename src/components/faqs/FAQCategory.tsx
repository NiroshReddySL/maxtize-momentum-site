
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from '@/components/animations/ScrollReveal';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategoryProps {
  title: string;
  faqs: FAQItem[];
  delay?: number;
}

const FAQCategory = ({ title, faqs, delay = 0.2 }: FAQCategoryProps) => {
  return (
    <ScrollReveal className="lg:col-span-3" delay={delay}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs?.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-100 dark:border-gray-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left py-5 text-lg font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>
  );
};

export default FAQCategory;
