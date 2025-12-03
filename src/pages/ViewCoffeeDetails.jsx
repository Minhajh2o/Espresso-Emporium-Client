import { useLoaderData } from "react-router";
import BackToHomeButton from "../components/BackToHomeButton";
import FormBackground from "../components/FormBackground";

const ViewCoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, taste, details, price, photo } = coffee;
  return (
    <FormBackground>
      <BackToHomeButton />
      <div className="bg-[#F4F3F0] rounded-lg px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <figure className="w-full flex items-center justify-center">
            <img src={photo} alt={name} />
          </figure>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Niceties</h2>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Name: <span className="font-medium text-[#5C5B5B]">{name}</span></p>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Quantity: <span className="font-medium text-[#5C5B5B]">{quantity}</span></p>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Supplier: <span className="font-medium text-[#5C5B5B]">{supplier}</span></p>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Taste: <span className="font-medium text-[#5C5B5B]">{taste}</span></p>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Details: <span className="font-medium text-[#5C5B5B]">{details}</span></p>
            <p className="text-sm md:text-base max-w-2xl secondary-color font-semibold mb-2">Price: <span className="font-medium text-[#5C5B5B]">{`${price}$`}</span></p>
          </div>
        </div>
      </div>
    </FormBackground>
  );
};

export default ViewCoffeeDetails;
