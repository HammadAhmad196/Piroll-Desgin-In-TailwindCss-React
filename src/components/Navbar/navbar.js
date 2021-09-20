import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed flex z-50 w-full items-center justify-between sm:px-2 py-3 bg-gray-200" style={{ fontFamily: 'Roboto' }}>
        <div className="bg-gray-200 container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-base leading-relaxed inline-block mr-4 py-2 graybg-gray-400space-nowrap font-bold cursor-pointer"
              to="home" smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}
            >
              eVantage
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className={"lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="home" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="about" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="work" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Work</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="process" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Process</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="services" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="testimonials" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Testimonials</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  to="contact" smooth={true} duration={1000}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span className="">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}