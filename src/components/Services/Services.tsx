import React from 'react';
import { Music4, Mic2, Sliders, FileSpreadsheet, Share2, Radio } from 'lucide-react';
import ServicesHeader from './ServicesHeader';
import ServiceCard from './ServiceCard';

const serviceData = [
  {
    icon: Music4,
    title: 'Production',
    description: 'Professional music production services to bring your vision to life',
    features: [
      'Beat Production & Composition',
      'Arrangement & Songwriting',
      'Virtual Instruments',
      'Live Session Musicians'
    ]
  },
  {
    icon: Mic2,
    title: 'Recording',
    description: 'State-of-the-art recording facilities for pristine audio capture',
    features: [
      'Vocal Recording',
      'Live Instrument Recording',
      'Multi-track Recording',
      'Booth Rental'
    ]
  },
  {
    icon: Sliders,
    title: 'Engineering',
    description: 'Expert audio engineering to perfect your sound',
    features: [
      'Professional Mixing',
      'Mastering Services',
      'Audio Editing',
      'Sound Design'
    ]
  },
  {
    icon: FileSpreadsheet,
    title: 'Administration',
    description: 'Comprehensive music administration services',
    features: [
      'Copyright Registration',
      'ISRC Code Generation',
      'Royalty Collection',
      'Legal Documentation'
    ]
  },
  {
    icon: Share2,
    title: 'Marketing',
    description: 'Strategic marketing to reach your target audience',
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Press Kit Development',
      'Release Campaigns'
    ]
  },
  {
    icon: Radio,
    title: 'Licensing & Distribution',
    description: 'Get your music heard worldwide',
    features: [
      'Digital Distribution',
      'Sync Licensing',
      'Playlist Pitching',
      'Physical Distribution'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-primary-dark">
      <ServicesHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;