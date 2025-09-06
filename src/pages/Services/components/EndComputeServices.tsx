import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Shield, 
  Video, 
  HardDrive,
  Wrench,
  Users,
  Settings,
  Headphones,
  FileText
} from 'lucide-react';

const EndComputeServices: React.FC = () => {
  const services = [
    {
      icon: HardDrive,
      title: 'Hardware Supply and Deployment',
      description: 'Complete hardware lifecycle management from procurement to deployment.',
      features: ['Procurement Strategy', 'Installation Services', 'Configuration Management', 'Asset Tracking']
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device security and management solutions.',
      features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Remote Wipe']
    },
    {
      icon: Monitor,
      title: 'Virtual Desktop Infrastructure (VDI)',
      description: 'Scalable virtual desktop solutions for modern workforce.',
      features: ['Desktop Virtualization', 'Application Delivery', 'Performance Optimization', 'User Experience']
    },
    {
      icon: Shield,
      title: 'Secure Browser Solutions',
      description: 'Enterprise-grade secure browsing and web application access.',
      features: ['Secure Web Gateway', 'Browser Isolation', 'Policy Enforcement', 'Threat Protection']
    },
    {
      icon: Wrench,
      title: 'Docking Solutions',
      description: 'Professional docking stations and workspace optimization.',
      features: ['Universal Docking', 'Multi-Monitor Support', 'USB-C Integration', 'Cable Management']
    },
    {
      icon: Settings,
      title: 'Rack Mounting Solutions',
      description: 'Professional rack installation and data center setup.',
      features: ['Rack Design', 'Cable Management', 'Power Distribution', 'Cooling Solutions']
    },
    {
      icon: Video,
      title: 'Collaboration Solutions',
      description: 'Modern video conferencing and team collaboration platforms.',
      features: ['Video Conferencing', 'Digital Whiteboarding', 'Screen Sharing', 'Recording Solutions']
    },
    {
      icon: FileText,
      title: 'IT Asset Management (ITAM)',
      description: 'Complete visibility and control over IT assets and lifecycle.',
      features: ['Asset Discovery', 'License Management', 'Cost Optimization', 'Compliance Tracking']
    },
    {
      icon: Headphones,
      title: 'IT Service Management (ITSM)',
      description: 'Streamlined IT service delivery and support processes.',
      features: ['Incident Management', 'Change Management', 'Problem Resolution', 'Service Catalog']
    },
    {
      icon: Users,
      title: 'Productivity Tools',
      description: 'Comprehensive productivity and collaboration software suites.',
      features: ['Office Suites', 'Communication Tools', 'Project Management', 'Knowledge Management']
    }
  ];

  return (
    <section id="end-compute" className="min-h-screen py-12 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="gradient-text">End Compute</span> Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive endpoint solutions that empower your workforce with secure, efficient, and scalable technology
          </p>
        </motion.div>

        {/* Bento Grid Layout - Fixed Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndComputeServices;