import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import PopularProducts from "../components/PopularProducts";
import Instagram from "../components/Instagram";
import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";

const Home = () => {
  // Dummy data for demonstration - will be replaced with backend data
  const dummyCoffees = [
    {
      id: 1,
      name: "Americano Coffee",
      chef: "Mr. Matin Paul",
      price: "890 Taka",
      photo: cup1,
    },
    {
      id: 2,
      name: "Cappuccino",
      chef: "Mr. John Smith",
      price: "950 Taka",
      photo: cup2,
    },
  ];

  const handleView = (coffee) => {
    console.log("View:", coffee);
  };

  const handleEdit = (coffee) => {
    console.log("Edit:", coffee);
  };

  const handleDelete = (coffee) => {
    console.log("Delete:", coffee);
  };

  return (
    <div>
      <Banner />
      <Features />
      <PopularProducts
        coffees={dummyCoffees}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Instagram />
    </div>
  );
};

export default Home;