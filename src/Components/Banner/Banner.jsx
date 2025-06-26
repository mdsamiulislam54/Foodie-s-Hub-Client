import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Typewriter texts config
const typewriterConfig = [
  { words: ["Delicious Recipes"], typeSpeed: 100, deleteSpeed: 50 },
  { words: ["Taste The Magic"], typeSpeed: 100, deleteSpeed: 70 },
  { words: ["Top Recipes"], typeSpeed: 100, deleteSpeed: 70 }
];

const Banner = () => {
  const [text1] = useTypewriter({ ...typewriterConfig[0], loop: 0, delaySpeed: 2000 });
  const [text2] = useTypewriter({ ...typewriterConfig[1], loop: 0, delaySpeed: 2000 });
  const [text3] = useTypewriter({ ...typewriterConfig[2], loop: 0, delaySpeed: 2000 });

  const slides = [
    {
      title: (
        <>Discover & Share <span className="text-primary">{text1}</span></>
      ),
      subtitle: "Your personal recipe collection & inspiration hub!",
      description:
        "Explore new tastes, share your signature dishes, and save your favorite recipes all in one place. Join a growing community of food lovers today!",
      button1: "Explore Recipes",
      button2: "Add Recipe",
      video: "https://cdn.pixabay.com/video/2020/03/05/33256-396487978_large.mp4"
    },
    {
      title: (
        <>Cook With Passion, <span className="text-primary">{text2}</span></>
      ),
      subtitle: "Find new recipes and add your own masterpieces.",
      description:
        "From traditional flavors to modern delights — our recipe book brings every kitchen adventure together. Stay inspired, stay creative.",
      button1: "Explore Recipes",
      button2: "Add Recipe",
      video: "https://cdn.pixabay.com/video/2016/09/22/5637-183850382_large.mp4"
    },
    {
      title: (
        <><span className="text-primary">{text3}</span> From Real Foodies</>
      ),
      subtitle: "Like, Save, and Share your favorite dishes.",
      description:
        "Browse popular recipes liked by thousands. Create your own wishlist and discover what’s trending in the food community.",
      button1: "See Top Recipes",
      button2: "Add Recipe",
      video: "https://cdn.pixabay.com/video/2023/03/07/153727-806178024_large.mp4"
    }
  ];

  return (
    <div className="min-h-screen lg:mb-10 ">
      <Swiper
        spaceBetween={-40}
        
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
               className="relative min-h-screen overflow-hidden flex items-center bg-cover bg-center"
            >
              <video
              autoPlay

              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.video}></video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

              {/* Left Content */}
              <div className="relative z-10 lg:ml-24  text-white space-y-6 max-lg:text-center ">
                <h1 className="lg:text-5xl text-3xl font-bold leading-tight font-fredoka drop-shadow-lg">
                  {slide.title}
                </h1>
                <h2 className="text-2xl font-semibold font-fredoka drop-shadow">
                  {slide.subtitle}
                </h2>
                <p className="text-lg leading-relaxed max-w-3xl  mx-auto lg:mx-0 drop-shadow">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-5 max-lg:justify-center">
                  <button className="btn bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-all duration-300">
                    {slide.button1}
                  </button>
                  <Link
                    to={"/add-recipe"}
                    className="btn border-2   px-6 py-3 rounded-lg font-semibold"
                  >
                    {slide.button2}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
