import React from 'react';
import Link from 'next/link';
import { packages } from '../data/packages';

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  // Take only first 3 packages for the home page
  const displayedPackages = packages.slice(0, 3);

  React.useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-active');
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-active');
    };
  }, [selectedPackage]);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div id="packages" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-4 uppercase tracking-widest">
            Our Popular Tours
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Amazing Tour Packages</h2>
          <p className="text-dark-gray max-w-2xl mx-auto text-base md:text-lg font-medium opacity-90">
            Choose from our carefully curated travel packages designed to give you the best experience of Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedPackages.map((pkg) => (
            <div key={pkg.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">{pkg.title}</h3>
                <p className="text-dark-gray text-sm mb-6 flex-1 leading-relaxed line-clamp-2">{pkg.desc}</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => openModal(pkg)}
                    className="flex-1 py-3 border-2 border-primary text-primary font-bold rounded-xl text-center text-sm hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => {
                      const message = `Hello Sheedh Tours, I'm interested in the "${pkg.title}" package.`;
                      window.open(`https://wa.me/94719669093?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="flex-1 py-3 bg-[#25D366] text-white font-bold rounded-xl text-sm hover:bg-[#128C7E] transition-colors duration-300 shadow-lg shadow-green-200 active:scale-95 flex items-center justify-center gap-2"
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
            href="/packages" 
            className="inline-block bg-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-secondary hover:scale-105 transform transition-all duration-500 shadow-2xl shadow-primary/20 active:scale-95"
          >
            Explore All Packages
          </Link>
        </div>
      </div>

      {/* Detailed Modal Popup (Adjusted Size and Corners) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500" onClick={closeModal}></div>
          
          <div className="relative bg-[#F8FAFC] rounded-3xl w-full max-w-md overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] flex flex-col animate-in fade-in zoom-in duration-500">
            {/* Top Image Section */}
            <div className="p-3">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img 
                  src={selectedPackage.image} 
                  className="w-full h-full object-cover"
                  alt={selectedPackage.title}
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-7 pb-8 pt-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#1E293B] leading-tight mb-1">
                    {selectedPackage.title.split(':')[0]}
                  </h2>
                  <p className="text-[#64748B] font-bold text-xs tracking-wide">
                    Sri Lanka & Local Wonders
                  </p>
                </div>
                <button className="p-2.5 bg-white rounded-full shadow-md border border-gray-50 text-[#64748B] hover:text-red-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <p className="text-[#475569] text-sm leading-relaxed mb-6 font-medium opacity-80">
                {selectedPackage.desc}
              </p>

              {/* Visiting Places Section (Horizontal Scroll) */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">Key Destinations</h4>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 scrollbar-hide no-scrollbar">
                  {selectedPackage.places?.map((place, idx) => (
                    <span key={idx} className="flex-shrink-0 px-3 py-1.5 bg-white border border-[#E2E8F0] text-[#475569] text-[11px] font-bold rounded-lg shadow-sm">
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex gap-6">
                  <div>
                    <div className="text-[#1E293B] font-black text-sm">{selectedPackage.duration.split(',')[0]}</div>
                    <div className="text-[#94A3B8] text-[9px] font-bold uppercase tracking-tight mt-1">Duration</div>
                  </div>
                </div>

                <button 
                  className="px-6 py-3 bg-gradient-to-r from-[#0369A1] to-[#075985] text-white font-black rounded-full text-xs shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all outline-none"
                  onClick={() => {
                    const message = `Hello Sheedh Tours, I'm interested in the "${selectedPackage.title}" package.`;
                    window.open(`https://wa.me/94719669093?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default TourPackages;
