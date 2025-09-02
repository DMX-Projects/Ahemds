import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight, Bell } from 'lucide-react';

const ComingSoon: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Success Stories <span className="gradient-text">Coming Soon</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            We're currently documenting our client success stories and project outcomes. 
            Our case studies will showcase real-world implementations, challenges overcome, 
            and measurable business results achieved through our integration solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Enterprise Transformation', desc: 'Large-scale digital modernization projects' },
              { title: 'Cloud Migration Success', desc: 'Seamless cloud adoption stories' },
              { title: 'Security Implementation', desc: 'Comprehensive security solution deployments' }
            ].map((preview, index) => (
              <motion.div
                key={preview.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {preview.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {preview.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="btn-primary group">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button className="btn-outline group">
              <Bell className="w-5 h-5 mr-2" />
              Notify When Ready
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;