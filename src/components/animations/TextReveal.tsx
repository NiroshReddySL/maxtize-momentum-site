
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

interface TextRevealProps {
  text?: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  asChild?: boolean;
  children?: React.ReactNode;
}

const TextReveal = ({ 
  text, 
  className = '', 
  delay = 0, 
  staggerChildren = 0.03,
  tag = 'p',
  asChild = false,
  children
}: TextRevealProps) => {
  const { shouldAnimate } = useAnimation();
  
  if (!shouldAnimate) {
    const Component = tag;
    return <Component className={className}>{children || text}</Component>;
  }

  // If using as a wrapper for children
  if (asChild && children) {
    return children;
  }

  // Use provided text or convert children to string
  const content = text || (typeof children === 'string' ? children : '');
  const words = content.split(' ');

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren,
        delayChildren: delay 
      }
    })
  };

  const child = {
    hidden: { opacity: 0.5, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const Component = motion[tag];

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export default TextReveal;
