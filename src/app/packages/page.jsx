'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { packages } from '../../data/packages';

const AllPackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-active');
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-active');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header section with background */}
      <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30"
            alt="Travel background"
          />
        </div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">Sri Lanka Tour Packages</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-lg mx-auto">Discover the wonder of the island with Sheedh Tours</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white font-bold px-4 py-2 rounded-full shadow-lg">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pkg.duration}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{pkg.title}</h3>
                  <p className="text-dark-gray mb-6 flex-1 line-clamp-3 text-sm md:text-base">{pkg.desc}</p>
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => openModal(pkg)}
                      className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-xl text-center hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                    >
                      View Details
                    </button>
                    <button className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-colors duration-300 active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modal Popup (Same as in TourPackages) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-2xl transition-all duration-500" onClick={closeModal}></div>
          
          <div className="relative bg-white rounded-3xl md:rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-4 bg-gray-100 rounded-xl md:rounded-2xl hover:bg-red-500 hover:text-white transition-all z-20 shadow-sm text-primary"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content Section */}
            <div className="flex flex-col p-6 md:p-16 overflow-y-auto">
              <div className="mb-8">
                 <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4">
                    Top Rated Tour
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                    {selectedPackage.title}
                 </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-12 pb-6 md:pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <span className="text-secondary font-black text-2xl md:text-3xl">{selectedPackage.price}</span>
                    <span className="text-gray-400 font-bold text-[10px] md:text-sm uppercase">/ Total</span>
                </div>
                <div className="h-6 md:h-8 w-[1px] bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 rounded-lg md:rounded-xl text-primary font-bold text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedPackage.duration}
                </div>
              </div>

              <div className="mb-8 md:mb-12">
                 <h4 className="text-lg md:text-xl font-black text-primary mb-3 md:mb-4">Journey Overview</h4>
                 <p className="text-dark-gray leading-relaxed text-base md:text-lg font-medium opacity-90">
                    {selectedPackage.longDesc || selectedPackage.desc}
                 </p>
              </div>

              <div className="mb-8 md:mb-12">
                 <h4 className="text-lg md:text-xl font-black text-primary mb-4 md:mb-6">Destinations You'll Visit</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {selectedPackage.places?.map((place, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl hover:bg-secondary/5 transition-colors border border-transparent hover:border-secondary/10">
                         <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-[10px] md:text-xs">
                            {idx + 1}
                         </div>
                         <span className="font-bold text-primary text-sm md:text-base">{place}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mb-10 md:mb-12">
                 <h4 className="text-lg md:text-xl font-black text-primary mb-4 md:mb-6">What's Included</h4>
                 <div className="space-y-3 md:space-y-4">
                    {selectedPackage.highlights?.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 md:gap-4 text-dark-gray font-bold text-sm md:text-base">
                         <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                         </svg>
                         {highlight}
                      </div>
                    ))}
                 </div>
              </div>

              <button className="w-full py-4 md:py-5 bg-secondary text-white font-black rounded-2xl md:rounded-[2rem] text-lg md:text-xl hover:bg-red-700 hover:scale-[1.02] transform transition-all duration-300 shadow-2xl shadow-red-200 mt-auto">
                Secure This Tour Now
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default AllPackagesPage;
