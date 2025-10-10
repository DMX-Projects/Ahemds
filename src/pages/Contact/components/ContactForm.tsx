import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatWhatsAppMessage = (data: FormData) => {
    let message = `🚀 *New Contact Form Submission*\n\n`;
    
    message += `👤 *Name:* ${data.name}\n`;
    message += `📧 *Email:* ${data.email}\n`;
    
    if (data.company) {
      message += `🏢 *Company:* ${data.company}\n`;
    }
    
    if (data.phone) {
      message += `📱 *Phone:* ${data.phone}\n`;
    }
    
    if (data.service) {
      message += `🔧 *Service Interest:* ${data.service}\n`;
    }
    
    message += `\n💬 *Project Details:*\n${data.message}\n\n`;
    message += `📅 *Submitted:* ${new Date().toLocaleString()}\n`;
    message += `\n_Sent from Integration Journey Contact Form_`;
    
    return message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form Data:', formData); // Debug log
    
    // Format the message for WhatsApp
    const whatsappMessage = formatWhatsAppMessage(formData);
    
    console.log('WhatsApp Message:', whatsappMessage); // Debug log
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = '918310699171'; // Format: country code + number (no + sign)
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    console.log('WhatsApp URL:', whatsappURL); // Debug log
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form after sending
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="min-h-screen py-24 bg-white dark:bg-slate-900 flex items-center">
      <div className="px-6 lg:px-12 xl:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Start Your <span className="gradient-text">Integration Journey</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91 XXXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Service Interest
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select a service</option>
                <option value="End Compute Solutions">End Compute Solutions</option>
                <option value="Data Center Services">Data Center Services</option>
                <option value="Cloud Integration">Cloud Integration</option>
                <option value="Security Solutions">Security Solutions</option>
                <option value="Consulting Services">Consulting Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                isSubmitted
                  ? 'bg-emerald-600 text-white'
                  : 'btn-primary'
              }`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
