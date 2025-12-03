import React from "react";
import bannerBg from "../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-svh flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-2xl ml-0 md:ml-auto text-white">
          <h1 className="text-6xl mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="subtitle mb-9">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <a href="#features" className="primary-text text-[#331a15] text-2xl px-4 md:px-6 py-2 rounded bg-[#E3B577] border-2 border-[#331a15] hover:bg-transparent hover:text-white hover:border-white transition-all">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
