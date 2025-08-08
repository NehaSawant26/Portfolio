import React from "react";
import logo from "../../assets/logo.jpg";
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  const navItems = [
    {
      id: 1,
      text: "Home",
      icon: "🏠",
    },
    {
      id: 2,
      text: "About Me",
      icon: "👩‍💼",
    },
    {
      id: 3,
      text: "Skills",
      icon: "📚",
    },
    {
      id: 4,
      text: "Experience",
      icon: "💻",
    },
    {
      id: 5,
      text: "My Projects",
      icon: "📁",
    },
    {
      id: 6,
      text: "Contact Me",
      icon: "🤝",
    },
  ];
  return (
    <div>
      <div className="flex justify-around mt-10">
        <div className="relative ">
          <div className="absolute w-40 h-52 inset-0 rounded-full bg-gradient-to-b from-blue-950 via-purple-800 to-indigo-800 blur-lg animate-pulse-grow z-0" />
          <img
            src={logo}
            alt="Profile"
            className="relative w-40 h-40 mt-8 rounded-full object-cover "
          />
        </div>

        <div className="text-white">
          <div className="flex">
            <FaLink className="w-6 h-4 -ml-6 mt-2" />
            <h1 className="text-white text-xl mb-5 ml-2">Quick Links</h1>
          </div>
          <ul className="space-y-2">
            {navItems.map(({ id, text, icon }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer text-md"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="justify-center items-center text-white">
          <h1 className="mb-2 text-lg">Web Developer 👩‍💻</h1>
          <h1 className="mb-8 text-lg">📍 Buldhana, Maharashtra</h1>
          <div className="flex mb-28 gap-5 ">
            <a href="mailto: sawantneha439@gmail.com">
              <FaEnvelope className="h-12 w-12 border border-blue-400 p-2 text-gray-400 rounded-full shadow-lg hover:shadow-blue-500 hover:scale-95" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918149999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-12 w-12 border border-blue-400 p-2 text-green-600 rounded-full shadow-lg hover:shadow-blue-500 hover:scale-95" />
            </a>
            <a href="www.linkedin.com/in/neha-sawant-80044b288">
              <FaLinkedinIn className="h-12 w-12 border border-blue-400 p-2  text-blue-600 rounded-full shadow-lg hover:shadow-blue-500 hover:scale-95" />
            </a>
            <a href="https://github.com/NehaSawant26">
              <FaGithub className="h-12 w-12 border border-blue-400 p-2 text-white rounded-full shadow-lg hover:shadow-blue-500 hover:scale-95" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center flex justify-evenly text-gray-400 mt-14 mb-8 border-t border-teal-700 pt-5">
        <p className="text-md">
          © {new Date().getFullYear()} Neha Sawant. All rights reserved.
        </p>
        <p className="text-md"> Developed with 💙 by Neha</p>
      </div>
    </div>
  );
};

export default Footer;
