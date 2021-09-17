import React from 'react';
import './App.css';
import { About } from './components/About/about';
import { Home } from './components/Home/home';
import Navbar from './components/Navbar/navbar'
import Process from './components/Process/Process';
import Skills from './components/Skills/index';
import { WorkProcess } from './components/WorkProcess/workProcess';
import { Features } from './components/Features/features';
import TestimonialCarousel from './components/TestimonialCarousel/testimonialCarousel';
import ContactForm from './components/ContactForm/index';
import Footer from './components/Footer/index'
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Process />
      <WorkProcess />
      <Features />
      <TestimonialCarousel />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default App;
