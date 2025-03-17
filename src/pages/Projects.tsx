
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/projects/HeroSection';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import CTASection from '@/components/projects/CTASection';
import { projects, projectCategories } from '@/data/projects';
import { ProjectType } from '@/types/project';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Define hreflang links for international SEO
  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/projects` },
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/projects` },
    { lang: 'zh', href: `${window.location.origin}/zh/projects` },
    { lang: 'kn', href: `${window.location.origin}/kn/projects` },
    { lang: 'te', href: `${window.location.origin}/te/projects` },
    { lang: 'hi', href: `${window.location.origin}/hi/projects` },
    { lang: 'de', href: `${window.location.origin}/de/projects` },
    { lang: 'x-default', href: `${window.location.origin}/projects` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title="Projects & Case Studies - Maxtize Portfolio"
        description="Explore our portfolio of successful digital projects across web development, app design, digital marketing and more."
        keywords="digital projects, case studies, web development portfolio, digital marketing examples"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal>
          <ProjectFilters 
            categories={projectCategories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </ScrollReveal>
        <ProjectsGrid projects={filteredProjects} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
