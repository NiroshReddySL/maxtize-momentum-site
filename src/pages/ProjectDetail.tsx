
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronRight, Download } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projects } from '@/data/projects';
import { ProjectType } from '@/types/project';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { submitToHubSpot } from '@/utils/hubspot';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDownloadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to HubSpot
      const success = await submitToHubSpot({
        firstname: formData.name.split(' ')[0],
        lastname: formData.name.split(' ').slice(1).join(' '),
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        project_name: project?.title || '',
        project_id: project?.id || ''
      });

      if (success) {
        toast({
          title: "Success!",
          description: "Your case study has been sent to your email.",
        });
        setIsDownloadDialogOpen(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: ''
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Unable to process your request. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/projects/${project.id}` },
    { lang: 'zh', href: `${window.location.origin}/zh/projects/${project.id}` },
    { lang: 'kn', href: `${window.location.origin}/kn/projects/${project.id}` },
    { lang: 'te', href: `${window.location.origin}/te/projects/${project.id}` },
    { lang: 'hi', href: `${window.location.origin}/hi/projects/${project.id}` },
    { lang: 'de', href: `${window.location.origin}/de/projects/${project.id}` },
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
        
        {/* Challenge & Solution Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="glass-card p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-500">01</span>
                    </span>
                    The Challenge
                  </h2>
                  <div className="prose dark:prose-invert">
                    <p>The client faced multiple challenges with their existing digital presence that limited their growth potential:</p>
                    <ul>
                      <li>Outdated design that failed to engage with modern users</li>
                      <li>Poor technical performance impacting user experience</li>
                      <li>Limited visibility in search engine results</li>
                      <li>Inconsistent user journey leading to high bounce rates</li>
                      <li>Difficulty in measuring marketing effectiveness</li>
                    </ul>
                    <p>These issues collectively resulted in unrealized business potential and competitive disadvantage in their market.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="glass-card p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-500">02</span>
                    </span>
                    Our Solution
                  </h2>
                  <div className="prose dark:prose-invert">
                    <p>We implemented a comprehensive strategy to address each identified challenge:</p>
                    <ul>
                      <li>Complete redesign with modern UX principles and responsive framework</li>
                      <li>Performance optimization achieving 95+ scores on Core Web Vitals</li>
                      <li>Technical SEO implementation and content strategy focused on target keywords</li>
                      <li>User flow restructuring to create intuitive journeys with clear CTAs</li>
                      <li>Advanced analytics implementation with conversion tracking and attribution</li>
                    </ul>
                    <p>Our approach combined technical expertise with strategic insights to deliver measurable results.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
        
        {/* Process Section */}
        <section className="py-20">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            </ScrollReveal>
            
            <div className="space-y-16">
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Research and Strategy" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3 text-sm text-orange-500">1</span>
                      Research & Strategy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We began with comprehensive research to understand the client's industry, competition, and target audience. This informed our strategic approach and set clear objectives for the project.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Competitive analysis and market positioning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>User research and persona development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Performance benchmarking and goal setting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 md:order-1 order-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3 text-sm text-orange-500">2</span>
                      Design & Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      With a clear strategy in place, our design and development teams collaborated to create a solution that balanced aesthetics with functionality and technical performance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>User experience design and wireframing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Responsive interface design and prototyping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Frontend and backend development with performance optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 md:order-2 order-1">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Design and Development" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Launch and Optimization" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3 text-sm text-orange-500">3</span>
                      Launch & Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Following a successful launch, we implemented continuous monitoring and optimization to ensure long-term success and adaptability to changing market conditions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Analytics implementation and data tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Performance monitoring and iterative improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">→</span>
                        <span>Conversion rate optimization and A/B testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <ScrollReveal>
              <div className="glass-card p-10 md:p-16">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                        alt="Client Portrait" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <svg className="w-10 h-10 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM10 22c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zM22 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM22 22c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
                    </svg>
                    <p className="text-xl md:text-2xl italic mb-6">
                      The team at Maxtize exceeded our expectations at every stage of the project. They not only delivered an outstanding technical solution but also brought strategic insights that transformed how we approach our digital presence. The results speak for themselves - increased traffic, engagement, and most importantly, conversions.
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">5.0 / 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Tags Section */}
        <section className="py-16">
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
                  <button 
                    onClick={() => setIsDownloadDialogOpen(true)} 
                    className="btn-outline flex items-center"
                  >
                    Download Case Study <Download size={16} className="ml-2" />
                  </button>
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

      {/* Download Form Dialog */}
      <Dialog open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Download Case Study</DialogTitle>
            <DialogDescription>
              Fill out this form to receive the complete case study for {project.title}.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleDownloadFormSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              />
            </div>
            
            <div className="pt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsDownloadDialogOpen(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Download Now'}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
