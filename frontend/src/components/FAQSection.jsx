import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const FAQSection = ({ faqs }) => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
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
      id="faq"
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-bold">
          Frequently Asked{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              Questions
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-20 animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about my 3D modeling and VTuber services. Don't see your question? Feel free to reach out!
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(faq.id);
          
          return (
            <Card
              key={faq.id}
              className={`group overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all duration-500 hover:shadow-lg ${
                isOpen 
                  ? 'border-blue-400/40 shadow-lg shadow-blue-500/20' 
                  : 'border-blue-500/20 hover:border-green-400/30'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg"
              >
                <div className="flex items-center justify-between p-6 hover:bg-slate-700/20 transition-colors">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 transform transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-blue-400' : 'text-slate-400 group-hover:text-green-400'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </div>

              {/* Glow Effect */}
              {isOpen && (
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg shadow-2xl shadow-blue-500/10 blur-xl" />
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl border border-blue-500/20">
        <h3 className="text-xl font-bold text-white mb-3">
          Still have questions?
        </h3>
        <p className="text-slate-300 mb-6">
          I'm here to help! Get in touch and I'll respond within 24 hours.
        </p>
        <button
          onClick={() => {
            const contactElement = document.getElementById('contact');
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default FAQSection;