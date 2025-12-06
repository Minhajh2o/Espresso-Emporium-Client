import { Link, useLoaderData } from "react-router";
import bg from "../../assets/more/10.png";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { use, useState } from "react";
import BackToHomeButton from "../../components/BackToHomeButton";
import { AuthContext } from "../../context/AuthContext";

const Users = () => {
  const initialUsers = useLoaderData();
  console.log(initialUsers);
  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const {deleteUserAccount} = use(AuthContext);


  const onDelete = (user) => {
    console.log("Delete user with ID:", user._id);
    // --------------------TODO: Delete user from FIREBASE---------------------
    Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform delete operation
            deleteUserAccount()
            .then(() => {
              console.log("User deleted from Firebase:", user._id);
              fetch(`https://espresso-emporium-server-5cr6.onrender.com/users/${user._id}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: `${user.username} has been removed.`,
                    icon: "success",
                  });
                  // Remove deleted user from the list
                  const remainingUsers = users.filter((u) => u._id !== user._id);
                  setUsers(remainingUsers);
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            })
            .catch((error) => {
              console.error("Error deleting user from Firebase:", error);
            });
            
          }
        });
  };

  return (
    <div
      className="bg-cover bg-center pt-12 pb-24 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
        <BackToHomeButton />
      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* map users */}
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col md:flex-row items-center gap-4 w-fit md:w-full bg-[#F4F3F0] bg-opacity-80 rounded-lg shadow-md p-6 mb-6"
          >
            {/* user details */}
            <div className="flex flex-col md:flex-row grow items-center gap-4">
              <div className="w-64 md:w-30 rounded-lg overflow-hidden">
                <img src={user.photoURL} alt={user.username} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-wide">
                User ID: {user._id}
              </h3>
              <p className="mb-1">
                <span className="font-semibold">Username:</span> {user.username}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Created At:</span>{" "}
                {new Date(user.creationTime).toLocaleString()}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Last Sign In:</span>{" "}
                {new Date(user.lastSignInTime).toLocaleString()}
              </p>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex md:flex-col gap-3 shrink-0">
              <Link to={`/users/${user._id}`}>
                <button
                  className="bg-[#D2B48C] hover:bg-[#c19a6b] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
                  title="View"
                >
                  <FaEye className="text-lg" />
                </button>
              </Link>
              <Link to={`/update-user/${user._id}`}>
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
                  title="Edit"
                >
                  <FaPen className="text-lg" />
                </button>
              </Link>
              <button
                onClick={() => onDelete(user)}
                className="bg-red-500 hover:bg-red-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-[5px] flex items-center justify-center transition-colors"
                title="Delete"
              >
                <FaTrash className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
