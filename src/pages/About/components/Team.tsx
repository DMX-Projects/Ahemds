// import React from 'react';
// import { motion } from 'framer-motion';
// import { Linkedin, Mail } from 'lucide-react';

// const Team: React.FC = () => {
//   const team = [
//     {
//       name: 'Ahmed Al-Rashid',
//       role: 'Founder & CEO',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Visionary leader with 15+ years in enterprise technology integration.'
//     },
//     {
//       name: 'Sarah Chen',
//       role: 'CTO',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Technology strategist specializing in cloud and hybrid infrastructure.'
//     },
//     {
//       name: 'Marcus Johnson',
//       role: 'VP Engineering',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Systems architect with expertise in large-scale deployments.'
//     },
//     {
//       name: 'Dr. Priya Sharma',
//       role: 'Head of Innovation',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
//       bio: 'Research leader driving next-generation integration methodologies.'
//     }
//   ];

//   return (
//     <section className="py-24 bg-white dark:bg-slate-900">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
//             Leadership <span className="gradient-text">Team</span>
//           </h2>
//           <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//             Meet the experts driving innovation and excellence in systems integration
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 50, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="card card-hover group"
//             >
//               <div className="relative mb-6 overflow-hidden rounded-2xl">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 {/* Social Links */}
//                 <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button className="p-2 bg-white/90 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
//                     <Linkedin className="w-4 h-4" />
//                   </button>
//                   <button className="p-2 bg-white/90 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-300">
//                     <Mail className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
//                 {member.name}
//               </h3>
              
//               <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
//                 {member.role}
//               </p>
              
//               <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
//                 {member.bio}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React from 'react'

const Team = () => {
  return (
    <div></div>
  )
}

export default Team