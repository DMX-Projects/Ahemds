import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, CreditCard, Shield, BarChart3, Users, Globe } from 'lucide-react';

const BFSISolutions: React.FC = () => {
  const bfsiSolutions = [
    {
      icon: Banknote,
      title: 'Core Banking Systems',
      description: 'Modern core banking platform integration and digital transformation.',
      features: ['Digital Banking Platforms', 'Real-time Processing', 'API Integration', 'Regulatory Compliance']
    },
    {
      icon: CreditCard,
      title: 'Payment Solutions',
      description: 'Secure payment processing and digital wallet integration.',
      features: ['Payment Gateways', 'Digital Wallets', 'Fraud Detection', 'PCI Compliance']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and compliance management systems.',
      features: ['Risk Analytics', 'Compliance Monitoring', 'Audit Trails', 'Regulatory Reporting']
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Business intelligence and advanced analytics for financial services.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Customer Insights', 'Performance Metrics']
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Digital customer journey optimization and engagement platforms.',
      features: ['CRM Integration', 'Omnichannel Experience', 'Customer Analytics', 'Personalization']
    },
    {
      icon: Globe,
      title: 'RegTech Solutions',
      description: 'Regulatory technology for compliance automation and monitoring.',
      features: ['Automated Compliance', 'Regulatory Updates', 'Risk Monitoring', 'Audit Support']
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="gradient-text">BFSI</span> Specialized Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Banking, Financial Services, and Insurance solutions with regulatory compliance and security focus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bfsiSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {solution.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
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

export default BFSISolutions;