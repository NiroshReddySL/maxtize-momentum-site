
import { FAQItem } from '@/types/faq';

interface FAQSchemaProps {
  faqs: Record<string, FAQItem[]>;
}

const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const generateFAQSchema = () => {
    const allFaqs: FAQItem[] = [];
    Object.values(faqs).forEach((categoryFaqs: any) => {
      allFaqs.push(...categoryFaqs);
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    return JSON.stringify(schema);
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateFAQSchema() }}
    />
  );
};

export default FAQSchema;
