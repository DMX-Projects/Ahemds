import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ComingSoon from './components/ComingSoon';

const CaseStudies: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ComingSoon />
    </motion.div>
  );
};

export default CaseStudies;