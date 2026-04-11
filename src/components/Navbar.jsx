'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white italic tracking-tighter">
          SAMEEDH
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-secondary font-medium transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-secondary font-medium transition-colors">About</a>
          <a href="#destinations" className="text-white hover:text-secondary font-medium transition-colors">Destinations</a>
          <a href="#packages" className="text-white hover:text-secondary font-medium transition-colors">Tours</a>
          <a href="#contact" className="text-white hover:text-secondary font-medium transition-colors">Contact</a>
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen py-6 shadow-xl' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-6 px-4">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium">About</a>
          <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium">Destinations</a>
          <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium">Tours</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium">Contact</a>
          <button className="w-full bg-secondary text-white py-3 rounded-lg font-bold">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
