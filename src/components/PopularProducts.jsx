import { Link } from "react-router";
// import popularBg from "../assets/more/1.png";
import cupBg from "../assets/more/4.png";
import shopBg from "../assets/more/5.png";
import CoffeeCard from "./CoffeeCard";
import { BsFillCupHotFill } from "react-icons/bs";

const PopularProducts = ({ coffees, onDelete }) => {
  return (
    <div className="relative"
      // className="bg-cover bg-center py-12 md:py-16 lg:py-20"
      // style={{ backgroundImage: `url(${popularBg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8  py-12 md:py-16 lg:py-20">
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
          >
            <button className="inline-flex items-center gap-2  primary-text text-white font-semibold px-4 md:px-6 py-2 rounded border-2 border-[#331A15] text-sm md:text-xl bg-[#E3B577] hover:bg-transparent hover:text-[#331A15] transition-colors ">
            Add Coffee <BsFillCupHotFill />
            </button>
          </Link>
        </div>

        {/* Coffee Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
        <img src={cupBg} alt="Cup Background" className="hidden md:block absolute top-12 left-0"/>
        <img src={shopBg} alt="Shop Background" className="hidden md:block absolute top-20 right-0" />
    </div>
  );
};

export default PopularProducts;
