import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Sheedh Tours" 
                className="relative rounded-2xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-6 bg-secondary text-white p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <p className="text-2xl md:text-4xl font-black">10+</p>
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-wider opacity-90">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-6 uppercase tracking-widest">
              About Our Agency
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
              Crafting Unforgettable <br className="hidden md:block"/> <span className="text-secondary italic">Sri Lankan</span> Journeys
            </h2>
            <p className="text-lg text-dark-gray mb-8 leading-relaxed font-medium">
              At <span className="text-primary font-bold">Sheedh Tours & Travels</span>, we believe that travel is more than just visiting a place—it's about experiencing the authentic soul of Sri Lanka. As a local travel agency, we have the insider knowledge to take you beyond the typical tourist paths.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  Our Mission
                </h4>
                <p className="text-sm text-dark-gray leading-relaxed">To provide premium, affordable travel solutions with unmatched local hospitality.</p>
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  Our Vision
                </h4>
                <p className="text-sm text-dark-gray leading-relaxed">To be the leading local travel partner in Sri Lanka, showcasing the true essence of our island.</p>
              </div>
            </div>

            <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-xl shadow-primary/10 active:scale-95">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
