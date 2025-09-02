import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Star, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Technology <span className="gradient-text">Partnerships</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Strategic alliances with industry leaders, enabling us to deliver comprehensive, 
            best-in-class technology solutions
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Handshake, title: 'Strategic Partners', count: '50+', color: 'blue' },
            { icon: Star, title: 'Certified Engineers', count: '100+', color: 'emerald' },
            { icon: Globe, title: 'Global Vendors', count: '25+', color: 'purple' }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="card card-hover group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.count}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;