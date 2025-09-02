import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Shield, Cloud } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology integration services designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Monitor, title: 'End Compute', count: '12+', color: 'blue' },
            { icon: Server, title: 'DC Services', count: '8+', color: 'emerald' },
            { icon: Shield, title: 'Security', count: '15+', color: 'purple' },
            { icon: Cloud, title: 'Cloud Solutions', count: '10+', color: 'cyan' }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="card card-hover group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                {category.count} Solutions
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;