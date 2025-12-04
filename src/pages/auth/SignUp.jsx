import { Link } from "react-router";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import FormBackground from "../../components/FormBackground";
import BackToHomeButton from "../../components/BackToHomeButton";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log({ username, email, password, photoURL });
    // Handle sign up logic
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up");
    // Handle Google sign up logic
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
            Sign Up <FaSignInAlt className="-scale-x-100 drop-shadow-[2px_2px_2px_#1b1a1a]" />
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
