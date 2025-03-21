
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const { currentLang } = useLanguage();

  useEffect(() => {
    // Find all h2 and h3 elements in the blog content
    const contentElement = document.querySelector('.prose');
    if (contentElement) {
      const elements = Array.from(contentElement.querySelectorAll('h2, h3'));
      
      const extractedHeadings = elements.map((el) => {
        // Create IDs for headings that don't have them
        if (!el.id) {
          el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        }
        
        return {
          id: el.id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3
        };
      });
      
      setHeadings(extractedHeadings);
    }
    
    // Set up intersection observer for headings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );
    
    // Observe all heading elements
    const headingElements = document.querySelectorAll('h2, h3');
    headingElements.forEach((el) => observer.observe(el));
    
    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getTitle = () => {
    const titles = {
      en: "Table of Contents",
      de: "Inhaltsverzeichnis",
      zh: "目录",
      hi: "विषय-सूची",
      te: "విషయసూచిక",
      kn: "ವಿಷಯಗಳು",
      'en-GB': "Table of Contents"
    };
    
    return titles[currentLang as keyof typeof titles] || titles.en;
  };
  
  if (headings.length === 0) return null;
  
  return (
    <ScrollReveal>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 sticky top-24">
        <h3 className="font-semibold text-lg mb-4">{getTitle()}</h3>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors py-1 ${
                heading.level === 3 ? 'pl-4 text-sm' : 'font-medium'
              } ${activeId === heading.id ? 'text-orange-500 dark:text-orange-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </ScrollReveal>
  );
};

export default TableOfContents;
