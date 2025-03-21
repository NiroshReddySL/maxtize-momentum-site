
export interface CookiePreferences {
  necessary: boolean;
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
  [key: string]: boolean | string | undefined;
}

declare global {
  interface Window {
    showCookieConsentManager?: () => void;
    gtag?: any;
  }
}
