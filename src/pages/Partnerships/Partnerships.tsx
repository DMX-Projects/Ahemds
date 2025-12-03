import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import PartnerCategories from './components/PartnerCategories';
import PartnershipBenefits from './components/PartnershipBenefits';
import OurPartnershipOthers from './components/OurPartnershipOthers';
import OurPartnershipCloud from './components/OurPartnershipCloud';
import PartnerShipAndNextStep from './components/PartnerShipAndNextStep';
import PartnershipSaaS from './components/PartnershipSaaS';


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
      <PartnershipSaaS />
      <PartnershipBenefits />
      <OurPartnershipOthers />
      <OurPartnershipCloud />
      <PartnerShipAndNextStep />
    </motion.div>
  );
};

export default Partnerships;