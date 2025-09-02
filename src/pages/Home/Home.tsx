import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import ServicesPreview from './components/ServicesPreview';
import PartnershipsPreview from './components/PartnershipsPreview';
import CTASection from './components/CTASection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PartnershipsPreview />
      <CTASection />
    </motion.div>
  );
};

export default Home;