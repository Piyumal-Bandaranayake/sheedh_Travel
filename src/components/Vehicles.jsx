import React from 'react';
import Link from 'next/link';
import { vehicles } from '../data/vehicles';

const Vehicles = () => {
  // Show only first 3 vehicles on the home page
  const displayedVehicles = vehicles.slice(0, 3);

  return (
    <div id="vehicles" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4 uppercase tracking-widest">
            Sri Lanka Local Fleet
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">Our Premium Fleet</h2>
          <p className="text-dark-gray max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Travel in comfort and style with our range of well-maintained vehicles, perfectly suited for the Sri Lankan roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedVehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-1.5 rounded-full text-primary font-black text-sm shadow-xl">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-primary mb-6 group-hover:text-secondary transition-colors">{vehicle.name}</h3>
                
                <div className="flex items-center gap-8 mb-8 text-dark-gray/80 font-bold border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-xl">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <span className="text-sm">{vehicle.passengers} Seats</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                    <span className="text-sm">{vehicle.bags} Bags</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Starting from</span>
                    <span className="text-2xl font-black text-primary">{vehicle.price}</span>
                  </div>
                  <button className="bg-primary text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-secondary transition-all hover:scale-110 shadow-xl group/btn">
                    <svg className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/vehicles" 
            className="inline-block border-2 border-primary text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
          >
            Explore Full Fleet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
