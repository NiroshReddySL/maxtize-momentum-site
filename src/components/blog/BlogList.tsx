
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPostType } from '@/types/blog';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { formatDate } from '@/utils/formatDate';
import { motion } from 'framer-motion';

interface BlogListProps {
  posts: BlogPostType[];
}

const BlogList = ({ posts }: BlogListProps) => {
  if (posts.length === 0) {
    return (
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-300">
              No articles found matching your criteria.
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Try adjusting your filters or check back later for new content.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Child variants for individual blog cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post, index) => (
            <motion.div key={post.slug} variants={itemVariants} className="h-full">
              <Link to={`/blog/${post.slug}`} className="block group h-full">
                <div className="rounded-xl overflow-hidden shadow-lg hover-card-effect h-full flex flex-col bg-white dark:bg-gray-800">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform transition-transform group-hover:scale-105 duration-500"
                      loading={index < 6 ? "eager" : "lazy"} // Only eager load first 6 images
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author.name}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-orange-500 font-medium group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogList;
