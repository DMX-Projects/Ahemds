import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy } from 'lucide-react';

const advantages = [
  { 
    title: 'Deep Industry Knowledge', 
    desc: 'Cross-sector experience (manufacturing, healthcare, commercial).' 
  },
  { 
    title: 'Open Standards', 
    desc: 'Ensuring interoperability and scalability.' 
  },
  { 
    title: 'Dedicated Support', 
    desc: 'Training for seamless adoption and ongoing optimization.' 
  },
  { 
    title: 'Strong Partnerships', 
    desc: 'With leading technology vendors and integrators.' 
  }
];

const Advantages = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className=" text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why <span className="gradient-text">Choose us</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our Competitive Advantages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((adv, idx) => (
            <div key={adv.title} className="card card-hover group relative text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {adv.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {adv.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
