import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CompanyValues from './components/CompanyValues';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Approach from './components/Approach';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <CompanyValues />
      <Approach />
      <Timeline />
      <Team />
    </motion.div>
  );
};

export default About;