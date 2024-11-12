import React from 'react';
import AboutFounder from './AboutFounder';
import Philosophy from './Philosophy';
import Timeline from './Timeline';

const About = () => {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-4">About Us</h2>
          <p className="text-xl text-surface/80 max-w-3xl mx-auto">
            Where passion meets expertise, and creativity knows no bounds
          </p>
        </div>
        
        <AboutFounder />
      </div>
      
      <Philosophy />
      <Timeline />
    </section>
  );
};

export default About;