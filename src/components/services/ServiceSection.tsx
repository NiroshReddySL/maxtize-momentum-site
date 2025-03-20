
import { ServiceContentSection } from '@/types/serviceContent';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import LazyImage from '@/components/common/LazyImage';

interface ServiceSectionProps {
  section: ServiceContentSection;
}

const ServiceSection = ({ section }: ServiceSectionProps) => {
  const { currentLang } = useLanguage();

  // Get translated content
  const getTranslatedTitle = () => {
    if (section.translations && section.translations[currentLang]?.title) {
      return section.translations[currentLang].title;
    }
    return section.title;
  };

  const getTranslatedContent = () => {
    if (section.translations && section.translations[currentLang]?.content) {
      return section.translations[currentLang].content;
    }
    return section.content;
  };

  const getTranslatedImageAlt = () => {
    if (section.translations && section.translations[currentLang]?.imageAlt) {
      return section.translations[currentLang].imageAlt;
    }
    return section.imageAlt || '';
  };

  // Default background style if none provided
  const sectionBg = section.backgroundColor || 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950';

  // If no image is provided, use full width for content
  if (!section.image) {
    return (
      <section id={section.id} className={`py-16 ${sectionBg} rounded-2xl mb-16`}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">{getTranslatedTitle()}</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {getTranslatedContent()}
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // With image - determine layout based on flipped property
  return (
    <section id={section.id} className={`py-16 ${sectionBg} rounded-2xl mb-16`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.flipped ? 'lg:flex-row-reverse' : ''}`}>
          <ScrollReveal direction={section.flipped ? 'right' : 'left'}>
            <div>
              <h2 className="text-3xl font-bold mb-6">{getTranslatedTitle()}</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {getTranslatedContent()}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction={section.flipped ? 'left' : 'right'} delay={0.2}>
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <LazyImage
                src={section.image}
                alt={getTranslatedImageAlt()}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
