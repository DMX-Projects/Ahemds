// import React from 'react';
// import { motion } from 'framer-motion';
// import { Building2, Users, Target, Award } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   return (
//     <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
//             About <span className="gradient-text">Freshroots Technologies Private Limited</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
//             We are systems integration specialists committed to bridging the gap between 
//             cutting-edge technology and business transformation.
//           </p>
//         </motion.div>

//         {/* Quick Stats - Centered Grid Layout */}
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols- gap-8 max-w-md mx-auto">
//             {[
//               { icon: Building2, label: 'Founded', value: '2025', color: 'blue' },
             
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 30, scale: 0.9 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
//                 className="text-center group"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-slate-600 dark:text-slate-400 font-medium">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award } from 'lucide-react';

const HERO_STATS = [
  {
    icon: Award,
    title: 'Established Expertise',
    description:
      'Founded in 2025, with an aim in delivering seamless integration solutions across industries.',
    color: 'teal',
  },
  {
    icon: Target,
    title: 'Core Specialization',
    description:
      'Expertise in integrating complex IT, automation, and control systems.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'Skilled Professionals',
    description:
      'Building team of certified engineers, architects, and project managers driving innovation.',
    color: 'blue',
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="gradient-text">Freshroots Technologies Private Limited</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            We are systems integration specialists committed to bridging the gap between
            cutting-edge technology and business transformation.
          </p>
        </motion.div>

        {/* Quick Stats - Original */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 max-w-md mx-auto">
            {[
              { icon: Building2, label: 'Founded', value: '2025', color: 'blue' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who We Are Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {HERO_STATS.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              className="border rounded-2xl p-8 bg-white dark:bg-slate-800 shadow group text-center"
            >
              <div
  className={`
    w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full
    ${feature.color === 'blue' ? 'bg-blue-500' : ''}
    ${feature.color === 'green' ? 'bg-green-500' : ''}
    ${feature.color === 'teal' ? 'bg-teal-500' : ''}
    bg-opacity-20 dark:bg-opacity-100
  `}
>
  <feature.icon
    className={`
      w-7 h-7
      ${feature.color === 'blue' ? 'text-blue-600' : ''}
      ${feature.color === 'green' ? 'text-green-600' : ''}
      ${feature.color === 'teal' ? 'text-teal-600' : ''}
      dark:text-white
    `}
  />
</div>

              <div className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {feature.title}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
