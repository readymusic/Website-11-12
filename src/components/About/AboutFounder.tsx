import React from 'react';
import { GraduationCap, Award, Headphones } from 'lucide-react';

const AboutFounder = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?auto=format&fit=crop&q=80"
          alt="Daniel Ready"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-4 rounded-lg shadow-xl">
          <p className="font-bold">20+ Years</p>
          <p className="text-sm opacity-90">Industry Experience</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-surface">Meet Daniel Ready</h3>
        <p className="text-surface/80 leading-relaxed">
          With over two decades of experience in music production, Daniel Ready has shaped 
          the sound of countless artists and brought numerous projects to life.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-surface">Belmont University</h4>
              <p className="text-surface/80">Audio Engineering & Music Production</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-surface">Industry Recognition</h4>
              <p className="text-surface/80">Multiple Grammy-nominated productions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Headphones className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-surface">Passion for Excellence</h4>
              <p className="text-surface/80">Dedicated to bringing out the best in every artist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;