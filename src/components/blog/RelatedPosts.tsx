
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPostType } from '@/types/blog';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { formatDate } from '@/utils/formatDate';

interface RelatedPostsProps {
  posts: BlogPostType[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <ScrollReveal key={post.slug} delay={0.1 * index}>
          <Link to={`/blog/${post.slug}`} className="block group">
            <div className="rounded-xl overflow-hidden shadow-lg hover-card-effect h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default RelatedPosts;
