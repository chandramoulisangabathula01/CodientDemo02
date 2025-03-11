
import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-secondary">c</span>odient
            </h3>
            <p className="text-white/80 mb-6">
              Data-driven digital marketing strategies that deliver measurable results for businesses of all sizes.
            </p>
            {/* <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          
          {/* Services Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Pay-Per-Click (PPC) Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Google Ads Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Marketing Strategy & Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Local SEO Services
                </a>
              </li>
            </ul>
          </div> */}
          
          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div> */}
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@codient.com" className="text-white/80 hover:text-white transition-colors">
                  info@codient.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                +91 78933 95833
                </a>
              </li>
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                <address className="text-white/80 not-italic">
                  123 Marketing Street<br />
                  Digital City, DC 12345<br />
                  United States
                </address>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Codient. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
