import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const PartnershipsPreview: React.FC = () => {
  const partnerCategories = [
    {
      title: 'Core Hardware',
      partners: ['HPE', 'Dell', 'Apple', 'Lenovo', 'ASUS'],
      color: 'blue'
    },
    {
      title: 'Cloud Platforms',
      partners: ['AWS', 'Azure', 'GCP', 'OCI'],
      color: 'emerald'
    },
    {
      title: 'Security',
      partners: ['CrowdStrike', 'SonicWall', 'Cisco', 'Fortinet'],
      color: 'purple'
    },
    {
      title: 'Software',
      partners: ['Microsoft', 'VMware', 'Oracle', 'Adobe'],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 text-blue-600 border-blue-200 bg-blue-50',
      emerald: 'from-emerald-500 to-emerald-600 text-emerald-600 border-emerald-200 bg-emerald-50',
      purple: 'from-purple-500 to-purple-600 text-purple-600 border-purple-200 bg-purple-50',
      cyan: 'from-cyan-500 to-cyan-600 text-cyan-600 border-cyan-200 bg-cyan-50'
    };
    return colorMap[color as keyof typeof colorMap];
  };

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
            Technology <span className="gradient-text">Partnerships</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strategic alliances with industry leaders to deliver best-in-class solutions
          </p>
        </motion.div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Star className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <motion.div
                    key={partner}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.05) }}
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 border dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 ${
                      getColorClasses(category.color).split(' ').slice(2).join(' ')
                    }`}
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {[
            { number: '50+', label: 'Technology Partners' },
            { number: '15+', label: 'Industry Verticals' },
            { number: '100%', label: 'Vendor Neutral' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="text-4xl md:text-5xl font-black gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/partnerships" className="btn-secondary group">
            Explore Partnerships
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsPreview;