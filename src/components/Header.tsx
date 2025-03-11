
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        <a href="#home" className="relative z-10">
          <span className={`text-3xl font-extrabold mb-0.5 ${isScrolled ? 'text-black' : 'text-white'} flex items-center`}>
            <span className="text-accent mr-0.5 ">C</span>odient
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-neutral-800 hover:text-secondary font-medium text-sm transition-colors duration-200  ${isScrolled ? 'text-black' : 'text-white'}  `}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-md font-medium text-sm transition-all duration-200 transform hover:scale-105"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-20" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-neutral-800" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-800" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-800 hover:text-secondary font-medium text-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-md font-medium text-sm transition-all duration-200 transform hover:scale-105 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
