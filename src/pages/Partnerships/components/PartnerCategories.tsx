// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, Filter, X } from 'lucide-react';

// const PartnerCategories: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);

//   const categories = ['All', 'Hardware', 'Cloud', 'Security', 'Software', 'SaaS', 'SaaS BFSI', 'Networking'];

//   const partners = [
//     // Core Hardware
//     { name: 'HPE', category: 'Hardware', type:'Endpoints, Servers, Storage, Networking', logo: '🏢' },
//     { name: 'HPI', category: 'Hardware', type: 'Endpoints, Servers, Storage, Networking', logo: '🏢' },
//     { name: 'Dell', category: 'Hardware', type: 'Endpoints, Servers, Storage, Workstations', logo: '💻' },
//     { name: 'Apple', category: 'Hardware', type: 'Endpoints, Mobile Devices', logo: '🍎' },
//     { name: 'Lenovo', category: 'Hardware', type: 'Servers, PCs, Mobile', logo: '💼' },
//     { name: 'ASUS', category: 'Hardware', type: 'Workstations, Networking', logo: '⚡' },
//     { name: 'Samsung', category: 'Hardware', type:'Endpoints, Displays, Mobile', logo: '📱' },

//     // Cloud Platforms
//     { name: 'AWS', category: 'Cloud', type: 'Public Cloud, AI/ML Services', logo: '☁️' },
//     { name: 'Microsoft Azure', category: 'Cloud', type: 'Hybrid Cloud, M365 Integration', logo: '🔷' },
//     { name: 'Google Cloud', category: 'Cloud', type: 'AI, Analytics, Kubernetes', logo: '🌐' },
//     { name: 'Oracle Cloud', category: 'Cloud', type: 'Database, Enterprise Apps', logo: '🗄️' },
//     { name: 'JIO Cloud', category: 'Cloud', type: 'Cloud Infrastructure, AI/ML', logo: '☁️' },
//     { name: 'Sify Technologies', category: 'Cloud', type: 'Cloud Services, Data Centers', logo: '🏢' },
//     { name: 'CtrlS', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
//     { name: 'Yotta', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
//     { name: 'Digital Connections', category: 'Cloud', type: 'Cloud Services, IT Solutions', logo: '🌐' },
//     { name: 'NTT Data', category: 'Cloud', type: 'Cloud Services, IT Solutions', logo: '🌐' },
//     { name: 'STT Data', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
//     { name: 'neysa.ai', category: 'Cloud', type: 'AI Solutions, Cloud Services', logo: '🤖' },

//     // Security
//     { name: 'CrowdStrike', category: 'Security', type: 'Endpoint Protection, EDR', logo: '🛡️' },
//     { name: 'SonicWall', category: 'Security', type: 'Firewalls, Secure Access', logo: '🔒' },
//     { name: 'Cisco Security', category: 'Security', type: 'Network Security, Zero Trust', logo: '🔐' },
//     { name: 'Fortinet', category: 'Security', type: 'Next-Gen Firewalls, SD-WAN', logo: '🛡️' },
//     { name: 'Palo Alto', category: 'Security', type: 'NGFW, Cloud Security', logo: '🔥' },
//     { name: 'Check Point', category: 'Security', type: 'Network Security, Cloud Security', logo: '🛡️' },
//     { name: 'Allied Telesis', category: 'Security', type: 'Network Security, Switches', logo: '🔐' },

//     // Software
//     { name: 'Microsoft', category: 'Software', type: 'Operating Systems, Productivity', logo: '🖥️' },
//     { name: 'VMware', category: 'Software', type: 'Virtualization, Cloud Management', logo: '☁️' },
//     { name: 'Oracle', category: 'Software', type: 'Database, Enterprise Applications', logo: '📊' },
//     { name: 'Adobe', category: 'Software', type: 'Creative Suite, Document Management', logo: '🎨' },
//     { name: 'Autodesk', category: 'Software', type: 'Design Software, 3D Modeling', logo: '🖌️' },
//     { name: 'CorelDRAW', category: 'Software', type: 'Design Software, Vector Graphics', logo: '🎨' },

//     // SaaS Solutions
//     { name: 'JumpCloud', category: 'SaaS', type: 'Identity Management, MDM', logo: '🔑' },
//     { name: 'ServiceNow', category: 'SaaS', type: 'ITSM, Workflow Automation', logo: '⚙️' },
//     { name: 'Zoom', category: 'SaaS', type: 'Video Conferencing, UCaaS', logo: '📹' },
//     { name: 'Slack', category: 'SaaS', type: 'Team Collaboration, Integration', logo: '💬' },
//     { name: 'SPARSH', category: 'SaaS', type: 'HR Management, Payroll', logo: '👥' },
//     { name: 'Zoho', category: 'SaaS', type: 'CRM, Productivity Suite', logo: '📈' },
//     { name: 'Oracle idam', category: 'SaaS', type: 'Identity and Access Management', logo: '🔐' },
//     { name: 'Jira', category: 'SaaS', type: 'Project Management, Issue Tracking', logo: '📋' },
//     { name:'Ivanti', category:'SaaS', type:'IT Asset Management, ITSM', logo:'🛠️'},
//     { name:'Cymmetri', category:'SaaS', type:'Security Operations, Threat Detection', logo:'🛡️'},
//     { name:'Knight fintech', category:'SaaS', type:'Cybersecurity, Managed Security Services', logo:'🛡️'},
//     { name:'Symphony', category:'SaaS', type:'Collaboration, Communication', logo:'💬'},

//     // SaaS BFSI
//     { name: 'Sparsh Technologies', category: 'SaaS BFSI', type: 'HRMS', logo: '👥' },
//     { name: 'Cymmetri', category: 'SaaS BFSI', type: 'IDAM', logo: '🛡️' },
//     { name: 'Jumpcloud', category: 'SaaS BFSI', type: 'IDAM', logo: '🔑' },
//     { name: 'Veinna Advantage', category: 'SaaS BFSI', type: 'DMS', logo: '📂' },
//     { name: 'Freshworks', category: 'SaaS BFSI', type: 'IT Asset Management', logo: '🛠️' },
//     { name: 'Jumpcloud', category: 'SaaS BFSI', type: 'IT Asset Management', logo: '🔑' },
//     { name: 'Freshworks', category: 'SaaS BFSI', type: 'ITSM', logo: '🛠️' },
//     { name: 'Knight Fintech', category: 'SaaS BFSI', type: 'LOS / LMS / Co-lending', logo: '💳' },
//     { name: 'Knight Fintech', category: 'SaaS BFSI', type: 'Treasury', logo: '🏦' },
//     { name: 'Knight Fintech', category: 'SaaS BFSI', type: 'VKYC', logo: '🔎' },
//     { name: 'Hudosoft', category: 'SaaS BFSI', type: 'Call Centre', logo: '📞' },
//     { name: 'TTSL', category: 'SaaS BFSI', type: 'Call Centre', logo: '📞' },

//     // Networking
//     { name: 'Ubiquiti', category: 'Networking', type: 'Wireless, Routers, Switches', logo: '📡' },
//     { name: 'TP-Link', category: 'Networking', type: 'Routers, Switches, Access Points', logo: '📶' },
//     { name: 'Cisco', category: 'Networking', type: 'Routers, Switches, Wireless', logo: '🌐' },
//     { name: 'Juniper', category: 'Networking', type: 'Routers, Switches, Security', logo: '🔗' },
//   ];

//   const filteredPartners = partners.filter(partner => {
//     const matchesFilter = activeFilter === 'All' || partner.category === activeFilter;
//     const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           partner.type.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <section className="py-12 md:py-24 bg-white dark:bg-slate-900">
//       <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8 md:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
//             Our <span className="gradient-text">Partner Ecosystem</span>
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
//             Comprehensive partnerships across all technology domains
//           </p>
          
//           {/* Search and Filter - Mobile Optimized */}
//           <div className="flex flex-col space-y-4 mb-6 md:mb-8">
//             {/* Search Bar */}
//             <div className="relative w-full max-w-md mx-auto">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search partners..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-3 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
//               />
//             </div>
            
//             {/* Filter Toggle Button - Mobile */}
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="md:hidden flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-lg active:scale-95 transition-transform duration-200"
//             >
//               <Filter className="w-5 h-5" />
//               <span>Filter by Category</span>
//               <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{activeFilter}</span>
//             </button>

