
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  parallax?: boolean;
  parallaxIntensity?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  duration = 0.5,
  threshold = 0.1,
  parallax = false,
  parallaxIntensity = 0.2
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { shouldAnimate } = useAnimation();
  
  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    parallax ? [parallaxIntensity * 100, -parallaxIntensity * 100] : [0, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Don't disconnect for parallax effect
          if (!parallax) {
            observer.disconnect();
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [parallax, threshold]);

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
      style={parallax ? { y } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
