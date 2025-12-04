import footerBg from "../assets/more/13.jpg";
import copyRightBg from "../assets/more/24.jpg";
import logo from "../assets/more/logo1.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      {/* footer bg */}
      <div
        className="bg-cover bg-center pt-12 md:pt-24 pb-12 px-4"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        {/* footer content */}
        <div className="container max-w-6xl mx-auto">
          <a href="/">
            <img
            className="w-16 md:w-20 mb-6"
            src={logo}
            alt="Espresso Emporium Logo"
          />
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-between">
            {/* logo and description */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Espresso Emporium
              </h2>
              <p className="text-sm md:text-base">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 md:gap-4 text-2xl md:text-3xl">
                <a
                  href="#"
                  className="text-[#331A15] hover:text-[#5a3025] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-[#331A15] hover:text-[#5a3025] transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-[#331A15] hover:text-[#5a3025] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-[#331A15] hover:text-[#5a3025] transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>

              {/* Get in Touch */}
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-3xl md:text-4xl">Get in Touch</h2>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3 md:gap-4">
                    <FaPhone className="text-[#331A15] text-lg md:text-xl" />
                    <p className="text-sm md:text-base">+88 01533 333 333</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <FaEnvelope className="text-[#331A15] text-lg md:text-xl" />
                    <p className="text-sm md:text-base">info@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <FaLocationDot className="text-[#331A15] text-lg md:text-xl" />
                    <p className="text-sm md:text-base">
                      72, Wall street, King Road, Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect with Us Form */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Connect with Us
              </h2>
              <form className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md  border-2 border-transparent focus:border-[#D2B48C] focus:shadow-lg outline-none text-sm md:text-base secondary-color bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md  border-2 border-transparent focus:border-[#D2B48C] focus:shadow-lg outline-none text-sm md:text-base secondary-color bg-white"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md  border-2 border-transparent focus:border-[#D2B48C] focus:shadow-lg outline-none resize-none text-sm md:text-base secondary-color bg-white"
                ></textarea>
                <button
                  type="submit"
                  className="px-4 md:px-6 py-2 md:py-2.5 border-2 border-[#331A15] text-[#331A15] rounded-full hover:bg-[#331A15] hover:text-white transition-colors font-medium text-base md:text-lg primary-text"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div
        className="bg-cover bg-center flex items-center justify-center h-12 md:h-14 px-4"
        style={{
          backgroundImage: `url(${copyRightBg})`,
        }}
      >
        <h1 className="text-sm md:text-xl text-white font-medium text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
