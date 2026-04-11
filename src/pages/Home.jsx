import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Destinations from '../components/Destinations';
import TourPackages from '../components/TourPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <TourPackages />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
