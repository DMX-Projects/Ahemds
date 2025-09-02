import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { feature: 'Custom Integration Design', general: true, bfsi: true },
    { feature: 'Regulatory Compliance', general: false, bfsi: true },
    { feature: 'Security Frameworks', general: true, bfsi: true },
    { feature: 'Real-time Monitoring', general: true, bfsi: true },
    { feature: 'Audit Trail Management', general: false, bfsi: true },
    { feature: 'Cost Optimization', general: true, bfsi: true },
    { feature: 'Industry-specific Certifications', general: false, bfsi: true },
    { feature: '24/7 Support', general: true, bfsi: true },
    { feature: 'Disaster Recovery', general: true, bfsi: true },
    { feature: 'Vendor Management', general: true, bfsi: true }
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
            Solution <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Compare our general business solutions with specialized BFSI offerings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-6 px-6 text-lg font-bold text-slate-900 dark:text-white">
                    Features
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      General Business
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Standard Solutions
                    </div>
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      BFSI Solutions
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Specialized Banking & Finance
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <motion.tr
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.general ? (
                        <Check className="w-6 h-6 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-slate-300 dark:text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.bfsi ? (
                        <Check className="w-6 h-6 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-slate-300 dark:text-slate-600 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;