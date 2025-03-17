
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

interface CommentSectionProps {
  postId: string;
}

interface CommentType {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const { toast } = useToast();
  
  // Mock comments for display purposes
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      content: 'This is a fantastic article! I learned so much from it and will definitely apply these techniques.',
      date: '2023-09-15T10:30:00'
    },
    {
      id: '2',
      name: 'Emily Johnson',
      email: 'emily@example.com',
      content: 'I appreciate how clearly you explained these complex concepts. Great work!',
      date: '2023-09-16T14:45:00'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim() || !email.trim() || !comment.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Create new comment
    const newComment: CommentType = {
      id: Date.now().toString(),
      name,
      email,
      content: comment,
      date: new Date().toISOString()
    };
    
    // Add comment to list
    setComments([...comments, newComment]);
    
    // Reset form
    setName('');
    setEmail('');
    setComment('');
    
    // Show success message
    toast({
      title: "Success",
      description: "Your comment has been submitted",
    });
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
      
      {/* Comments list */}
      <div className="space-y-6 mb-12">
        {comments.map((comment) => (
          <Card key={comment.id} className="hover-card-effect">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold">{comment.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(comment.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Comment form */}
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="comment" className="block mb-2 text-sm font-medium">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              rows={6}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="btn-primary"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
