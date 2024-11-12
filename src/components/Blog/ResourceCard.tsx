import React from 'react';
import { Download, Play, FileText } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'guide';
  thumbnail: string;
  downloadUrl?: string;
  videoUrl?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  thumbnail,
  downloadUrl,
  videoUrl
}) => {
  const TypeIcon = {
    video: Play,
    pdf: FileText,
    guide: Download
  }[type];

  return (
    <div className="bg-primary rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-4 bg-accent rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <TypeIcon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <TypeIcon className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium text-surface/60 uppercase">
            {type}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-surface mb-2">
          {title}
        </h3>
        
        <p className="text-surface/80 mb-4 line-clamp-2">
          {description}
        </p>
        
        {type === 'video' && videoUrl && (
          <a
            href={videoUrl}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Play className="h-5 w-5" />
            <span>Watch Now</span>
          </a>
        )}
        
        {(type === 'pdf' || type === 'guide') && downloadUrl && (
          <a
            href={downloadUrl}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;