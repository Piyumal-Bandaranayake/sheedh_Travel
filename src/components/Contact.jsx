import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 md:py-36 relative overflow-hidden bg-primary text-white bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(11, 27, 63, 0.7), rgba(11, 27, 63, 0.85)), url('/images/kandy.png')" 
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Get In <span className="text-secondary italic">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mx-auto max-w-2xl text-center">
            Have questions about our tours or need a custom travel plan? We're here to help you plan your dream vacation. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 text-center flex flex-col items-center group">
            <div className="bg-secondary p-4 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-red-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-2xl font-black mb-2">Phone</h4>
            <a href="tel:+94719669093" className="text-white font-bold text-lg hover:text-secondary transition-colors">+94 71 966 9093</a>
            <p className="text-secondary font-bold text-xs mt-3 uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">Available 09:00 - 18:00</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 text-center flex flex-col items-center group">
            <div className="bg-secondary p-4 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-red-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl font-black mb-2">Email</h4>
            <p className="text-white font-bold text-lg lowercase">info@sheedhtours.com</p>
            <p className="text-secondary font-bold text-xs mt-3 uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">24/7 Online Support</p>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500 text-center flex flex-col items-center group">
            <div className="bg-secondary p-4 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-red-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-black mb-2">Location</h4>
            <p className="text-white font-bold text-lg">Galle Road, Colombo, SL</p>
            <p className="text-secondary font-bold text-xs mt-3 uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">Head Office</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
