import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About SAMEEDH" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-secondary font-semibold uppercase tracking-widest mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Crafting Unforgettable Journeys Since 2014
            </h3>
            <p className="text-dark-gray mb-6 leading-relaxed">
              At SAMEEDH Tours & Travels, we believe that travel is more than just visiting a place—it's about creating memories that last a lifetime. Our dedicated team of travel experts works tirelessly to design seamless, personalized experiences that cater to your unique interests and desires.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span> Our Mission
                </h4>
                <p className="text-sm text-dark-gray">To provide premium, affordable travel solutions with unmatched customer service.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span> Our Vision
                </h4>
                <p className="text-sm text-dark-gray">To be the most trusted global travel partner, inspiring people to explore every corner of the world.</p>
              </div>
            </div>

            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
