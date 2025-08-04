import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ data }) => {
  const sectionRef = useRef(null);

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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 transform translate-y-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-black mb-4">Client Testimonials</h2>
            <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What colleagues and clients say about working with me
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-none overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={48} className="text-black" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* 3D Floating Elements */}
          <div className="relative mt-16 h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Animated testimonial symbols */}
                <div className="absolute -top-8 left-0 text-6xl text-gray-200 font-serif animate-float">"</div>
                <div className="absolute -bottom-8 right-0 text-6xl text-gray-200 font-serif animate-float-delayed">"</div>
                <div className="w-16 h-16 border-2 border-gray-200 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;