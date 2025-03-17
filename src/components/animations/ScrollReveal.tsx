
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  duration = 0.5 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { shouldAnimate } = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Define animation variants based on direction
  let initialProps = {};
  switch (direction) {
    case 'up':
      initialProps = { opacity: 0, y: 50 };
      break;
    case 'down':
      initialProps = { opacity: 0, y: -50 };
      break;
    case 'left':
      initialProps = { opacity: 0, x: 50 };
      break;
    case 'right':
      initialProps = { opacity: 0, x: -50 };
      break;
    case 'none':
      initialProps = { opacity: 0 };
      break;
  }

  const variants = {
    hidden: initialProps,
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { 
        duration, 
        delay, 
        ease: "easeOut" 
      } 
    }
  };

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
