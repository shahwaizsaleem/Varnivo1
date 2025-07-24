import React from 'react';
import Navbar from './components/navbar';
import 'remixicon/fonts/remixicon.css' 
import Hero from './components/hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
   <main className="overflow-x-hidden antialiased text-neutral-800">
   <Navbar/>
   <Hero/>
   <Services/>
   <Portfolio/>
   <About/>
   <Reviews/>
   <ContactUs/>
   <Footer/>
   </main>
  );
}

export default App;
