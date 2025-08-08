import React, { useState, useEffect, useRef } from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDocker,
  SiTailwindcss,
  SiRubyonrails,
  SiPostman,
  SiRedux,
  SiJest,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoGithub } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  const icons = [
    {
      icon: <FaHtml5 color="#E34F26" size={100} />,
      shadow: "shadow-orange-800",
      title: "HTML5",
    },
    {
      icon: <FaCss3 color="#1572B6" size={100} />,
      shadow: "shadow-blue-700",
      title: "CSS3",
    },
    {
      icon: <SiTailwindcss color="#008bb9" size={100} />,
      shadow: "shadow-sky-600",
      title: "Tailwind CSS",
    },
    {
      icon: <FaJs color="#F7DF1E" size={100} />,
      shadow: "shadow-yellow-300",
      title: "JavaScript",
    },
    {
      icon: <FaReact color="#61DAFB" size={100} />,
      shadow: "shadow-blue-400",
      title: "React.js",
    },
    {
      icon: <FaBootstrap color="#6f42c1" size={100} />,
      shadow: "shadow-purple-500",
      title: "Bootstrap",
    },
    {
      icon: <FaNode color="#47A248" size={100} />,
      shadow: "shadow-green-700",
      title: "Node.js",
    },
    {
      icon: <SiRubyonrails color="#c61a09" size={100} />,
      shadow: "shadow-red-700",
      title: "Ruby on Rails",
    },
    {
      icon: <SiExpress color="#fff" size={100} />,
      shadow: "shadow-slate-200",
      title: "Express.js",
    },
    {
      icon: <FiDatabase color="#d24b03" size={100} />,
      shadow: "shadow-orange-700",
      title: "Databases",
    },
    {
      icon: <SiMongodb color="#47A248" size={100} />,
      shadow: "shadow-green-700",
      title: "MongoDB",
    },
    {
      icon: <BiLogoPostgresql color="#008bb9" size={100} />,
      shadow: "shadow-cyan-700",
      title: "PostgreSQL",
    },
    {
      icon: <SiJest color="#7E2811" size={100} />,
      shadow: "shadow-yellow-900",
      title: "Jest",
    },
    {
      icon: <SiDocker color="#008bb9" size={100} />,
      shadow: "shadow-blue-600",
      title: "Docker",
    },
    {
      icon: <SiPostman color="#fb7d07" size={90} />,
      shadow: "shadow-orange-700",
      title: "Postman",
    },
    {
      icon: <VscVscode color="#008dd8" size={100} />,
      shadow: "shadow-blue-500",
      title: "VS Code",
    },
    {
      icon: <FaGitAlt color="#d24b03" size={100} />,
      shadow: "shadow-orange-800",
      title: "Git",
    },
    {
      icon: <BiLogoGithub color="#fff" size={90} />,
      shadow: "shadow-slate-200",
      title: "GitHub",
    },
    {
      icon: <SiRedux color="#854AAF" size={90} />,
      shadow: "shadow-purple-800",
      title: "Ridux",
    },
  ];

  return (
    <div name="Skills" className="p-10 md:p-4 sm:p-10 mb-24">
      <h1 className="text-2xl md:text-4xl text-center text-white font-bold">
        Skills
      </h1>

      <div className="flex justify-center px-24">
        <motion.div
          className="gap-8 top-1/2 font-bold"
          animate={{ x: ["0%", "-150%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{
            minWidth: "200%",
            display: "flex",
            left: 0,
          }}
        >
          {[...icons, ...icons].map((_, idx) => (
            <div key={idx} className="flex gap-14 mt-24">
              {icons.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-5 w-48 flex justify-center items-center shadow-lg rounded-2xl ${item.shadow}`}
                >
                  <div className="items-center">
                    {item.icon}
                    <p className="text-2xl text-white text-center font-thin mt-8 ">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
