import React from "react";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Features = () => {
  const features = [
    {
      icon: icon1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      icon: icon2,
      title: "High Quality",
      description:
        "We served the coffee to you maintaining the best quality",
    },
    {
      icon: icon3,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      icon: icon4,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <div id="features" className="bg-[#ECEAE3] py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 md:w-20 mb-3 md:mb-4 mx-auto md:mx-0"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl mb-2 primary-color">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base secondary-color">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
