import React from "react";
import photo from "../../assets/Image.jpeg"
import Pdf from "../../Pdf/Neha Sawant.pdf"

const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container text-white mx:auto justify-around items-start p-4 md:p-20 my-12">
      <div className="flex flex-col md:flex-row">

        <div className="md:w-1/2 md:p-20 p-12 order-2 md:order-1 ">

          <h2 className="text-xl md:text-4xl ">
            Hello, I am
          </h2>
          <h1 className="text-xl md:text-5xl font-bold text-green-500">
            Neha Sawant
          </h1>

          <h2 className="text-lg md:text-4xl pt-3 tracking-tight ">
            A Full Stack Web Developer
          </h2>
          <p className="text-lg md:text-xl pt-3 pb-6">
            Looking for a beginner role to enhance and explore my technical knowledge. I am seeking a role where I can apply my skills and contribute to the development of innovative software solutions.
          </p>
          <a href={Pdf} download="Resume.pdf" className="md:md-10 text-white px-3 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-70 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r 
              from-green-400 to-blue-500">
            Download Resume
          </a>

        </div>

        <div className=" md:w-1/2 md:ml-48 md:mt-16 order-1">
          <img className="rounded-full md:h-[350px] md:w-[350px] shadow-2xl shadow-blue-300" src={photo} alt="" />
        </div>
      </div>
    </div>

  );
};

export default Home;
