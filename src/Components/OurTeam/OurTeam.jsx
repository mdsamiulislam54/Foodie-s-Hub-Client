import React from "react";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";

const OurTeam = () => {
  return (
    <div className="py-20 ">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center font-fredoka ">
          Our Team
        </h1>
        <p className="text-center  mt-3 font-poppins">
          Meet the talented individuals behind our delicious recipes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 lg:gap-10 mt-16">
          {/* Member 1 */}
          <div className="relative flex flex-col items-center">
            <img src={img1} alt="Team Member" className="w-60 rounded-xl" />
            <div className="absolute -bottom-14 bg-white w-48 h-48 p-4 rounded-full shadow-xl flex flex-col items-center justify-center text-center">
              <p className="text-black text-sm mb-1 font-poppins">Head Chef</p>
              <h2 className="text-xl font-bold text-gray-800 font-fredoka">
                John Doe
              </h2>
                <p className="font-sacromento mt-5 text-xl text-black">John Doe</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="relative flex flex-col items-center">
            <img src={img2} alt="Team Member" className="w-60 rounded-xl" />
            <div className="absolute -bottom-14 bg-white w-48 h-48 p-4 rounded-full shadow-xl flex flex-col items-center justify-center text-center">
              <p className="text-black text-sm mb-1 font-poppins">
                Pastry Chef
              </p>
              <h2 className="text-xl font-bold text-gray-800 font-fredoka">
                Sarah Lee
              </h2>
              <p className="font-sacromento mt-5 text-xl text-black">Sarah Lee</p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="relative flex flex-col items-center ">
            <img src={img3} alt="Team Member" className="w-60 rounded-xl" />
            <div className="absolute -bottom-14 bg-white w-48 h-48 p-4 rounded-full shadow-xl flex flex-col items-center justify-center text-center">
              <p className="text-black text-sm mb-1 font-poppins">
                Sous Chef
              </p>
              <h2 className="text-xl font-bold text-gray-800 font-fredoka">
                Michael Chen
              </h2>
              <p className="font-sacromento mt-5 text-xl text-black">Michael Chen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
