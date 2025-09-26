import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';

function App() {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
