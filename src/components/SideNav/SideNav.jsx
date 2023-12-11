import { useState } from "react";
import {
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="absolute z-50 h-screen">
      <div
        className={
          "w-20 fixed top-0 m-[1.5rem] z-50 transition-all duration-100 ease-in-out"
        }
      >
        <div className="p-4 cursor-pointer" onClick={handleClick}>
          {open ? (
            <RiDeleteBin5Fill className="ml-3 text-xl" />
          ) : (
            <GiHamburger className="ml-3 text-xl" />
          )}
        </div>
        <ul
          className={`top-20 mt-20 cursor-pointer ${
            open ? "flex-col" : "md:flex-row"
          } ${open ? "" : "hidden"}`}
        >
          <Link to={"/"} className="p-4 hover:bg-gray-600">
            <FiHome className="ml-3 text-xl" />
            <span>Home</span>
          </Link>
          <Link to={"/about"} className="p-4 hover:bg-gray-600">
            <FaRegFaceGrin className="ml-3 text-xl" />
            <span>About</span>
          </Link>
          <Link to={"/skill"} className="p-4 hover:bg-gray-600">
            <MdOutlineContactPage className="ml-3 text-xl" />
            <span>Skills</span>
          </Link>
          <Link to={"/work"} className="p-4 hover:bg-gray-600">
            <MdOutlineHomeRepairService className="ml-3 text-xl" />
            <span>Work</span>
          </Link>
          <Link to={"/contact"} className="p-4 hover:bg-gray-600">
            <MdOutlineMailOutline className="ml-3 text-xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
