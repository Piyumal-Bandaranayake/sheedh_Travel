'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <nav className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 ${
      isScrolled 
        ? 'w-[90%] md:w-[70%] max-w-5xl top-4 bg-white/80 backdrop-blur-xl shadow-2xl py-3 rounded-full border border-white/30' 
        : 'w-full top-0 bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Sheedh Tours Logo" 
            className={`transition-all duration-500 w-auto ${isScrolled ? 'h-12' : 'h-20 md:h-24'}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary font-bold transition-colors`}>Home</Link>
          <Link href="/#about" className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary font-bold transition-colors`}>About</Link>
          <Link href="/packages" className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary font-bold transition-colors`}>Tour Packages</Link>
          <Link href="/#vehicles" className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary font-bold transition-colors`}>Vehicles</Link>
          <Link href="/#contact" className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary font-bold transition-colors`}>Contact</Link>
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/20 active:scale-95">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white/95 backdrop-blur-lg transition-all duration-300 rounded-3xl ${isMobileMenuOpen ? 'max-h-[80vh] py-8 shadow-2xl border border-gray-200 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-8 px-4">
          <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary text-xl font-bold">Home</Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary text-xl font-bold">About</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary text-xl font-bold">Tour Packages</Link>
          <Link href="/#vehicles" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary text-xl font-bold">Vehicles</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary text-xl font-bold">Contact</Link>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
