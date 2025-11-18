import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Milestone, Rocket, Globe, Building2 } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Company Founded',
      description: 'Freshroots Technologies Private Limited established with vision to revolutionize systems integration',
      icon: Rocket,
      completed: true
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'First Enterprise Clients',
      description: 'Secured partnerships with leading organizations across multiple sectors',
      icon: Building2,
      completed: true
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: 'Technology Partnerships',
      description: 'Established strategic alliances with major technology vendors',
      icon: Milestone,
      completed: false
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Global Expansion',
      description: 'Expanding services to international markets and clients',
      icon: Globe,
      completed: false
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From startup to industry leader - our rapid growth story
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.quarter}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card card-hover">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${
                        milestone.completed ? 'from-emerald-500 to-emerald-600' : 'from-slate-400 to-slate-500'
                      } rounded-xl flex items-center justify-center mr-4`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {milestone.year} {milestone.quarter}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 w-6 h-6 mx-8">
                  <div className={`w-6 h-6 rounded-full border-4 ${
                    milestone.completed 
                      ? 'bg-emerald-500 border-emerald-300' 
                      : 'bg-slate-300 border-slate-200 dark:bg-slate-600 dark:border-slate-500'
                  }`}></div>
                  {milestone.completed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"
                    ></motion.div>
                  )}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;