import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Server, 
  Shield, 
  Cloud, 
  ArrowRight,
  Zap,
  Network,
  Database,
  X,
  CheckCircle,
  Users,
  Settings,
  TrendingUp
} from 'lucide-react';

const ServicesPreview = () => {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'end-compute',
      icon: Monitor,
      title: 'End Compute Solutions',
      description: 'Hardware, MDM, VDI, Collaboration, ITAM, ITSM',
      features: ['Hardware Supply', 'Mobile Device Management', 'Virtual Desktop Infrastructure', 'Collaboration Tools'],
      gradient: 'from-blue-500 to-blue-600',
      delay: 0,
      detailedInfo: {
        overview: 'Comprehensive end-user computing solutions that empower your workforce with cutting-edge technology and seamless user experiences.',
        keyBenefits: [
          'Reduced IT overhead and support costs',
          'Enhanced security and compliance',
          'Improved user productivity and satisfaction',
          'Scalable solutions for business growth'
        ],
        services: [
          {
            name: 'Hardware Supply & Management',
            description: 'End-to-end hardware procurement, deployment, and lifecycle management'
          },
          {
            name: 'Mobile Device Management (MDM)',
            description: 'Secure mobile device deployment and management across all platforms'
          },
          {
            name: 'Virtual Desktop Infrastructure (VDI)',
            description: 'Cloud-based desktop solutions for remote and hybrid workforces'
          },
          {
            name: 'Collaboration Tools',
            description: 'Modern communication platforms and productivity suites'
          },
          {
            name: 'IT Asset Management (ITAM)',
            description: 'Complete visibility and control over your IT assets'
          },
          {
            name: 'IT Service Management (ITSM)',
            description: 'Streamlined service delivery and support processes'
          }
        ],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
      }
    },
    {
      id: 'dc-services',
      icon: Server,
      title: 'DC Services',
      description: 'Managed Services, Migration, Cloud Management',
      features: ['Data Center Management', 'Cloud Migration', 'Hybrid Infrastructure', 'Disaster Recovery'],
      gradient: 'from-emerald-500 to-emerald-600',
      delay: 0.1,
      detailedInfo: {
        overview: 'Enterprise-grade data center services designed to optimize performance, ensure reliability, and reduce operational complexity.',
        keyBenefits: [
          '99.9% uptime guarantee',
          'Cost optimization through automation',
          'Seamless cloud migration',
          '24/7 monitoring and support'
        ],
        services: [
          {
            name: 'Managed Data Center Services',
            description: 'Complete infrastructure management including servers, storage, and networking'
          },
          {
            name: 'Cloud Migration Services',
            description: 'Strategic migration planning and execution for AWS, Azure, and Google Cloud'
          },
          {
            name: 'Hybrid Infrastructure Management',
            description: 'Integrated management of on-premises and cloud resources'
          },
          {
            name: 'Disaster Recovery Solutions',
            description: 'Comprehensive backup and recovery strategies with rapid RTO/RPO'
          },
          {
            name: 'Performance Monitoring',
            description: 'Real-time infrastructure monitoring and optimization'
          },
          {
            name: 'Capacity Planning',
            description: 'Proactive resource planning and scaling recommendations'
          }
        ],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80'
      }
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity and compliance',
      features: ['Security Assessment', 'Threat Management', 'Compliance Support', 'Identity Management'],
      gradient: 'from-purple-500 to-purple-600',
      delay: 0.2,
      detailedInfo: {
        overview: 'Advanced cybersecurity solutions protecting your organization from evolving threats while ensuring regulatory compliance.',
        keyBenefits: [
          'Zero-trust security architecture',
          'Advanced threat detection and response',
          'Regulatory compliance assurance',
          'Reduced security incidents by 90%'
        ],
        services: [
          {
            name: 'Security Assessment & Auditing',
            description: 'Comprehensive security posture evaluation and vulnerability assessments'
          },
          {
            name: 'Threat Management & SOC',
            description: '24/7 security operations center with advanced threat hunting'
          },
          {
            name: 'Compliance Management',
            description: 'GDPR, HIPAA, SOX, and industry-specific compliance support'
          },
          {
            name: 'Identity & Access Management',
            description: 'Zero-trust identity solutions with multi-factor authentication'
          },
          {
            name: 'Endpoint Security',
            description: 'Advanced endpoint protection and device management'
          },
          {
            name: 'Security Training',
            description: 'Employee security awareness and phishing simulation programs'
          }
        ],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    },
    {
      id: 'cloud-integration',
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Multi-cloud strategy and implementation',
      features: ['Cloud Strategy', 'Multi-cloud Setup', 'Cost Optimization', 'Performance Monitoring'],
      gradient: 'from-cyan-500 to-cyan-600',
      delay: 0.3,
      detailedInfo: {
        overview: 'Strategic cloud integration services that maximize flexibility, optimize costs, and accelerate digital transformation initiatives.',
        keyBenefits: [
          'Multi-cloud flexibility and vendor independence',
          'Cost reduction up to 40%',
          'Improved scalability and performance',
          'Enhanced business continuity'
        ],
        services: [
          {
            name: 'Cloud Strategy & Planning',
            description: 'Comprehensive cloud roadmap and architecture design'
          },
          {
            name: 'Multi-Cloud Implementation',
            description: 'Seamless integration across AWS, Azure, Google Cloud, and hybrid environments'
          },
          {
            name: 'Cloud Cost Optimization',
            description: 'Continuous cost monitoring and optimization strategies'
          },
          {
            name: 'Performance Monitoring',
            description: 'Real-time cloud performance tracking and optimization'
          },
          {
            name: 'Cloud Security',
            description: 'Cloud-native security controls and compliance frameworks'
          },
          {
            name: 'DevOps Integration',
            description: 'CI/CD pipeline implementation and automation'
          }
        ],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
      }
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className="min-h-screen py-12 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology integration services designed to transform your business operations
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col transform hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${service.delay}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button
                  onClick={() => openModal(service)}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mt-auto"
                >
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <Network className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Network Infrastructure</h4>
              <p className="text-slate-600 dark:text-slate-300 flex-grow">Enterprise networking solutions with Cisco, HPE, and leading vendors</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
              <Database className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Management</h4>
              <p className="text-slate-600 dark:text-slate-300 flex-grow">Comprehensive data strategy, storage, and analytics solutions</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/services" 
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedService.detailedInfo.image}
                alt={selectedService.title}
                className="w-full h-48 md:h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.gradient} rounded-2xl flex items-center justify-center`}>
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedService.title}
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {selectedService.detailedInfo.overview}
              </p>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-emerald-500 mr-2" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.detailedInfo.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-blue-500 mr-2" />
                  Our Services Include
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedService.detailedInfo.services.map((service, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{service.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesPreview;
