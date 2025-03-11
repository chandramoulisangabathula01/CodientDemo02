
import React from 'react';
import useInView from '../hooks/useInView';
import { Clock, LineChart, Target } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [leftRef, isLeftInView] = useInView();
  const [rightRef, isRightInView] = useInView();

  const reasons = [
    {
      icon: Clock,
      title: "5+ Years of combined Expertise",
      description: "Benefit from our decade-long experience in helping businesses grow through data-driven digital marketing."
    },
    {
      icon: LineChart,
      title: "Transparent Reporting & Analytics",
      description: "Get clear insights with comprehensive dashboards showing exactly how your campaigns are performing."
    },
    {
      icon: Target,
      title: "Focus on Long-Term Growth",
      description: "We don't chase quick fixes. Our strategies are designed for sustainable, long-term business growth."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white relative">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div 
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`opacity-0 ${isLeftInView ? 'animate-fade-in-right' : ''}`}
          >
            <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
              Why Codient
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Partner with Experts Who Deliver Results
            </h2>
            <p className="text-neutral-800 mb-8">
              At Codient, we combine technical expertise with strategic thinking to help your business thrive online.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="bg-secondary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <reason.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{reason.title}</h3>
                    <p className="text-neutral-800 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center"
              >
                Start Your Growth Journey
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Image/SVG */}
          <div 
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`opacity-0 ${isRightInView ? 'animate-fade-in-left' : ''}`}
          >
            <div className="relative">
              {/* Abstract Dashboard SVG */}
              <svg 
                viewBox="0 0 500 400" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto filter drop-shadow-xl"
              >
                <rect x="50" y="50" width="400" height="300" rx="20" fill="#f8fafc" />
                
                {/* Header */}
                <rect x="70" y="70" width="360" height="40" rx="8" fill="#e2e8f0" />
                <circle cx="90" cy="90" r="10" fill="#38B2AC" />
                <rect x="110" y="85" width="100" height="10" rx="2" fill="#94a3b8" />
                <rect x="350" y="85" width="60" height="10" rx="2" fill="#94a3b8" />
                
                {/* Main chart */}
                <rect x="70" y="130" width="240" height="180" rx="8" fill="#e2e8f0" />
                <polyline 
                  points="90,250 130,220 170,260 210,180 250,210 290,170" 
                  fill="none" 
                  stroke="#38B2AC" 
                  strokeWidth="3"
                />
                <circle cx="90" cy="250" r="4" fill="#1A365D" />
                <circle cx="130" cy="220" r="4" fill="#1A365D" />
                <circle cx="170" cy="260" r="4" fill="#1A365D" />
                <circle cx="210" cy="180" r="4" fill="#1A365D" />
                <circle cx="250" cy="210" r="4" fill="#1A365D" />
                <circle cx="290" cy="170" r="4" fill="#1A365D" />
                
                {/* Side charts */}
                <rect x="330" y="130" width="100" height="80" rx="8" fill="#e2e8f0" />
                <circle cx="380" cy="170" r="30" fill="none" stroke="#1A365D" strokeWidth="10" />
                <path d="M380,170 L380,140" stroke="#F6AD55" strokeWidth="3" />
                <path d="M380,170 L400,180" stroke="#F6AD55" strokeWidth="3" />
                
                <rect x="330" y="230" width="100" height="80" rx="8" fill="#e2e8f0" />
                <rect x="345" y="250" width="20" height="45" rx="2" fill="#1A365D" />
                <rect x="375" y="265" width="20" height="30" rx="2" fill="#38B2AC" />
                <rect x="405" y="245" width="20" height="50" rx="2" fill="#F6AD55" />
              </svg>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-lg bg-accent/20 animate-float delay-200"></div>
              <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-secondary/20 animate-float delay-500"></div>
              <div className="absolute top-1/2 -right-4 h-8 w-8 rounded-md bg-primary/20 animate-float"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
