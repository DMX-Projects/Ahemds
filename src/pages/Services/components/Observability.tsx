import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, BarChart3, Activity, Server, Zap, CheckCircle, Database, Eye, Clock, 
  TrendingUp, Layers, AlertTriangle, Cpu, Cloud, Github, Users 
} from 'lucide-react';

const Observability: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.4 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-4 sm:py-8 md:py-10">
      <motion.div
        className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/50 px-6 py-3 rounded-full mb-6 mx-auto max-w-max border border-emerald-200/50"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Shield className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-emerald-800 dark:text-emerald-300">
              Partnered with base14 & Neysa.ai
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Full-Stack <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Observability</span>
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            See everything. Fix everything faster. <strong>90% reduced MTTR</strong> with unified monitoring.
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { num: '2s', label: 'Query Speed', icon: Clock, desc: 'Sub-2 second queries' },
            { num: '90%', label: 'Faster MTTR', icon: TrendingUp, desc: 'Mean Time to Resolution' },
            { num: '5x', label: 'Tool Reduction', icon: Layers, desc: 'Replace 5+ tools' },
            { num: '100%', label: 'OpenTelemetry', icon: Github, desc: 'Vendor neutral' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover="hover"
              className="group p-6 sm:p-8 bg-gradient-to-br from-white/90 to-emerald-50/70 dark:from-slate-800/90 dark:to-slate-700/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/60 hover:border-emerald-300/60 transition-all duration-500 text-center cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 text-emerald-500 mx-auto mb-3"
              >
                <stat.icon />
              </motion.div>
              <motion.div 
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                {stat.num}
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Technology Stack
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { 
                name: 'base14', 
                title: 'Unified Observability', 
                desc: 'OpenTelemetry-native platform. Logs, metrics, traces and APM in one dashboard.',
                features: ['Sub-2s queries', 'AI root cause', 'Enterprise scale'],
                color: 'from-blue-500 to-indigo-600',
                icon: BarChart3
              },
              { 
                name: 'Neysa.ai', 
                title: 'AI/ML + GPU Monitoring', 
                desc: 'Real-time GPU utilization, model tracking and inference monitoring.',
                features: ['GPU cost attribution', 'ML lifecycle', 'Cloud-native'],
                color: 'from-purple-500 to-pink-600',
                icon: Cpu
              },
              { 
                name: 'Freshroots', 
                title: 'End-to-End Services', 
                desc: 'Implementation, migration, managed services and 24x7 support.',
                features: ['Zero-downtime migration', 'Custom integrations', 'SLA guaranteed'],
                color: 'from-emerald-500 to-teal-500',
                icon: Server
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl border border-white/50 hover:border-emerald-400/60 transition-all duration-500 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-2xl transition-all duration-500`}
                  whileHover={{ scale: 1.1 }}
                >
                  <partner.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {partner.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-slate-600 dark:text-slate-400 mb-5 text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {partner.desc}
                </motion.p>
                <div className="space-y-2 mb-4">
                  {partner.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {partner.name}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What You Get */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-black text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Everything You Need
          </motion.h2>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              {[
                { icon: Eye, title: 'Complete Visibility', desc: 'Logs, metrics, traces, RUM and synthetics – all signals unified.' },
                { icon: Database, title: 'Petabyte Scale', desc: 'Handle millions of events per second with sub-second queries.' },
                { icon: Cloud, title: 'Multi-Cloud Ready', desc: 'AWS, Azure, GCP and on‑prem – works everywhere your apps run.' },
                { icon: AlertTriangle, title: 'Proactive Alerts', desc: 'AI-powered anomaly detection prevents issues before impact.' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50/80 dark:from-slate-800/50 dark:to-slate-700/50 hover:shadow-xl hover:-translate-x-1 transition-all border border-emerald-100/50 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border-2 border-emerald-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Trusted by Enterprises
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-slate-700 dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  500+ deployments • 24x7 support • 99.99% uptime
                </motion.p>
              </motion.div>
              <div className="space-y-3 text-left">
                {[
                  '✅ Zero vendor lock-in',
                  '✅ 14-day free POC',
                  '✅ White-glove migration',
                  '✅ Custom dashboards',
                  '✅ Dedicated TAM'
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Observability;
