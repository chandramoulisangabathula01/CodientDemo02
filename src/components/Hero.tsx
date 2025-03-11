
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedStats from './AnimatedStats';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create particles for the background
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 20;
    
    // Clear existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size
      const size = Math.floor(Math.random() * 20) + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.floor(Math.random() * 100);
      const posY = Math.floor(Math.random() * 100);
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random delay for animation
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      // Random opacity
      const opacity = (Math.random() * 0.5) + 0.1;
      particle.style.opacity = opacity.toString();
      
      container.appendChild(particle);
    }
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: 100, label: 'Satisfied Clients', unit: '%' },
    { value: 24, label: 'Hour Support', unit: '/7' },
    { value: 98, label: 'Project Success Rate', unit: '%' },
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
      
      {/* Particle container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Transform Your Online Presence with Modern Digital Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fresh Perspective, Innovative Strategies, Real Results
        </p>
        
        <a 
          href="#contact" 
          className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in flex items-center"
          style={{ animationDelay: '0.4s' }}
        >
          Start Your Journey
          <ChevronDown className="ml-2 h-5 w-5 animate-pulse-slow" />
        </a>
        
        {/* Stats Bar */}
        <div className="w-full mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <AnimatedStats stats={stats} />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-10 w-10 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
