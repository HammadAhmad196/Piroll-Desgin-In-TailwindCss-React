import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductBrand from './productBrand';

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          padding: "10px"
        }}
      >
        <ul style={{ margin: "22px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden" id="testimonials" style={{fontFamily: 'Roboto' }}>
      <Slider {...settings}>
        <section>
          <div className="flex w-full py-24 items-center justify-center flex-col text-white bg-blue-400">
            <div className="sm:text-center text-left lg:px-0 sm:px-4 px-4 lg:w-2/3 w-full">
              <div data-aos="fade-up" className="flex justify-center">
                <p className="mt-4 inline-flex font-bold text-lg md:text-2xl ">
                  Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex py-24 items-center justify-center flex-col text-white bg-green-400">
            <div className="sm:text-center text-left lg:px-0 sm:px-4  px-4  lg:w-2/3 w-full">
              <div data-aos="fade-up" className="flex justify-center">
                <p className="mt-4 inline-flex font-bold text-lg md:text-2xl ">
                  Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex py-24 items-center justify-center flex-col text-white bg-yellow-400">
            <div className="sm:text-center text-left lg:px-0 sm:px-4  px-4 lg:w-2/3">
              <div data-aos="fade-up" className="flex justify-center">
                <p className="mt-4 inline-flex font-bold text-lg md:text-2xl ">
                  Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizeable first project and am looking forward to start the next one asap.
                </p>
              </div>
            </div>
          </div>
        </section>

      </Slider>
    </div>
    <ProductBrand />
    </>
  );
};

export default TestimonialCarousel;