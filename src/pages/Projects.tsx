
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/projects/HeroSection';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import CTASection from '@/components/projects/CTASection';
import { projects, projectCategories } from '@/data/projects';
import { ProjectType } from '@/types/project';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects - Maxtize';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category.includes(activeCategory) || 
          project.tags.some(tag => tag.includes(activeCategory))
        )
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectFilters 
          categories={projectCategories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <ProjectsGrid projects={filteredProjects} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
