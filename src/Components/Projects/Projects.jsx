import React from "react";

const projects = [
  {
    id: 1,
    name: "iNotebook",
    technologies: "React.js, MongoDB and Context API",
    image:"https://images.prismic.io/noteplan-landing-cms/ZhabTTjCgu4jzuoL_Google_Keep.png?auto=format,compress",
    github: "https://github.com/NehaSawant26/iNotebook",
  },
  {
    id: 2,
    name: "Newsapp",
    technologies: "React.js, News API",
    image: "https://149842033.v2.pressablecdn.com/wp-content/uploads/2018/05/newspaper-free-news-website-templates.jpg",
    github: "https://github.com/NehaSawant26/NewsApp",
  },
  {
    id: 3,
    name: "Textutils",
    technologies: "CSS, React.js",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8akVzsL4zU-cn6KT-_7pvQof4F1sogErgBg&s",
    github: "https://github.com/NehaSawant26/Textutiles",
  },

];

const Projects = () => {
  return (
    <div className="bg-[#1b2138] text-white py-16" name="My Projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-blue-950 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-200 mb-4">{project.technologies}</p>
              <a href={project.github} className=" inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white font-semibold px-10 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer" >GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
