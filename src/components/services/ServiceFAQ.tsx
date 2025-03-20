
import { ServiceContentType } from '@/types/serviceContent';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceFAQProps {
  faq: ServiceContentType['faq'];
}

const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
  const { currentLang } = useLanguage();

  if (!faq || faq.length === 0) {
    return null;
  }

  const getTranslatedQuestion = (item: (typeof faq)[0]) => {
    if (item.translations && item.translations[currentLang]?.question) {
      return item.translations[currentLang].question;
    }
    return item.question;
  };

  const getTranslatedAnswer = (item: (typeof faq)[0]) => {
    if (item.translations && item.translations[currentLang]?.answer) {
      return item.translations[currentLang].answer;
    }
    return item.answer;
  };

  const getTitle = () => {
    const titles = {
      en: "Frequently Asked Questions",
      de: "Häufig gestellte Fragen",
      zh: "常见问题",
      hi: "अक्सर पूछे जाने वाले प्रश्न",
      te: "తరచుగా అడిగే ప్రశ్నలు",
      kn: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
      'en-GB': "Frequently Asked Questions"
    };
    
    return titles[currentLang as keyof typeof titles] || titles.en;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl mb-16">
      <div className="container-custom max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">{getTitle()}</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg px-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left py-5 text-lg font-medium">
                  {getTranslatedQuestion(item)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5">
                  {getTranslatedAnswer(item)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceFAQ;
