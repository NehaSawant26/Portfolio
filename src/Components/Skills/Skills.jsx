import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNode, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDocker, SiNginx, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql, BiLogoGithub } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc"

const Skills = () => {
  return (
    <div name="Skills" className="p-10 md:p-3 sm:p-10 ">
      <h1 className="text-2xl md:text-4xl text-center text-white font-bold">Skills</h1>

      <div className="flex justify-center px-24">
        <div className="flex flex-wrap md:w-2/3 gap-10 md:p-10 py-6 sm:py-5">

          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-orange-800 rounded-2xl">
            <FaHtml5 color="#E34F26" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center  shadow-lg shadow-blue-700 rounded-2xl">
            <FaCss3 color="#1572B6" size={80} />
          </span>
          <span className="p-3  w-40 grid justify-items-center  shadow-lg shadow-sky-600 rounded-2xl">
            <SiTailwindcss color="#008bb9" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-yellow-300 rounded-2xl">
            <FaJs color="#F7DF1E" size={80} />
          </span>
          <span className="p-3  w-40 grid justify-items-center shadow-lg shadow-blue-400 rounded-2xl">
            <FaReact color="#61DAFB" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-purple-500 rounded-2xl">
            <FaBootstrap color="#6f42c1" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-green-700 rounded-2xl">
            <FaNode color="#47A248" size={90} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-slate-200 rounded-2xl">
            <SiExpress color="#ffff" size={70} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-orange-700 rounded-2xl">
            <FiDatabase color="#d24b03" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-green-700 rounded-2xl">
            <SiMongodb color="#47A248" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-cyan-700 rounded-2xl">
            <BiLogoPostgresql color="#008bb9" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-blue-600 rounded-2xl">
            <SiDocker color="#008bb9" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-green-700 rounded-2xl">
            <SiNginx color="#47A248" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-blue-500 rounded-2xl">
            <VscVscode color="#008dd8" size={80} />
          </span>
          <span className="p-3  w-40 grid justify-items-center shadow-lg shadow-orange-800 rounded-2xl">
            <FaGitAlt color="#d24b03" size={80} />
          </span>
          <span className="p-3 w-40 grid justify-items-center shadow-lg shadow-slate-200 rounded-2xl">
            <BiLogoGithub color="#ffff" size={90} />
          </span>

        </div>
      </div>
    </div>
  );
};

export default Skills;
