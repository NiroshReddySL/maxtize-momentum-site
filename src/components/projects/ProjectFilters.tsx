
import React from 'react';

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilters = ({ categories, activeCategory, setActiveCategory }: ProjectFiltersProps) => {
  return (
    <section className="py-12 border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
