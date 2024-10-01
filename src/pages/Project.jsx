import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data with real image links
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd", // Example project image
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://yourportfolio.com",
  },
  {
    id: 2,
    name: "E-commerce App",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f", // Example project image
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce.com",
  },
  {
    id: 3,
    name: "Chat Application",
    image: "https://images.unsplash.com/photo-1581091870626-5960f940b3a1", // Example project image
    githubLink: "https://github.com/yourusername/chatapp",
    liveLink: "https://chattapp.com",
  },
  {
    id: 4,
    name: "Blog Website",
    image: "https://images.unsplash.com/photo-1508051123996-69f8caf4891b", // Example project image
    githubLink: "https://github.com/yourusername/blog",
    liveLink: "https://blogwebsite.com",
  },
  {
    id: 5,
    name: "Social Media App",
    image: "https://images.unsplash.com/photo-1581091012184-7b3d98d1a770", // Example project image
    githubLink: "https://github.com/yourusername/socialmedia",
    liveLink: "https://socialmediaapp.com",
  },
  {
    id: 6,
    name: "Task Management App",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6", // Example project image
    githubLink: "https://github.com/yourusername/taskapp",
    liveLink: "https://taskapp.com",
  },
];

const Projects = () => {
  return (
    <div className="text-text-color p-6">
      <h1 className="text-4xl font-bold mb-2 text-primary-color">My Projects</h1>
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
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Project details */}
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>

              {/* Icons for GitHub and live link */}
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
