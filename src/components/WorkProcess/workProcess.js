import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export const WorkProcess = () => {
  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="process" style={{ fontFamily: 'Roboto' }}>
      <div data-aos="flip-left" className="mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight md:mx-auto">
          Our Work Process
        </h2>
        <p className="text-base text-gray-600">
          Was years its season was there form he in in
          them together over that, <br /> third sixth gathered female creeping bearing behold years.
        </p>
      </div>
      <div data-aos="flip-right" className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <FaPlayCircle />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};