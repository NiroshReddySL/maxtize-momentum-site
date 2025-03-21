
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Info, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    gtag: any;
  }
}

// Google Consent Mode v2 implementation
const updateConsentState = (preferences: Record<string, boolean>) => {
  // Default denied state
  let consentConfig = {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted' // Always needed for security
  };
  
  // Update based on user preferences
  if (preferences.analytics) {
    consentConfig.analytics_storage = 'granted';
  }
  
  if (preferences.marketing) {
    consentConfig.ad_storage = 'granted';
    consentConfig.personalization_storage = 'granted';
  }
  
  if (preferences.necessary || preferences.functionality) {
    consentConfig.functionality_storage = 'granted';
  }
  
  // Update Google's consent state
  if (window.gtag) {
    window.gtag('consent', 'update', consentConfig);
  }
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { currentLang } = useLanguage();
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (hasConsented) {
      // Apply saved preferences
      try {
        const savedPreferences = JSON.parse(hasConsented);
        setCookiePreferences(savedPreferences);
        updateConsentState(savedPreferences);
      } catch (e) {
        console.error('Error parsing saved consent:', e);
      }
    } else {
      // Initialize Google Consent Mode with denied by default
      if (window.gtag) {
        window.gtag('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted'
        });
      }
      
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const translations = {
    en: {
      title: "Cookie Consent",
      description: "We use cookies to enhance your experience and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
      detailsButton: "Cookie Settings",
      acceptAll: "Accept All",
      acceptNecessary: "Accept Necessary",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Use",
      categories: {
        necessary: {
          title: "Necessary",
          description: "Necessary cookies are essential for the website to function properly.",
          required: true
        },
        functionality: {
          title: "Functionality",
          description: "Functionality cookies enable the website to provide enhanced functionality and personalization."
        },
        analytics: {
          title: "Analytics",
          description: "Analytics cookies help us understand how visitors interact with our website."
        },
        marketing: {
          title: "Marketing",
          description: "Marketing cookies are used to track visitors across websites to display relevant advertisements."
        }
      },
      details: "You can choose which cookies you want to accept. Your choices will be saved for one year.",
      save: "Save Preferences"
    },
    de: {
      title: "Cookie-Zustimmung",
      description: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unseren Verkehr zu analysieren. Durch Klicken auf \"Alle akzeptieren\" stimmen Sie der Verwendung von Cookies zu.",
      detailsButton: "Cookie-Einstellungen",
      acceptAll: "Alle akzeptieren",
      acceptNecessary: "Nur notwendige akzeptieren",
      privacyLink: "Datenschutzrichtlinie",
      termsLink: "Nutzungsbedingungen",
      categories: {
        necessary: {
          title: "Notwendig",
          description: "Notwendige Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich.",
          required: true
        },
        functionality: {
          title: "Funktionalität",
          description: "Funktionalitäts-Cookies ermöglichen der Website, erweiterte Funktionalität und Personalisierung bereitzustellen."
        },
        analytics: {
          title: "Analyse",
          description: "Analyse-Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren."
        },
        marketing: {
          title: "Marketing",
          description: "Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen, um relevante Werbung anzuzeigen."
        }
      },
      details: "Sie können wählen, welche Cookies Sie akzeptieren möchten. Ihre Auswahl wird für ein Jahr gespeichert.",
      save: "Einstellungen speichern"
    }
    // Add other languages as needed
  };
  
  const content = translations[currentLang as keyof typeof translations] || translations.en;
  
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always required
    functionality: false,
    analytics: false,
    marketing: false
  });
  
  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      functionality: true,
      analytics: true,
      marketing: true
    };
    
    setCookiePreferences(newPreferences);
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...newPreferences,
      timestamp: new Date().toISOString()
    }));
    
    updateConsentState(newPreferences);
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
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...newPreferences,
      timestamp: new Date().toISOString()
    }));
    
    updateConsentState(newPreferences);
    setIsVisible(false);
  };
  
  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...cookiePreferences,
      timestamp: new Date().toISOString()
    }));
    
    updateConsentState(cookiePreferences);
    setIsVisible(false);
  };
  
  const handleTogglePreference = (category: string) => {
    if (category === 'necessary') return; // Cannot toggle necessary cookies
    
    setCookiePreferences(prev => {
      const updated = {
        ...prev,
        [category]: !prev[category as keyof typeof prev]
      };
      
      return updated;
    });
  };

  // Add a function to show the consent dialog when called from footer
  const showConsentManager = () => {
    setIsVisible(true);
    setExpanded(true);
  };

  // Expose the function to the window object
  useEffect(() => {
    (window as any).showCookieConsentManager = showConsentManager;
    
    return () => {
      delete (window as any).showCookieConsentManager;
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg z-50 border border-gray-200 dark:border-gray-700"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative p-5">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-start mb-4">
              <ShieldCheck className="mr-3 h-6 w-6 text-orange-500 flex-shrink-0" />
              <h3 className="font-semibold text-lg">{content.title}</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {content.description}
            </p>
            
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="py-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {content.details}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      {Object.entries(content.categories).map(([key, category]: [string, any]) => (
                        <div key={key} className="flex items-start">
                          <div className="mr-2 pt-0.5">
                            <input
                              type="checkbox"
                              id={`cookie-${key}`}
                              checked={key === 'necessary' ? true : cookiePreferences[key as keyof typeof cookiePreferences]}
                              onChange={() => handleTogglePreference(key)}
                              disabled={key === 'necessary'}
                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                            />
                          </div>
                          <div>
                            <label 
                              htmlFor={`cookie-${key}`}
                              className="block text-sm font-medium"
                            >
                              {category.title}
                              {key === 'necessary' && (
                                <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                                  Required
                                </span>
                              )}
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={handleSavePreferences}
                      className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                    >
                      {content.save}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {!expanded && (
                <>
                  <button
                    onClick={handleAcceptAll}
                    className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors flex-1"
                  >
                    {content.acceptAll}
                  </button>
                  
                  <button
                    onClick={handleAcceptNecessary}
                    className="py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors flex-1"
                  >
                    {content.acceptNecessary}
                  </button>
                </>
              )}
              
              <button
                onClick={() => setExpanded(!expanded)}
                className="py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-sm flex items-center justify-center"
              >
                <Info size={16} className="mr-2" />
                {content.detailsButton}
              </button>
            </div>
            
            <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400 flex justify-center gap-4">
              <Link to="/privacy-policy" className="underline hover:text-orange-500 dark:hover:text-orange-400">
                {content.privacyLink}
              </Link>
              <Link to="/terms-of-use" className="underline hover:text-orange-500 dark:hover:text-orange-400">
                {content.termsLink}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
