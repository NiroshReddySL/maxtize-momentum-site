
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectType } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentLang } = useLanguage();

  // Get translated content
  const getContent = () => {
    const content = {
      en: {
        viewProject: "View Project"
      },
      de: {
        viewProject: "Projekt ansehen"
      },
      zh: {
        viewProject: "查看项目"
      },
      'en-GB': {
        viewProject: "View Project"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={project.link || `/projects/${project.id}`}
        className="group block relative overflow-hidden rounded-2xl shadow-lg h-[400px]"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.7 }}
        />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
            
            <motion.h3 
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.div 
              className="flex items-center text-white mt-4 group-hover:translate-x-2 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-medium mr-2">{content.viewProject}</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated gradient overlay on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 bg-gradient-to-tr from-orange-500/20 to-pink-500/20"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
