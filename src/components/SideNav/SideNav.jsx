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
    setOpenIcon("");
  };

  return (
    <div className="">
      <div className="">
        <ul className="list-none p-4">
          <li
            id="home"
            className={`flex justify-between items-center mb-4 p-4 ${
              openIcon === "Home"
                ? "bg-gray-800 border-2 rounded-full border-gray-500"
                : ""
            }`}
            onMouseEnter={() => handleIconClick("Home")}
            onMouseLeave={handleIconLeave}
          >
            <FiHome />
            {openIcon === "Home" && <span className="text-sm ml-2">Home</span>}
          </li>
          <li
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
          </li>
          <li
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
          </li>
          <li
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
          </li>
          <li
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
