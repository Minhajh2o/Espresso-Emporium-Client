import FormBackground from "../components/FormBackground";
import BackToHomeButton from "../components/BackToHomeButton";
import CoffeeForm from "../components/CoffeeForm";
import Swal from "sweetalert2";
import modalBg from "../assets/more/13.jpg";

const AddCoffee = () => {
  const handleAddCoffee = (newCoffee) => {
    const { name, photo } = newCoffee;
    console.log("Adding coffee:", newCoffee);
    // Handle form submission - send data to backend
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Show success modal
        Swal.fire({
          title: name,
          text: "Coffee added successfully!",
          imageUrl: photo,
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
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add coffee.");
      });
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
