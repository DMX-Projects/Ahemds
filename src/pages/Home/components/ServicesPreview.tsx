import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Server, 
  Shield, 
  Cloud, 
  ArrowRight,
  Zap,
  Network,
  Database
} from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'End Compute Solutions',
      description: 'Hardware, MDM, VDI, Collaboration, ITAM, ITSM',
      features: ['Hardware Supply', 'Mobile Device Management', 'Virtual Desktop Infrastructure', 'Collaboration Tools'],
      gradient: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Server,
      title: 'DC Services',
      description: 'Managed Services, Migration, Cloud Management',
      features: ['Data Center Management', 'Cloud Migration', 'Hybrid Infrastructure', 'Disaster Recovery'],
      gradient: 'from-emerald-500 to-emerald-600',
      delay: 0.2
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity and compliance',
      features: ['Security Assessment', 'Threat Management', 'Compliance Support', 'Identity Management'],
      gradient: 'from-purple-500 to-purple-600',
      delay: 0.4
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Multi-cloud strategy and implementation',
      features: ['Cloud Strategy', 'Multi-cloud Setup', 'Cost Optimization', 'Performance Monitoring'],
      gradient: 'from-cyan-500 to-cyan-600',
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology integration services designed to transform your business operations
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`card group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''} ${
                index === 1 ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="card group cursor-pointer">
            <Network className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Network Infrastructure</h4>
            <p className="text-slate-600 dark:text-slate-400">Enterprise networking solutions with Cisco, HPE, and leading vendors</p>
          </div>
          
          <div className="card group cursor-pointer">
            <Database className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Management</h4>
            <p className="text-slate-600 dark:text-slate-400">Comprehensive data strategy, storage, and analytics solutions</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/services" className="btn-secondary group">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;