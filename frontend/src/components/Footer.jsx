import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-t border-blue-500/20">
      {/* Floating Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 text-white rounded-full w-12 h-12 p-0 shadow-2xl shadow-blue-500/30 hover:shadow-green-500/30 transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E3D</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg blur opacity-30 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Effy's 3D Dreamscape
                </h3>
                <p className="text-slate-400 text-sm">Professional 3D Artist & VTuber Creator</p>
              </div>
            </div>
            
            <p className="text-slate-300 max-w-md leading-relaxed">
              Transforming creative visions into stunning 3D reality. Specializing in VTuber avatars, character modeling, and immersive digital experiences with professional quality and artistic flair.
            </p>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://www.twitch.tv/effy3d', '_blank')}
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10"
              >
                Twitch <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://twitter.com/effy3d', '_blank')}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
              >
                Twitter <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://discord.gg/effy3d', '_blank')}
                className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-400/10"
              >
                Discord <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Services', id: 'services' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                '3D Character Modeling',
                'VTuber Avatar Creation',
                'Environment Design',
                'Game Asset Development',
                'Custom 3D Projects'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Effy's 3D Dreamscape. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>for the 3D community.</span>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <button className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-green-400/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;