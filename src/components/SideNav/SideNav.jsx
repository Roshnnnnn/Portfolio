import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineContactPage,
  MdOutlineHomeRepairService,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={
        "fixed top-0 left-0 h-screen w-20 mt-2 md:mt-10 ml-1 text-black z-50 transition-all duration-300 ease-in-out"
      }
    >
      <div className="p-4 cursor-pointer" onClick={handleClick}>
        {open ? (
          <RiDeleteBin5Fill className="ml-3 text-xl " />
        ) : (
          <GiHamburger className="ml-3 text-xl" />
        )}
      </div>
      <ul
        className={`mt-20 ${open ? "flex-col" : "md:flex-row"} ${
          open ? "" : "hidden"
        }`}
      >
        <Link
          to={"/"}
          className="p-4  block md:table w-full"
          onClick={handleLinkClick}
        >
          <FiHome className="ml-3 text-xl" />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link
          to={"/about"}
          className="p-4  block md:table w-full"
          onClick={handleLinkClick}
        >
          <FaRegFaceGrin className="ml-3 text-xl" />
          <span className="hidden md:inline">About</span>
        </Link>
        <Link
          to={"/skill"}
          className="p-4  block md:table w-full"
          onClick={handleLinkClick}
        >
          <MdOutlineContactPage className="ml-3 text-xl" />
          <span className="hidden md:inline">Skills</span>
        </Link>
        <Link
          to={"/work"}
          className="p-4  block md:table w-full"
          onClick={handleLinkClick}
        >
          <MdOutlineHomeRepairService className="ml-3 text-xl" />
          <span className="hidden md:inline">Work</span>
        </Link>
        <Link
          to={"/contact"}
          className="p-4  block md:table w-full"
          onClick={handleLinkClick}
        >
          <MdOutlineMailOutline className="ml-3 text-xl" />
          <span className="hidden md:inline">Contact</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
