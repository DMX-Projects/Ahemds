import React, { useState } from 'react';
import { Camera, Shield, Fingerprint, Phone, Wifi, MessageSquare, Globe, Eye, ChevronRight, ExternalLink } from 'lucide-react';

const OurPartnershipOthers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const partnershipCategories = [
    {
      id: 'audiovisual',
      title: 'Audio Visual Solutions',
      icon: Camera,
      color: 'blue',
      description: 'Professional AV equipment and conferencing solutions',
      partners: [
        { name: 'Poly', specialty: 'Unified Communications' },
        { name: 'Logitech', specialty: 'Video Conferencing' },
        { name: 'Yealink', specialty: 'IP Phones & Headsets' },
        { name: 'Samsung', specialty: 'Display Solutions' },
        { name: 'Viewsonic', specialty: 'Interactive Displays' }
      ]
    },
    {
      id: 'surveillance',
      title: 'Surveillance Solutions',
      icon: Eye,
      color: 'purple',
      description: 'Advanced security and monitoring systems',
      partners: [
        { name: 'HikVision', specialty: 'IP Cameras & NVR' },
        { name: 'Cisco', specialty: 'Network Security' },
        { name: 'Honeywell', specialty: 'Access Control' }
      ]
    },
   {
  id: 'biometric',
  title: 'Biometric Solutions',
  icon: Fingerprint,
  color: 'emerald',
  description: 'Identity verification and access control',
  partners: [
    { 
      name: 'Sparsh Hi-Tech Security Solutions', 
      specialty: 'Biometric access control, fingerprint & facial recognition, RFID security, visitor management',
      isCustom: true 
    }
  ]
},
{
  id: 'telecom',
  title: 'Telecom Offerings',
  icon: Phone,
  color: 'orange',
      description: 'Communication infrastructure and services',
      partners: [
        { name: 'Leased Lines', specialty: 'Dedicated Connectivity', isService: true },
        { name: 'ILL', specialty: 'International Leased Lines', isService: true },
        { name: 'Bulk SMS', specialty: 'Messaging Services', isService: true },
        { name: 'Managed Wifi', specialty: 'Wireless Solutions', isService: true },
        { name: 'SDwan', specialty: 'Software Defined WAN', isService: true }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-600',
      hover: 'hover:border-blue-300 dark:hover:border-blue-700'
    },
    purple: {
      bg: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-600',
      hover: 'hover:border-purple-300 dark:hover:border-purple-700'
    },
    emerald: {
      bg: 'from-emerald-500/10 to-emerald-600/10',
      border: 'border-emerald-200 dark:border-emerald-800',
      icon: 'from-emerald-500 to-emerald-600',
      text: 'text-emerald-600',
      hover: 'hover:border-emerald-300 dark:hover:border-emerald-700'
    },
    orange: {
      bg: 'from-orange-500/10 to-orange-600/10',
      border: 'border-orange-200 dark:border-orange-800',
      icon: 'from-orange-500 to-orange-600',
      text: 'text-orange-600',
      hover: 'hover:border-orange-300 dark:hover:border-orange-700'
    }
  };

  return (
    <section className="min-h-screen py-12 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Our Partnership -  <span className="gradient-text">Others</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strategic alliances with industry leaders across audio-visual, surveillance, biometric, and telecom solutions
          </p>
        </div>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {partnershipCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative group bg-gradient-to-br ${colorClasses[category.color].bg} backdrop-blur-sm rounded-3xl p-8 border ${colorClasses[category.color].border} ${colorClasses[category.color].hover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === category.id ? 'translateY(-8px)' : 'translateY(0px)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${colorClasses[category.color].icon} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-6 h-6 ${colorClasses[category.color].text} transition-transform duration-300 ${hoveredCard === category.id ? 'rotate-90' : ''}`} />
              </div>

              {/* Partners List */}
              <div className="space-y-4">
                {category.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-white/20 dark:border-slate-700/20 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-300 group/item"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${colorClasses[category.color].icon} rounded-full`}></div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {partner.name}
                          </span>
                          {partner.isCustom && (
                            <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                              Custom
                            </span>
                          )}
                          {partner.isService && (
                            <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium">
                              Service
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {partner.specialty}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* Partner Count Badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`w-8 h-8 bg-gradient-to-r ${colorClasses[category.color].icon} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-sm font-bold">
                    {category.partners.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Technology Partners
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Solution Categories
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Partnership Success
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Partner Support
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
         
        </div>
      </div>
    </section>
  );
};

export default OurPartnershipOthers;