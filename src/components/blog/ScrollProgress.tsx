
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className={`fixed top-[74px] left-0 right-0 h-1 bg-orange-500 z-50 origin-left ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
