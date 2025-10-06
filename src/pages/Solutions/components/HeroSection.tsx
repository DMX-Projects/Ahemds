import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Database, BarChart3, Wrench, Monitor, MessageSquare, ChevronRight, Settings, Building2 } from 'lucide-react';

const HeroSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const saasCategories = [
    {
      id: 'productivity',
      icon: Monitor,
      title: 'Productivity',
      color: 'blue',
      solutions: ['Microsoft O365', 'Google WS']
    },
    {
      id: 'hrms',
      icon: Users,
      title: 'HRMS',
      color: 'emerald',
      solutions: ['GreytHR', 'PocketHR']
    },
    {
      id: 'idam',
      icon: Database,
      title: 'IDAM',
      color: 'purple',
      solutions: ['Cymmetri', 'Archon', 'Oracle', 'Jumpcloud']
    },
    {
      id: 'dms',
      icon: BarChart3,
      title: 'DMS',
      color: 'cyan',
      solutions: ['Veinna Advantage']
    },
    {
      id: 'asset',
      icon: Wrench,
      title: 'IT Asset Management',
      color: 'orange',
      solutions: ['Jumpcloud']
    },
    {
      id: 'itsm',
      icon: Settings,
      title: 'ITSM',
      color: 'pink',
      solutions: ['Symphony.AI', 'Jira', 'Ivanti', 'Service Now']
    },
    {
      id: 'crm',
      icon: MessageSquare,
      title: 'CRM',
      color: 'indigo',
      solutions: ['Zoho']
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  const dotColorClasses = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500'
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive SaaS solutions across productivity, HRMS, identity management, and more
          </p>
        </motion.div>

        {/* SaaS Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {saasCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700"
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${colorClasses[category.color]} rounded-xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: expandedCategory === category.id ? 90 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </motion.div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              {/* Expandable Solutions */}
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      {category.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center py-1 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div className={`w-2 h-2 ${dotColorClasses[category.color]} rounded-full mr-3`}></div>
                          {solution}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Solution Count (when collapsed) */}
              <AnimatePresence>
                {expandedCategory !== category.id && (
                  <motion.p
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-slate-500 dark:text-slate-500"
                  >
                    {category.solutions.length} solution{category.solutions.length > 1 ? 's' : ''} available
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center mb-4"
            >
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Enterprise-Grade SaaS Ecosystem
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Our curated selection of industry-leading SaaS solutions covers everything from productivity and HR management 
              to identity access management and customer relationship management, ensuring your business has the right tools for every need.
            </motion.p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '7', label: 'Categories', color: 'text-blue-600' },
                { number: '15+', label: 'Solutions', color: 'text-emerald-600' },
                { number: '100%', label: 'Cloud-Based', color: 'text-purple-600' },
                { number: '24/7', label: 'Support', color: 'text-cyan-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
