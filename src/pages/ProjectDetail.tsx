
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import { ProjectType } from '@/types/project';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { useToast } from '@/hooks/use-toast';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const projectData = projects.find(p => p.id === id);
    if (projectData) {
      setProject(projectData);
    } else {
      // Show error toast if project not found
      toast({
        title: "Project Not Found",
        description: "The requested project does not exist.",
        variant: "destructive"
      });
    }
  }, [id, toast]);

  if (!project) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="py-40">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">The case study you're looking for doesn't exist or has been moved.</p>
            <Link to="/projects" className="btn-primary">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Define hreflang links for this project
  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/projects/${project.id}` },
    { lang: 'x-default', href: `${window.location.origin}/projects/${project.id}` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title={`${project.title} - Maxtize Case Study`}
        description={project.description}
        keywords={project.tags.join(', ')}
        ogType="article"
        hrefLangs={hrefLangs}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          </div>
          
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-center mb-6">
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Projects
                </Link>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">{project.category}</span>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ScrollReveal delay={0.1}>
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <TextReveal
                    tag="h1"
                    text={project.title}
                    className="text-4xl md:text-5xl font-bold mt-6 mb-6"
                  />
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Client</h2>
                    <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={0.2} direction="left">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <ScrollReveal key={index} delay={0.1 * index} parallax>
                  <div className="glass-card p-8 text-center hover-card-effect">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-orange-500">{index + 1}</span>
                    </div>
                    <p className="text-lg font-medium">{result}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tags Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-8 text-center">Technologies & Expertise</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {project.tags.map((tag, index) => (
                  <ScrollReveal key={index} delay={0.05 * index}>
                    <span className="px-6 py-3 bg-white dark:bg-gray-800 shadow-md rounded-full text-gray-800 dark:text-gray-200 font-medium">
                      {tag}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <ScrollReveal>
              <div className="glass-card p-10 md:p-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                  Let's discuss how we can help you achieve similar results for your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                  <a href="#" className="btn-outline flex items-center">
                    Download Case Study <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Related Projects */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12 text-center">Related Projects</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id)
                .filter(p => p.category === project.category || p.tags.some(tag => project.tags.includes(tag)))
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Link 
                      to={`/projects/${relatedProject.id}`} 
                      className="block group overflow-hidden rounded-xl shadow-lg"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover transform transition-transform group-hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                          <div className="p-6">
                            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                              {relatedProject.category}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-3">
                              {relatedProject.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-outline">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
