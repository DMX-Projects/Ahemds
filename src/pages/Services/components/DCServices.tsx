import React, { memo } from 'react';
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
  Settings
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
    features: [
      'Server/HCI Solutions',
      'Backup Solutions',
      'Security Solutions',
      'Migration Services',
      'Storage Solutions',
      'Network Infrastructure',
      'Installation Services'
    ],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'Managed Services',
    description: '24/7 monitoring, maintenance, and support for your data center infrastructure.',
    features: [
      'Data Centre Infrastructure Management',
      'VAPT Services',
      '24/7 Monitoring',
      'Preventive Maintenance',
      'Performance Optimization',
      'Technical Support'
    ],
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: RefreshCw,
    title: 'Migration Services',
    description: 'Seamless migration of applications, data, and infrastructure.',
    features: [
      'Migration Planning',
      'Data Transfer',
      'Application Migration',
      'Zero Downtime Solutions',
      'Legacy System Modernization',
      'Risk Assessment'
    ],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'DC Consulting Services',
    description: 'Strategic consulting for data center optimization and modernization.',
    features: [
      'Capacity Planning',
      'Architecture Design',
      'Cost Optimization',
      'Best Practices Implementation',
      'Performance Analysis',
      'Compliance Auditing'
    ],
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Shield,
    title: 'Disaster Recovery Management',
    description: 'Comprehensive DR planning and implementation for business continuity.',
    features: [
      'DR Setup',
      'DR Migration',
      'DR Management',
      'Active-Active DR',
      'Active-Passive DR',
      'DR Strategy Planning',
      'Business Continuity Solutions'
    ],
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Management',
    description: 'Multi-cloud strategy, implementation, and ongoing management.',
    features: [
      'Cloud Managed Services - AWS, Azure, GCP',
      'On-premises to Cloud Migration',
      'Cloud to On-premises Migration',
      'Cost Management & Optimization',
      'Security Controls',
      'Multi-Cloud Strategy'
    ],
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Network,
    title: 'Hybrid Infrastructure Management',
    description: 'Seamless integration of on-premise and cloud resources.',
    features: [
      'Hybrid Architecture Design',
      'Connectivity Solutions',
      'Workload Placement Optimization',
      'Performance Monitoring',
      'Resource Orchestration',
      'Integration Management'
    ],
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'SaaS Management',
    description: 'Comprehensive SaaS application lifecycle and governance.',
    features: [
      'SaaS Discovery & Inventory',
      'License Optimization',
      'Security Controls',
      'Integration Management',
      'Cost Governance',
      'Compliance Monitoring'
    ],
    gradient: 'from-orange-500 to-orange-600'
  }
];

const DCServices: React.FC = memo(() => (
  <section id="dc-services" className="py-24 bg-white dark:bg-slate-900">
    <div className="container-custom">
      {/* Section Header */}
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
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade data center solutions that ensure reliability, scalability, and optimal performance for your business infrastructure
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional CTA Button */}
              
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Transform Your Infrastructure?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Get started with our comprehensive data center services and experience enterprise-grade reliability and performance.
          </p>
          <button 
  onClick={() => {
    const to = 'sales@freshrootstech.com';
    const subject = encodeURIComponent('Inquiry About Data Center Services');
    const body = encodeURIComponent('Hi Freshroots Technologies Team,\n\nI am interested in learning more about your Data Center Services.\n\nBest regards');
    
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }}
  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  Get Started Today
</button>

        </div>
      </motion.div>
    </div>
  </section>
));

DCServices.displayName = 'DCServices';

export default DCServices;
