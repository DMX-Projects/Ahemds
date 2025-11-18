import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ClipboardCheck, Layers } from 'lucide-react';

const nextSteps = [
  {
    title: 'Discovery Workshops',
    description: 'Align integration goals with business strategy.',
    icon: Compass,
    number: '01',
  },
  {
    title: 'Pilot Projects',
    description: 'Demonstrate ROI and validate technical approach.',
    icon: ClipboardCheck,
    number: '02',
  },
  {
    title: 'Flexible Engagement Models',
    description: 'Turnkey projects, managed services, or consulting.',
    icon: Layers,
    number: '03',
  },
];

const PartnerShipAndNextStep = () => {
  return (
    <section className="min-h-screen py-16 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Partnership &  <span className="gradient-text">NextStep</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Your roadmap to successful collaboration and integration excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {nextSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 32px 0 rgba(16, 185, 129, 0.15)'
              }}
              className="relative card card-hover p-8 rounded-2xl bg-white dark:bg-slate-800 border-t-4 border-emerald-500 shadow-xl text-center group transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-slate-800">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-black-700 dark:text-emerald-400 mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2 leading-relaxed text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8"
        >
          <h4 className="text-2xl font-bold text-slate-700 dark:text-emerald-400 mb-6">
            Let’s build your connected future together.
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerShipAndNextStep;
