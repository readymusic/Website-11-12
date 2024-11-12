import React, { useState } from 'react';
import { Play, ChevronDown, Zap } from 'lucide-react';
import Chatbot from './Chat/Chatbot';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/459389137.sd.mp4?s=956dbb54d23d0b8590edc4d40b6dd3b1a5d75088&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

      {/* Animated Equalizer Bars */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex items-end h-64 space-x-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="equalizer-bar h-12"
              style={{ '--delay': i }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-surface px-4">
        <div className="flex items-center space-x-6 mb-8">
          <Zap className="h-24 w-24 text-energy animate-pulse" />
          <div className="flex flex-col items-center">
            <h1 className="logo-text text-6xl md:text-8xl leading-none">READY</h1>
            <h1 className="logo-text text-6xl md:text-8xl leading-none">MUSIC</h1>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 text-gradient">
          Where Music Meets Motion
        </h2>
        
        <p className="text-xl md:text-2xl text-surface/80 mb-12 max-w-2xl text-center">
          Experience the perfect fusion of rhythm and energy in our state-of-the-art studio
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="btn-primary group" onClick={toggleChat}>
            <span className="flex items-center justify-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Learn More</span>
            </span>
          </button>
          <button className="btn-outline">
            Explore Our Services
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8 text-energy" />
        </div>
      </div>

      {/* Chatbot */}
      {isChatOpen && <Chatbot onClose={toggleChat} />}
    </div>
  );
};

export default Hero;