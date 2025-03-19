
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { currentLang } = useLanguage();
  
  // Display only the first 4 projects on the homepage
  const featuredProjects = projects.slice(0, 4);

  // Get translated content based on language
  const getContent = () => {
    const content = {
      en: {
        badge: "Our Portfolio",
        title: "Featured Projects & Case Studies",
        description: "Explore our hand-picked projects that showcase our expertise in solving complex digital challenges.",
        viewAll: "View All Projects"
      },
      de: {
        badge: "Unser Portfolio",
        title: "Ausgewählte Projekte & Fallstudien",
        description: "Erkunden Sie unsere handverlesenen Projekte, die unsere Expertise bei der Lösung komplexer digitaler Herausforderungen zeigen.",
        viewAll: "Alle Projekte anzeigen"
      },
      zh: {
        badge: "我们的作品集",
        title: "精选项目和案例研究",
        description: "探索我们精心挑选的项目，展示我们解决复杂数字挑战的专业知识。",
        viewAll: "查看所有项目"
      },
      // Add other languages as needed
      'en-GB': {
        badge: "Our Portfolio",
        title: "Featured Projects & Case Studies",
        description: "Explore our hand-picked projects that showcase our expertise in solving complex digital challenges.",
        viewAll: "View All Projects"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-100/30 dark:bg-orange-800/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 right-1/4 w-72 h-72 bg-blue-100/30 dark:bg-blue-800/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <ScrollReveal>
            <div className="md:max-w-2xl mb-6 md:mb-0">
              <motion.span 
                className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {content.badge}
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                {content.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {content.description}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/projects" 
                className="btn-outline self-start md:self-auto group flex items-center gap-2"
              >
                <span>{content.viewAll}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
