import React, { useState } from 'react';
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
        <div 
          className="text-center mb-16"
          style={{
            opacity: 1,
            transform: 'translateY(0px)'
          }}
        >
           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive SaaS solutions across productivity, HRMS, identity management, and more
          </p>
        </div>

        {/* SaaS Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {saasCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 hover:scale-105"
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
              style={{
                opacity: 1,
                transform: 'translateY(0px) scale(1)',
                transitionDelay: `${0.4 + (index * 0.1)}s`
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[category.color]} rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="transition-transform duration-200"
                  style={{
                    transform: expandedCategory === category.id ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              {/* Expandable Solutions */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  height: expandedCategory === category.id ? 'auto' : '0px',
                  opacity: expandedCategory === category.id ? 1 : 0
                }}
              >
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  {category.solutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="flex items-center py-1 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <div className={`w-2 h-2 ${dotColorClasses[category.color]} rounded-full mr-3`}></div>
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Solution Count (when collapsed) */}
              {expandedCategory !== category.id && (
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {category.solutions.length} solution{category.solutions.length > 1 ? 's' : ''} available
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div
          className="text-center"
          style={{
            opacity: 1,
            transform: 'translateY(0px)',
            transitionDelay: '1.2s'
          }}
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Enterprise-Grade SaaS Ecosystem
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our curated selection of industry-leading SaaS solutions covers everything from productivity and HR management 
              to identity access management and customer relationship management, ensuring your business has the right tools for every need.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Cloud-Based</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;