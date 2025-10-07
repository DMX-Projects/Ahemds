import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useSearch } from '../../../contexts/SearchContext';

const PartnerCategories: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Hardware', 'Cloud', 'Security', 'Software', 'SaaS', 'Networking'];

  const partners = [
    // Core Hardware
    { name: 'HPE', category: 'Hardware', type:'Endpoints, Servers, Storage, Networking', logo: '🏢' },
     { name: 'HPI', category: 'Hardware', type: 'Endpoints, Servers, Storage, Networking', logo: '🏢' },
    { name: 'Dell', category: 'Hardware', type: 'Endpoints, Servers, Storage, Workstations', logo: '💻' },
    { name: 'Apple', category: 'Hardware', type: 'Endpoints, Mobile Devices', logo: '🍎' },
    { name: 'Lenovo', category: 'Hardware', type: 'Servers, PCs, Mobile', logo: '💼' },
    { name: 'ASUS', category: 'Hardware', type: 'Workstations, Networking', logo: '⚡' },
    { name: 'Samsung', category: 'Hardware', type:'Endpoints, Displays, Mobile', logo: '📱' },

    
    // Cloud Platforms
    { name: 'AWS', category: 'Cloud', type: 'Public Cloud, AI/ML Services', logo: '☁️' },
    { name: 'Microsoft Azure', category: 'Cloud', type: 'Hybrid Cloud, M365 Integration', logo: '🔷' },
    { name: 'Google Cloud', category: 'Cloud', type: 'AI, Analytics, Kubernetes', logo: '🌐' },
    { name: 'Oracle Cloud', category: 'Cloud', type: 'Database, Enterprise Apps', logo: '🗄️' },
    { name: 'JIO Cloud', category: 'Cloud', type: 'Cloud Infrastructure, AI/ML', logo: '☁️' },
    { name: 'Sify Technologies', category: 'Cloud', type: 'Cloud Services, Data Centers', logo: '🏢' },
    { name: 'CtrlS', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
    { name: 'Yotta', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
    { name: 'Digital Connections', category: 'Cloud', type: 'Cloud Services, IT Solutions', logo: '🌐' },
    { name: 'NTT Data', category: 'Cloud', type: 'Cloud Services, IT Solutions', logo: '🌐' },
    { name: 'STT Data', category: 'Cloud', type: 'Data Center, Cloud Services', logo: '🏢' },
    { name: 'neysa.ai', category: 'Cloud', type: 'AI Solutions, Cloud Services', logo: '🤖' },

    // Security
    { name: 'CrowdStrike', category: 'Security', type: 'Endpoint Protection, EDR', logo: '🛡️' },
    { name: 'SonicWall', category: 'Security', type: 'Firewalls, Secure Access', logo: '🔒' },
    { name: 'Cisco Security', category: 'Security', type: 'Network Security, Zero Trust', logo: '🔐' },
    { name: 'Fortinet', category: 'Security', type: 'Next-Gen Firewalls, SD-WAN', logo: '🛡️' },
    { name: 'Palo Alto', category: 'Security', type: 'NGFW, Cloud Security', logo: '🔥' },
    { name: 'Check Point', category: 'Security', type: 'Network Security, Cloud Security', logo: '🛡️' },
    { name: 'Allied Telesis', category: 'Security', type: 'Network Security, Switches', logo: '🔐' },


    // Software
    { name: 'Microsoft', category: 'Software', type: 'Operating Systems, Productivity', logo: '🖥️' },
    { name: 'VMware', category: 'Software', type: 'Virtualization, Cloud Management', logo: '☁️' },
    { name: 'Oracle', category: 'Software', type: 'Database, Enterprise Applications', logo: '📊' },
    { name: 'Adobe', category: 'Software', type: 'Creative Suite, Document Management', logo: '🎨' },
    { name: 'Autodesk', category: 'Software', type: 'Design Software, 3D Modeling', logo: '🖌️' },
    { name: 'CorelDRAW', category: 'Software', type: 'Design Software, Vector Graphics', logo: '🎨' },
    // SaaS Solutions
    { name: 'JumpCloud', category: 'SaaS', type: 'Identity Management, MDM', logo: '🔑' },
    { name: 'ServiceNow', category: 'SaaS', type: 'ITSM, Workflow Automation', logo: '⚙️' },
    { name: 'Zoom', category: 'SaaS', type: 'Video Conferencing, UCaaS', logo: '📹' },
    { name: 'Slack', category: 'SaaS', type: 'Team Collaboration, Integration', logo: '💬' },
    { name: 'HRMS', category: 'SaaS', type: 'HR Management, Payroll', logo: '👥' },
    { name: 'Zoho', category: 'SaaS', type: 'CRM, Productivity Suite', logo: '📈' },
    { name: 'Oracle idam', category: 'SaaS', type: 'Identity and Access Management', logo: '🔐' },
    { name: 'Jira', category: 'SaaS', type: 'Project Management, Issue Tracking', logo: '📋' },
    {name:'Ivanti', category:'SaaS', type:'IT Asset Management, ITSM', logo:'🛠️'} ,
    {name:'Cymmetri', category:'SaaS', type:'Security Operations, Threat Detection', logo:'🛡️'}   ,
    {name:'Knight fintech', category:'SaaS', type:'Cybersecurity, Managed Security Services', logo:'🛡️'}    ,
    {name:'Symphony', category:'SaaS', type:'Collaboration, Communication', logo:'💬'} ,



    // Networking
    { name: 'Ubiquiti', category: 'Networking', type: 'Wireless, Routers, Switches', logo: '📡' },
    { name: 'TP-Link', category: 'Networking', type: 'Routers, Switches, Access Points', logo: '📶' },
    { name: 'Cisco', category: 'Networking', type: 'Routers, Switches, Wireless', logo: '🌐' },
    { name: 'Juniper', category: 'Networking', type: 'Routers, Switches, Security', logo: '🔗' },

    
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesFilter = activeFilter === 'All' || partner.category === activeFilter;
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Partner Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Comprehensive partnerships across all technology domains
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
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
        </motion.div>

        {/* Partners Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card card-hover group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{partner.logo}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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
            className="text-center py-16"
          >
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No partners found matching your criteria</p>
              <p className="text-sm">Try adjusting your search or filter settings</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PartnerCategories;