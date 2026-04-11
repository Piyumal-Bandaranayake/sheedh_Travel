import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Get In Touch</h2>
          <p className="text-lg text-dark-gray leading-relaxed">
            Have questions about our tours or need a custom travel plan? We're here to help you plan your dream vacation. 
            Reach out to us through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center group border border-transparent hover:border-primary/10">
            <div className="bg-primary p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Phone</h4>
            <p className="text-dark-gray font-medium">+1 (234) 567-890</p>
            <p className="text-gray-400 text-sm mt-2">Mon-Fri 9am to 6pm</p>
          </div>

          {/* Email */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center group border border-transparent hover:border-primary/10">
            <div className="bg-primary p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Email</h4>
            <p className="text-dark-gray font-medium">info@sheedhtours.com</p>
            <p className="text-gray-400 text-sm mt-2">Online Support 24/7</p>
          </div>

          {/* Location */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center group border border-transparent hover:border-primary/10">
            <div className="bg-primary p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">Location</h4>
            <p className="text-dark-gray font-medium text-sm">456 Galle Road, <br/>Colombo, Sri Lanka</p>
            <p className="text-gray-400 text-sm mt-2">Our Head Office</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
