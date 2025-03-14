
import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
