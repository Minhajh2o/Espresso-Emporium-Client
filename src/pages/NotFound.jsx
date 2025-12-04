import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#ECEAE3] to-white px-4">
      <div className="text-center max-w-2xl">
        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-['Rancho'] text-[#331A15] mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-['Rancho'] text-[#331A15] mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl font-['Raleway'] text-[#1B1A1A] mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#E3B577] hover:bg-[#d4a565] text-[#242222] font-['Rancho'] text-2xl px-8 py-3 rounded-md border-2 border-[#331A15] transition-colors shadow-lg hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Additional Help Text */}
        <div className="mt-12 text-sm font-['Raleway'] text-gray-600">
          <p>Lost? Here are some helpful links:</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              to="/"
              className="text-[#331A15] hover:text-[#E3B577] transition-colors underline"
            >
              Home
            </Link>
            <Link
              to="/add-coffee"
              className="text-[#331A15] hover:text-[#E3B577] transition-colors underline"
            >
              Add Coffee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
