import React from 'react';
import chair from '../../Assets/images/chair.jpg';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useState } from 'react/cjs/react.development';

export const Home = () => {
  const [viewPortEntered,] = React.useState(false);

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
              <div className = "flex h-screen items-center lg:mt-0"
              style = {{ background: `transparent url(${chair}) no-repeat scroll center`, backgroundSize: "cover", fontFamily: 'Roboto', backgroundAttachment: 'fixed' }} id="home">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-end">
              <div className="w-full sm:w-1/2 md:w-1/2">
                <div data-aos="zoom-in-down" className="lg:max-w-lg sm:px-8 md:px-8">
                  <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white lg:text-3xl">We Design and Develop</h1>
                  <p className="mt-2 text-gray-800">We are new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
                  <button className="uppercase px-10 py-4 mt-6 text-xs font-medium text-white" style={{ backgroundColor: "#10C9C3" }}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}