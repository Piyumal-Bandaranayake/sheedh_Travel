'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const Preloader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initial load handling
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      // Small timeout to avoid immediate synchronous setState during effect
      const startTimer = setTimeout(() => setIsLoading(true), 0);
      const endTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // Increased duration to show the slower animation
      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [pathname, searchParams, isInitialLoad]);

  if (!isLoading && !isInitialLoad) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-all duration-700 ${!isLoading && !isInitialLoad ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,_rgba(229,57,51,0.1)_0%,_transparent_50%),radial-gradient(circle_at_70%_70%,_rgba(255,255,255,0.05)_0%,_transparent_50%)] animate-pulse-slow"></div>
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Logo Container */}
        <div className="relative mb-16 transform transition-transform duration-1000 scale-110">
          <div className="absolute inset-0 blur-3xl bg-secondary/20 rounded-full animate-glow"></div>
          <img 
            src="/logo.png" 
            alt="Sheedh Logo" 
            className="h-28 md:h-36 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float" 
          />
        </div>

        {/* Animation Track */}
        <div className="w-80 h-24 relative flex flex-col items-center justify-center overflow-hidden">
          {/* Moving Vehicle */}
          <div className="absolute w-full animate-vehicle-track">
             <div className="relative flex items-center gap-4">
                {/* Motion Trails */}
                <div className="flex flex-col gap-1.5 translate-y-1">
                  <div className="h-0.5 w-12 bg-gradient-to-l from-secondary/80 to-transparent rounded-full animate-trail-1"></div>
                  <div className="h-0.5 w-8 bg-gradient-to-l from-white/30 to-transparent rounded-full animate-trail-2"></div>
                  <div className="h-0.5 w-10 bg-gradient-to-l from-secondary/50 to-transparent rounded-full animate-trail-3"></div>
                </div>

                {/* Premium Van SVG */}
                <div className="relative transform hover:scale-105 transition-transform">
                  <svg width="85" height="42" viewBox="0 0 85 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    <path d="M5 15C5 12.2386 7.23858 10 10 10H55C58.866 10 62 13.134 62 17V35H5V15Z" fill="white" />
                    <path d="M62 17L78 20V35H62V17Z" fill="#F3F4F6" />
                    <path d="M58 13L72 17V26H58V13Z" fill="#1E293B" /> {/* Windshield */}
                    <rect x="15" y="15" width="12" height="8" rx="1" fill="#E2E8F0" /> {/* Side window 1 */}
                    <rect x="32" y="15" width="12" height="8" rx="1" fill="#E2E8F0" /> {/* Side window 2 */}
                    
                    {/* Headlight Glow */}
                    <circle cx="78" cy="30" r="3" fill="#FBBF24" className="animate-pulse" />
                    <circle cx="78" cy="30" r="6" fill="#FBBF24" fillOpacity="0.3" className="animate-ping" />
                    
                    {/* Wheels */}
                    <circle cx="18" cy="35" r="5" fill="#111827" />
                    <circle cx="18" cy="35" r="2.5" fill="#4B5563" />
                    <circle cx="62" cy="35" r="5" fill="#111827" />
                    <circle cx="62" cy="35" r="2.5" fill="#4B5563" />
                    
                    {/* Accent Line */}
                    <rect x="5" y="28" width="57" height="1.5" fill="#E53935" />
                  </svg>
                </div>
             </div>
          </div>

          {/* Road Line with Dashes */}
          <div className="absolute bottom-4 w-72 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="absolute inset-0 flex justify-around animate-road-dashes">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-4 h-full bg-white/20"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-12 group">
          <p className="text-white text-sm font-semibold tracking-[0.4em] uppercase opacity-70 flex items-center gap-3">
            <span className="inline-block w-8 h-[1px] bg-secondary/50"></span>
            Your Journey Begins
            <span className="inline-block w-8 h-[1px] bg-secondary/50"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
