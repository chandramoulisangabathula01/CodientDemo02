
import React from 'react';
import useInView from '../hooks/useInView';

const ContactForm: React.FC = () => {
  const [ref, isInView] = useInView();
  
  return (
    <section id="contact" className="section-padding bg-neutral-100">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container-tight opacity-0 ${isInView ? 'animate-fade-in' : ''}`}
      >
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Grow Your Business?
          </h2>
          <p className="text-neutral-800 max-w-2xl mx-auto">
            Fill out the form below for your free consultation and audit. We'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              src={import.meta.env.VITE_GOOGLE_FORM_URL}
              className="w-full h-[800px] border-0"
              title="Contact Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
