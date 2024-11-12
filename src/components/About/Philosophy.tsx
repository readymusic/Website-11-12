import React from 'react';
import { Heart, Shield, Target, Users } from 'lucide-react';

const philosophyPoints = [
  {
    icon: Heart,
    title: 'Artist First',
    description: 'Your vision leads the way. We\'re here to enhance and elevate your creative journey.'
  },
  {
    icon: Shield,
    title: 'Fear-Free Zone',
    description: 'Create freely without judgment. Every idea is valuable in our collaborative space.'
  },
  {
    icon: Target,
    title: 'Excellence Focused',
    description: 'Committed to delivering the highest quality in every aspect of production.'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We believe in the power of teamwork and shared creative vision.'
  }
];

const Philosophy = () => {
  return (
    <div className="py-20 bg-primary-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-surface mb-4">Our Philosophy</h3>
          <p className="text-surface/80 max-w-2xl mx-auto">
            At Ready Music Studios, we believe in creating an environment where creativity flourishes 
            and artists feel empowered to push their boundaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-primary p-6 rounded-xl hover:bg-primary-dark transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-surface mb-2">{point.title}</h4>
                <p className="text-surface/80">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;