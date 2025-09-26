import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      project: '',
      timeline: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const projectTypes = [
    'VTuber Avatar',
    '3D Character',
    'Environment Design',
    'Game Assets',
    'Custom Project'
  ];

  const timelineOptions = [
    'Rush (1-2 weeks)',
    'Standard (3-4 weeks)',
    'Extended (5+ weeks)',
    'Flexible'
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-bold">
          Let's Create{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-lg opacity-20 animate-pulse" />
          </span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Ready to bring your 3D vision to life? Share your project details and let's start creating something extraordinary together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20">
          <CardHeader>
            <h3 className="text-2xl font-bold text-white mb-2">Project Details</h3>
            <p className="text-slate-300">Tell me about your vision and requirements</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Project Type *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, project: type }))}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.project === type
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-blue-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Timeline Preference
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {timelineOptions.map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeline }))}
                      className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.timeline === timeline
                          ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-green-400'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Description *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, style preferences, reference images, and any specific requirements..."
                  rows={6}
                  required
                  className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 text-lg transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Project Details
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-green-500/20">
            <CardHeader>
              <h3 className="text-xl font-bold text-white">Quick Contact</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-sm text-slate-300">effy@3ddreamscape.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">Discord</p>
                  <p className="text-sm text-slate-300">Effy3D#1234</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    I typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <Badge className="bg-green-600/20 text-green-400 border border-green-400/30">
                    Usually within 4 hours
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Status */}
          <Card className="bg-gradient-to-br from-purple-800/20 to-purple-900/20 border border-purple-500/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="w-16 h-16 bg-purple-600/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Currently Live</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Watch me work on 3D models live on Twitch! Ask questions in real-time.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://www.twitch.tv/effy3d', '_blank')}
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    Join Stream
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;