"use client"
import { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Server, Globe, ChevronRight, MapPin, Users, Briefcase } from 'lucide-react';
import { projects } from './projects';
import Link from 'next/link';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: any) => {
    switch(category) {
      case 'frontend': return <Globe className="w-5 h-5" />;
      case 'backend': return <Server className="w-5 h-5" />;
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work across frontend, backend, and mobile development. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {getCategoryIcon(category.id)}
              {category.label}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-white/10'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                </div>
                <p className="text-purple-400 font-medium mb-3">{project.type}</p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="w-3 h-3 text-purple-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">6+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
            <p className="text-gray-300">Countries Served</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-300">Technologies Used</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's discuss your next project!
            </p>
            <Link href='/contact' className="group bg-gradient-to-r w-[fit-content] from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Get In Touch
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Projects;