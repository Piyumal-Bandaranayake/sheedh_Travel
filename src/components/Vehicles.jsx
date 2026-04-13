import React from 'react';
import Link from 'next/link';
import { vehicles } from '../data/vehicles';

const Vehicles = () => {
  // Show only first 3 vehicles on the home page
  const displayedVehicles = vehicles.slice(0, 3);

  return (
    <div id="vehicles" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4 uppercase tracking-widest">
            Sri Lanka Local Fleet
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary mb-6">Our Premium Fleet</h2>
          <p className="text-dark-gray max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed opacity-90">
            Travel in comfort and style with our range of well-maintained vehicles, perfectly suited for the Sri Lankan roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedVehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-primary font-black text-[10px] md:text-xs shadow-xl">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">{vehicle.name}</h3>
                
                <div className="flex items-center gap-2 mb-6 text-dark-gray/80 font-bold border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-secondary/10 rounded-lg">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-xs uppercase tracking-tight">Seats: {vehicle.facts}</span>
                  </div>
                </div>

                <div className="mt-auto">
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

        <div className="mt-16 md:mt-20 text-center">
          <Link 
            href="/vehicles" 
            className="inline-block border-2 border-primary text-primary px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-500 shadow-xl active:scale-95"
          >
            Explore Full Fleet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
