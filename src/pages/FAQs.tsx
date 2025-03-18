
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const { currentLang } = useLanguage();

  const faqTranslations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services",
      faqs: [
        {
          q: "What services do you offer?",
          a: "We offer a comprehensive range of digital services including web development, digital marketing, SEO optimization, and custom software solutions."
        },
        // Add more FAQs
      ]
    },
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen",
      faqs: [
        {
          q: "Welche Dienstleistungen bieten Sie an?",
          a: "Wir bieten eine umfassende Palette digitaler Dienstleistungen an, einschließlich Webentwicklung, digitales Marketing, SEO-Optimierung und maßgeschneiderte Softwarelösungen."
        }
      ]
    },
    // Add other languages
  };

  const content = faqTranslations[currentLang as keyof typeof faqTranslations] || faqTranslations.en;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
            <p className="text-gray-600 dark:text-gray-300">{content.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
