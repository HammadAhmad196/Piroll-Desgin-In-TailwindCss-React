import React from 'react';
import process from '../../Data/Process/index'
import { Gallery } from './gallery';
import Aos from "aos";
import "aos/dist/aos.css";

function Process() {
  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="lg:flex flex items-center sm:px-4 lg-px-0  lg:justify-between lg:p-10" style={{ background: '#10C9C3', fontFamily: 'Roboto' }}>
        <div data-aos="flip-left" className="lg:flex lg:flex-row text-white flex-col lg:gap-16">
          {
            process.map((process) => (
              <div className="flex items-center p-4">
                <div className="flex items-center justify-center h-10 w-10">
                  <img src={process.image} alt="" />
                </div>
                <div className="flex-grow flex flex-col ml-4">
                  <span className="text-xl font-bold">{process.state}</span>
                  <div className="flex items-center justify-between">
                    <span className="">{process.name}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Gallery />
    </>
  )
}

export default Process
