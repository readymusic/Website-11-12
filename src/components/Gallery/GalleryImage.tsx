import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, isActive }) => {
  return (
    <div className={`relative aspect-video transition-all duration-500 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
    }`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent rounded-xl" />
      <p className="absolute bottom-4 left-4 text-surface text-lg font-medium">{alt}</p>
    </div>
  );
};

export default GalleryImage;