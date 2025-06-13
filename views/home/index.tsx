"use client"
import { ArrowRight, Github, Linkedin, Mail, Code, Palette, Zap, Contact } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Hi, I'm
                  <span className="block text-purple-400">Md Shadik</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Full-Stack Developer crafting digital experiences that matter
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
                    React & Next.js
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
                    Node.js
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href='/projects' className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center text-6xl font-bold text-gray-700">
                    MS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Building scalable web applications with modern technologies and best practices
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Creating beautiful, intuitive interfaces that provide exceptional user experiences
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimizing applications for speed, accessibility, and search engine visibility
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Let's Build Something
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something extraordinary.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/mdshadikco" className="group bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:md.shadik@unthinkable.co" className="group bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-all duration-300 hover:transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <Link href="/contact" className=" flex gap-2 group bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-all duration-300 hover:transform hover:scale-110">
              <Contact className="w-6 h-6" /> Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
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

export default Home;