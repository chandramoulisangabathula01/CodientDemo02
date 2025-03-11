
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  image: string;
  stars?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
  image,
  stars = 5
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-secondary">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-sm text-neutral-800">{company}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < stars ? 'text-accent fill-accent' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-neutral-800 italic">{quote}</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
