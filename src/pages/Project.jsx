import React from "react";
import codepal from "../assets/images/codepal.png";
import multiple from "../assets/images/multiple.png";
import autonomous from "../assets/images/autonomous.png";
import royalcomputer from "../assets/images/royalcomputer.png";
import durdristi from "../assets/images/durdristi.png";

const projects = [
  {
    id: 1,
    name: "Multiple Securities",
    image: multiple,
    liveLink: "https://multiplesecurities.com/",
  },
  {
    id: 2,
    name: "Autonomous Technology",
    image: autonomous,
    liveLink: "https://explorerconstructions.com",
  },
  {
    id: 3,
    name: "Royal Computer Institute",
    image: royalcomputer,
    liveLink: "https://royalcomputerinstitute.com.np/",
  },
  {
    id: 4,
    name: "Codepal Tech",
    image: codepal,
    liveLink: "https://blogwebsite.com",
  },
  {
    id: 5,
    name: "Jwellery Management",
    image: "",
    liveLink: "https://socialmediaapp.com",
  },
  {
    id: 6,
    name: "Explorer Constructions",
    image: "",
    liveLink: "https://explorerconstructions.com",
  },
  {
    id: 7,
    name: "Durdristi Digital",
    image: durdristi,
    liveLink: "https://durdristi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="text-text-color p-6">
      <h1 className="text-4xl font-bold mb-2 text-primary-color">
        My Projects
      </h1>
      <p className="text-lg text-gray-300 mb-4">
        Here's a collection of my work, including projects I've built to hone my
        skills and some live applications available online. Feel free to
        explore!
      </p>

      {/* Project cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-bg-light rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            {/* Project image */}
            <img
              src={project.image || "https://via.placeholder.com/400x200"}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Project details */}
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <button
                onClick={() => window.open(project.liveLink, "_blank")}
                className="mt-4 inline-block bg-primary-color text-white px-4 py-1 rounded-lg text-xs "
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
