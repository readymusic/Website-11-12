import React from 'react';

interface GalleryThumbnailsProps {
  images: Array<{ src: string; alt: string }>;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const GalleryThumbnails: React.FC<GalleryThumbnailsProps> = ({
  images,
  currentIndex,
  onSelect,
}) => {
  return (
    <div className="flex gap-4 mt-6 overflow-x-auto pb-4 snap-x">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
            currentIndex === index
              ? 'ring-2 ring-accent ring-offset-2 ring-offset-primary'
              : 'opacity-50 hover:opacity-75'
          }`}
        >
          <img
            src={image.src}
            alt={`Thumbnail for ${image.alt}`}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default GalleryThumbnails;