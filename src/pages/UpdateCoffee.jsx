import { useState } from "react";
import FormBackground from "../components/FormBackground";
import BackToHomeButton from "../components/BackToHomeButton";
import CoffeeForm from "../components/CoffeeForm";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import modalBg from "../assets/more/13.jpg";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const [updatedCoffee, setUpdatedCoffee] = useState(coffee);

  // Handle Update Coffee
  const handleUpdateCoffee = (coffeeData) => {
    console.log("Updating coffee:", coffeeData);
    fetch(`http://localhost:3000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffeeData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
            setUpdatedCoffee(coffeeData);
          // Show success modal
          Swal.fire({
            title: coffeeData.name,
            text: "Coffee updated successfully!",
            imageUrl: coffeeData.photo,
            imageWidth: "100%",
            imageHeight: "auto",
            imageAlt: "Custom image",
            background: `url(${modalBg})`,
            customClass: {
              image: "swal2-responsive-image",
              title: "swal2-title-no-padding",
            },
            confirmButtonColor: "#D2B48C",
          });

        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to update coffee.");
      });
  };

  return (
    <FormBackground>
      <BackToHomeButton />
      <CoffeeForm
        title="Update Existing Coffee Details"
        description="Perfect your blend! Update the details of your coffee to ensure every cup tells the right story. Refine the taste notes, adjust the recipe, or enhance the description to match your vision."
        buttonText="Update Coffee Details"
        onSubmit={handleUpdateCoffee}
        initialData={updatedCoffee}
      />
    </FormBackground>
  );
};

export default UpdateCoffee;
