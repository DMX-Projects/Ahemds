import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EndComputeServices from './components/EndComputeServices';
import DCServices from './components/DCServices';
import ProcessFlow from './components/ProcessFlow';
import Observability from './components/Observability';
import FinOpsLLM from './components/FinOpsLLM';

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <Observability />
      <FinOpsLLM />
      <EndComputeServices />
      <DCServices />
      <ProcessFlow />
    </motion.div>
  );
};

export default Services;