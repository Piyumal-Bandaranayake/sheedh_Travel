import React from 'react';
import Link from 'next/link';
import { vehicles } from '../data/vehicles';

const Vehicles = () => {
  // Show only first 3 vehicles on the home page
  const displayedVehicles = vehicles.slice(0, 3);

  return (
    <section id="vehicles" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Fleet</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Available Vehicles</h2>
          <p className="text-dark-gray max-w-2xl mx-auto text-lg">
            Travel in comfort and style with our diverse range of well-maintained vehicles, perfect for any group size or terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedVehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-primary font-bold text-sm shadow-sm">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{vehicle.name}</h3>
                
                <div className="flex items-center gap-6 mb-6 text-dark-gray border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium text-sm">{vehicle.passengers} Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <span className="font-medium text-sm">{vehicle.bags} Bags</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{vehicle.price}</span>
                  <button className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-all hover:scale-110 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/vehicles" 
            className="inline-block bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-xl"
          >
            Explore All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
