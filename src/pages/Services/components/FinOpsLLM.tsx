import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, Cpu, Cloud, SlidersHorizontal, Gauge, PieChart,
  Database, Settings, Shield, Users, Sparkles, TrendingDown, 
  Zap, CheckCircle, ArrowRight, Brain, Target
} from 'lucide-react';

const FinOpsLLM = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '60%', label: 'Cost Reduction', icon: TrendingDown },
    { value: '3x', label: 'Faster Training', icon: Zap },
    { value: '95%', label: 'Accuracy Boost', icon: Target }
  ];

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
    <div className="min-h-screen bg-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2 md:py-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/20 dark:to-cyan-500/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-emerald-400/30 dark:border-emerald-400/30 mb-6 sm:mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300">
              Next-Gen FinOps for AI & LLM Fine-Tuning
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:via-emerald-400 dark:to-cyan-400">
              Transform AI Costs Into
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Strategic Advantage
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-xl md:text-2xl text-slate-700 dark:text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Freshroots delivers enterprise-grade <span className="text-cyan-600 dark:text-cyan-300 font-semibold">FinOps intelligence</span> and
            <span className="text-emerald-600 dark:text-emerald-300 font-semibold"> custom LLM fine-tuning</span> that cuts costs by 60% while supercharging AI performance.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={statVariants}
                whileHover="hover"
                className="bg-green-100/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/60 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 dark:text-cyan-400 mx-auto mb-2 sm:mb-3" />
                <motion.div 
                  className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Two Pillars */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* FinOps card */}
          <motion.div 
            className="group relative"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="relative p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-800/80 shadow backdrop-blur-xl border border-emerald-400/20 hover:border-emerald-400/60 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="p-2 sm:p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">FinOps Intelligence</h2>
              </motion.div>

              <motion.p 
                className="text-slate-700 dark:text-emerald-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Real-time visibility and optimization for GPU, cloud, and AI infrastructure spend. FinOps aligns finance, engineering and business teams so every model and workload has a clear owner and budget.
              </motion.p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Gauge, text: 'Live cost dashboards with GPU utilization, token usage and storage metrics.' },
                  { icon: PieChart, text: 'Team-level showback & chargeback for transparent cost allocation.' },
                  { icon: Cloud, text: 'Smart recommendations: right-sizing, spot instances, commitment savings.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* LLM Fine-tuning card */}
          <motion.div 
            className="group relative"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="relative p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-800/80 shadow backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Custom LLM Training</h2>
              </motion.div>

              <motion.p 
                className="text-slate-700 dark:text-cyan-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Domain-specific AI models trained on your data. Parameter-efficient techniques such as LoRA and PEFT reduce GPU time while keeping accuracy high.
              </motion.p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Database, text: 'Enterprise data prep: cleansing, labeling, PII removal and quality checks.' },
                  { icon: Settings, text: 'LoRA & PEFT methods for 10× faster, cheaper fine-tuning cycles.' },
                  { icon: Shield, text: 'Built-in guardrails, hallucination checks and compliance validation.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-xl border border-cyan-500/20 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-12 mb-12 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* FinOps Process */}
          <motion.div 
            className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-xl shadow rounded-3xl p-6 sm:p-8 border border-emerald-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                The Freshroots FinOps Framework
              </h3>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { step: '01', title: 'Inform', desc: 'Unified cost visibility across clouds, GPUs and AI services with granular tagging.' },
                { step: '02', title: 'Optimize', desc: 'AI-powered recommendations for idle resource cleanup and commitment planning.' },
                { step: '03', title: 'Operate', desc: 'Automated budgets, anomaly alerts and policy enforcement at scale.' },
                { step: '04', title: 'Report', desc: 'Executive dashboards for cost-per-token, cost-per-inference and ROI tracking.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4 items-start group cursor-pointer"
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xs sm:text-sm group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <div>
                    <h4 className="text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg mb-1">
                      {item.title}
                    </h4>
                    <motion.p 
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LLM Process */}
          <motion.div 
            className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-xl shadow rounded-3xl p-6 sm:p-8 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                LLM Fine-Tuning Lifecycle
              </h3>
            </motion.div>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                { step: '01', title: 'Design', desc: 'Define use cases (support automation, code assist, content gen) with success KPIs' },
                { step: '02', title: 'Curate', desc: 'Extract and structure training data from chats, docs, tickets, and knowledge bases' },
                { step: '03', title: 'Train', desc: 'Fine-tune with LoRA/PEFT on optimized GPU clusters for speed and efficiency' },
                { step: '04', title: 'Evaluate', desc: 'Rigorous testing on real workloads: accuracy, latency, safety, and bias checks' },
                { step: '05', title: 'Deploy', desc: 'Production rollout with monitoring, A/B testing, and continuous improvement loops' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-3 sm:gap-4 items-start group cursor-pointer"
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-black text-xs sm:text-sm group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <div>
                    <h4 className="text-cyan-600 dark:text-cyan-400 font-bold text-base sm:text-lg mb-1">{item.title}</h4>
                    <motion.p 
                      className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

       
      </motion.div>
    </div>
  );
};

export default FinOpsLLM;
