import { useState } from "react";
import {
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";

const SideNav = () => {
  const [openIcon, setOpenIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setOpenIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  const handleIconLeave = () => {
    setOpenIcon(null);
  };

  return (
    <div className="absolute top-20 ">
      <div
        className={`m-2 transition-all duration-500 ${openIcon ? "fixed" : ""}`}
      >
        <div className="list-none p-0 m-4">
          <div
            id="home"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "Home"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("Home")}
            onMouseLeave={handleIconLeave}
          >
            <a href="">
              <FiHome />
            </a>
            {openIcon === "Home" && <span className="text-sm ml-2">Home</span>}
          </div>
          <div
            id="about"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "About"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("About")}
            onMouseLeave={handleIconLeave}
          >
            <FaRegFaceGrin />
            {openIcon === "About" && (
              <span className="text-sm ml-2">About</span>
            )}
          </div>
          <div
            id="resume"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "Resume"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("Resume")}
            onMouseLeave={handleIconLeave}
          >
            <MdOutlineContactPage />
            {openIcon === "Resume" && (
              <span className="text-sm ml-2">Resume</span>
            )}
          </div>
          <div
            id="portfolio"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "Portfolio"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("Portfolio")}
            onMouseLeave={handleIconLeave}
          >
            <MdOutlineHomeRepairService />
            {openIcon === "Portfolio" && (
              <span className="text-sm ml-2">Portfolio</span>
            )}
          </div>
          <div
            id="contact"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "Contact"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("Contact")}
            onMouseLeave={handleIconLeave}
          >
            <MdOutlineMailOutline />
            {openIcon === "Contact" && (
              <span className="text-sm ml-2">Contact</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
