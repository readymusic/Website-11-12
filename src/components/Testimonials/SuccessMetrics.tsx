import React from 'react';
import { Users, Award, Music, Clock } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Satisfied Clients',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Industry Awards',
  },
  {
    icon: Music,
    value: '1000+',
    label: 'Projects Completed',
  },
  {
    icon: Clock,
    value: '20+',
    label: 'Years Experience',
  },
];

const SuccessMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-energy/10 rounded-full mb-4">
              <Icon className="h-8 w-8 text-energy" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">{metric.value}</h4>
            <p className="text-gray-400">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SuccessMetrics;