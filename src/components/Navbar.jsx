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
          <button className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-green-500/20 active:scale-95 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
          
          <button className="w-full mt-4 bg-[#25D366] text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Now
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
