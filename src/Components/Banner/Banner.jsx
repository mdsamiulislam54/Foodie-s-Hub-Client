import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useTypewriter } from "react-simple-typewriter";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  const [text1] = useTypewriter({
    words: ["Delicious Recipes"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  const [text2] = useTypewriter({
    words: ["Taste The Magic"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });
  const [text3] = useTypewriter({
    words: ["Top Recipes"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });
  return (
    <div className="min-h-screen">
      <Swiper 
      spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
      
      className="mySwiper w-10/12 mx-auto ">
        <SwiperSlide>
          <div className="flex max-lg:flex-col-reverse items-center">
            <div className="space-y-6 max-lg:text-center lg:w-8/12 ">
              <h1 className="lg:text-5xl text-3xl font-bold leading-tight font-fredoka ">
                Discover & Share <span className="text-primary">{text1}</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-500 font-fredoka">
                Your personal recipe collection & inspiration hub!
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Explore new tastes, share your signature dishes, and save your
                favorite recipes all in one place. Join a growing community of
                food lovers today!
              </p>
              <div className="flex gap-5 max-lg:justify-center">
                <button className="btn bg-primary text-black px-6 py-3 rounded-lg font-semibold  hover:bg-primary/80 cursor-pointer transition-all duration-300">
                  Explore Recipes
                </button>
                <Link to={'/add-recipe'} className="btn border-2 border-primary  px-6 py-3 rounded-lg font-semibold">
                  Add Recipe
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className=" mt-10">
              <img
                src="https://i.postimg.cc/br5XckZ4/banner-1.png"
                alt="Delicious Dish"
                className="rounded-2xl max-lg:w-[400px] "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-lg:flex-col-reverse items-center">
            <div className="space-y-6 max-lg:text-center lg:w-8/12 ">
              <h1 className="lg:text-5xl text-3xl font-bold leading-tight font-fredoka ">
                Cook With Passion, <span className="text-primary">{text2}</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-500 font-fredoka">
                Find new recipes and add your own masterpieces.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                From traditional flavors to modern delights — our recipe book
                brings every kitchen adventure together. Stay inspired, stay
                creative.
              </p>
              <div className="flex gap-5 max-lg:justify-center mb-8">
                <button className="btn bg-primary text-black px-6 py-3 rounded-lg font-semibold  hover:bg-primary/80 cursor-pointer transition-all duration-300">
                  Explore Recipes
                </button>
                <Link to={'/add-recipe'} className="btn border-2 border-primary  px-6 py-3 rounded-lg font-semibold">
                  Add Recipe
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className=" mt-10">
              <img
                src="https://i.postimg.cc/x8VW5nbb/banner-2.png"
                alt="Delicious Dish"
                className="rounded-2xl max-lg:w-[400px]  "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-lg:flex-col-reverse items-center">
            <div className="space-y-6 max-lg:text-center lg:w-8/12 ">
              <h1 className="lg:text-5xl text-3xl font-bold leading-tight font-fredoka ">
                <span className="text-primary">{text3}</span> From Real Foodies
              </h1>
              <h2 className="text-2xl font-semibold text-gray-500 font-fredoka">
                Like, Save, and Share your favorite dishes.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Browse popular recipes liked by thousands. Create your own
                wishlist and discover what’s trending in the food community.
              </p>
              <div className="flex gap-5 max-lg:justify-center">
                <button className="btn bg-primary text-black px-6 py-3 rounded-lg font-semibold  hover:bg-primary/80 cursor-pointer transition-all duration-300">
                 See Top Recipes
                </button>
                <Link to={'/add-recipe'} className="btn border-2 border-primary  px-6 py-3 rounded-lg font-semibold">
                 Add Recipe
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className=" mt-10">
              <img
                src="https://i.postimg.cc/5tQHFWdC/banner-3.png"
                alt="Delicious Dish"
                className="rounded-2xl max-lg:w-[600px]  "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
