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
      <div className={`md:hidden fixed inset-x-0 top-0 h-screen bg-primary/95 backdrop-blur-2xl transition-all duration-500 z-[60] flex flex-col items-center justify-center ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <button 
          className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-10 px-6 w-full max-w-sm">
          <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-black hover:text-secondary transition-colors tracking-tight">Home</Link>
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-black hover:text-secondary transition-colors tracking-tight">About</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-black hover:text-secondary transition-colors tracking-tight">Tour Packages</Link>
          <Link href="/#vehicles" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-black hover:text-secondary transition-colors tracking-tight">Vehicles</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-black hover:text-secondary transition-colors tracking-tight">Contact</Link>
          
          <button className="w-full mt-4 bg-secondary text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-red-500/30 hover:scale-105 active:scale-95 transition-all">
            Book Your Journey
          </button>
          
          <div className="mt-12 flex gap-6">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
             </div>
             <p className="text-white/50 font-bold uppercase tracking-widest text-xs self-center">Premium Sri Lankan Tours</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
