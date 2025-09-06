import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import PartnerCategories from './components/PartnerCategories';
import PartnershipBenefits from './components/PartnershipBenefits';
import OurPartnershipOthers from './components/OurPartnershipOthers';
import OurPartnershipCloud from './components/OurPartnershipCloud';

const Partnerships: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <PartnerCategories />
      <PartnershipBenefits />
      <OurPartnershipOthers />
      <OurPartnershipCloud />
    </motion.div>
  );
};

export default Partnerships;