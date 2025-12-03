import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, onDelete }) => {
  return (
    <div className="bg-gray-100 rounded-lg md:rounded-xl px-6 md:px-7 py-6 md:py-7 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-sm hover:shadow-md hover:scale-101 transition-all z-10">
      {/* Coffee Image */}
      <div className="w-32 md:w-32 shrink-0">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Coffee Details */}
      <div className="grow w-full sm:w-auto text-center sm:text-left">
        <div className="space-y-2 md:space-y-3 text-base md:text-lg leading-normal">
          <p className="font-semibold">
            Name: <span className="text-gray-600 font-medium">{coffee.name}</span>
          </p>
          <p className="font-semibold">
            Taste: <span className="text-gray-600 font-medium">{coffee.taste}</span>
          </p>
          <p className="font-semibold">
            Price: <span className="text-gray-600 font-medium">{`${coffee.price}$`}</span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-3 shrink-0">
        <Link to={`/coffee/${coffee._id}`}>
          <button
            className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
            title="View"
          >
            <FaEye className="text-lg" />
          </button>
        </Link>
        <Link to={`/update-coffee/${coffee._id}`}>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
            title="Edit"
          >
            <FaPen className="text-lg" />
          </button>
        </Link>
        <button
          onClick={() => onDelete(coffee)}
          className="bg-red-500 hover:bg-red-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
          title="Delete"
        >
          <FaTrash className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
