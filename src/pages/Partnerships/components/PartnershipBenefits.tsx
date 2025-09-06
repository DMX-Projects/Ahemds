import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Shield, Zap, Users, Globe } from 'lucide-react';

const PartnershipBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds the highest certifications from all major technology vendors.',
      metrics: '100+ Active Certifications'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful implementations across diverse industries.',
      metrics: '98% Project Success Rate'
    },
    {
      icon: Shield,
      title: 'Vendor Independence',
      description: 'Unbiased recommendations based on your specific requirements and budget.',
      metrics: 'Completely Vendor Neutral'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Accelerated time-to-value through proven methodologies and partnerships.',
      metrics: '50% Faster Implementation'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 support with direct access to vendor technical resources.',
      metrics: '24/7/365 Availability'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide support capabilities through our extended partner network.',
      metrics: '25+ Countries Covered'
    }
  ];

  return (
    <section className="min-h-screen py-12 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Partnership <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Why our strategic partnerships deliver superior value for your technology investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {benefit.description}
              </p>

              <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg">
                {benefit.metrics}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipBenefits;