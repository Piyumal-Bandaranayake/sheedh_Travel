import React, { useState } from 'react';
import Link from 'next/link';
import { packages } from '../data/packages';

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Take only first 3 packages for the home page
  const displayedPackages = packages.slice(0, 3);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div id="packages" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-4 uppercase tracking-widest">
            Our Popular Tours
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Amazing Tour Packages</h2>
          <p className="text-dark-gray max-w-2xl mx-auto text-lg font-medium">
            Choose from our carefully curated travel packages designed to give you the best experience of Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedPackages.map((pkg) => (
            <div key={pkg.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-secondary text-white font-black px-6 py-2 rounded-full shadow-xl">
                  {pkg.price}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{pkg.title}</h3>
                <p className="text-dark-gray mb-8 flex-1 leading-relaxed">{pkg.desc}</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => openModal(pkg)}
                    className="flex-1 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Details
                  </button>
                  <button className="flex-1 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-red-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/packages" 
            className="inline-block bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-secondary hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-primary/20"
          >
            Explore All Packages
          </Link>
        </div>
      </div>

      {/* Modal - Kept for functionality */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-md" onClick={closeModal}></div>
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 border border-white/20">
            <button onClick={closeModal} className="absolute top-6 right-6 p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-all z-10 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-80 md:h-[600px]">
                <img src={selectedPackage.image} alt={selectedPackage.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-10 md:p-14">
                <div className="text-secondary font-black text-sm tracking-widest uppercase mb-4">Featured Package</div>
                <h2 className="text-4xl font-black text-primary mb-6 leading-tight">{selectedPackage.title}</h2>
                <div className="flex items-center gap-6 mb-8">
                    <span className="text-2xl font-black text-secondary">{selectedPackage.price}</span>
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-primary font-bold text-sm">{selectedPackage.duration}</span>
                </div>
                <p className="text-dark-gray leading-relaxed mb-10 text-lg">{selectedPackage.desc}</p>
                <button className="w-full py-5 bg-secondary text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-200 text-lg">Inquire Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages;
