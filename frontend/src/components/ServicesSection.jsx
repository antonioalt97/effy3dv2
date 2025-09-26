import React, { useState, useRef, useEffect } from 'react';
import { User, Video, Box, Check, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const ServicesSection = ({ services }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const iconMap = {
    user: User,
    video: Video,
    box: Box,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-bold">
          Professional{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              3D Services
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-20 animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Comprehensive 3D modeling and VTuber services to bring your creative vision to life with professional quality and attention to detail.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          
          return (
            <Card
              key={service.id}
              className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02] ${
                service.popular
                  ? 'border-green-400/40 shadow-lg shadow-green-500/20'
                  : 'border-blue-500/20 hover:border-green-400/30 hover:shadow-blue-500/20'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                service.popular ? 'shadow-2xl shadow-green-500/30' : 'shadow-2xl shadow-blue-500/30'
              }`} />

              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  service.popular
                    ? 'bg-gradient-to-br from-green-500/20 to-green-400/20 border-2 border-green-400/30'
                    : 'bg-gradient-to-br from-blue-500/20 to-blue-400/20 border-2 border-blue-400/30'
                }`}>
                  <IconComponent className={`w-10 h-10 ${
                    service.popular ? 'text-green-400' : 'text-blue-400'
                  }`} />
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 rounded-full blur-lg opacity-30 ${
                    service.popular ? 'bg-green-400' : 'bg-blue-400'
                  }`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        service.popular ? 'text-green-400' : 'text-blue-400'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and Timeline */}
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Starting Price:</span>
                    <span className="font-bold text-white">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Timeline:</span>
                    <span className="font-medium text-slate-300">{service.timeline}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold transform transition-all duration-300 group-hover:scale-105 ${
                    service.popular
                      ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-blue-500 shadow-lg shadow-green-500/25'
                      : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-green-500 shadow-lg shadow-blue-500/25'
                  }`}
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your vision and budget.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30"
        >
          Schedule a Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;