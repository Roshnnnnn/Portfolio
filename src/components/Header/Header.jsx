import Image from "../../assets/dark.jpeg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="relative">
      <div className="w-full h-screen overflow-hidden">
        <img src={Image} alt="" className="overflow-cover w-screen h-screen" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white m-6 sm:m-10 w-full sm:w-max text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left">
          Roshan Kumar Yadav
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 text-left">
          I'm a Developer
        </p>
        <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-5">
          <a to="/twitter" className="text-xl sm:text-2xl">
            <FaSquareXTwitter />
          </a>
          <a to="/instagram" className="text-xl sm:text-2xl">
            <FaInstagram />
          </a>
          <a to="/linkedin" className="text-xl sm:text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
