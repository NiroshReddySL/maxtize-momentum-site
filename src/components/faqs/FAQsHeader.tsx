
import HeroSection from './HeroSection';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQsHeaderProps {
  title: string;
  subtitle: string;
}

const FAQsHeader = ({ title, subtitle }: FAQsHeaderProps) => {
  return (
    <>
      <HeroSection title={title} subtitle={subtitle} />
    </>
  );
};

export default FAQsHeader;
