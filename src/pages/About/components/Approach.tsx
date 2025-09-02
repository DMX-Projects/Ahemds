import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search, Cog, Rocket, LifeBuoy } from 'lucide-react';

const Approach: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Comprehensive Assessment',
      description: 'From legacy audits to future-state architecture analysis.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Custom Design',
      description: 'Tailored solutions combining hardware, software, and networks.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Proven Methodologies',
      description: 'Agile project management, risk mitigation, and quality assurance.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Vendor-Neutral',
      description: 'Selecting best-of-breed components for optimal performance.',
      gradient: 'from-cyan-500 to-cyan-600'
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
            Our Approach: <span className="gradient-text">End-to-End Integration Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We follow a systematic approach to ensure successful technology integration and business transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card card-hover group relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mt-4`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: 'Deep Industry Knowledge', desc: 'Cross-sector experience (manufacturing, healthcare, commercial).' },
            { title: 'Open Standards', desc: 'Ensuring interoperability and scalability.' },
            { title: 'Dedicated Support', desc: 'Training for seamless adoption and ongoing optimization.' },
            { title: 'Strong Partnerships', desc: 'With leading technology vendors and integrators.' }
          ].map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;