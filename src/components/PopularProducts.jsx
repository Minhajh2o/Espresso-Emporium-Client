import React from "react";
import { Link } from "react-router";
import popularBg from "../assets/more/1.png";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = ({ coffees, onView, onEdit, onDelete }) => {
  return (
    <div
      className="bg-cover bg-center py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(${popularBg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base secondary-color mb-2">
            --- Sip & Savor ---
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Popular Products
          </h2>
          <Link
            to="/add-coffee"
            className="inline-flex items-center gap-2 bg-[#E3B577] hover:bg-[#d4a565] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded border-2 border-[#331A15] transition-colors text-sm md:text-base"
          >
            Add Coffee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
        </div>

        {/* Coffee Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
