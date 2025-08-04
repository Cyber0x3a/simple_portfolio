import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D floating code elements
    const codeElements = [
      '{ }', '<>', '[]', '()', '=>', '&&', '||', '++', '--', '===',
      'fn', 'const', 'let', 'if', 'else', 'for', 'while', 'return',
      'import', 'export', 'async', 'await', 'promise', 'react', 'node'
    ];

    const particles = [];
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        text: codeElements[Math.floor(Math.random() * codeElements.length)],
        speed: 0.5 + Math.random() * 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: Math.random() * Math.PI * 2,
        alpha: 0.1 + Math.random() * 0.3
      });
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollY = window.scrollY || 0;
      
      particles.forEach((particle) => {
        // Update position based on scroll
        particle.y += particle.speed - scrollY * 0.01;
        particle.rotationY += 0.01;
        particle.rotationZ += 0.005;
        
        // Reset particle when it goes off screen
        if (particle.y > canvas.height + 50) {
          particle.y = -50;
          particle.x = Math.random() * canvas.width;
        }
        
        // 3D perspective calculation
        const perspective = 500;
        const z = particle.z + Math.sin(time * 0.001 + particle.x * 0.01) * 50;
        const scale = perspective / (perspective + z);
        const x = particle.x + Math.cos(particle.rotationY) * 20 * scale;
        const y = particle.y + Math.sin(particle.rotationX) * 20 * scale;
        
        // Render text with 3D effect
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.rotate(particle.rotationZ);
        ctx.globalAlpha = particle.alpha * scale;
        ctx.font = `${14 + scale * 6}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = '#666';
        ctx.textAlign = 'center';
        ctx.fillText(particle.text, 0, 0);
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fadeInUp">
          {/* Name and Title */}
          <div>
            <h1 className="text-6xl md:text-8xl font-light text-black tracking-tight leading-none">
              {data.personal.name}
            </h1>
            <div className="h-1 w-24 bg-black mx-auto my-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {data.personal.title}
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {data.personal.tagline}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-none transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-black transition-colors" />
      </button>
    </section>
  );
};

export default Hero;