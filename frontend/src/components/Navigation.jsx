import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">E3D</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg blur opacity-30 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Effy's 3D Dreamscape
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Portfolio', 'Services', 'FAQ', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium transform hover:scale-105 duration-200"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              View Portfolio
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-blue-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mb-4 p-4 border border-blue-500/20">
            <div className="flex flex-col space-y-4">
              {['Home', 'Portfolio', 'Services', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white w-full"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;