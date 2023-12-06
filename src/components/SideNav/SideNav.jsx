import { useState } from "react";
import {
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";

const Sidebar = () => {
  const [open, setOpen] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="absolute h-screen">
      <div className="w-20 bg-gray-800 fixed top-0 left-0 bottom-0 z-9997 overflow-y-auto">
        <div className="p-4" onClick={handleClick}>
          <GiHamburger />
        </div>
        <ul className="top-20 mt-20">
          <li className="p-4 hover:bg-gray-600">
            <FiHome className="ml-3" />
            <span>Home</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <FaRegFaceGrin className="ml-3" />
            <span>About</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineContactPage className="ml-3" />
            <span>Skills</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineHomeRepairService className="ml-3" />
            <span>Work</span>
          </li>
          <li className="p-4 hover:bg-gray-600">
            <MdOutlineMailOutline className="ml-3" />
            <span>Contact</span>
          </li>
        </ul>
      </div>
      {/* <div className="w-3/4 bg-gray-100">
        <p>{hoveredItem}</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
