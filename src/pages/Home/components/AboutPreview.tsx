import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Established Expertise',
      description: 'Founded in 2025 with an aim in delivering seamless integration solutions across industries.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Core Specialization',
      description: 'Expertise in integrating complex IT, automation, and control systems.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Skilled Professionals',
      description: 'Building team of certified engineers, architects, and project managers driving innovation.',
      gradient: 'from-blue-600 to-emerald-600'
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
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Your Trusted Systems
            <span className="block gradient-text">Integration Partner</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between technology and business success, delivering comprehensive 
            integration solutions that drive digital transformation.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/about" className="btn-primary group inline-flex items-center">
            Learn More About Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;