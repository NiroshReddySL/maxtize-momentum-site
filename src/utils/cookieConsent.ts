
import { CookiePreferences } from '@/types/cookie';

// Google Consent Mode v2 implementation
export const updateConsentState = (preferences: CookiePreferences) => {
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

export const initializeGoogleConsent = () => {
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
};

export const savePreferences = (cookiePreferences: CookiePreferences) => {
  localStorage.setItem('cookieConsent', JSON.stringify({
    ...cookiePreferences,
    timestamp: new Date().toISOString()
  }));
  
  updateConsentState(cookiePreferences);
};

export const getStoredPreferences = (): CookiePreferences | null => {
  const stored = localStorage.getItem('cookieConsent');
  if (!stored) return null;
  
  try {
    return JSON.parse(stored) as CookiePreferences;
  } catch (e) {
    console.error('Error parsing saved consent:', e);
    return null;
  }
};
