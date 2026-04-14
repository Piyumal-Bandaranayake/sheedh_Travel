'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { packages } from '../../../data/packages';

const PackageDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const pkg = React.useMemo(() => {
    if (!id) return null;
    return packages.find(p => p.id === parseInt(id));
  }, [id]);

  useEffect(() => {
    if (id && !pkg) {
      router.push('/packages');
    }
  }, [id, pkg, router]);

  if (!pkg) return null;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-block px-4 py-1.5 bg-secondary text-white rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
            Exclusive Sri Lanka Tour
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up [animation-delay:200ms] text-glow-white">
            {pkg.title}
          </h1>
          <div className="flex items-center gap-6 animate-fade-in-up [animation-delay:400ms]">
                <div className="flex items-center gap-2 text-white/90 font-bold">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pkg.duration}
                </div>
                <div className="h-6 w-[1px] bg-white/30"></div>
                <div className="text-3xl font-black text-secondary">
                    {pkg.price}
                </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Description & Places */}
              <div className="lg:col-span-8">
                <div className="mb-12">
                  <h2 className="text-3xl font-black text-primary mb-6 flex items-center gap-4">
                    <span className="w-12 h-1 bg-secondary rounded-full"></span>
                    Journey Overview
                  </h2>
                  <p className="text-dark-gray text-lg leading-relaxed font-medium">
                    {pkg.longDesc || pkg.desc}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-black text-primary mb-8">Exploring Destinations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.places?.map((place, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-sm group-hover:bg-white group-hover:text-secondary">
                          {idx + 1}
                        </div>
                        <span className="font-bold text-lg">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-2xl font-black text-primary mb-6">Experience Highlights</h3>
                   <ul className="space-y-4">
                      {pkg.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-dark-gray font-semibold text-lg">
                           <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                           </svg>
                           {highlight}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              {/* Right Column: Booking Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 p-10 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/30 order-first lg:order-last">
                  <div className="text-secondary font-black text-sm uppercase tracking-widest mb-4">Total Price</div>
                  <div className="text-5xl font-black mb-8 flex items-baseline gap-2">
                    {pkg.price}
                    <span className="text-sm font-bold text-white/50 uppercase">/ Total</span>
                  </div>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                       </div>
                       <span className="font-bold">Insurance Included</span>
                    </div>
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                       </div>
                       <span className="font-bold">Private Guide</span>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-[#25D366] text-white font-black rounded-2xl text-lg hover:bg-[#128C7E] hover:scale-[1.02] transform transition-all duration-300 shadow-xl shadow-green-500/30 mb-4 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book Now
                  </button>
                  <p className="text-center text-white/60 text-xs font-bold uppercase tracking-tight">Best price guaranteed by Sheedh Tours</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes scale-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scale-slow { animation: scale-slow 20s ease-in-out infinite alternate; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </main>
  );
};

export default PackageDetailsPage;
