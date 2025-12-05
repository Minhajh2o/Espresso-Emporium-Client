import { Link } from "react-router";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import FormBackground from "../../components/FormBackground";
import BackToHomeButton from "../../components/BackToHomeButton";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    console.log({ email, password, ...rest });

    // create user with email and password
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);

        // Prepare user info to store in the database
        const userInfo = {
          email,
          ...rest,
          creationTime:
            userCredential.user?.metadata?.creationTime ||
            new Date().toISOString(),
          lastSignInTime:
            userCredential.user?.metadata?.lastSignInTime ||
            new Date().toISOString(),
        };

        // Post new user info to the server
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User info saved in the database:", data);
            if (data.insertedId) {
              // Show success modal
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account has been created successfully",
                showConfirmButton: false,
                timer: 3000,
              });
              form.reset();
            }
          })
          .catch((error) => {
            console.error("Error saving user info in the database:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        // error modals
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Email Already in Use",
            text: "The email address is already associated with another account.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: error.message,
          });
        }
      });
  };

  // Google Sign Up Handler
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google Sign Up successful:", user);

        // Prepare user info to store in the database
        const userInfo = {
          email: user.email,
          username: user.displayName || "Google User",
          photoURL: user.photoURL || "",
          creationTime: user.metadata?.creationTime || new Date().toISOString(),
          lastSignInTime:
            user.metadata?.lastSignInTime || new Date().toISOString(),
        };

        // Post Google user info to the server
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Google user info saved in the database:", data);
            if (data.insertedId) {
              // Show success modal
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Signed up with Google successfully",
                showConfirmButton: false,
                timer: 3000,
              });
            }
          })
          .catch((error) => {
            console.error(
              "Error saving Google user info in the database:",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Error during Google Sign Up:", error);
        Swal.fire({
          icon: "error",
          title: "Google Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <FormBackground>
      <BackToHomeButton />
      <div className="bg-[#F4F3F0] rounded-lg px-6 md:px-12 lg:px-24 py-12 md:py-16 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Sign Up</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto secondary-color">
            Create an account to start managing your coffee collection.
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-2 secondary-color">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-md border-2 border-transparent focus:border-[#D2B48C] focus:shadow-xl outline-none bg-white secondary-color"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 primary-text text-white text-xl md:text-2xl font-semibold py-2 md:py-3 rounded border-2 border-[#331A15] bg-[#E3B577] hover:bg-white hover:text-[#331A15] transition-colors tracking-wide cursor-pointer"
          >
            Sign Up{" "}
            <FaSignInAlt className="-scale-x-100 drop-shadow-[2px_2px_2px_#1b1a1a]" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-white hover:bg-[#331A15] text-[#331A15] hover:text-white font-semibold py-2 md:py-3 rounded-md border-2 border-[#331A15] transition-colors flex items-center justify-center gap-2 rancho-regular text-xl md:text-2xl tracking-wide"
        >
          <FaGoogle className="text-xl drop-shadow-[2px_2px_2px_#1b1a1a]" />
          Sign up with Google
        </button>

        {/* Sign In Link */}
        <p className="text-center mt-6 text-sm md:text-base secondary-color">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="rancho-regular text-[#331A15] font-semibold hover:text-[#5a3025] transition-colors tracking-wide"
          >
            Sign In
          </Link>
        </p>
      </div>
    </FormBackground>
  );
};

export default SignUp;
