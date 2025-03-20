
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface Category {
  id: string;
  label: string;
}

interface CategorySelectorProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ categories, activeCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <ScrollReveal className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-32">
        <h3 className="font-semibold text-lg mb-4">
          {/* This is generic and will be translated based on the parent component */}
          Categories
        </h3>
        <nav className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id 
                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>
    </ScrollReveal>
  );
};

export default CategorySelector;