//             {/* Desktop Filter Buttons - Horizontal Scroll */}
//             <div className="hidden md:flex items-center justify-center">
//               <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
//                 <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
//                 <div className="flex space-x-2">
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       onClick={() => setActiveFilter(category)}
//                       className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
//                         activeFilter === category
//                           ? 'bg-blue-600 text-white shadow-lg'
//                           : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Mobile Filter Modal */}
//         <AnimatePresence>
//           {showFilters && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-end"
//               onClick={() => setShowFilters(false)}
//             >
//               <motion.div
//                 initial={{ y: '100%' }}
//                 animate={{ y: 0 }}
//                 exit={{ y: '100%' }}
//                 transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//                 className="bg-white dark:bg-slate-800 w-full rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Filter by Category</h3>
//                   <button
//                     onClick={() => setShowFilters(false)}
//                     className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
//                   >
//                     <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
//                   </button>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-3">
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       onClick={() => {
//                         setActiveFilter(category);
//                         setShowFilters(false);
//                       }}
//                       className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
//                         activeFilter === category
//                           ? 'bg-blue-600 text-white shadow-lg'
//                           : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Partners Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeFilter + searchTerm}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
//           >
//             {filteredPartners.map((partner, index) => (
//               <motion.div
//                 key={`${partner.name}|${partner.type}|${index}`}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group card card-hover"
//               >
//                 <div className="flex items-start mb-3 md:mb-4">
//                   <div className="text-2xl md:text-3xl mr-3 md:mr-4 flex-shrink-0">{partner.logo}</div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
//                       {partner.name}
//                     </h3>
//                     <span className="inline-block text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full mt-1">
//                       {partner.category}
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
//                   {partner.type}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* No Results */}
//         {filteredPartners.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12 md:py-16"
//           >
//             <div className="text-slate-400">
//               <Search className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
//               <p className="text-base md:text-lg font-medium mb-2">No partners found matching your criteria</p>
//               <p className="text-sm md:text-base">Try adjusting your search or filter settings</p>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PartnerCategories;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

const PartnerCategories: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Categories derived from your image sections
  const categories = [
    'All',
    'Devices',
    'Print',
    'Endpoint Security',
    'MDM',
    'Softwares',
    'Leasing',
    'Datacentre Infrastructure',
    'Servers',
    'Storage',
    'Network & Wireless',
    'Security',
    'SaaS'
  ];

  const partners = [
    // Devices (from your existing list)
   
    { name: 'HPI', category: 'Devices', type: 'Endpoints, Servers, Storage, Networking', logo: '🏢' },
    { name: 'Dell', category: 'Devices', type: 'Endpoints, Servers, Storage, Workstations', logo: '💻' },
    { name: 'Apple', category: 'Devices', type: 'Endpoints, Mobile Devices', logo: '🍎' },
    { name: 'Lenovo', category: 'Devices', type: 'Servers, PCs, Mobile', logo: '💼' },
    { name: 'ASUS', category: 'Devices', type: 'Workstations, Networking', logo: '⚡' },
    { name: 'Samsung', category: 'Devices', type:'Endpoints, Displays, Mobile', logo: '📱' },

    // Print
    { name: 'HP', category: 'Print', type: 'Business printers & MFPs', logo: '🖨️' },
    { name: 'EPSON', category: 'Print', type: 'InkTank & business printers', logo: '🖨️' },
    { name: 'CANON', category: 'Print', type: 'Office printers & copiers', logo: '🖨️' },

    // Endpoint Security
    { name: 'Jamf', category: 'Endpoint Security', type: 'Apple device security & management', logo: '🛡️' },
    { name: 'CrowdStrike', category: 'Endpoint Security', type: 'EDR/XDR endpoint protection', logo: '🛡️' },
    { name: 'SonicWall', category: 'Endpoint Security', type: 'Endpoint/secure access suite', logo: '🛡️' },

    // MDM
    { name: 'JumpCloud', category: 'MDM', type: 'MDM/UEM and identity platform', logo: '📱' },
    { name: 'Microsoft Intune', category: 'MDM', type: 'UEM for Windows/Android/iOS', logo: '📱' },
    { name: 'Scalefusion', category: 'MDM', type: 'Enterprise MDM/UEM', logo: '📱' },
    { name: 'Jamf', category: 'MDM', type: 'Apple-first MDM/UEM', logo: '🍏' },

    // Softwares
    { name: 'Microsoft', category: 'Softwares', type: 'Windows, M365, server workloads', logo: '🖥️' },
    { name: 'Adobe', category: 'Softwares', type: 'Creative Cloud, Acrobat', logo: '🎨' },
    { name: 'AutoDesk', category: 'Softwares', type: 'CAD, design & 3D tools', logo: '🖌️' },
    { name: 'CorelDraw', category: 'Softwares', type: 'Vector design suite', logo: '🎨' },

    // Leasing
    { name: 'Orix', category: 'Leasing', type: 'Device/IT asset leasing', logo: '💳' },
    { name: 'HDFSL', category: 'Leasing', type: 'Hardware financing solutions', logo: '🏦' },
    { name: 'Connect', category: 'Leasing', type: 'IT equipment lease & finance', logo: '🤝' },

    // Datacentre Infrastructure (header-level)
    { name: 'Datacentre Infra Overview', category: 'Datacentre Infrastructure', type: 'Servers, Storage, Network & Wireless, Security, SaaS', logo: '🏢' },

    // Servers
    { name: 'HPE', category: 'Servers', type: 'Rack/Tower/Blade servers', logo: '🗄️' },
    { name: 'Dell', category: 'Servers', type: 'PowerEdge server portfolio', logo: '🗄️' },
    { name: 'Cisco', category: 'Servers', type: 'UCS compute', logo: '🗄️' },
    { name: 'Lenovo', category: 'Servers', type: 'ThinkSystem servers', logo: '🗄️' },
    { name: 'Super Micro', category: 'Servers', type: 'High-density compute', logo: '🗄️' },

    // Storage
    { name: 'HPE', category: 'Storage', type: 'Alletra, Nimble, 3PAR', logo: '💽' },
    { name: 'Dell', category: 'Storage', type: 'PowerStore, PowerVault', logo: '💽' },
    { name: 'Lenovo', category: 'Storage', type: 'ThinkSystem storage', logo: '💽' },
    { name: 'NetApp', category: 'Storage', type: 'ONTAP, AFF/FAS systems', logo: '💽' },
    { name: 'Pure Storage', category: 'Storage', type: 'All-flash arrays', logo: '💽' },
    { name: 'Synology', category: 'Storage', type: 'NAS & SAN', logo: '💽' },

    // Network & Wireless
    { name: 'Cisco', category: 'Network & Wireless', type: 'Campus & Wi-Fi', logo: '🌐' },
    { name: 'HPE', category: 'Network & Wireless', type: 'Aruba networking', logo: '📶' },
    { name: 'Allied Telesis', category: 'Network & Wireless', type: 'Switching & security', logo: '🔗' },
    { name: 'Ruckus', category: 'Network & Wireless', type: 'Wi-Fi solutions', logo: '📡' },
    { name: 'D-Link (SMB)', category: 'Network & Wireless', type: 'SMB switching & Wi-Fi', logo: '🧩' },

    // Security (network/security stack)
    { name: 'SonicWall', category: 'Security', type: 'Firewalls, secure remote access', logo: '🔒' },
    { name: 'Cisco', category: 'Security', type: 'Network security & zero-trust', logo: '🛡️' },
    { name: 'Allied Telesis', category: 'Security', type: 'Secure switching & NAC', logo: '🛡️' },
    { name: 'Fortinet', category: 'Security', type: 'NGFW, SD-WAN, security fabric', logo: '🛡️' },
    { name: 'Checkpoint', category: 'Security', type: 'Network & cloud security', logo: '🛡️' },
    { name: 'Palo Alto', category: 'Security', type: 'NGFW & cloud security', logo: '🔥' },

    // SaaS
    { name: 'Esparsh', category: 'SaaS', type: 'HRMS', logo: '👥' },
    { name: 'Base14.IO', category: 'SaaS', type: 'Observability, FinOps', logo: '📊' },
    { name: 'Sulatech', category: 'SaaS', type: 'Specialized SaaS solutions', logo: '🧩' },
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesFilter = activeFilter === 'All' || partner.category === activeFilter;
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-8 md:py-8 bg-white dark:bg-slate-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Our <span className="gradient-text">Partner Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Comprehensive partnerships across all technology domains
          </p>

          {/* Search and Filter - Mobile Optimized */}
          <div className="flex flex-col space-y-4 mb-6 md:mb-8">
            {/* Search Bar */}
            <div className="relative w-full max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
              />
            </div>

            {/* Filter Toggle Button - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-lg active:scale-95 transition-transform duration-200"
            >
              <Filter className="w-5 h-5" />
              <span>Filter by Category</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">{activeFilter}</span>
            </button>

            {/* Desktop Filter Buttons - Horizontal Scroll */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                        activeFilter === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Filter Modal */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-end"
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="bg-white dark:bg-slate-800 w-full rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Filter by Category</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveFilter(category);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Partners Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}|${partner.type}|${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group card card-hover"
              >
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="text-2xl md:text-3xl mr-3 md:mr-4 flex-shrink-0">{partner.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
                      {partner.name}
                    </h3>
                    <span className="inline-block text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full mt-1">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  {partner.type}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredPartners.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-16"
          >
            <div className="text-slate-400">
              <Search className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
              <p className="text-base md:text-lg font-medium mb-2">No partners found matching your criteria</p>
              <p className="text-sm md:text-base">Try adjusting your search or filter settings</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PartnerCategories;
