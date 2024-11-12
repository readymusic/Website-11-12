import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  project: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  quote,
  rating,
  project
}) => {
  return (
    <div className="bg-primary rounded-xl p-8 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
      
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-surface font-semibold">{name}</h4>
          <p className="text-surface/80 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-accent' : 'text-surface/20'
            }`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      <blockquote className="text-surface/90 mb-4">"{quote}"</blockquote>
      
      <p className="text-sm text-accent font-mono">Project: {project}</p>
    </div>
  );
};

export default TestimonialCard;