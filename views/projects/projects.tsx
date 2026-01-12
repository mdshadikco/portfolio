import { ExternalLink, Github, Code, Smartphone, Server, Globe, ChevronRight, MapPin, Users, Briefcase } from 'lucide-react';

export const projects = [
    {
      id: 1,
      title: "Loopie Laundry",
      category: "frontend",
      type: "Web Application",
      description: "A comprehensive laundry service platform for US-based customers, featuring real-time order tracking, scheduling, and payment integration.",
      technologies: ["React", "TypeScript", "REST API"],
      features: ["Real-time tracking", "Payment integration", "Service scheduling", "Customer dashboard"],
      location: "USA",
      gradient: "from-blue-500 to-cyan-500",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 2,
      title: "CMIB Job Portal",
      category: "frontend",
      type: "Job Portal Platform",
      description: "A modern job portal connecting employers with job seekers, featuring advanced search, application management, and profile matching.",
      technologies: ["React", "Context Api", "Material-UI", "Node.js"],
      features: ["Advanced job search", "Profile matching", "Application tracking", "Employer dashboard"],
      location: "India",
      gradient: "from-purple-500 to-pink-500",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 3,
      title: "PDSL RMS",
      category: "frontend",
      type: "Revenue Management System",
      description: "Kenya-based revenue management service platform enabling county governments to provide digital services to citizens efficiently.",
      technologies: ["React Js", "Next.js", "Chart.js", "Redux", "API Integration"],
      features: ["Revenue tracking", "Citizen services", "Government portal", "Analytics dashboard"],
      location: "Kenya",
      gradient: "from-green-500 to-teal-500",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Prerna NGO Platform",
      category: "backend",
      type: "NGO Management System",
      description: "Backend infrastructure for an NGO platform, handling donor management, project tracking, and volunteer coordination.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT Auth"],
      features: ["Donor management", "Project tracking", "Volunteer system", "Payment processing"],
      location: "India",
      gradient: "from-orange-500 to-red-500",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Aakash Life",
      category: "mobile",
      type: "Mobile Application",
      description: "React Native application with AppsFlyer SDK integration for comprehensive app analytics and attribution tracking.",
      technologies: ["React Native", "AppsFlyer SDK", "JavaScript", "Firebase"],
      features: ["App analytics", "Attribution tracking", "User engagement", "Performance monitoring"],
      location: "India",
      gradient: "from-indigo-500 to-purple-500",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Vision Pharma",
      category: "mobile",
      type: "Mobile Application",
      description: "React Native app featuring WebView integration with Google Auth for seamless pharmaceutical industry solutions.",
      technologies: ["React Native", "WebView", "Google Auth", "JavaScript"],
      features: ["Google authentication", "WebView integration", "Pharma solutions", "Secure access"],
      location: "India",
      gradient: "from-teal-500 to-blue-500",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];