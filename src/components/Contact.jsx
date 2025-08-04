import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInUp');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 transform translate-y-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-black mb-4">{data.contact.title}</h2>
            <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-black mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <a
                        href={`mailto:${data.personal.email}`}
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {data.personal.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <a
                        href={`tel:${data.personal.phone}`}
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {data.personal.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">{data.personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Elements */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated geometric shapes */}
                    <div className="w-20 h-20 bg-black rounded-lg transform rotate-12 hover:rotate-45 transition-transform duration-500 shadow-lg"></div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-400 rounded-full hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gray-600 rounded-sm hover:rotate-90 transition-transform duration-400"></div>
                  </div>
                </div>
                {/* Floating code elements */}
                <div className="absolute top-4 left-4 text-gray-400 font-mono text-sm animate-pulse">
                  &lt;/contact&gt;
                </div>
                <div className="absolute bottom-4 right-4 text-gray-400 font-mono text-sm animate-pulse">
                  { "{" } developer { "}" }
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white border-none shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black rounded-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black rounded-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black rounded-none"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-gray-300 focus:border-black focus:ring-black rounded-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-none transition-all duration-300 hover:scale-105"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;