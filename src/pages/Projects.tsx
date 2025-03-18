
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
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const { currentLang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set title based on language
    const titles = {
      'en': 'Projects & Case Studies - Maxtize Portfolio',
      'en-GB': 'Projects & Case Studies - Maxtize Portfolio',
      'de': 'Projekte & Fallstudien - Maxtize Portfolio',
      'zh': '项目与案例研究 - Maxtize作品集',
      'hi': 'परियोजनाएँ और केस स्टडीज - Maxtize पोर्टफोलियो',
      'kn': 'ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು & ಕೇಸ್ ಸ್ಟಡಿಗಳು - Maxtize ಪೋರ್ಟ್‌ಫೋಲಿಯೊ',
      'te': 'ప్రాజెక్ట్‌లు & కేస్ స్టడీలు - Maxtize పోర్ట్‌ఫోలియో'
    };
    
    document.title = titles[currentLang as keyof typeof titles] || titles['en'];
  }, [currentLang]);

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

  // Get language-specific descriptions
  const getDescription = () => {
    const descriptions = {
      'en': 'Explore our portfolio of successful digital projects across web development, app design, digital marketing and more.',
      'en-GB': 'Explore our portfolio of successful digital projects across web development, app design, digital marketing and more.',
      'de': 'Entdecken Sie unser Portfolio erfolgreicher digitaler Projekte in den Bereichen Webentwicklung, App-Design, digitales Marketing und mehr.',
      'zh': '探索我们在网站开发、应用设计、数字营销等方面的成功数字项目组合。',
      'hi': 'वेब डेवलपमेंट, ऐप डिज़ाइन, डिजिटल मार्केटिंग और अधिक के क्षेत्र में हमारे सफल डिजिटल प्रोजेक्ट्स के पोर्टफोलियो का अन्वेषण करें।',
      'kn': 'ವೆಬ್ ಡೆವಲಪ್‌ಮೆಂಟ್, ಆ್ಯಪ್ ಡಿಸೈನ್, ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಇನ್ನೂ ಹೆಚ್ಚಿನದರಲ್ಲಿ ನಮ್ಮ ಯಶಸ್ವಿ ಡಿಜಿಟಲ್ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳ ಪೋರ್ಟ್‌ಫೋಲಿಯೊವನ್ನು ಅನ್ವೇಷಿಸಿ.',
      'te': 'వెబ్ డెవలప్‌మెంట్, యాప్ డిజైన్, డిజిటల్ మార్కెటింగ్ మరియు మరిన్ని రంగాలలో మా విజయవంతమైన డిజిటల్ ప్రాజెక్ట్‌ల పోర్ట్‌ఫోలియోను అన్వేషించండి.'
    };
    
    return descriptions[currentLang as keyof typeof descriptions] || descriptions['en'];
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title={document.title}
        description={getDescription()}
        keywords="digital projects, case studies, web development portfolio, digital marketing examples"
        hrefLangs={hrefLangs}
        locale={currentLang === 'en-GB' ? 'en_GB' : currentLang === 'en' ? 'en_US' : currentLang}
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
