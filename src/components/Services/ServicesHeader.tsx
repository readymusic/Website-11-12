import React from 'react';

const ServicesHeader = () => {
  return (
    <div className="relative h-[40vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
        alt="Professional recording studio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />
      <div className="relative h-full flex flex-col items-center justify-center text-surface px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Full-Service Music Production
        </h2>
        <p className="text-lg md:text-xl text-surface/80 max-w-2xl text-center">
          From concept to release, we provide everything you need to bring your music to life
        </p>
      </div>
    </div>
  );
};

export default ServicesHeader;