import React from 'react';

const destinations = [
  { id: 1, name: 'Maldives', image: '/images/maldives.png', tours: '12 Tours' },
  { id: 2, name: 'Paris', image: '/images/paris.png', tours: '8 Tours' },
  { id: 3, name: 'Tokyo', image: '/images/tokyo.png', tours: '15 Tours' },
  { id: 4, name: 'Switzerland', image: '/images/switzerland.png', tours: '10 Tours' },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  {dest.tours}
                </span>
                <h4 className="text-2xl font-bold text-white mb-0">{dest.name}</h4>
              </div>
              
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
