import React from "react";
import bannerBg from "../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl md:max-w-2xl ml-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 opacity-90">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] hover:bg-[#d4a565] text-[#331A15] font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
