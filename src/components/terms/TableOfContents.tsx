
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface TableOfContentsProps {
  sections: { title: string }[];
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const { currentLang } = useLanguage();

  const getTitle = () => {
    const titles = {
      en: "Contents",
      de: "Inhalt",
      zh: "目录",
      hi: "विषय-सूची",
      te: "విషయసూచిక",
      kn: "ವಿಷಯಗಳು",
      'en-GB': "Contents"
    };
    
    return titles[currentLang as keyof typeof titles] || titles.en;
  };
  
  return (
    <ScrollReveal className="lg:col-span-1">
      <div className="sticky top-32">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">{getTitle()}</h3>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors py-1"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TableOfContents;
