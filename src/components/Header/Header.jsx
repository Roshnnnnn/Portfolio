import Image from "../../assets/dark.jpeg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className="relative">
      <div className="w-full h-screen overflow-hidden">
        <img src={Image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white sm:w-4/5 md:w-3/5 lg:w-2/5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left">
          Roshan Kumar Yadav
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-4 text-center sm:text-left">
          I'm a Developer
        </p>
        <div className="flex mt-4 sm:mt-6 gap-3 sm:gap-5 justify-center sm:justify-start">
          <a href="/twitter" className="text-xl sm:text-2xl">
            <FaSquareXTwitter />
          </a>
          <a href="/instagram" className="text-xl sm:text-2xl">
            <FaInstagram />
          </a>
          <a href="/linkedin" className="text-xl sm:text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
