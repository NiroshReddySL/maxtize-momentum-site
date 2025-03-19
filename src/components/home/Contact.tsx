
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Check } from 'lucide-react';
import { toast } from 'sonner';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { currentLang } = useLanguage();

  // Get translated content based on language
  const getContent = () => {
    const content = {
      en: {
        badge: "Get in Touch",
        title: "Let's Start a Conversation",
        description: "Have a project in mind or just want to learn more about our services? Drop us a message and we'll get back to you within 24 hours.",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address",
        messagePlaceholder: "Your message",
        submitButton: "Send Message",
        submittingButton: "Sending...",
        successMessage: "Thanks for reaching out! We'll be in touch soon.",
        errorMessage: "Oops! Something went wrong. Please try again.",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        invalidEmail: "Please enter a valid email address",
        messageRequired: "Message is required"
      },
      de: {
        badge: "Kontaktieren Sie uns",
        title: "Lassen Sie uns ein Gespräch beginnen",
        description: "Haben Sie ein Projekt im Sinn oder möchten Sie einfach mehr über unsere Dienstleistungen erfahren? Hinterlassen Sie uns eine Nachricht und wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail-Adresse",
        messagePlaceholder: "Ihre Nachricht",
        submitButton: "Nachricht senden",
        submittingButton: "Wird gesendet...",
        successMessage: "Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.",
        errorMessage: "Hoppla! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        nameRequired: "Name ist erforderlich",
        emailRequired: "E-Mail ist erforderlich",
        invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        messageRequired: "Nachricht ist erforderlich"
      },
      zh: {
        badge: "联系我们",
        title: "让我们开始交谈",
        description: "有项目想法或者只是想了解更多关于我们服务的信息？给我们留言，我们将在24小时内回复您。",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "您的电子邮箱",
        messagePlaceholder: "您的留言",
        submitButton: "发送消息",
        submittingButton: "发送中...",
        successMessage: "感谢您的留言！我们将尽快与您联系。",
        errorMessage: "哎呀！出了点问题。请重试。",
        nameRequired: "姓名是必填项",
        emailRequired: "邮箱是必填项",
        invalidEmail: "请输入有效的电子邮箱地址",
        messageRequired: "留言是必填项"
      },
      // Add other languages as needed
      'en-GB': {
        badge: "Get in Touch",
        title: "Let's Start a Conversation",
        description: "Have a project in mind or just want to learn more about our services? Drop us a message and we'll get back to you within 24 hours.",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address",
        messagePlaceholder: "Your message",
        submitButton: "Send Message",
        submittingButton: "Sending...",
        successMessage: "Thanks for reaching out! We'll be in touch soon.",
        errorMessage: "Oops! Something went wrong. Please try again.",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        invalidEmail: "Please enter a valid email address",
        messageRequired: "Message is required"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!name.trim()) {
      toast.error(content.nameRequired);
      return;
    }
    
    if (!email.trim()) {
      toast.error(content.emailRequired);
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error(content.invalidEmail);
      return;
    }
    
    if (!message.trim()) {
      toast.error(content.messageRequired);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setEmail('');
      setName('');
      setMessage('');
      toast.success(content.successMessage);
    } catch (error) {
      toast.error(content.errorMessage);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 bottom-40 w-80 h-80 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -left-20 top-1/3 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content column */}
          <ScrollReveal direction="left">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {content.badge}
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
                variants={itemVariants}
              >
                {content.title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-lg"
                variants={itemVariants}
              >
                {content.description}
              </motion.p>
              
              {/* Contact info cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-500">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                    <p className="text-base font-medium text-gray-900 dark:text-white">info@maxtize.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-500">
                    <MessageSquare size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Live Chat</h3>
                    <p className="text-base font-medium text-gray-900 dark:text-white">Available 9am-5pm</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Social proof or trust badges could go here */}
              <motion.div 
                className="pt-6"
                variants={itemVariants}
              >
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Trusted by:</span>
                  {/* Add company logos or trust badges here */}
                  <div className="flex gap-4">
                    <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
          
          {/* Form column */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.form 
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={content.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={content.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={content.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  ></textarea>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {content.submittingButton}
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check className="mr-2" size={18} />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        {content.submitButton}
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
