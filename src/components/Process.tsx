
import React, { useRef } from 'react';
import useInView from '../hooks/useInView';
import { ClipboardCheck, Rocket, BarChart, TrendingUp } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ElementType;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  isInView: boolean;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon: Icon,
  number,
  title,
  description,
  isLast = false,
  isInView,
  delay
}) => {
  return (
    <div 
      className={`relative opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Connected line between steps (skip on last step) */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-secondary to-secondary/20 transform -translate-y-1/2"></div>
      )}
      
      <div className="flex flex-col items-center text-center px-4">
        <div className="mb-5 relative">
          <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse-slow"></div>
          <div className="relative bg-white rounded-full p-4 shadow-md">
            <Icon className="h-8 w-8 text-secondary" />
          </div>
          <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
            {number}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-neutral-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const [ref, isInView] = useInView();
  const [stepsRef, isStepsInView] = useInView();
  
  const steps = [
    {
      icon: ClipboardCheck,
      number: 1,
      title: "Audit & Strategy",
      description: "We analyze your current performance and market to build a solid foundation."
    },
    {
      icon: Rocket,
      number: 2,
      title: "Optimize & Launch",
      description: "We build and implement campaigns tailored to your unique audience."
    },
    {
      icon: BarChart,
      number: 3,
      title: "Monitor & Test",
      description: "We continuously track, analyze, and refine to maximize your ROI."
    },
    {
      icon: TrendingUp,
      number: 4,
      title: "Scale & Grow",
      description: "We expand successful strategies to grow your business profitably."
    }
  ];

  return (
    <section id="process" className="section-padding bg-neutral-100 relative">
      <div className="container-tight">
        <div 
          ref={ref}
          className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
        >
          <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How We Drive Your Success
          </h2>
          <p className="text-neutral-800 max-w-2xl mx-auto">
            Our proven four-step process ensures consistent, measurable results for your business.
          </p>
        </div>

        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0"
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              isInView={isStepsInView}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
