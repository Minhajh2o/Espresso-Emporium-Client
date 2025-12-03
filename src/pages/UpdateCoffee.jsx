import React from 'react';
import FormBackground from '../components/FormBackground';
import BackToHomeButton from '../components/BackToHomeButton';
import CoffeeForm from '../components/CoffeeForm';

const UpdateCoffee = () => {
    const handleUpdateCoffee = (data) => {
        console.log("Updating coffee:", data);
        // Handle form submission - send data to backend
    };

    // Example: You can pass existing coffee data here
    const existingCoffeeData = {
        // name: "Americano",
        // chef: "Mr. Matin Paul",
        // etc...
    };

    return (
        <FormBackground>
            <BackToHomeButton />
            <CoffeeForm
                title="Update Existing Coffee Details"
                description="Perfect your blend! Update the details of your coffee to ensure every cup tells the right story. Refine the taste notes, adjust the recipe, or enhance the description to match your vision."
                buttonText="Update Coffee Details"
                onSubmit={handleUpdateCoffee}
                initialData={existingCoffeeData}
            />
        </FormBackground>
    );
};

export default UpdateCoffee;