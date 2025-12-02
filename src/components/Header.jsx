import headerBg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";
const Header = () => {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center py-4 md:py-6 px-4"
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white flex items-center">
        <span className="">
          <img className="w-12 sm:w-16 md:w-20 mr-2" src={logo} alt="Espresso Emporium Logo" />
        </span>
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
