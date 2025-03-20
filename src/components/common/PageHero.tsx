
import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
}

const PageHero = ({ badge, title, titleHighlight, description, buttons }: PageHeroProps) => {
  // Split the title to add highlight span if needed
  const renderTitle = () => {
    if (!titleHighlight) return title;
    
    const parts = title.split(titleHighlight);
    return (
      <>
        {parts[0]} <span className="text-gradient">{titleHighlight}</span>{parts[1] || ''}
      </>
    );
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            delay: 2
          }}
        />
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800/30"
              whileHover={{ scale: 1.05 }}
            >
              {badge}
            </motion.span>
          </ScrollReveal>
          
          <TextReveal
            tag="h1"
            // Fix the type error by properly typing the rendered title
            text={renderTitle()}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            asChild={true} // Add this prop to allow React elements to be passed
          />
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              {description}
            </p>

            {buttons && (
              <div className="flex flex-wrap justify-center gap-4">
                {buttons.primary && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to={buttons.primary.link} className="btn-primary">
                      {buttons.primary.text}
                    </Link>
                  </motion.div>
                )}
                
                {buttons.secondary && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to={buttons.secondary.link} className="btn-outline">
                      {buttons.secondary.text}
                    </Link>
                  </motion.div>
                )}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
