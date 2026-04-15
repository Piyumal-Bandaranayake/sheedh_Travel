'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero4.jpg',
    '/images/hero3.jpg'
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
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          style={{ backgroundImage: `url('${slide}')` }}
        >
          {/* Subtle dark vignette only — preserves original image colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full pt-4 md:pt-6">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom duration-1000">

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-3 md:mb-5 text-white leading-[1.2] md:leading-[1.1] text-glow-white tracking-tight font-noto">
            Explore Sri Lanka <br className="hidden md:block" />
            <span className="bg-highlight/40 text-secondary italic text-glow-secondary">Sheedh</span> Tours
          </h1>
          <p className="text-base md:text-xl mb-5 md:mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-lg font-medium leading-relaxed">
            Experience the wonder of the pearl of the Indian Ocean with our premium local travel expertise and personalized packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
            <button className="bg-secondary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-md md:rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red-500/20 active:scale-95">
              View Tour Packages
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-md md:rounded-lg font-semibold text-xs md:text-sm hover:bg-white hover:text-primary transition-all duration-500 active:scale-95 text-center">
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
