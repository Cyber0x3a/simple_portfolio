import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light">{data.personal.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              {data.personal.title} based in {data.personal.location}
            </p>
            <div className="flex space-x-4">
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-white hover:text-black rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-white hover:text-black rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="p-2 bg-gray-800 hover:bg-white hover:text-black rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {item}
                </button>
              ))}
              <a
                href={data.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>{data.personal.email}</p>
              <p>{data.personal.phone}</p>
              <p>{data.personal.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {data.personal.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <Heart size={16} className="mx-2 text-red-500" /> and lots of coffee
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;