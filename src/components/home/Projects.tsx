
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Display only the first 4 projects on the homepage
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-fade-in">
          <div className="md:max-w-2xl mb-6 md:mb-0">
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Featured Projects & Case Studies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our hand-picked projects that showcase our expertise in solving complex digital challenges.
            </p>
          </div>
          
          <Link to="/projects" className="btn-outline self-start md:self-auto">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Link 
              key={index}
              to={project.link || `/projects#${project.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px] hover-card-effect"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium mr-2">View Project</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
