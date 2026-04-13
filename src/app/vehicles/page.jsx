'use client';
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { vehicles } from '../../data/vehicles';

import { AnimatedBackground } from '../../components/AnimatedBackground';

const AllVehiclesPage = () => {
  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header section with background */}
      <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover"
            alt="Vehicles background"
          />
          {/* Enhanced Overlay to match Hero design */}
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-secondary/15 to-indigo-900/25 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/60"></div>
        </div>
        <div className="relative text-center text-white px-6 z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight text-glow-white">Our Premium Fleet</h1>
          <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">Comfortable and reliable transport for your journey</p>
        </div>
      </section>

      <AnimatedBackground>
        {/* Vehicles Grid */}
        <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="group bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-primary font-bold text-xs shadow-sm">
                    {vehicle.type}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{vehicle.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-6 text-dark-gray border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-bold text-xs md:text-sm uppercase tracking-tight">Seats: {vehicle.facts}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button 
                      onClick={() => {
                        const message = `Hello Sheedh Tours, I'm interested in renting the "${vehicle.name}".`;
                        window.open(`https://wa.me/94719669093?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg active:scale-95 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedBackground>

      <Footer />
    </main>
  );
};

export default AllVehiclesPage;
