'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{ backgroundImage: `url('${slide}')` }}
        >
          {/* Overlay - Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
        <div className="max-w-4xl text-left animate-in fade-in slide-in-from-left duration-1000">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-[1.1] text-glow-white tracking-tight font-noto">
            Explore Sri Lanka <br/> 
            <span className="text-secondary italic text-glow-secondary">Sheedh</span> Tours
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-white/90 max-w-2xl drop-shadow-lg font-medium leading-relaxed">
            Experience the wonder of the pearl of the Indian Ocean with our premium local travel expertise and personalized packages.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-500/20 active:scale-95">
              View Tour Packages
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-500 active:scale-95">
              Explore Our Fleet
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-secondary' : 'w-4 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>


    </section>
  );
};

export default Hero;
