
import { Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieSettingsLink = () => {
  const { currentLang } = useLanguage();
  
  const label = {
    en: "Cookie Settings",
    de: "Cookie-Einstellungen",
    zh: "Cookie 设置",
    hi: "कुकी सेटिंग्स",
    te: "కుకీ సెట్టింగ్‌లు",
    kn: "ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    'en-GB': "Cookie Settings"
  };
  
  const text = label[currentLang as keyof typeof label] || label.en;
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Call the function we exposed on the window object
    if (typeof window !== 'undefined' && window.showCookieConsentManager) {
      window.showCookieConsentManager();
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
    >
      <Settings size={14} className="mr-1" />
      {text}
    </button>
  );
};

export default CookieSettingsLink;
