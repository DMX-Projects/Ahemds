import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about', scrollToTop: true },
      { name: 'Our Services', path: '/services', scrollToTop: true },
      { name: 'Partnerships', path: '/partnerships', scrollToTop: true },
      { name: 'Case Studies', path: '/case-studies', scrollToTop: true },
    ],
    Solutions: [
      { name: 'End Compute', path: '/services#end-compute', scrollToTop: true },
      { name: 'DC Services', path: '/services#dc-services', scrollToTop: true },
      { name: 'Cloud Solutions', path: '/solutions#cloud', scrollToTop: true },
      { name: 'BFSI Solutions', path: '/solutions#bfsi', scrollToTop: true },
    ],
    Resources: [
      { name: 'Documentation', path: '#', scrollToTop: true },
      { name: 'Support Center', path: '#', scrollToTop: true },
      { name: 'Training', path: '#', scrollToTop: true },
      { name: 'Blog', path: '#', scrollToTop: true },
    ],
  };

  const handleLinkClick = (path: string, shouldScrollToTop: boolean) => {
    if (shouldScrollToTop) {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info - Single unified section */}
          <div className="lg:col-span-2">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="images/logo.jpg" 
                alt="Freshroots Technologies Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-800 to-emerald-400 bg-clip-text">
                Freshroots Technologies Private Limited
              </span>
            </Link>
            
            {/* Company Description */}
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted systems integration partner, connecting technology to empower business 
              growth across industries since 2025.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">kafeel@freshroottech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">+91 8310699171</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  F5, B3 Kumar Castles, Palm Grove enclave, Gubbalala, Bangalore 570062
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link.path, link.scrollToTop)}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-slate-400">Follow us:</span>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Github, href: '#' },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Freshroots Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
