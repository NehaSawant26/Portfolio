import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      name="About Me"
      className=" text-white md:flex md:mx-20 rounded-2xl p-3 mx-4 "
    >
      <div>
        <h2 className="text-2xl md:text-4xl text-center font-bold">About Me</h2>
        <div className="items-center justify-center">

          <ul>

            <div className="text-lg mt-4">
              <p>
                Hello, I am Neha Sawant, a passionate web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest. If you're looking for a developer to add to your team, I'd love to hear from you.
              </p>
            </div>

            <div className="flex gap-3 py-4">
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-bold text-green-500">
                  Education
                </h1>
                <p className="text-lg md:text-md">
                  I am currently pursuing my BTech Degree from Indian Institute of Information Technology, Nagpur (IIITN). I am in Final year of Electronics and Communication (EC) branch. (Dec.2021 - May.2025)
                </p>
              </span>
            </div>

            <div className="text-xl md:text-2xl font-bold text-green-500 ">
              <h1>Development</h1>
            </div>

            <div className="flex gap-3 py-2">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold text-green-400">
                  Frontend developer
                </h1>
                <p className="text-lg md:text-md ">
                  I can create the layout, structure, and interactive elements of a website using HTML (for structure), CSS (for styling), and JavaScript (for interactivity). I use JavaScript frameworks/libraries such as React to build dynamic and scalable web applications more efficiently. I ensure that users can interact with websites and applications effortlessly while enjoying a visually pleasing experience.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-2">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold text-green-400">
                  Backend developer
                </h1>
                <p className="text-lg md:text-md">
                  I can work with databases, servers, APIs, and other systems that handle and store data. I can write the logic for how data flows between the server, databases, and the client-side. This often involves working with server-side languages and frameworks such as Node.js. I can design and manage databases that store data like user profiles, transactions, and other dynamic content.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-bold text-green-500">
                  Mission Statement
                </h1>
                <p className="text-lg md:text-md ">
                  My mission is to leverage my skills and creativity to build and maintain entire web applications from start to finish and handle all aspects of development. I am committed to continuous learning, and becoming proficient in both technical skills and problem-solving.
                </p>
              </span>
            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
