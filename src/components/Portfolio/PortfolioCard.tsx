import React from 'react';
import { Play, Award, ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  artist: string;
  year: number;
  image: string;
  description: string;
  achievements: string[];
  streamingLink?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  artist,
  year,
  image,
  description,
  achievements,
  streamingLink
}) => {
  return (
    <div className="group relative bg-primary rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            {streamingLink && (
              <a
                href={streamingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-surface hover:text-accent transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>Listen Now</span>
              </a>
            )}
            <ExternalLink className="h-5 w-5 text-surface hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-surface mb-1">{title}</h3>
            <p className="text-accent font-mono">{artist}</p>
          </div>
          <span className="text-surface/60 font-mono">{year}</span>
        </div>
        
        <p className="text-surface/80 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Award className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-surface/60">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;