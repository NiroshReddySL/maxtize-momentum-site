
export interface CookiePreferences {
  necessary: boolean;
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
}

declare global {
  interface Window {
    showCookieConsentManager?: () => void;
    gtag?: any; // Changed back to optional to ensure consistent modifiers across all declarations
  }
}
