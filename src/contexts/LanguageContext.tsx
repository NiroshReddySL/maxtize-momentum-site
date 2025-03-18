
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Available languages
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'de', name: 'German', flag: '🇩🇪' }
];

interface LanguageContextType {
  currentLang: string;
  changeLanguage: (langCode: string) => void;
  getCurrentLangInfo: () => { code: string; name: string; flag: string };
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  changeLanguage: () => {},
  getCurrentLangInfo: () => ({ code: 'en', name: 'English', flag: '🇺🇸' }),
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();

  // Debug output for troubleshooting
  useEffect(() => {
    console.log("LanguageProvider initialized with:", { lang, currentLang });
  }, [lang, currentLang]);

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
    }
  }, [lang]);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) return;
    
    console.log("Changing language to:", langCode);
    setCurrentLang(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    
    // Update URL to reflect language change
    const path = window.location.pathname;
    const isRoot = path === '/';
    const hasLangPrefix = languages.some(l => path.startsWith(`/${l.code}`));
    
    if (langCode === 'en') {
      // For English (default), remove language prefix
      if (hasLangPrefix) {
        const newPath = path.split('/').slice(2).join('/');
        navigate(newPath ? `/${newPath}` : '/');
      }
    } else {
      // For other languages, add or replace language prefix
      if (isRoot) {
        navigate(`/${langCode}`);
      } else if (hasLangPrefix) {
        const pathParts = path.split('/');
        pathParts[1] = langCode;
        navigate(pathParts.join('/'));
      } else {
        navigate(`/${langCode}${path}`);
      }
    }
  };

  const getCurrentLangInfo = () => {
    const langInfo = languages.find(l => l.code === currentLang);
    return langInfo || languages[0];
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLang, 
        changeLanguage, 
        getCurrentLangInfo 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
