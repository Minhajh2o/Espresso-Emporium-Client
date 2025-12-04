import { BsFillCupHotFill } from "react-icons/bs";

const CoffeeForm = ({
  title,
  description,
  buttonText,
  onSubmit,
  initialData = {},
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    onSubmit(coffeeData);
    form.reset();
  };

  return (
    <div className="bg-[#F4F3F0] rounded-lg px-6 md:px-12 lg:px-24 py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto secondary-color">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Name and quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              defaultValue={initialData.name || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Enter coffee quantity"
              defaultValue={initialData.quantity || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
        </div>

        {/* Supplier and Taste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              defaultValue={initialData.supplier || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              defaultValue={initialData.taste || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
        </div>

        {/* price and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              defaultValue={initialData.details || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter coffee price"
              defaultValue={initialData.price || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
            Photo
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            defaultValue={initialData.photo || ""}
            className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full inline-flex items-center justify-center gap-2 primary-text text-white text-xl md:text-2xl font-semibold px-4 md:px-6 py-2 rounded border-2 border-[#331A15] bg-[#E3B577] hover:bg-transparent hover:text-[#331A15] transition-colors tracking-wide cursor-pointer">
          {buttonText}{" "}
          <BsFillCupHotFill className="drop-shadow-[2px_2px_4px_#1b1a1a]" />
        </button>
      </form>
    </div>
  );
};

export default CoffeeForm;
