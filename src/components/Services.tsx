
import React from 'react';
import { Search, Rocket, TrendingUp } from 'lucide-react';
import ServiceCard from './ServiceCard';
import useInView from '../hooks/useInView';

const Services: React.FC = () => {
  const [ref, isInView] = useInView();

  const services = [
    {
      icon: Search,
      title: "Dominate Search Engines with SEO",
      items: [
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Technical SEO Audits",
        "Local SEO for Small Businesses"
      ]
    },
    {
      icon: Rocket,
      title: "High-Converting Paid Ads",
      items: [
        "Google Ads Management",
        "Bing Ads Campaigns",
        "A/B Testing & Optimization",
        "Conversion Tracking & Analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Tailored Digital Strategies",
      items: [
        "Custom Performance Audits",
        "Competitor Analysis & Insights",
        "Monthly Reporting & Dashboards",
        "Conversion Rate Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-neutral-100 relative">
      <div className="container-tight">
        <div 
          ref={ref}
          className={`text-center mb-16 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
        >
          <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Driving Growth Through Digital Excellence
          </h2>
          <p className="text-neutral-800 max-w-2xl mx-auto">
            We combine data-driven insights with proven strategies to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              items={service.items}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
