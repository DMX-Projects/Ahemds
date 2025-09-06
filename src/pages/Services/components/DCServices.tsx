import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  RefreshCw, 
  Shield, 
  Cloud, 
  Network,
  BarChart3,
  Zap,
  Settings // <-- Import added
} from 'lucide-react';

// Service type ensuring correct typing for icon property
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: Server,
    title: 'Hardware Supply and Deployment',
    description: 'Enterprise-grade servers, storage, and networking equipment.',
    features: ['Server Procurement', 'Storage Solutions', 'Network Infrastructure', 'Installation Services'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'Managed Services',
    description: '24/7 monitoring, maintenance, and support for your data center infrastructure.',
    features: ['24/7 Monitoring', 'Preventive Maintenance', 'Performance Optimization', 'Technical Support'],
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: RefreshCw,
    title: 'Migration Services',
    description: 'Seamless migration of applications, data, and infrastructure.',
    features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Minimal Downtime'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'DC Consulting Services',
    description: 'Strategic consulting for data center optimization and modernization.',
    features: ['Capacity Planning', 'Architecture Design', 'Cost Optimization', 'Best Practices'],
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Disaster Recovery Management',
    description: 'Comprehensive DR planning and implementation for business continuity.',
    features: ['DR Strategy', 'Backup Solutions', 'Recovery Testing', 'Compliance Support'],
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Management',
    description: 'Multi-cloud strategy, implementation, and ongoing management.',
    features: ['Cloud Strategy', 'Migration Planning', 'Cost Management', 'Security Controls'],
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Network,
    title: 'Hybrid Infrastructure Management',
    description: 'Seamless integration of on-premise and cloud resources.',
    features: ['Hybrid Design', 'Connectivity Solutions', 'Workload Placement', 'Performance Monitoring'],
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'SaaS Management',
    description: 'Comprehensive SaaS application lifecycle and governance.',
    features: ['SaaS Discovery', 'License Optimization', 'Security Controls', 'Integration Management'],
    gradient: 'from-orange-500 to-orange-600'
  }
];

const DCServices: React.FC = () => (
  <section id="dc-services" className="py-24 bg-white dark:bg-slate-900">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          <span className="gradient-text">Data Center</span> Services
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Enterprise-grade data center solutions that ensure reliability, scalability, and optimal performance
        </p>
      </motion.div>

      {/* Services Grid - Fixed Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group h-full flex flex-col"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
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
          );
        })}
      </div>
    </div>
  </section>
);

export default DCServices;