import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/enercent.jpg";
import img2 from "../../assets/bluestock.png";
import { TiStarFullOutline } from "react-icons/ti";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Backend Intern",
    company: "Enercent Technologies Pvt Ltd",
    date: "June 2025 - Present",
    img: img1,
    techStack: ["Ruby on Rails", "PostgreSQL", "Git"],
    responsibility: [
      "Built and maintained RESTful APIs using Ruby on Rails.",
      "Added pagination and filtering logic to  efficiently display large datasets.",
      "Used git effectively to manage codebase collaboration and compliance with protected branch workflows.",
    ],
    side: "left",
  },
  {
    title: "Software Developer Intern",
    company: "Bluestock Fintech",
    date: "Dec 2024 - Jan 2025",
    img: img2,
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    responsibility: [
      "Led full-stack development of a web app for fundamental analysis of Nifty-100 companies.",
      "Created reusable frontend components to improve modularity and maintenance.",
    ],
    side: "right",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.6,
      duration: 0.6,
    },
  }),
};

const Experience = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#1b2138] py-10 px-4 flex flex-col items-center"
      name="Experience"
    >
      <h1 className="text-3xl font-bold mb-10 text-white">My Experience</h1>
      <div className="relative w-full max-w-5xl mt-7">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-700 to-blue-700 transform -translate-x-1/2" />
        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });
            return (
              <motion.div
                key={i}
                ref={ref}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariant}
                className="relative w-full flex"
              >
                {exp.side === "left" ? (
                  <>
                    <div className="w-3/6 flex justify-end pr-6 transform transition-transform duration-300 hover:scale-105">
                      <div className="bg-blue-950 text-white p-4 rounded-lg shadow-md w-full max-w-2xl">
                        <div className="flex">
                          <img src={exp.img} alt="img" className="h-20 w-20" />
                          <h2 className=" text-xl font-bold ml-5 mt-5">
                            {exp.company}
                          </h2>
                        </div>
                        <h2 className="text-xl font-semibold mt-5 text-green-400">
                          {exp.title}
                        </h2>
                        <div className="ml-5 mt-3">
                          {exp.responsibility.map((item, index) => (
                            <p
                              key={index}
                              className="flex text-md text-gray-300 mt-2"
                            >
                              <TiStarFullOutline className="w-5 h-4 text-yellow-500 shrink-0 mr-2 mt-0.5" />
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-7">
                          {exp.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="text-sm text-white px-3 py-1  border rounded-full border-cyan-500 shadow-md hover:shadow-sky-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-6 flex items-center">
                      <span className="text-md text-gray-200 whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 flex justify-end pr-6 items-center ">
                      <span className="text-md text-gray-200 whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <div className="w-3/6 flex justify-start pl-6 transform transition-transform duration-300 hover:scale-105">
                      <div className="p-4 bg-blue-950 text-white rounded-lg shadow-md w-full max-w-2xl text-left">
                        <div className="flex">
                          <img src={exp.img} alt="img" className="h-20 w-20" />
                          <h2 className=" text-xl font-bold ml-5 mt-5">
                            {exp.company}
                          </h2>
                        </div>
                        <h2 className="text-xl font-semibold mt-5 text-green-400">
                          {exp.title}
                        </h2>
                        <div className="ml-5 mt-3">
                          {exp.responsibility.map((item, index) => (
                            <p
                              key={index}
                              className="flex text-sm text-gray-300 mt-2"
                            >
                              <TiStarFullOutline className="w-5 h-4 text-yellow-500 shrink-0 mr-2 mt-0.5" />
                              {item}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-7">
                          {exp.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="text-sm text-white px-3 py-1  border rounded-full border-cyan-500 shadow-md hover:shadow-sky-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
