import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Shield, Network, ChevronRight, X } from 'lucide-react';

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
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'devices', icon: Monitor, title: 'Devices', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'dcServices', icon: Server, title: 'DC Services', gradient: 'from-emerald-500 to-teal-500' },
    { id: 'security', icon: Shield, title: 'Security', gradient: 'from-purple-500 to-pink-500' },
    { id: 'network', icon: Network, title: 'Network', gradient: 'from-orange-500 to-red-500' }
  ];

  const serviceDetails = {
    // Devices category
    'Device Supply and Deployment': {
      title: 'Device Supply & Deployment',
      description: 'Complete lifecycle management from procurement to deployment of laptops, desktops, tablets and peripherals across your organization.',
      features: [
        'Multi-OEM procurement (Dell, HP, Lenovo, Apple)',
        'Bulk deployment & imaging',
        'Asset tagging & inventory',
        'Zero-touch provisioning',
        'Nationwide deployment teams'
      ]
    },
    'MDM': {
      title: 'Mobile Device Management',
      description: 'Centralized management of mobile devices, applications, and content across various platforms.',
      features: [
        'Apple Business Manager integration',
        'Android Enterprise enrollment',
        'App deployment & management',
        'Remote wipe & lock',
        'Compliance monitoring'
      ]
    },
    'VDI': {
      title: 'Virtual Desktop Infrastructure (VDI)',
      description: 'Deliver secure virtual desktops to users anywhere with centralized management and scalable infrastructure.',
      features: [
        'Multiple hypervisor support',
        'High availability & failover',
        'User profile management',
        'Secure access options',
        'Optimized performance tuning'
      ]
    },
    'Secure Browser': {
      title: 'Secure Browser',
      description: 'Provide users a safe browsing environment with limited functionalities and enhanced security controls.',
      features: [
        'Whitelisted websites only',
        'Blocked downloads and plugins',
        'Session isolation',
        'Encrypted data transmission',
        'Policy enforcement via MDM'
      ]
    },
    'Docking Solutions': {
      title: 'Docking Solutions',
      description: 'Enterprise-grade docking stations for enhanced connectivity and workspace flexibility.',
      features: [
        'Multi-monitor support',
        'USB-C and Thunderbolt compatibility',
        'Power delivery',
        'Compact and portable designs',
        'Comprehensive OEM support'
      ]
    },
    'Rack Mounting Solutions': {
      title: 'Rack Mounting Solutions',
      description: 'Professional rack installation and cable management for data center and server rooms.',
      features: [
        'Custom rack configuration',
        'Cable routing and labeling',
        'Heat and airflow optimization',
        'Physical security measures',
        'Installation documentation'
      ]
    },
    'Collaboration Solutions': {
      title: 'Collaboration Solutions',
      description: 'Integrated tools and platforms for team communication and project collaboration.',
      features: [
        'Video conferencing',
        'Instant messaging',
        'Document sharing',
        'Integrated calendars',
        'Third-party app integrations'
      ]
    },
    'ITAM': {
      title: 'IT Asset Management (ITAM)',
      description: 'Track, manage, and optimize your organization\'s IT assets throughout their lifecycle.',
      features: [
        'Asset discovery and inventory',
        'License management',
        'Lifecycle tracking',
        'Automated reporting',
        'Compliance alerts'
      ]
    },
    'ITSM': {
      title: 'IT Service Management (ITSM)',
      description: 'Streamline IT service delivery with structured processes and automation.',
      features: [
        'Incident and problem management',
        'Change and release management',
        'Service request fulfillment',
        'Knowledge base',
        'User self-service portals'
      ]
    },
    'Productivity Tools': {
      title: 'Productivity Tools',
      description: 'Office suite and workflow tools to enhance team productivity and operational efficiency.',
      features: [
        'Office applications (Word, Excel, PowerPoint)',
        'Email and calendar',
        'Cloud storage integration',
        'Workflow automation',
        'Mobile device support'
      ]
    },
    'Software\'s': {
      title: 'Software Solutions',
      description: 'Business-critical and infrastructure software licensing, installation, and support.',
      features: [
        'Line-of-business applications',
        'Operating system deployment',
        'Security software',
        'Patch management',
        'License compliance'
      ]
    },
    'End Point Support Services': {
      title: 'Endpoint Support Services',
      description: 'Comprehensive support and maintenance for end-user devices.',
      features: [
        'Helpdesk and troubleshooting',
        'Onsite and remote support',
        'Device health monitoring',
        'Software updates',
        'Incident resolution'
      ]
    },
    // DC Services category
    'Hardware Supply and Deployment': {
      title: 'Hardware Supply & Deployment',
      description: 'Provisioning and installation of data center hardware including servers, storage, and networking gear.',
      features: [
        'Multi-vendor hardware sourcing',
        'Rack & stack services',
        'Configuration and lab testing',
        'Firmware and OS installation',
        'Logistics and deployment'
      ]
    },
    'Managed Services': {
      title: 'Managed Services',
      description: 'End-to-end management and monitoring of your data center infrastructure for optimal performance.',
      features: [
        '24/7 monitoring',
        'Patch and update management',
        'Performance tuning',
        'Backup & disaster recovery',
        'Incident response'
      ]
    },
    'Migration Services': {
      title: 'Migration Services',
      description: 'Safe and efficient data and infrastructure migration with minimal downtime.',
      features: [
        'Assessment and planning',
        'Data migration',
        'Application migration',
        'Cutover and validation',
        'Post-migration support'
      ]
    },
    'DC Consulting Services': {
      title: 'Data Center Consulting',
      description: 'Expert advice for data center design, capacity planning, and optimization.',
      features: [
        'Infrastructure assessment',
        'Capacity planning',
        'Energy efficiency',
        'Security consulting',
        'Compliance advisory'
      ]
    },
    'DR Management': {
      title: 'Disaster Recovery Management',
      description: 'Strategy and implementation for uninterrupted business continuity and rapid recovery.',
      features: [
        'DR planning',
        'Replication and backup design',
        'Failover testing',
        'Data recovery',
        'Compliance and audit readiness'
      ]
    },
    'Cloud Management': {
      title: 'Cloud Management',
      description: 'Configure, operate, and optimize cloud environments across public and private platforms.',
      features: [
        'Cloud provisioning',
        'Cost optimization',
        'Security and compliance',
        'Performance monitoring',
        'Migration and hybrid setups'
      ]
    },
    'Hybrid Infra Management': {
      title: 'Hybrid Infrastructure Management',
      description: 'Integrated management of on-premise and cloud infrastructure for seamless operation.',
      features: [
        'Unified monitoring',
        'Resource orchestration',
        'Automation workflows',
        'Security enforcement',
        'Capacity governance'
      ]
    },
    'SaaS Management': {
      title: 'SaaS Management',
      description: 'Centralized license, user and security management for SaaS applications.',
      features: [
        'User provisioning',
        'License allocation and tracking',
        'Security policy enforcement',
        'Usage analytics',
        'Compliance and reporting'
      ]
    },
    // Security category
    'Network Security': {
      title: 'Network Security',
      description: 'Protect your network infrastructure from intrusions, malware, and unauthorized access.',
      features: [
        'Firewall management',
        'Intrusion detection & prevention',
        'VPN and remote access',
        'Threat intelligence',
        'Security incident response'
      ]
    },
    'Endpoint Security': {
      title: 'Endpoint Security',
      description: 'Safeguard endpoints with antivirus, threat detection, and device control.',
      features: [
        'Antivirus & anti-malware',
        'Endpoint Detection & Response (EDR)',
        'Device control policies',
        'Patch and vulnerability management',
        'Security analytics'
      ]
    },
    'Cloud Security': {
      title: 'Cloud Security',
      description: 'Protect cloud workloads and data with advanced cloud-native security controls.',
      features: [
        'Identity & access management',
        'Data loss prevention',
        'Cloud workload protection',
        'Threat detection & response',
        'Compliance management'
      ]
    },
    'Identity & Access Management': {
      title: 'Identity & Access Management',
      description: 'Manage user identities and control access across your enterprise systems securely.',
      features: [
        'Single Sign-On (SSO)',
        'Multi-Factor Authentication (MFA)',
        'Role-based access control',
        'User lifecycle management',
        'Audit and compliance reports'
      ]
    },
    'Threat Intelligence': {
      title: 'Threat Intelligence',
      description: 'Real-time actionable information to anticipate, detect, and respond to threats.',
      features: [
        'Threat feed aggregation',
        'Behavior analysis',
        'Vulnerability tracking',
        'Security alerts & reporting',
        'Integration with security tools'
      ]
    },
    'Security Operations Center': {
      title: 'Security Operations Center (SOC)',
      description: '24x7 proactive monitoring, detection and response to security incidents.',
      features: [
        'Continuous threat monitoring',
        'Incident triage and response',
        'Forensic investigations',
        'Security tool integration',
        'Compliance reporting'
      ]
    },
    'Vulnerability Assessment': {
      title: 'Vulnerability Assessment',
      description: 'Identify security gaps through regular scanning and assessment.',
      features: [
        'External & internal scans',
        'Penetration testing',
        'Risk prioritization',
        'Remediation guidance',
        'Compliance reporting'
      ]
    },
    'Compliance Management': {
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with ongoing policy enforcement and reporting.',
      features: [
        'Audit readiness',
        'Policy management',
        'Compliance dashboards',
        'User training programs',
        'Incident reporting'
      ]
    },
    // Network category
    'Network Design & Architecture': {
      title: 'Network Design & Architecture',
      description: 'Design scalable, resilient, and secure network infrastructures.',
      features: [
        'Network topology design',
        'Capacity planning',
        'Redundancy & failover',
        'Security architecture',
        'Documentation & diagrams'
      ]
    },
    'SD-WAN Solutions': {
      title: 'SD-WAN Solutions',
      description: 'Software-defined wide area network services for optimized connectivity.',
      features: [
        'Centralized control',
        'Traffic prioritization',
        'Hybrid WAN support',
        'Cloud application optimization',
        'Cost reduction'
      ]
    },
    'Network Monitoring': {
      title: 'Network Monitoring',
      description: 'Real-time monitoring of network performance and availability.',
      features: [
        'Traffic analysis',
        'Fault detection',
        'Performance metrics',
        'Alerting & reporting',
        'Historical data visualization'
      ]
    },
    'Wireless Solutions': {
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless design, deployment, and management.',
      features: [
        'Wi-Fi design and site surveys',
        'Access point installation',
        'Network security',
        'Roaming and QoS management',
        'Capacity planning'
      ]
    },
    'Load Balancing': {
      title: 'Load Balancing',
      description: 'Distribute network or application traffic across multiple servers for reliability and performance.',
      features: [
        'Application load balancing',
        'Hardware and software options',
        'High availability',
        'SSL offloading',
        'Health checks'
      ]
    },
    'Network Optimization': {
      title: 'Network Optimization',
      description: 'Improve network efficiency and performance with advanced optimization techniques.',
      features: [
        'Traffic shaping',
        'WAN optimization',
        'Latency reduction',
        'QoS enforcement',
        'Bandwidth allocation'
      ]
    },
    'Bandwidth Management': {
      title: 'Bandwidth Management',
      description: 'Control and allocate bandwidth to ensure service quality and prevent congestion.',
      features: [
        'Traffic prioritization',
        'Rate limiting',
        'Fair usage policies',
        'Real-time monitoring',
        'Reporting and analytics'
      ]
    },
    'Network Support Services': {
      title: 'Network Support Services',
      description: 'Comprehensive support for all network infrastructure components.',
      features: [
        'Troubleshooting and repair',
        'Configuration management',
        'Firmware and software updates',
        'Network documentation',
        'Emergency response'
      ]
    }
  };

  const closeModal = () => setSelectedService(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 flex-1 sm:flex-none max-w-xs justify-center ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl shadow-${category.gradient.split(' ')[1]}-500/40 scale-105 ring-4 ring-${category.gradient.split(' ')[1]}-500/20`
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 hover:bg-slate-50 shadow-lg hover:shadow-xl hover:scale-105 dark:text-slate-300 dark:hover:bg-slate-700/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50'
              }`}
            >
              <category.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-white/50 dark:border-slate-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicesData[activeCategory].map((service, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-700/70 hover:from-emerald-50/80 hover:to-cyan-50/80 dark:hover:from-emerald-500/10 dark:hover:to-cyan-500/10 border-2 border-slate-100/60 dark:border-slate-700/60 hover:border-emerald-300/80 dark:hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/10 backdrop-blur-md cursor-pointer min-h-[52px] transition-all duration-500 overflow-hidden relative"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 group-hover:scale-200 group-hover:rotate-180 transition-all duration-500 shadow-lg"></div>
                <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-semibold flex-1 truncate pr-2">
                  {service}
                </span>
                <motion.div 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-500 ml-auto opacity-0 group-hover:opacity-100 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-full h-full" />
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)"
              }}
              className="text-center p-6 sm:p-8 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/60 dark:border-slate-700/60 hover:border-emerald-400/50 group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-2xl ring-4 ring-white/50 shadow-${category.gradient.split(' ')[1]}-500/30`}>
                <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
              </div>
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 tracking-tight">
                {servicesData[category.id].length}+
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 tracking-wide uppercase">Solutions</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Service Detail Modal */}
      <AnimatePresence mode="wait">
  {selectedService && serviceDetails[selectedService] && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6
           bg-black/40 backdrop-blur-2xl"

      onClick={closeModal}
    >

            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 300,
                duration: 0.4
              }}
              className="bg-gradient-to-br from-white/95 via-slate-50/90 to-emerald-50/80 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-800/80 backdrop-blur-3xl rounded-3xl shadow-3xl border border-white/50 dark:border-slate-700/50 max-w-lg sm:max-w-2xl w-full max-h-[95vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Gradient */}
              <div className="p-8 sm:p-10 border-b border-white/30 dark:border-slate-700/50 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 dark:from-emerald-400 dark:via-cyan-300 dark:to-emerald-500 bg-clip-text text-transparent tracking-tight leading-tight">
                      {serviceDetails[selectedService].title}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3 shadow-lg"></div>
                  </div>
                  <motion.button
                    onClick={closeModal}
                    className="p-3 hover:bg-white/20 dark:hover:bg-slate-700/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-90 group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 sm:p-10 max-h-[60vh] overflow-y-auto">
                <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium bg-gradient-to-r from-slate-900/20 to-slate-800/10 dark:from-slate-300/50 dark:to-white/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
                  {serviceDetails[selectedService].description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
                    🚀 Key Features
                  </h4>
                  <div className="grid gap-4">
                    {serviceDetails[selectedService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          delay: 0.1 + index * 0.08, 
                          duration: 0.5,
                          type: 'spring'
                        }}
                        className="group flex items-start gap-4 p-6 bg-white/60 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-slate-700/60 hover:bg-white/80 dark:hover:bg-slate-700/80 hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-500 cursor-default hover:border-emerald-400/60 relative overflow-hidden"
                      >
                        <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3.5 shadow-lg group-hover:scale-125 group-hover:rotate-180 transition-all duration-500"></div>
                        <span className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white">
                          {feature}
                        </span>
                        {/* Feature glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="mt-18
                 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;

