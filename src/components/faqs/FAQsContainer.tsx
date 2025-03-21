
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CategorySelector from './CategorySelector';
import FAQCategory from './FAQCategory';
import ContactCTA from './ContactCTA';

interface FAQsContainerProps {
  categories: Array<{ id: string; label: string }>;
  faqs: Record<string, Array<{ q: string; a: string }>>;
  contactText: string;
  contactCta: string;
}

const FAQsContainer = ({ categories, faqs, contactText, contactCta }: FAQsContainerProps) => {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20">
        <CategorySelector 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <FAQCategory 
          title={categories.find(c => c.id === activeCategory)?.label || ''}
          faqs={faqs[activeCategory] || []}
        />
      </div>

      <ContactCTA 
        contactText={contactText}
        contactCta={contactCta}
      />
    </>
  );
};

export default FAQsContainer;
