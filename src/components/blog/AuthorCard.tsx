
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Globe } from 'lucide-react';
import { AuthorType } from '@/types/blog';

interface AuthorCardProps {
  author: AuthorType;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="mt-12 p-8 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">{author.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-3">{author.role}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {author.bio}
          </p>
          
          <div className="flex justify-center md:justify-start gap-4">
            {author.social.twitter && (
              <a 
                href={author.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {author.social.linkedin && (
              <a 
                href={author.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {author.social.website && (
              <a 
                href={author.social.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
