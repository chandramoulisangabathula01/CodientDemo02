
import React from 'react';
import { LucideIcon } from 'lucide-react';
import useInView from '../hooks/useInView';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  items,
  delay = 0,
}) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`rounded-xl p-8 card-hover blur-card flex flex-col h-full transform opacity-0 ${
        isInView ? 'animate-scale-in' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-secondary" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      
      <ul className="mt-2 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0"></div>
            <span className="text-neutral-800">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6">
        <a 
          href="#contact" 
          className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
