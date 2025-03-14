
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About - Maxtize';
  }, []);

  const teamMembers = [
    {
      name: 'Alex Morgan',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
      bio: 'With 8+ years of experience in digital technologies, Alex founded Maxtize to solve complex digital challenges for businesses of all sizes.'
    },
    {
      name: 'Sarah Chen',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah leads our development team with expertise in modern web technologies, cloud architecture, and software engineering.'
    },
    {
      name: 'Marcus Williams',
      position: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80',
      bio: 'Marcus crafts marketing strategies that drive measurable results, specializing in digital advertising and content marketing.'
    },
    {
      name: 'Priya Patel',
      position: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?auto=format&fit=crop&w=400&q=80',
      bio: 'Priya creates intuitive user experiences and visually stunning interfaces that captivate users and drive conversions.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.'
    },
    {
      title: 'Integrity',
      description: 'We prioritize honesty, transparency, and ethical business practices.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, forming partnerships rather than vendor relationships.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          </div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
                Young, <span className="text-gradient">Dynamic Team</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                We're not just another digital agency. We're a team of passionate young professionals who thrive on tackling complex problems and delivering exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-slide-in">
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                      alt="Maxtize team" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute -bottom-6 right-10 glass-card p-6 max-w-xs animate-float shadow-xl">
                    <div className="text-4xl font-bold text-gradient mb-2">5+ Years</div>
                    <p className="text-gray-600 dark:text-gray-300">Solving complex digital challenges</p>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-200 rounded-full z-0 animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full z-0 animate-pulse-slow"></div>
              </div>
              
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                    Our Story
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  The Beginning of <span className="text-gradient">Maxtize</span>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2019, Maxtize emerged from a simple vision: to create a digital agency that approaches problems differently. We started as a small team with big dreams, focused on delivering solutions that actually work for our clients.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Our founder recognized a gap in the market for an agency that could tackle the most complex digital challenges with a fresh perspective and cutting-edge technical skills. From those humble beginnings, we've grown into a full-service digital partner trusted by businesses across multiple industries.
                </p>
                
                <div className="pt-4">
                  <Link to="/contact" className="btn-primary">
                    Work With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                What Drives <span className="text-gradient">Our Work</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                These core principles guide everything we do and every decision we make.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-8 hover-card-effect">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-6">
                    <Check size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Meet the <span className="text-gradient">Maxtize Team</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our diverse team brings together expertise across marketing, design, and development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card overflow-hidden group hover-card-effect">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-orange-300">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-900/50 py-20">
          <div className="container-custom">
            <div className="glass-card p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Solve Your <span className="text-gradient">Digital Challenges?</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                  Our team is ready to tackle your most complex problems. Let's start building something amazing together.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                  <Link to="/services" className="btn-outline">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
