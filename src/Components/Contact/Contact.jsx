import React from "react";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa";
import video from "../../assets/earth.mp4";

const Contact = () => {
  return (
    <div className="relative bg-[#1b2138] text-white" name="Contact Me">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0 opacity-30"
      >
        <source src={video} type="Video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center md:space-x-12 md:px-16 lg:px-24">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-center mb-32 mr-20">
            Contact Me
          </h2>
          <h3
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
          >
            Let's Talk
          </h3>
          <p>Let's create something together...</p>
          <div className="mb-4 mt-8">
            <FaEnvelope className="inline-block text-blue-500 mr-2"></FaEnvelope>
            <a
              href="mailto:sawantneha439@gmail.com"
              className="hover:underline"
            >
              sawantneha439@gmail.com
            </a>
          </div>
          <div className="mb-4">
            <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
            <span>+91 7666095665</span>
          </div>
          <div className="mb-4">
            <FaLinkedinIn className="inline-block text-blue-600 mr-2"></FaLinkedinIn>
            <a
              href="https://www.linkedin.com/in/neha-sawant-80044b288/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="mb-12">
            <FaGithub className="inline-block mr-2"></FaGithub>
            <a
              href="https://github.com/NehaSawant26"
              className="hover:underline"
            >
              Github
            </a>
          </div>
        </div>
        <div className="flex-1 w-full mt-10 md:mt-32 p-3">
          <form
            action="https://getform.io/f/bjjegrzb"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                placeholder="Enter You Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                placeholder="Enter You Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                rows="5"
                placeholder="Enter You Message"
                required
              />
            </div>
            <button
              type="Submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline
            transform transition-transform duration-300 hover:scale-105 font-semibold px-8 py-2 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
