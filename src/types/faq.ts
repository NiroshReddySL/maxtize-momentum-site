
export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  id: string;
  label: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  contactText: string;
  contactCta: string;
  categories: FAQCategory[];
  faqs: Record<string, FAQItem[]>;
}
