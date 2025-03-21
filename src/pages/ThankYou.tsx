
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [service, setService] = useState<string>('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You | Maxtize";
    
    // Get service from location state
    const state = location.state as { service?: string };
    if (state?.service) {
      setService(state.service);
    }
    
    // Automatically redirect after 10 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 30000); // 30 seconds
    
    return () => clearTimeout(redirectTimer);
  }, [location, navigate]);

  // Define content based on service type
  const getServiceSpecificContent = () => {
    if (!service) {
      return {
        title: "Thank You for Reaching Out!",
        description: "We've received your message and will get back to you as soon as possible.",
        nextSteps: [
          "Our team will review your inquiry",
          "We typically respond within 24-48 hours",
          "You'll receive a confirmation email shortly"
        ]
      };
    }
    
    switch(service.toLowerCase()) {
      case 'web development':
      case 'website development':
      case 'web-development':
        return {
          title: `Thank You for Your ${service} Inquiry!`,
          description: "We're excited to discuss your web development project. Our development team will review your requirements and get back to you with a tailored solution.",
          nextSteps: [
            "Our development team will assess your requirements",
            "We'll prepare a customized development approach",
            "We'll schedule a consultation to discuss your project in detail"
          ]
        };
      case 'app development':
      case 'mobile app development':
      case 'app-development':
        return {
          title: `Thank You for Your ${service} Inquiry!`,
          description: "We're excited to bring your app idea to life. Our mobile development specialists will review your requirements and contact you soon.",
          nextSteps: [
            "Our app development specialists will analyze your requirements",
            "We'll prepare a development roadmap for your app",
            "We'll schedule a call to discuss platform choices and features"
          ]
        };
      case 'seo':
      case 'search engine optimization':
        return {
          title: `Thank You for Your ${service} Inquiry!`,
          description: "We're ready to boost your online visibility. Our SEO team will review your website and contact you with strategic recommendations.",
          nextSteps: [
            "Our SEO specialists will conduct an initial analysis of your website",
            "We'll prepare a preliminary strategy for improving your rankings",
            "We'll schedule a consultation to discuss our findings and approach"
          ]
        };
      case 'digital marketing':
        return {
          title: `Thank You for Your ${service} Inquiry!`,
          description: "We're excited to help grow your online presence. Our marketing team will analyze your needs and create a custom strategy for your business.",
          nextSteps: [
            "Our marketing team will research your industry and competitors",
            "We'll develop a preliminary marketing strategy tailored to your goals",
            "We'll contact you to discuss campaign objectives and KPIs"
          ]
        };
      case 'ui/ux design':
      case 'design':
      case 'ui design':
      case 'ux design':
        return {
          title: `Thank You for Your Design Inquiry!`,
          description: "We're excited to help create beautiful, user-friendly designs for your business. Our creative team will review your needs and reach out soon.",
          nextSteps: [
            "Our design team will study your brand and requirements",
            "We'll prepare initial design concepts and approaches",
            "We'll schedule a creative consultation to align on design direction"
          ]
        };
      default:
        return {
          title: `Thank You for Your ${service} Inquiry!`,
          description: "We've received your request and are excited to help with your project. Our specialists will review your requirements and contact you soon.",
          nextSteps: [
            "Our team will analyze your specific requirements",
            "We'll prepare a tailored approach for your project",
            "We'll reach out to schedule a consultation"
          ]
        };
    }
  };

  const content = getServiceSpecificContent();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Thank You | Maxtize"
        description="Thank you for contacting Maxtize. We've received your message and will get back to you shortly."
      />
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle2 size={64} className="text-green-600 dark:text-green-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              {content.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              {content.description}
            </p>
            
            <div className="glass-card p-8 mb-12 text-left">
              <h2 className="text-2xl font-semibold mb-6 text-center">What happens next?</h2>
              <div className="space-y-6">
                {content.nextSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 mr-4">
                      {idx + 1}
                    </div>
                    <p className="text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/')}
                className="btn-primary inline-flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" /> Return to Homepage
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="btn-outline inline-flex items-center"
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
