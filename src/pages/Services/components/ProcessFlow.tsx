import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Cog, Rocket, CheckCircle, LifeBuoy } from 'lucide-react';

const ProcessFlow: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current infrastructure and business requirements.',
      duration: '1-2 weeks'
    },
    {
      icon: FileText,
      title: 'Solution Design',
      description: 'Custom architecture design and detailed implementation roadmap.',
      duration: '2-3 weeks'
    },
    {
      icon: Cog,
      title: 'Implementation',
      description: 'Professional deployment with minimal business disruption.',
      duration: '4-12 weeks'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Validation',
      description: 'Rigorous testing to ensure optimal performance and security.',
      duration: '1-2 weeks'
    },
    {
      icon: Rocket,
      title: 'Go-Live',
      description: 'Smooth transition to production with comprehensive monitoring.',
      duration: '1 week'
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description: '24/7 support, maintenance, and continuous optimization.',
      duration: 'Ongoing'
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
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and optimal outcomes
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card card-hover group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mt-2">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;