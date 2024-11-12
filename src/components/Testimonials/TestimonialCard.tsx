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
    <div className="bg-zinc-900 rounded-xl p-8 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-energy/20" />
      
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-energy' : 'text-gray-600'
            }`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      <blockquote className="text-gray-300 mb-4">"{quote}"</blockquote>
      
      <p className="text-sm text-energy font-mono">Project: {project}</p>
    </div>
  );
};

export default TestimonialCard;