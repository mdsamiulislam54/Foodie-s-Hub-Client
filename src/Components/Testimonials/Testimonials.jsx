import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/testimonial.json");
      const data = await response.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="lg:min-h-screen flex items-center justify-center  lg:py-12">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sm text-primary font-semibold uppercase tracking-wide">
            Testimonials & Reviews
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold  font-fredoka mt-2">
            Our Customer Feedback
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Swiper Slider */}
          <div className="w-full lg:w-7/12 border-2 border-dotted border-primary ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
          
              autoplay={{ delay: 3000 }}
           
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="p-8 rounded-xl text-center ">
                    <p className= "relative  mb-6 leading-relaxed text-lg">
                      “{testimonial.message}”
                      <span className="absolute -top-2 -left-2"><FaQuoteLeft /></span>
                    </p>
                    <h4 className="text-xl font-bold ">
                      — {testimonial.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side Decorative Boxes */}
          <div className=" hidden  md:flex items-center gap-4 w-5/12 content-center">
            <div className="w-48 h-48 bg-primary rounded-2xl"></div>
            <div>
              <div className="w-full h-48 bg-secondary rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://i.postimg.cc/W1bxzhwz/te-1.png"
                  alt="images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-48 bg-accent rounded-2xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/SRRzjLRV/ts-2.png"
                  alt="images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
