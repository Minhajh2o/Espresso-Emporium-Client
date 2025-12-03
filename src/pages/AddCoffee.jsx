import React from "react";
import FormBackground from "../components/FormBackground";
import BackToHomeButton from "../components/BackToHomeButton";
import CoffeeForm from "../components/CoffeeForm";

const AddCoffee = () => {
  const handleAddCoffee = (data) => {
    console.log("Adding coffee:", data);
    // Handle form submission - send data to backend
  };

  return (
    <FormBackground>
      <BackToHomeButton />
      <CoffeeForm
        title="Add New Coffee"
        description="Discover the perfect blend! Add your favorite coffee to our collection and share the rich flavors, aromatic notes, and unique stories that make each cup special. Let's brew something extraordinary together."
        buttonText="Add Coffee"
        onSubmit={handleAddCoffee}
      />
    </FormBackground>
  );
};

export default AddCoffee;
