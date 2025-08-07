
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot } from '@/utils/hubspot';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface ContactFormProps {
  onSuccess?: () => void;
  purpose?: string;
  selectedService?: string;
}

const ContactForm = ({ onSuccess, purpose = '' }: ContactFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: purpose || '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to HubSpot
      const success = await submitToHubSpot({
        firstname: formData.name.split(' ')[0],
        lastname: formData.name.split(' ').slice(1).join(' '),
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      if (success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Navigate to thank you page
        navigate('/thank-you', { state: { service: formData.subject } });
        
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service options
  const serviceOptions = [
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'SEO', label: 'Search Engine Optimization (SEO)' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'App Development', label: 'App Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'Tech Consulting', label: 'Tech Consulting' },
    { value: 'Maintenance', label: 'Maintenance & Support' },
    { value: 'Training', label: 'Training & Workshops' },
    { value: 'Other', label: 'Other Services' }
  ];

  return (
    <div className="glass-card p-8 md:p-10 animate-slide-in">
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Interested In
          </label>
          <Select value={formData.subject} onValueChange={handleSelectChange}>
            <SelectTrigger id="subject" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-800"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="btn-primary inline-flex items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            <>
              Send Message
              <Send size={16} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
