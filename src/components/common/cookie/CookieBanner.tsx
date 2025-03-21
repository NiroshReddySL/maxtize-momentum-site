
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cookieConsentTranslations } from '@/data/cookieConsentTranslations';
import { CookiePreferences } from '@/types/cookie';

interface CookieBannerProps {
  preferences: CookiePreferences;
  onSetPreferences: (preferences: CookiePreferences) => void;
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
  onClose: () => void;
  expanded: boolean;
  onToggleExpanded: () => void;
}

const CookieBanner = ({
  preferences,
  onSetPreferences,
  onAcceptAll,
  onAcceptNecessary,
  onClose,
  expanded,
  onToggleExpanded
}: CookieBannerProps) => {
  const { currentLang } = useLanguage();
  const content = cookieConsentTranslations[currentLang as keyof typeof cookieConsentTranslations] || cookieConsentTranslations.en;

  const handleTogglePreference = (category: string) => {
    if (category === 'necessary') return; // Cannot toggle necessary cookies
    
    onSetPreferences({
      ...preferences,
      [category]: !preferences[category as keyof CookiePreferences]
    });
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg z-50 border border-gray-200 dark:border-gray-700"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative p-5">
        <button 
          onClick={onClose}
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
                        checked={key === 'necessary' ? true : Boolean(preferences[key as keyof CookiePreferences])}
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
                onClick={onAcceptAll}
                className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
              >
                {content.save}
              </button>
            </div>
          </motion.div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {!expanded && (
            <>
              <button
                onClick={onAcceptAll}
                className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors flex-1"
              >
                {content.acceptAll}
              </button>
              
              <button
                onClick={onAcceptNecessary}
                className="py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors flex-1"
              >
                {content.acceptNecessary}
              </button>
            </>
          )}
          
          <button
            onClick={onToggleExpanded}
            className="py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-sm flex items-center justify-center"
          >
            <span className="mr-2">{content.detailsButton}</span>
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
  );
};

export default CookieBanner;
