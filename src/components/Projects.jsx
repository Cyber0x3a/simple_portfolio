import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = ({ data }) => {
  const sectionRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const featuredProjects = data.projects.filter(project => project.featured);

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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 transform translate-y-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-black mb-4">Featured Projects</h2>
            <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications built with modern technologies.
            </p>
          </div>

          {/* Featured Project Carousel */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="p-12 flex flex-col justify-center">
                        <h3 className="text-4xl font-light text-black mb-6">{project.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Button
                            asChild
                            className="bg-black hover:bg-gray-800 text-white rounded-none px-6"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-black text-black hover:bg-black hover:text-white rounded-none px-6"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              Source Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentProject === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-3xl font-light text-black mb-12 text-center">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-none"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-black mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        asChild
                        size="sm"
                        className="bg-black hover:bg-gray-800 text-white rounded-none px-4"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white rounded-none px-4"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;