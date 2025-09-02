import React from 'react';
import { motion } from 'framer-motion';
import { Building, Factory, HeartHandshake, GraduationCap, ShoppingCart, Truck } from 'lucide-react';

const IndustrySolutions: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Enterprise & Corporate',
      description: 'Comprehensive technology solutions for large-scale corporate environments.',
      solutions: [
        'Digital Workplace Transformation',
        'Enterprise Collaboration Platforms',
        'Business Process Automation',
        'Data Analytics & BI Solutions',
        'Cybersecurity Framework',
        'Cloud Migration Strategy'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing and operational excellence.',
      solutions: [
        'Industrial IoT Implementation',
        'Manufacturing Execution Systems',
        'Predictive Maintenance Solutions',
        'Supply Chain Integration',
        'Quality Management Systems',
        'Energy Management Solutions'
      ],
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: HeartHandshake,
      title: 'Healthcare',
      description: 'HIPAA-compliant technology solutions for healthcare organizations.',
      solutions: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'Medical Device Integration',
        'Patient Data Security',
        'Healthcare Analytics',
        'Compliance Management'
      ],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Modern learning environments with integrated technology solutions.',
      solutions: [
        'Digital Learning Platforms',
        'Campus Network Infrastructure',
        'Student Information Systems',
        'Virtual Classroom Solutions',
        'Research Computing',
        'Campus Security Systems'
      ],
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Omnichannel retail technology and customer experience solutions.',
      solutions: [
        'Point of Sale Systems',
        'Inventory Management',
        'Customer Analytics',
        'E-commerce Platforms',
        'Digital Signage',
        'Mobile Commerce Solutions'
      ],
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Technology solutions for efficient logistics and supply chain management.',
      solutions: [
        'Warehouse Management Systems',
        'Fleet Management Solutions',
        'RFID & Tracking Systems',
        'Route Optimization',
        'Supplier Integration',
        'Real-time Visibility'
      ],
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

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
            <span className="gradient-text">Industry-Specific</span> Solutions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tailored technology solutions that address unique challenges across different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;