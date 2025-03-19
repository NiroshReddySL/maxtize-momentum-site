
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

// Available languages with full information
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', isDefault: true },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧', isDefault: false },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳', isDefault: false },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳', isDefault: false },
  { code: 'te', name: 'Telugu', flag: '🇮🇳', isDefault: false },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', isDefault: false },
  { code: 'de', name: 'German', flag: '🇩🇪', isDefault: false }
];

interface LanguageContextType {
  currentLang: string;
  changeLanguage: (langCode: string) => void;
  getCurrentLangInfo: () => { code: string; name: string; flag: string; isDefault?: boolean };
  translate: (translations: Record<string, string> | undefined) => string;
}

const defaultTranslate = (translations: Record<string, string> | undefined) => {
  if (!translations) return '';
  return translations['en'] || '';
};

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  changeLanguage: () => {},
  getCurrentLangInfo: () => ({ code: 'en', name: 'English', flag: '🇺🇸', isDefault: true }),
  translate: defaultTranslate
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Enhanced debug logging
  useEffect(() => {
    console.log("LanguageProvider initialized with:", { 
      lang, 
      currentLang,
      pathname: location.pathname,
      validLang: lang && languages.some(l => l.code === lang) ? "valid" : "invalid/undefined"
    });
  }, [lang, currentLang, location.pathname]);

  useEffect(() => {
    // Get language preference from URL parameter or localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (lang && languages.some(l => l.code === lang)) {
      console.log("Setting language from URL param:", lang);
      setCurrentLang(lang);
      localStorage.setItem('preferredLanguage', lang);
    } else if (savedLang && languages.some(l => l.code === savedLang)) {
      console.log("Setting language from localStorage:", savedLang);
      setCurrentLang(savedLang);
      
      // If URL doesn't have language prefix but we have a saved preference
      // that isn't the default language, update the URL
      if (savedLang !== 'en' && !lang) {
        const pathParts = location.pathname.split('/').filter(Boolean);
        if (!languages.some(l => l.code === pathParts[0])) {
          try {
            navigate(`/${savedLang}${location.pathname}`, { replace: true });
          } catch (error) {
            console.error("Navigation error:", error);
          }
        }
      }
    } else {
      console.log("Using default language: en");
      // If no valid language is found, default to English
      setCurrentLang('en');
      localStorage.setItem('preferredLanguage', 'en');
    }
  }, [lang, navigate, location.pathname]);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) return;
    
    console.log("Changing language to:", langCode);
    const prevLang = currentLang;
    setCurrentLang(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    
    // Update URL to reflect language change
    const path = location.pathname;
    const search = location.search;
    const isRoot = path === '/';
    const hasLangPrefix = languages.some(l => path.startsWith(`/${l.code}`));
    
    try {
      if (langCode === 'en') {
        // For English (default), remove language prefix
        if (hasLangPrefix) {
          const newPath = path.split('/').slice(2).join('/');
          navigate(newPath ? `/${newPath}${search}` : `/${search}`);
        }
      } else {
        // For other languages, add or replace language prefix
        if (isRoot) {
          navigate(`/${langCode}${search}`);
        } else if (hasLangPrefix) {
          const pathParts = path.split('/');
          pathParts[1] = langCode;
          navigate(pathParts.join('/') + search);
        } else {
          navigate(`/${langCode}${path}${search}`);
        }
      }
      
      // Get language information for toast
      const langInfo = languages.find(l => l.code === langCode) || languages[0];
      const prevLangInfo = languages.find(l => l.code === prevLang) || languages[0];
      
      // Show language change notification with a visual cue about the change
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-semibold">{langInfo.flag}</span>
          <span>
            Language changed to <span className="font-semibold">{langInfo.name}</span> 
            {prevLang && <span className="text-gray-500 text-sm ml-1">(from {prevLangInfo.name})</span>}
          </span>
        </div>,
        {
          position: "top-center",
          duration: 3000,
          className: "language-toast"
        }
      );
      
      console.log("Navigation successful");
    } catch (error) {
      console.error("Error during navigation:", error);
      toast.error("Error changing language. Please try again.");
    }
  };

  const getCurrentLangInfo = () => {
    const langInfo = languages.find(l => l.code === currentLang);
    return langInfo || languages[0];
  };

  // Add a translate function to handle translations
  const translate = (translations: Record<string, string> | undefined) => {
    if (!translations) return '';
    
    // Try to get translation for current language
    if (translations[currentLang]) {
      return translations[currentLang];
    }
    
    // Fall back to English if translation is missing
    return translations['en'] || '';
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLang, 
        changeLanguage, 
        getCurrentLangInfo,
        translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
