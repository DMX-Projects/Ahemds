import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Heart, Rocket } from 'lucide-react';

const CompanyValues: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting partnerships through consistent delivery and transparent communication.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technologies to solve complex business challenges.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our mission. We go beyond implementation to ensure outcomes.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Commitment to quality in every project, from conception to completion.',
      gradient: 'from-cyan-500 to-cyan-600'
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
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The principles that guide our approach to systems integration and client partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;