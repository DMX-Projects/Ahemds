import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import IndustrySolutions from './components/IndustrySolutions';
import BFSISolutions from './components/BFSISolutions';
import ComparisonTable from './components/ComparisonTable';

const Solutions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <IndustrySolutions />
      <BFSISolutions />
      <ComparisonTable />
    </motion.div>
  );
};

export default Solutions;