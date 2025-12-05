import { Link } from "react-router";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import FormBackground from "../../components/FormBackground";
import BackToHomeButton from "../../components/BackToHomeButton";
import { AuthContext } from "../../context/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // Handle sign in logic
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);

        const userData = {
          email: user.email,
          lastSignInTime:
            userCredential.user?.metadata?.lastSignInTime ||
            new Date().toISOString(),
        };

        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User info updated in the database:", data);
            if (data.modifiedCount) {
              console.log("User last sign-in time updated.");
              // show success modal
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Signed in successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((error) => {
            console.error("Error updating user info:", error);
          });
        form.reset();
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Sign in failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
    // Handle Google sign in logic
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        // Prepare user info to update in the database
        const userData = {
          email: user.email,
          lastSignInTime: user.metadata?.lastSignInTime || new Date().toISOString(),
        };
        // Update Google user info in the server
        if (user) {
          fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User info updated in the database:", data);
            if (data.modifiedCount) {
              console.log("User last sign-in time updated.");
              // show success modal
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Signed in with Google successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((error) => {
            console.error("Error updating user info:", error);
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Google sign in failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <FormBackground>
      <BackToHomeButton />
      <div className="bg-[#F4F3F0] rounded-lg px-6 md:px-12 lg:px-24 py-12 md:py-16 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Sign In</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto secondary-color">
            Welcome back! Sign in to manage your coffee collection.
          </p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 primary-text text-white text-xl md:text-2xl font-semibold py-2 md:py-3 rounded border-2 border-[#331A15] bg-[#E3B577] hover:bg-white hover:text-[#331A15] transition-colors tracking-wide cursor-pointer"
          >
            Sign In{" "}
            <FaSignInAlt className="drop-shadow-[2px_2px_2px_#1b1a1a]" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-[#331A15] text-[#331A15] hover:text-white font-semibold py-2 md:py-3 rounded-md border-2 border-[#331A15] transition-colors flex items-center justify-center gap-2 rancho-regular text-xl md:text-2xl tracking-wide"
        >
          <FaGoogle className="text-xl drop-shadow-[2px_2px_2px_#1b1a1a]" />
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-sm md:text-base secondary-color">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="rancho-regular text-[#331A15] font-semibold hover:text-[#5a3025] transition-colors tracking-wide"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </FormBackground>
  );
};

export default SignIn;
