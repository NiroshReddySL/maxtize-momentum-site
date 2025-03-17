
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectType } from '@/types/project';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="glass-card overflow-hidden hover-card-effect">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Client: {project.client}</p>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Key Results:</h3>
          <ul className="space-y-2">
            {project.results.map((result, idx) => (
              <li key={idx} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-sm">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          View Case Study <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
