
import React from 'react';

interface SEOProviderProps {
  children: React.ReactNode;
}

export const SEOProvider = ({ children }: SEOProviderProps) => {
  return <>{children}</>;
};
