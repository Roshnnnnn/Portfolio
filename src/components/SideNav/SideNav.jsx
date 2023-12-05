import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  MdClose,
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";

const SideNav = () => {
  const [icon, setIcon] = useState("");

  const handleIcon = (iconName) => {
    setIcon(iconName);
  };

  const handleIconLeave = () => {
    setIcon("");
  };

  return (
    <div className="bg-gray-800 text-white">
      <ul className="list-none p-0">
        <li className="flex justify-between items-center mb-2 p-4">
          <FiHome
            onMouseEnter={() => handleIcon("Home")}
            onMouseLeave={handleIconLeave}
          />
          {icon === "Home" && <span className="text-sm ml-2">Home</span>}
        </li>
        <li className="flex justify-between items-center mb-2 p-4">
          <FaRegFaceGrin
            onMouseEnter={() => handleIcon("About")}
            onMouseLeave={handleIconLeave}
          />
          {icon === "About" && <span className="text-sm ml-2">About</span>}
        </li>
        <li className="flex justify-between items-center mb-2 p-4">
          <MdOutlineContactPage
            onMouseEnter={() => handleIcon("Resume")}
            onMouseLeave={handleIconLeave}
          />
          {icon === "Resume" && <span className="text-sm ml-2">Resume</span>}
        </li>
        <li className="flex justify-between items-center mb-2 p-4">
          <MdOutlineHomeRepairService
            onMouseEnter={() => handleIcon("Portfolio")}
            onMouseLeave={handleIconLeave}
          />
          {icon === "Portfolio" && (
            <span className="text-sm ml-2">Portfolio</span>
          )}
        </li>
        <li className="flex justify-between items-center mb-2 p-4">
          <MdOutlineMailOutline
            onMouseEnter={() => handleIcon("Contact")}
            onMouseLeave={handleIconLeave}
          />
          {icon === "Contact" && <span className="text-sm ml-2">Contact</span>}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
