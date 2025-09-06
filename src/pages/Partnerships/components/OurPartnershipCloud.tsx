import React from 'react';
import { Cloud, Server, Zap, Brain, Building2, Network } from 'lucide-react';

const OurPartnershipCloud = () => {
  const partnershipData = {
    hyperscalers: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🔷' },
      { name: 'GCP', icon: '🌐' },
      { name: 'OCI', icon: '🔶' },
      { name: 'Jio Cloud', note: 'SMB Only', icon: '📱' }
    ],
    vpcs: [
      { name: 'Ctrl S', icon: '🔧' },
      { name: 'Sify', icon: '📡' },
      { name: 'Yotta', icon: '⚡' },
      { name: 'Digital Connection', icon: '🔗' },
      { name: 'STT', icon: '📶' },
      { name: 'NTT', icon: '🌏' }
    ],
    coLo: [
      { name: 'Ctrl S', icon: '🔧' },
      { name: 'Sify', icon: '📡' },
      { name: 'Yotta', icon: '⚡' },
      { name: 'Digital Connection', icon: '🔗' },
      { name: 'STT', icon: '📶' },
      { name: 'NTT', icon: '🌏' }
    ],
    consumption: [
      { name: 'HPE Greenlake', icon: '🍃' },
      { name: 'Dell APEX', icon: '🔺' },
      { name: 'Lenovo TrueScale', icon: '⚖️' }
    ],
    aiCloud: [
      { name: 'Neysa.AI', icon: '🤖' }
    ]
  };

  const PartnerCard = ({ partner, isSpecial = false }) => (
    <div className={`
      group relative p-4 bg-white dark:bg-slate-800 rounded-xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer
      ${isSpecial 
        ? 'border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl bg-gradient-to-br ' 
        : 'border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg dark:border-slate-700 dark:hover:border-blue-400'
      }
    `}>
      <div className="flex items-center space-x-3">
        <span className="text-2xl group-hover:animate-pulse">{partner.icon}</span>
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {partner.name}
          </h4>
          {partner.note && (
            <span className="text-xs text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded-full mt-1 inline-block">
              {partner.note}
            </span>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-300"></div>
    </div>
  );

  const SectionCard = ({ title, icon: Icon, partners, gradient, description }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-slate-700">
      <div className={`${gradient} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-4 -right-4 opacity-20">
          <Icon size={80} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-2">
            <Icon size={28} />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {partners.map((partner, index) => (
            <PartnerCard 
              key={index} 
              partner={partner} 
              isSpecial={partner.note || title === 'AI Cloud'} 
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg--to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg mb-6 border dark:border-slate-700">
            <Cloud className="text-blue-500" size={24} />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Strategic Alliances</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Our Partnership - <span className="gradient-text">Cloud</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powering digital transformation through strategic cloud partnerships across hyperscale providers, 
            infrastructure solutions, and cutting-edge AI platforms.
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <SectionCard
            title="Public Cloud: Hyperscalers"
            icon={Cloud}
            partners={partnershipData.hyperscalers}
            gradient="bg-gradient-to-br from-blue-500 to-cyan-600"
            description="Leading global cloud infrastructure providers"
          />
          
          <SectionCard
            title="Public Cloud: VPC's"
            icon={Network}
            partners={partnershipData.vpcs}
            gradient="bg-gradient-to-br from-green-500 to-teal-600"
            description="Virtual Private Cloud solutions and connectivity"
          />
          
          <SectionCard
            title="Co-Location"
            icon={Building2}
            partners={partnershipData.coLo}
            gradient="bg-gradient-to-br from-orange-500 to-red-600"
            description="Data center and colocation services"
          />
          
          <SectionCard
            title="On-Prem Consumption Based"
            icon={Server}
            partners={partnershipData.consumption}
            gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
            description="Flexible consumption models for enterprise hardware"
          />
          
          <div className="lg:col-span-2 xl:col-span-1">
            <SectionCard
              title="AI Cloud"
              icon={Brain}
              partners={partnershipData.aiCloud}
              gradient="bg-gradient-to-br from-pink-500 to-rose-600"
              description="Next-generation AI and machine learning platforms"
            />
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Hyperscalers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">VPC Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Consumption Models</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Total Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnershipCloud;