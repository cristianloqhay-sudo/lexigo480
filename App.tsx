import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow space-y-24 pb-20">
        <Hero />
        <Courses />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;