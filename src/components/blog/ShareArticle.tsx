
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareArticleProps {
  title: string;
  url: string;
}

const ShareArticle = ({ title, url }: ShareArticleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      handleClick: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        toast({
          title: "Sharing on Facebook",
          description: "Opening Facebook share dialog",
        });
      },
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      handleClick: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        toast({
          title: "Sharing on Twitter",
          description: "Opening Twitter share dialog",
        });
      },
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      handleClick: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        toast({
          title: "Sharing on LinkedIn",
          description: "Opening LinkedIn share dialog",
        });
      },
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Email',
      icon: Mail,
      handleClick: () => {
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`, '_blank');
        toast({
          title: "Sharing via Email",
          description: "Opening email client",
        });
      },
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Copy Link',
      icon: copied ? Check : LinkIcon,
      handleClick: () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast({
          title: "Link Copied!",
          description: "The article URL has been copied to your clipboard",
        });
      },
      color: copied ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
    }
  ];
  
  const variants = {
    expanded: { 
      width: 'auto',
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    collapsed: { 
      width: 'auto',
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };
  
  const itemVariants = {
    expanded: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    collapsed: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <div className="mt-12 p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">Share this article</h2>
          <p className="text-gray-500 dark:text-gray-400">Help spread the word!</p>
        </div>
        <motion.div className="flex items-center space-x-3">
          <motion.div
            className="flex items-center space-x-3"
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={variants}
          >
            {isExpanded && shareOptions.map((option, index) => (
              <motion.button
                key={option.name}
                onClick={option.handleClick}
                className={`${option.color} p-3 rounded-full text-white shadow-md transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Share on ${option.name}`}
                title={`Share on ${option.name}`}
              >
                <option.icon size={20} />
              </motion.button>
            ))}
          </motion.div>
          <motion.button
            onClick={toggleExpanded}
            className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Share article"
            title="Share article"
          >
            <Share2 size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareArticle;
