import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    'Connecting Technology',
    'Empowering Business',
    'Driving Innovation',
    'Securing Future'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-bg"></div>
      
      {/* Main Container - Full Width */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-7rem)] max-w-none">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-slate-800 dark:text-white">Delivering Digital</span>
                <br />
                <span className="gradient-text">Excellence</span>
              </h1>
            </motion.div>

            {/* Animated Tagline */}
            <div className="h-12 md:h-16 mb-6 flex items-center justify-center lg:justify-start">
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold gradient-text"
              >
                {textArray[currentText]}
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              Solutions for Modern Enterprises. Comprehensive IT services combining deep 
              technical expertise with practical business application. Gain the strategic 
              edge your organization needs to excel in today's digital landscape.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            >
              <Link to="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link to="/about" className="btn-outline group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Learn More
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-400">Founded 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="text-slate-600 dark:text-slate-400">Enterprise Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-600 dark:text-slate-400">Certified Professionals</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/images/image.png" 
                alt="Professional team collaboration - delivering digital excellence for modern enterprises"
                className="w-full h-auto object-cover"
              />
              
              {/* Image Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-emerald-900/20"></div>
              
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
