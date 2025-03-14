
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/about/HeroSection';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/about/CTASection';
import { teamMembers, companyValues } from '@/data/company';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About - Maxtize';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <ValuesSection values={companyValues} />
        <TeamSection teamMembers={teamMembers} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
