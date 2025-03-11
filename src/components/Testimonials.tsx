
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import useInView from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Bright Solutions Co.",
    quote: "Codient doubled our organic traffic in just 6 months and helped us achieve a 40% increase in lead generation through Google Ads.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    stars: 5
  },
  {
    name: "Michael Chen",
    company: "TechGrowth Inc.",
    quote: "Their SEO strategy transformed our online presence. We're now ranking for competitive keywords we never thought possible.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5
  },
  {
    name: "Emily Roberts",
    company: "Boutique Essentials",
    quote: "As a small business owner, I was skeptical about digital marketing. Codient proved its value within months with clear, measurable results.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 5
  },
  {
    name: "James Wilson",
    company: "Prime Property Group",
    quote: "The PPC campaigns designed by Codient have consistently delivered high-quality leads for our real estate business. Exceptional ROI!",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    stars: 4
  },
  {
    name: "Aisha Patel",
    company: "Global Innovate",
    quote: "Their transparent reporting and proactive communication make them stand out. We always know exactly where our campaigns stand.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const [ref, isInView] = useInView();
  
  // Handle automatic sliding
  useEffect(() => {
    if (!autoplay) return;
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      goToNext();
    }, 5000);
    
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, autoplay]);
  
  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-tight">
        <div 
          ref={ref}
          className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
        >
          <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-neutral-800 max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve meaningful growth through digital marketing.
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-neutral-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-neutral-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          
          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-secondary' 
                    : 'w-2.5 bg-neutral-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
