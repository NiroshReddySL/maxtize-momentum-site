
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { languages, useLanguage } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  isMobile?: boolean;
}

const LanguageSelector = ({ isMobile = false }: LanguageSelectorProps) => {
  const { currentLang, changeLanguage, getCurrentLangInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center space-x-1 text-sm font-medium">
          <Globe size={isMobile ? 20 : 18} />
          {!isMobile && <span>{getCurrentLangInfo().flag}</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="grid gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`flex items-center px-3 py-2 rounded-md text-sm ${
                currentLang === lang.code
                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <span className="mr-2">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
