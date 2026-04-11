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
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header section with background */}
      <section className="relative h-[40vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-30"
            alt="Travel background"
          />
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Lanka Tour Packages</h1>
          <p className="text-xl opacity-90">Discover the wonder of the island with Sheedh Tours</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => openModal(pkg)}
                      className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      View Details
                    </button>
                    <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
                      Contact for Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Tooltip / Popup */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-4 tracking-widest uppercase">
                  Featured Destination
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">{selectedPackage.title}</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedPackage.duration}
                  </div>
                  <div className="text-xl font-bold text-secondary">
                    {selectedPackage.price}
                  </div>
                </div>
                
                <h4 className="font-bold text-primary mb-3 text-lg">About this package</h4>
                <p className="text-dark-gray leading-relaxed mb-8">
                  {selectedPackage.desc} Join us for an unforgettable journey through breathtaking landscapes and cultural landmarks. Our expert guides ensure every detail is handled while you create memories that last a lifetime.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-sm">Included Perks</h5>
                      <p className="text-xs text-dark-gray italic">Meals, Transport, & Hotel accommodation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-sm">Expert Guide</h5>
                      <p className="text-xs text-dark-gray italic">Guided city tours and local insights</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-200">
                  Secure Your Spot Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default AllPackagesPage;
