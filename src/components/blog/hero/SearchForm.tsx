import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder: string;
  searchButtonText: string;
}

const SearchForm = ({ searchQuery, setSearchQuery, placeholder, searchButtonText }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const navigate = useNavigate();
  const location = useLocation();

  // Update input value when search query changes (e.g., from URL)
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Update search query state
    setSearchQuery(inputValue);
    
    // Update URL with search query
    const searchParams = new URLSearchParams(location.search);
    
    if (inputValue.trim()) {
      searchParams.set('search', inputValue.trim());
    } else {
      searchParams.delete('search');
    }
    
    // Keep any existing category params
    const category = searchParams.get('category');
    if (!category) {
      searchParams.delete('category');
    }
    
    const newSearch = searchParams.toString();
    
    // Use navigate to update URL without full page reload
    navigate({
      pathname: location.pathname,
      search: newSearch ? `?${newSearch}` : ''
    });
    
    // Log for debugging
    console.log("Search submitted:", inputValue, "URL updated with search params:", newSearch);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-16 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <motion.button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {searchButtonText}
      </motion.button>
    </form>
  );
};

export default SearchForm;
