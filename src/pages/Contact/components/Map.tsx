import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-96 bg-slate-200 dark:bg-slate-700 relative overflow-hidden"
    >
      {/* Placeholder for map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
            Our Location
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
          F5, B3 Kumar Castles, Palm Grove enclave, Gubbalala, Bangalore 570062
          </p>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </motion.section>
  );
};

export default Map;