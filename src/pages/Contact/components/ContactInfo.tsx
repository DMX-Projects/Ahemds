import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'kafeel@freshrootstech.com',
      secondary: '',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 8310699171',
      secondary: '',
      color: 'emerald'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'F5, B3 Kumar Castles, Palm Grove enclave, Gubbalala, Banglore 570062',
      secondary: '',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Available 24/7',
      secondary: '',
      color: 'cyan'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 flex items-center">
      <div className="px-6 lg:px-12 xl:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12 flex-grow">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                    {method.primary}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {method.secondary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg mb-8"
          >
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Office Hours
              </h3>
            </div>
            
            <div className="space-y-3">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700 last:border-b-0">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {schedule.day}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <button className="w-full btn-primary group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
            
            <button className="w-full btn-outline group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
