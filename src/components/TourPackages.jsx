import React from 'react';

const packages = [
  {
    id: 1,
    title: 'European Splendor',
    duration: '10 Days, 9 Nights',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Explore the historic charm of Europe, visiting London, Paris, and Amsterdam.'
  },
  {
    id: 2,
    title: 'Tropical Maldives Escape',
    duration: '7 Days, 6 Nights',
    price: '$2,450',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Relax in luxury overwater bungalows and dive into crystal clear lagoons.'
  },
  {
    id: 3,
    title: 'Majestic Swiss Alps',
    duration: '8 Days, 7 Nights',
    price: '$1,850',
    image: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Experience the magic of the Alps with mountain treks and scenic train rides.'
  }
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Amazing Tour Packages</h2>
          <p className="text-dark-gray max-w-2xl mx-auto">
            Choose from our carefully curated travel packages designed to give you the best experience at the best price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white font-bold px-4 py-2 rounded-full shadow-lg">
                  {pkg.price}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{pkg.title}</h3>
                <p className="text-dark-gray mb-6 flex-1">{pkg.desc}</p>
                <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
                  Contact for Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
