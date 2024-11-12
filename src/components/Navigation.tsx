import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, LogIn } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePortalClick = () => {
    // TODO: Implement portal navigation
    window.location.href = '/portal';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Zap className="h-16 w-16 text-energy animate-pulse" />
              <div className="absolute inset-0 h-16 w-16 bg-energy/20 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col items-start">
              <span className="logo-text text-xl text-surface font-bold leading-none">READY</span>
              <span className="logo-text text-xl text-surface font-bold leading-none">MUSIC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button 
              onClick={handlePortalClick}
              className="flex items-center space-x-2 text-surface/80 hover:text-energy transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Client Portal</span>
            </button>
            <button className="btn-primary">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-surface/80 hover:text-energy"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-surface/80 hover:text-energy">Home</a>
              <a href="#services" className="block px-3 py-2 text-surface/80 hover:text-energy">Services</a>
              <a href="#about" className="block px-3 py-2 text-surface/80 hover:text-energy">About</a>
              <a href="#portfolio" className="block px-3 py-2 text-surface/80 hover:text-energy">Portfolio</a>
              <a href="#blog" className="block px-3 py-2 text-surface/80 hover:text-energy">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-surface/80 hover:text-energy">Contact</a>
              <button 
                onClick={handlePortalClick}
                className="w-full text-left px-3 py-2 text-surface/80 hover:text-energy"
              >
                Client Portal
              </button>
              <button className="w-full btn-primary">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;