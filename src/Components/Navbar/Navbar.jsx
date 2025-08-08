import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About Me",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "My Projects",
    },
    {
      id: 6,
      text: "Contact Me",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-[#1b2138] text-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={logo} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer text-green-500">
              Neha
              <p className="text-sm text-white">Web Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold text-xl"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div className="bg-[#1b2138] ">
            <ul className="md:hidden flex flex-col h-screen w-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
