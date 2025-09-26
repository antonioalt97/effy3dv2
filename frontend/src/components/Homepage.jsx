import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Play, ExternalLink, Code, Palette, Box } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { mockData } from '../data/mock';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20 -z-10" />
      
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/3 w-56 h-56 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <PortfolioSection portfolioItems={mockData.portfolioItems} />
      <ServicesSection services={mockData.services} />
      <FAQSection faqs={mockData.faqs} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;