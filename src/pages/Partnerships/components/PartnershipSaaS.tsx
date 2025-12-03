import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Database, Shield, Headphones, DollarSign, BarChart3, Zap } from 'lucide-react';

const PartnershipSaaS = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'bfsi'>('industry');

  const industryWidePartners = [
    {
      category: 'Productivity',
      icon: <Zap className="w-6 h-6" />,
      partners: [
        { name: 'Microsoft O365', color: 'from-blue-600 to-blue-700' },
        { name: 'Google Workspace', color: 'from-red-500 to-yellow-500' }
      ]
    },
    {
      category: 'HRMS',
      icon: <Users className="w-6 h-6" />,
      partners: [
        { name: 'Sparsh Technologies', color: 'from-primary-600 to-primary-700' }
      ]
    },
    {
      category: 'IDAM',
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { name: 'Cymmetri', color: 'from-purple-600 to-purple-700' },
        { name: 'Jumpcloud', color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      category: 'DMS',
      icon: <Database className="w-6 h-6" />,
      partners: [
        { name: 'Veinna Advantage', color: 'from-secondary-600 to-secondary-700' }
      ]
    },
    {
      category: 'IT Asset Management',
      icon: <Building2 className="w-6 h-6" />,
      partners: [
        { name: 'Jumpcloud', color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      category: 'ITSM',
      icon: <BarChart3 className="w-6 h-6" />,
      partners: [
        { name: 'Freshworks', color: 'from-green-600 to-green-700' }
      ]
    },
    {
      category: 'CRM',
      icon: <Headphones className="w-6 h-6" />,
      partners: [
        { name: 'Zoho', color: 'from-orange-600 to-orange-700' }
      ]
    }
  ];

  const bfsiPartners = [
    {
      category: 'HRMS',
      icon: <Users className="w-6 h-6" />,
      partners: [
        { name: 'Sparsh Technologies', color: 'from-primary-600 to-primary-700' }
      ]
    },
    {
      category: 'IDAM',
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { name: 'Cymmetri', color: 'from-purple-600 to-purple-700' },
        { name: 'Jumpcloud', color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      category: 'DMS',
      icon: <Database className="w-6 h-6" />,
      partners: [
        { name: 'Veinna Advantage', color: 'from-secondary-600 to-secondary-700' }
      ]
    },
    {
      category: 'IT Asset Management',
      icon: <Building2 className="w-6 h-6" />,
      partners: [
        { name: 'Freshworks', color: 'from-green-600 to-green-700' },
        { name: 'Jumpcloud', color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      category: 'ITSM',
      icon: <BarChart3 className="w-6 h-6" />,
      partners: [
        { name: 'Freshworks', color: 'from-green-600 to-green-700' }
      ]
    },
    {
      category: 'LOS / LMS / Co-lending',
      icon: <DollarSign className="w-6 h-6" />,
      partners: [
        { name: 'Knight Fintech', color: 'from-amber-600 to-amber-700' }
      ]
    },
    {
      category: 'Treasury',
      icon: <DollarSign className="w-6 h-6" />,
      partners: [
        { name: 'Knight Fintech', color: 'from-amber-600 to-amber-700' }
      ]
    },
    {
      category: 'VKYC',
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { name: 'Knight Fintech', color: 'from-amber-600 to-amber-700' }
      ]
    },
    {
      category: 'Call Centre',
      icon: <Headphones className="w-6 h-6" />,
      partners: [
        { name: 'Hudosoft', color: 'from-cyan-600 to-cyan-700' },
        { name: 'TTSL', color: 'from-blue-600 to-blue-700' }
      ]
    }
  ];

  const currentPartners = activeTab === 'industry' ? industryWidePartners : bfsiPartners;

  return (
    <section className="py-12

     md:py-8
      bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            OUR PARTNERSHIPS - <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">SaaS</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Comprehensive SaaS partnerships for industry-wide and BFSI-specific solutions
          </p>

          {/* Tab Selector */}
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl shadow-lg">
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'industry'
                  ? 'bg-white dark:bg-slate-700 text-primary-700 dark:text-primary-700 shadow-md'
                  : 'text-slate-600 dark:text-slate-900 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Industry Wide SaaS
            </button>
            <button
              onClick={() => setActiveTab('bfsi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'bfsi'
                  ? 'bg-white dark:bg-slate-700 text-secondary-700 dark:text-secondary-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SaaS BFSI
            </button>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {currentPartners.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activeTab === 'industry' ? 'from-primary-500 to-primary-600' : 'from-secondary-500 to-secondary-600'} text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.category}
                  </h3>
                </div>

                {/* Partners List */}
                <div className="space-y-3">
                  {item.partners.map((partner, idx) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                      className="group/item"
                    >
                      <div className={`relative overflow-hidden bg-gradient-to-r ${partner.color} p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover/item:scale-105 cursor-pointer`}>
                        <div className="absolute inset-0 bg-white/0 group-hover/item:bg-white/10 transition-all duration-300"></div>
                        <div className="relative flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-white shadow-lg animate-pulse"></div>
                          <p className="font-semibold text-white text-sm md:text-base">
                            {partner.name}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Partner Count Badge */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.partners.length} {item.partners.length === 1 ? 'Partner' : 'Partners'}
                    </span>
          
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSaaS;