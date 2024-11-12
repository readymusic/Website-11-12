import React, { useState, useCallback } from 'react';
import GalleryImage from './GalleryImage';
import GalleryControls from './GalleryControls';
import GalleryThumbnails from './GalleryThumbnails';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    alt: "Main Recording Studio A"
  },
  {
    src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
    alt: "Vocal Recording Booth"
  },
  {
    src: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?auto=format&fit=crop&q=80",
    alt: "Mixing Console"
  },
  {
    src: "https://images.unsplash.com/photo-1525970335615-1cac01202510?auto=format&fit=crop&q=80",
    alt: "Live Room"
  },
  {
    src: "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?auto=format&fit=crop&q=80",
    alt: "Control Room B"
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section className="bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-4">Studio Gallery</h2>
          <p className="text-xl text-surface/80 max-w-3xl mx-auto">
            Take a virtual tour through our state-of-the-art facilities
          </p>
        </div>

        <div className="relative bg-primary rounded-xl p-6">
          <div className="relative aspect-video">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                isActive={currentIndex === index}
              />
            ))}
            
            <GalleryControls
              onPrevious={handlePrevious}
              onNext={handleNext}
              currentIndex={currentIndex}
              totalImages={galleryImages.length}
            />
          </div>

          <GalleryThumbnails
            images={galleryImages}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-surface mb-4">Studio Features</h3>
            <ul className="space-y-3 text-surface/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Professional acoustic treatment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>SSL mixing console</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Multiple isolation booths</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Premium microphone collection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Comfortable artist lounge</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>24/7 studio access</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-surface mb-4">Equipment Highlights</h3>
            <ul className="space-y-3 text-surface/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Neumann U87 microphones</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Pro Tools HDX system</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Vintage analog gear</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Custom monitoring system</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>MIDI production suite</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Extensive plugin collection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;