import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "AI-Trip-Planner",
    technologies: "React.js, Gemini AI, Firebase, Tailwind CSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8j9wibqnYBz6xPuSoN6N8H0PPU3w8Hr_Uqg&s",
    github: "https://github.com/NehaSawant26/AI-Trip-Planner",
    live: "https://full-stack-ai-trip-planner.vercel.app/",
  },
  {
    id: 2,
    name: "iNotebook",
    technologies: "React.js, MongoDB and Context API",
    image:
      "https://images.prismic.io/noteplan-landing-cms/ZhabTTjCgu4jzuoL_Google_Keep.png?auto=format,compress",
    github: "https://github.com/NehaSawant26/iNotebook",
  },
  {
    id: 3,
    name: "Newsapp",
    technologies: "React.js, News API",
    image:
      "https://149842033.v2.pressablecdn.com/wp-content/uploads/2018/05/newspaper-free-news-website-templates.jpg",
    github: "https://github.com/NehaSawant26/NewsApp",
  },
  {
    id: 4,
    name: "Textutils",
    technologies: "CSS, React.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8akVzsL4zU-cn6KT-_7pvQof4F1sogErgBg&s",
    github: "https://github.com/NehaSawant26/Textutiles",
  },
  {
    id: 5,
    name: "Quiz application",
    technologies: "React.js, Tailwind CSS",
    image:
      "https://assets.apk.live/practice.test.neet.testline--128-screenshot3.webp",
    github: "https://github.com/NehaSawant26/Quiz_App",
    live: "https://quiz-app-kappa-henna-94.vercel.app/",
  },
  {
    id: 6,
    name: "Taking Medical Info",
    technologies: "React.js, Tailwind CSS, react-icons",
    image:
      "https://www.sciencepharma.com/wp-content/uploads/2024/01/medical_information_main_eng-1-scaled.jpg",
    github: "https://github.com/NehaSawant26/Medical_Info",
    live: "https://medical-info-nine.vercel.app/",
  },
];

const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative w-screen bg-[#1b2138] text-white py-16"
      name="My Projects"
    >
      <motion.div
        className="fixed rounded-full pointer-events-none flex justify-center items-center"
        style={{
          zIndex: 50,
          top: cursorPosition.y - (isHovering ? 50 : 6),
          left: cursorPosition.x - (isHovering ? 50 : 6),
          color: "Black",
        }}
        animate={{
          width: isHovering ? 80 : 14,
          height: isHovering ? 80 : 14,
          fontSize: isHovering ? 16 : 0,
          backgroundColor: isHovering
            ? "rgba(0, 255, 0, 0.5)"
            : "rgba(255, 255, 255, 1)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {isHovering && <span>Exploree</span>}
      </motion.div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-200 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className=" inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white font-semibold px-10 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className=" inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white font-semibold px-10 py-2 ml-5 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
