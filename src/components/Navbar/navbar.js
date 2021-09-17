import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex items-center justify-between sm:px-2 py-3 bg-gray-200" style={{ fontFamily: 'Roboto' }}>
        <div className="bg-gray-200 container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-base leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold"
              href="#pablo"
            >
              eVantage
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={ "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id=""
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="home"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="about"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="work"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="process"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Process</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="services"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="testimonials"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Testimonials</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="contact"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}