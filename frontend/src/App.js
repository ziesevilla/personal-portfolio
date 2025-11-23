// src/App.js (Updated)

import React from 'react';
import './App.css'; 

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PixelTrail from './components/PixelTrail';

function App() {
  return (
    <div className="portfolio-app">
      <PixelTrail />
      <Header />
      <main>
        <Hero />
        <Experience /> {/* <-- Added */}
        <Projects />
        <Certificates /> {/* <-- Added */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;