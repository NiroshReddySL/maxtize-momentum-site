
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import CookieBanner from './cookie/CookieBanner';
import { 
  updateConsentState, 
  initializeGoogleConsent, 
  savePreferences,
  getStoredPreferences
} from '@/utils/cookieConsent';
import { CookiePreferences } from '@/types/cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { currentLang } = useLanguage();
  
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    functionality: false,
    analytics: false,
    marketing: false
  });
  
  useEffect(() => {
    // Check if user has already consented
    const storedPreferences = getStoredPreferences();
    
    if (storedPreferences) {
      // Apply saved preferences
      setCookiePreferences(storedPreferences);
      updateConsentState(storedPreferences);
    } else {
      // Initialize Google Consent Mode with denied by default
      initializeGoogleConsent();
      
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      functionality: true,
      analytics: true,
      marketing: true
    };
    
    setCookiePreferences(newPreferences);
    savePreferences(newPreferences);
    setIsVisible(false);
  };
  
  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      functionality: false,
      analytics: false,
      marketing: false
    };
    
    setCookiePreferences(newPreferences);
    savePreferences(newPreferences);
    setIsVisible(false);
  };
  
  const handleSavePreferences = () => {
    savePreferences(cookiePreferences);
    setIsVisible(false);
  };

  // Add a function to show the consent dialog when called from footer
  const showConsentManager = () => {
    setIsVisible(true);
    setExpanded(true);
  };

  // Expose the function to the window object
  useEffect(() => {
    window.showCookieConsentManager = showConsentManager;
    
    return () => {
      delete window.showCookieConsentManager;
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <CookieBanner
          preferences={cookiePreferences}
          onSetPreferences={setCookiePreferences}
          onAcceptAll={handleAcceptAll}
          onAcceptNecessary={handleAcceptNecessary}
          onClose={() => setIsVisible(false)}
          expanded={expanded}
          onToggleExpanded={() => setExpanded(!expanded)}
        />
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
