import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { Link } from 'react-router-dom';

const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const [results, setResults] = useState<any[]>([]);

  const searchData = [
    { title: 'End Compute Solutions', path: '/services#end-compute', type: 'Service' },
    { title: 'Data Center Services', path: '/services#dc-services', type: 'Service' },
    { title: 'HPE Partnership', path: '/partnerships', type: 'Partnership' },
    { title: 'AWS Cloud Solutions', path: '/partnerships', type: 'Partnership' },
    { title: 'BFSI Solutions', path: '/solutions#bfsi', type: 'Solution' },
    { title: 'About Ahmeds', path: '/about', type: 'Company' },
    { title: 'Contact Us', path: '/contact', type: 'Contact' }
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Search Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center p-6 border-b border-slate-200 dark:border-slate-700">
            <Search className="w-6 h-6 text-slate-400 mr-4" />
            <input
              type="text"
              placeholder="Search services, partnerships, solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none"
              autoFocus
            />
            <button
              onClick={handleClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-4">
                {results.map((result, index) => (
                  <motion.div
                    key={result.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={result.path}
                      onClick={handleClose}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 group"
                    >
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {result.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {result.type}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="p-8 text-center">
                <p className="text-slate-500 dark:text-slate-400">
                  No results found for "{searchQuery}"
                </p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-slate-500 dark:text-slate-400">
                  Start typing to search our services, partnerships, and solutions
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;