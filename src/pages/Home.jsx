import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import PopularProducts from "../components/PopularProducts";
import Instagram from "../components/Instagram";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  const handleView = (id) => {
    console.log("View:", id);
  };

  const handleUpdate = (id) => {
    console.log("Update:", id);
  };


  // Delete Coffee Handler
  const handleDelete = (coffee) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete operation
        fetch(`http://localhost:3000/coffees/${coffee._id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: `${coffee.name} has been removed.`,
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <div>
      <Banner />
      <Features />
      <PopularProducts
        coffees={coffees}
        onView={handleView}
        onEdit={handleUpdate}
        onDelete={handleDelete}
      />
      <Instagram />
    </div>
  );
};

export default Home;
