
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
    gtag: any; // Changed from optional to required to match other declarations
  }
}
