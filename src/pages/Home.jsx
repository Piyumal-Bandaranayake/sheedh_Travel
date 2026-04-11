import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TourPackages from '../components/TourPackages';
import Vehicles from '../components/Vehicles';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { AnimatedBackground } from '../components/AnimatedBackground';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Container for main content sections with a single continuous animated background */}
      <AnimatedBackground className="w-full">
        <About />
        <TourPackages />
        <Vehicles />
      </AnimatedBackground>

      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
