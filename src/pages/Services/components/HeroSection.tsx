// import React from 'react';
// import { motion } from 'framer-motion';
// import { Monitor, Server, Shield, Cloud } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   return (
//     <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
//             Our <span className="gradient-text">Services</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
//             Comprehensive technology integration services designed to accelerate your digital transformation journey
//           </p>
//         </motion.div>

//         {/* Service Categories Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { icon: Monitor, title: 'End Compute', count: '12+', color: 'blue' },
//             { icon: Server, title: 'DC Services', count: '8+', color: 'emerald' },
//             { icon: Shield, title: 'Security', count: '15+', color: 'purple' },
//             { icon: Cloud, title: 'Cloud Solutions', count: '10+', color: 'cyan' }
//           ].map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
//               className="card card-hover group text-center"
//             >
//               <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                 <category.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
//                 {category.title}
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
//                 {category.count} Solutions
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Shield, Network, ChevronRight } from 'lucide-react';

const servicesData = {
  devices: [
    'Device Supply and Deployment',
    'MDM',
    'VDI',
    'Secure Browser',
    'Docking Solutions',
    'Rack Mounting Solutions',
    'Collaboration Solutions',
    'ITAM',
    'ITSM',
    'Productivity Tools',
    'Software\'s',
    'End Point Support Services'
  ],
  dcServices: [
    'Hardware Supply and Deployment',
    'Managed Services',
    'Migration Services',
    'DC Consulting Services',
    'DR Management',
    'Cloud Management',
    'Hybrid Infra Management',
    'SaaS Management'
  ],
  security: [
    'Network Security',
    'Endpoint Security',
    'Cloud Security',
    'Identity & Access Management',
    'Threat Intelligence',
    'Security Operations Center',
    'Vulnerability Assessment',
    'Compliance Management'
  ],
  network: [
    'Network Design & Architecture',
    'SD-WAN Solutions',
    'Network Monitoring',
    'Wireless Solutions',
    'Load Balancing',
    'Network Optimization',
    'Bandwidth Management',
    'Network Support Services'
  ]
};

const HeroSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('devices');

  const categories = [
    { id: 'devices', icon: Monitor, title: 'Devices', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'dcServices', icon: Server, title: 'DC Services', gradient: 'from-emerald-500 to-teal-500' },
    { id: 'security', icon: Shield, title: 'Security', gradient: 'from-purple-500 to-pink-500' },
    { id: 'network', icon: Network, title: 'Network', gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header - Motion Added */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            Comprehensive technology solutions tailored for your business needs
          </p>
        </motion.div>

        {/* Category Tabs - Mobile Stacked */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 flex-1 sm:flex-none max-w-xs justify-center ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-${category.gradient.split('-')[1]}-500/30 scale-105`
                  : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {servicesData[activeCategory].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50/90 to-white/90 dark:from-slate-800/80 dark:to-slate-700/70 hover:from-white hover:to-slate-50 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-slate-100/50 dark:border-slate-700/50 hover:border-emerald-200/80 dark:hover:border-emerald-400/50 hover:shadow-md transition-all duration-300 cursor-pointer min-h-[44px] backdrop-blur-sm"

              >
                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:scale-150 transition-transform duration-300"></div>
                <span className='text-slate-700 hover:bg-slate-50 dark:text-slate-300'>
                  {service}
                </span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 ml-2 sm:ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics - Mobile Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {servicesData[category.id].length}+
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Solutions</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
