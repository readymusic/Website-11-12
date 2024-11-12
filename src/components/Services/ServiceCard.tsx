import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <div className="bg-primary rounded-xl p-6 hover:bg-primary-dark transition-all duration-300 group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-surface">{title}</h3>
      </div>
      <p className="text-surface/80 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-surface/90 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;