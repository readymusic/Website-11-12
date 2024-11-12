import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalImages: number;
}

const GalleryControls: React.FC<GalleryControlsProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  totalImages,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button
        onClick={onPrevious}
        className="p-2 bg-primary/30 hover:bg-primary/50 text-surface rounded-full backdrop-blur-sm ml-4 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={onNext}
        className="p-2 bg-primary/30 hover:bg-primary/50 text-surface rounded-full backdrop-blur-sm mr-4 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 right-4 bg-primary/30 px-3 py-1 rounded-full backdrop-blur-sm">
        <p className="text-surface text-sm font-mono">
          {currentIndex + 1} / {totalImages}
        </p>
      </div>
    </div>
  );
};

export default GalleryControls;