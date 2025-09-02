import React from 'react';
import { motion } from 'framer-motion';
import { Building, Factory, HeartHandshake, Briefcase } from 'lucide-react';

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
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Tailored technology solutions designed for specific industry challenges and requirements
          </p>
        </motion.div>

        {/* Industry Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building, title: 'Enterprise', desc: 'Large-scale corporate solutions', color: 'blue' },
            { icon: Factory, title: 'Manufacturing', desc: 'Industrial automation & IoT', color: 'emerald' },
            { icon: HeartHandshake, title: 'Healthcare', desc: 'HIPAA-compliant systems', color: 'purple' },
            { icon: Briefcase, title: 'BFSI', desc: 'Banking & financial services', color: 'cyan' }
          ].map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="card card-hover group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-${industry.color}-500 to-${industry.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {industry.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;