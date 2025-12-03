import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, onDelete }) => {
  return (
    <div className="bg-[#F5F4F1] rounded-[10px] px-[29px] py-[31px] flex items-center gap-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Coffee Image */}
      <div className="w-[185px] h-[239px] shrink-0">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Coffee Details */}
      <div className="grow">
        <div className="space-y-[15px] font-['Raleway'] text-[20px] leading-normal">
          <p className="text-[#1B1A1A]">
            <span className="font-semibold">Name: </span>
            <span className="text-[#5C5B5B]">{coffee.name}</span>
          </p>
          <p className="text-[#1B1A1A]">
            <span className="font-semibold">Taste: </span>
            <span className="text-[rgba(27,26,26,0.7)]">{coffee.taste}</span>
          </p>
          <p className="text-[#1B1A1A]">
            <span className="font-semibold">Price: </span>
            <span className="text-[rgba(27,26,26,0.7)]">
              {coffee.price || "890 Taka"}
            </span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 shrink-0">
        <Link to={`/coffee/${coffee._id}`}>
          <button
            className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white w-10 h-10 rounded-[5px] flex items-center justify-center transition-colors"
            title="View"
          >
            <FaEye className="text-[20px]" />
          </button>
        </Link>
        <Link to={`/update-coffee/${coffee._id}`}>
          <button
            className="bg-[#3C393B] hover:bg-[#2a2829] text-white w-10 h-10 rounded-[5px] flex items-center justify-center transition-colors"
            title="Edit"
          >
            <FaPen className="text-[20px]" />
          </button>
        </Link>
        <button
          onClick={() => onDelete(coffee)}
          className="bg-[#EA4744] hover:bg-[#d43633] text-white w-10 h-10 rounded-[5px] flex items-center justify-center transition-colors"
          title="Delete"
        >
          <FaTrash className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
