import React, { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const About = ({ data }) => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

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
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Frontend', skills: data.skills.frontend, color: 'bg-blue-100 text-blue-800' },
    { title: 'Backend', skills: data.skills.backend, color: 'bg-green-100 text-green-800' },
    { title: 'Database', skills: data.skills.databases, color: 'bg-purple-100 text-purple-800' },
    { title: 'Tools', skills: data.skills.tools, color: 'bg-gray-100 text-gray-800' }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <div ref={sectionRef} className="opacity-0 transform translate-y-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl font-light text-black mb-4">About Me</h2>
                <div className="h-1 w-16 bg-black mb-8"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.personal.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-500 w-20">Email</span>
                  <span className="text-gray-700">{data.personal.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-500 w-20">Location</span>
                  <span className="text-gray-700">{data.personal.location}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="opacity-0 transform translate-y-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-black mb-4">Technical Skills</h3>
            <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-none"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h4 className="text-xl font-semibold text-black mb-6">{category.title}</h4>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 text-sm py-2 px-3`}
                      style={{ 
                        animationDelay: `${(index * 4 + skillIndex) * 100}ms`,
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-black mb-4">Experience</h3>
            <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-12">
            {data.experience.map((job, index) => (
              <div 
                key={job.id} 
                className="relative pl-8 border-l-2 border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-2"></div>
                <Card className="p-8 ml-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-none">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-black">{job.position}</h4>
                      <p className="text-lg text-gray-600 font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0">
                      <div>{job.duration}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-black mt-1">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;