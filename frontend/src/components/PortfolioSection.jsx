import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PortfolioSection = ({ portfolioItems }) => {
  const [filter, setFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', '3D Character', 'Environment', 'Props'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

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
      id="portfolio" 
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-bold">
          My Latest{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              3D Creations
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-20 animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of 3D models, VTuber avatars, and digital art. Each piece is crafted with precision, creativity, and cutting-edge technology.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-blue-500/20">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "ghost"}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredItems.map((item, index) => (
          <Card
            key={item.id}
            className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02] ${
              item.featured ? 'lg:col-span-2 lg:row-span-1' : ''
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className="relative">
              {/* Image Container */}
              <div className={`relative overflow-hidden ${item.featured ? 'h-80' : 'h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center ${
                  hoveredItem === item.id ? 'backdrop-blur-sm' : ''
                }`}>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transform scale-0 group-hover:scale-100 transition-all duration-300"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-blue-400 border-blue-400/30">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-slate-400">{item.completionDate}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-slate-700/50 text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Client Info */}
                <div className="pt-2 border-t border-slate-700">
                  <p className="text-xs text-slate-400">
                    Client: <span className="text-slate-300 font-medium">{item.client}</span>
                  </p>
                </div>
              </CardContent>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-lg shadow-2xl shadow-blue-500/20 blur-xl" />
            </div>
          </Card>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-green-500/30"
        >
          View Full Portfolio
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default PortfolioSection;