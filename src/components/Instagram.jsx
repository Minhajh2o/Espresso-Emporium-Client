import React from "react";
import instagramBg from "../assets/more/10.png";
import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup4 from "../assets/cups/Rectangle 12.png";
import cup5 from "../assets/cups/Rectangle 13.png";
import cup6 from "../assets/cups/Rectangle 14.png";
import cup7 from "../assets/cups/Rectangle 15.png";
import cup8 from "../assets/cups/Rectangle 16.png";

const Instagram = () => {
  const instagramPhotos = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8];

  return (
    <div
      className="bg-cover bg-center py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(${instagramBg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base secondary-color mb-2">
            Follow Us Now
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2">
            Follow on Instagram
          </h2>
        </div>

        {/* Instagram Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {instagramPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={photo}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
