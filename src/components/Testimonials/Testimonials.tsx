import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import SuccessMetrics from './SuccessMetrics';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'Independent Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Working with Ready Music Studios transformed my sound. Their attention to detail and professional guidance helped take my music to the next level.',
    rating: 5,
    project: 'Debut Album "Ethereal Dreams"'
  },
  {
    name: 'Marcus Chen',
    role: 'Producer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote: 'The studio\'s state-of-the-art equipment and experienced team made the recording process seamless and enjoyable.',
    rating: 5,
    project: 'Electronic EP "Digital Horizons"'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Band Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    quote: 'The team\'s expertise in mixing and mastering brought out the best in our band\'s sound. Couldn\'t be happier with the results.',
    rating: 5,
    project: 'Rock Album "Electric Sunset"'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from artists who've transformed their sound with us
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-energy rounded-full text-primary hover:bg-energy-dark transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-energy rounded-full text-primary hover:bg-energy-dark transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-energy' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <SuccessMetrics />
      </div>
    </section>
  );
};

export default Testimonials;