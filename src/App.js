import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer/index';

import Lottie from "react-lottie";
import * as location from "./Data/1055-world-locations.json";
import * as success from "./Data/1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (
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
      )}
    </div>
  );
}

export default App;
