import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { setIsSearchOpen } = useSearch();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    scrollToTop();
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('[data-nav="mobile-menu"]');
      const button = document.querySelector('[data-nav="menu-button"]');
      
      if (isMenuOpen && nav && button && 
          !nav.contains(event.target as Node) && 
          !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 w-full">
            {/* Enhanced Logo - Mobile Optimized */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 sm:space-x-4 group relative flex-shrink-0 z-10"
              onClick={scrollToTop}
            >
              <div className="relative">
                {/* Animated background glow - Reduced for mobile */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg sm:blur-xl transition-all duration-500 animate-pulse"></div>
                
                {/* Logo container with enhanced effects - Mobile responsive sizes */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group-hover:shadow-xl sm:group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Freshroots Technologies Logo"
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter group-hover:brightness-110" 
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-0 group-hover:animate-shimmer group-hover:opacity-100"></div>
                </div>

                {/* Floating particles effect - Scaled for mobile */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-100"></div>
                  <div className="absolute top-1 right-1 sm:top-3 sm:right-2 w-0.5 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 delay-300"></div>
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-3 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-500"></div>
                </div>
              </div>

              {/* Enhanced company name - Mobile responsive */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-gradient-to-r from-green-800 to-emerald-400 bg-clip-text group-hover:from-emerald-600 group-hover:via-blue-600 group-hover:to-purple-600 transition-all duration-500 bg-[length:200%_200%] group-hover:bg-right truncate">
                  Freshroots Technologies
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-300">
                  Private Limited
                </span>
              </div>
            </Link>

            {/* Right Side Content - Mobile Optimized Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              {/* Desktop Navigation - Hidden on mobile/tablet */}
              <div className="hidden xl:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={scrollToTop}
                    className={`relative text-sm font-medium transition-all duration-300 group whitespace-nowrap px-2 py-1 ${
                      location.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-300 group-hover:w-full ${
                        location.pathname === item.path ? 'w-full' : ''
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>

              {/* Mobile/Tablet Actions - Touch Friendly */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 sm:p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Open search"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <button
                  onClick={toggleTheme}
                  className="p-2 sm:p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>

                {/* Mobile menu button - Enhanced for touch */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`xl:hidden p-2 sm:p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative ${
                    isMenuOpen ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                  }`}
                  data-nav="menu-button"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: 0, scale: 0.8 }}
                        animate={{ rotate: 90, scale: 1 }}
                        exit={{ rotate: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col space-y-1"
                      >
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay - Full Screen on Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl xl:hidden overflow-y-auto"
              data-nav="mobile-menu"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Freshroots Technologies"
                    className="w-8 h-8 object-cover rounded-lg" 
                  />
                  <div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200">Menu</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Navigate to</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`flex items-center px-4 sm:px-6 py-4 text-base font-medium transition-all duration-200 group relative overflow-hidden ${
                        location.pathname === item.path
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-600 dark:border-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-4 w-full">
                        <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-blue-600 dark:bg-blue-400 shadow-md'
                            : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-400'
                        }`} />
                        <span className="flex-1 text-left">{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                          />
                        )}
                      </div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent dark:via-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="text-center">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    Freshroots Technologies
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                      aria-label="Search"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                      aria-label="Toggle theme"
                    >
                      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
