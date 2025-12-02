import React from "react";

const CoffeeForm = ({ title, description, buttonText, onSubmit, initialData = {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      chef: formData.get("chef"),
      supplier: formData.get("supplier"),
      taste: formData.get("taste"),
      category: formData.get("category"),
      details: formData.get("details"),
      photo: formData.get("photo"),
    };
    onSubmit(data);
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
        {/* Name and Chef */}
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
              Chef
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              defaultValue={initialData.chef || ""}
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

        {/* Category and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              defaultValue={initialData.category || ""}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color text-sm md:text-base transition-colors"
              required
            />
          </div>
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
        <button
          type="submit"
          className="w-full bg-[#D2B48C] hover:bg-[#c19a6b] text-[#331A15] font-semibold py-3 md:py-3.5 rounded-md border-2 border-[#331A15] transition-colors text-base md:text-lg"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default CoffeeForm;
