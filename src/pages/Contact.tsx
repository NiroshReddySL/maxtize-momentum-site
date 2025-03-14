
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact - Maxtize';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log('Contact form submitted');
  };

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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
                Contact <span className="text-gradient">Maxtize</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                Have a complex digital challenge? We're ready to help. Reach out to discuss how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="glass-card p-8 md:p-10 animate-slide-in order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center"
                  >
                    Send Message
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Feel free to reach out to us through any of the channels below. We're always ready to discuss your project and find the best solutions for your needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@maxtize.com</p>
                      <p className="text-gray-600 dark:text-gray-300">support@maxtize.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Innovation Street<br />
                        Tech District<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold">Find Us on the Map</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Located in the heart of the city, we're easily accessible from all major transportation hubs.
              </p>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden glass-card p-2">
              {/* This would typically be a Google Maps embed or similar */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
