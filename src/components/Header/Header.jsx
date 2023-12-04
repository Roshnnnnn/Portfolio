import React from "react";
import Image from "../../assets/dark.jpeg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative">
      <div className="w-screen h-screen overflow-hidden">
        <img src={Image} alt="" className="overflow-cover w-full h-screen" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white m-10 w-max text-center">
        <h1 className="text-7xl">Roshan Kumar Yadav</h1>
        <p className="text-lg mt-6 text-left">Additional text if needed</p>
        <div className="flex mt-6 gap-5">
          <Link
            to={{ pathname: "/https://twitter.com/kroshan730" }}
            className="items-center"
          >
            <FaSquareXTwitter />
          </Link>
          <a to="/instagram" className="items-center">
            <FaInstagram />
          </a>
          <a to="/linkedin" className="items-center">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
