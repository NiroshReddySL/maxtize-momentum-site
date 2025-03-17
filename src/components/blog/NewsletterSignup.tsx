
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send this to your newsletter provider
    console.log('Newsletter signup:', email);
    
    toast({
      title: "Success",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail('');
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        Get the latest articles, resources, and insights delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            className="w-full p-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;
