import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Bring Your{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-pulse">
                    3D Dreams
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-30 animate-pulse" />
                </span>{' '}
                to Life
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                Professional 3D modeling and VTuber artistry services to elevate your digital presence. 
                Custom creations tailored to your vision with cutting-edge technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-green-500/30"
              >
                Explore Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-400 font-medium">Live on Twitch</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://www.twitch.tv/effy3d', '_blank')}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Live
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Model Showcase */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <div 
                className="relative transform transition-all duration-300 hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1 - 5}deg) rotateX(${mousePosition.y * 0.1 - 5}deg)`,
                }}
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                
                {/* Image */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=600&fit=crop"
                    alt="3D Model Showcase"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Live Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      Live on Twitch
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2">Latest 3D Creation</h3>
                    <p className="text-slate-300 text-sm">Custom VTuber model with advanced rigging</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;