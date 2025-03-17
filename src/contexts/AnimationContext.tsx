
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type AnimationContextType = {
  shouldAnimate: boolean;
  prefersReducedMotion: boolean;
};

const AnimationContext = createContext<AnimationContextType>({
  shouldAnimate: true,
  prefersReducedMotion: false,
});

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Disable animations if user prefers reduced motion
    setShouldAnimate(!prefersReducedMotion);
  }, [prefersReducedMotion]);

  return (
    <AnimationContext.Provider value={{ shouldAnimate, prefersReducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
