import React from 'react';
import Link from 'next/link';
import { packages } from '../data/packages';

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  // Take only first 3 packages for the home page
  const displayedPackages = packages.slice(0, 3);

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-active');
    };
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
    <div id="packages" className="py-24 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <div key={pkg.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white font-black px-4 py-1 rounded-full shadow-lg text-sm">
                  {pkg.price}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">{pkg.title}</h3>
                <p className="text-dark-gray text-sm mb-6 flex-1 leading-relaxed line-clamp-2">{pkg.desc}</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => openModal(pkg)}
                    className="flex-1 py-2.5 border-2 border-primary text-primary font-bold rounded-xl text-center text-sm hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Details
                  </button>
                  <button className="flex-1 py-2.5 bg-secondary text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-red-200">
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

      {/* Detailed Modal Popup */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-2xl transition-all duration-500" onClick={closeModal}></div>
          
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closeModal} 
              className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl hover:bg-red-500 hover:text-white transition-all z-20 shadow-xl text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Section */}
            <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
              <img 
                src={selectedPackage.image} 
                alt={selectedPackage.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    Top Rated Tour
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
                    {selectedPackage.title}
                 </h2>
              </div>
            </div>

            {/* Modal Content Section */}
            <div className="md:w-7/12 flex flex-col p-8 md:p-16 overflow-y-auto">
              {/* Header Info */}
              <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <span className="text-secondary font-black text-3xl">{selectedPackage.price}</span>
                    <span className="text-gray-400 font-bold text-sm uppercase">/ Total</span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl text-primary font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedPackage.duration}
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                 <h4 className="text-xl font-black text-primary mb-4">Journey Overview</h4>
                 <p className="text-dark-gray leading-relaxed text-lg font-medium">
                    {selectedPackage.longDesc || selectedPackage.desc}
                 </p>
              </div>

              {/* Places List */}
              <div className="mb-12">
                 <h4 className="text-xl font-black text-primary mb-6">Destinations You'll Visit</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPackage.places?.map((place, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-secondary/5 transition-colors border border-transparent hover:border-secondary/10">
                         <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs">
                            {idx + 1}
                         </div>
                         <span className="font-bold text-primary">{place}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                 <h4 className="text-xl font-black text-primary mb-6">What's Included</h4>
                 <div className="space-y-4">
                    {selectedPackage.highlights?.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-dark-gray font-bold">
                         <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                         </svg>
                         {highlight}
                      </div>
                    ))}
                 </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-5 bg-secondary text-white font-black rounded-[2rem] text-xl hover:bg-red-700 hover:scale-[1.02] transform transition-all duration-300 shadow-2xl shadow-red-200 mt-auto">
                Secure This Tour Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default TourPackages;
