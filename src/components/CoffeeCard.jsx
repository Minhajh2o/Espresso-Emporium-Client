import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-[#F5F4F1] rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
      {/* Coffee Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Coffee Details */}
      <div className="flex-grow text-center md:text-left space-y-1">
        <p className="text-sm md:text-base secondary-color">
          <span className="font-semibold">Name:</span> {coffee.name}
        </p>
        <p className="text-sm md:text-base secondary-color">
          <span className="font-semibold">Chef:</span> {coffee.chef}
        </p>
        <p className="text-sm md:text-base secondary-color">
          <span className="font-semibold">Price:</span> {coffee.price || "890 Taka"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-2 md:gap-3">
        <button
          onClick={() => onView(coffee)}
          className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white p-2 md:p-3 rounded transition-colors"
          title="View"
        >
          <FaEye className="text-lg md:text-xl" />
        </button>
        <button
          onClick={() => onEdit(coffee)}
          className="bg-[#3C393B] hover:bg-[#2a2829] text-white p-2 md:p-3 rounded transition-colors"
          title="Edit"
        >
          <FaPen className="text-lg md:text-xl" />
        </button>
        <button
          onClick={() => onDelete(coffee)}
          className="bg-[#EA4744] hover:bg-[#d43633] text-white p-2 md:p-3 rounded transition-colors"
          title="Delete"
        >
          <FaTrash className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
