import React from "react";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import antd from "../assets/images/antd.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import bitbucket from "../assets/images/bitbucket.png";
import tailwind from "../assets/images/tailwind.png";
import jira from "../assets/images/jira.png";
import postman from "../assets/images/postman.png";
import mongodb from "../assets/images/mongodb.png";
import next from "../assets/images/next.png";
import vscode from "../assets/images/vscode.png";
import bs from "../assets/images/bs.png";

const skillsData = {
  frontendDevelopment: {
    title: "Frontend Development",
    skills: [
      {
        name: "JavaScript",
        image: js,
      },

      {
        name: "React",
        image: react,
      },
      {
        name: "Next.js",
        image: next,
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        name: "Bootstrap",
        image: bs,
      },
      {
        name: "SASS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      },
      {
        name: "Antd",
        image: antd,
      },
    ],
  },

  databaseManagement: {
    title: "Database Management",
    skills: [
      {
        name: "MongoDB",
        image: mongodb,
      },
    ],
  },

  devOps: {
    title: "DevOps",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "Bitbucket",
        image: bitbucket,
      },
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      {
        name: "Visual Studio Code",
        image: vscode,
      },
      {
        name: "Postman",
        image: postman,
      },
      {
        name: "JIRA",
        image: jira,
      },
    ],
  },
};

const Skills = () => {
  return (
    <div className="p-6  text-text-color">
      <h1 className="text-4xl font-bold mb-2 text-primary-color">Skills</h1>
      <h3 className="text-lg text-gray-300 mb-4">
        Proficient in various algorithms and data structures, including trees,
        graphs, sorting algorithms, and complexity analysis.
      </h3>

      <div className="flex flex-col gap-8">
        {Object.entries(skillsData).map(
          ([key, { title, description, image, skills }]) => (
            <div key={key} className=" p-4 rounded-lg ">
              <h2 className="text-2xl font-semibold text-gray-400">{title}</h2>
              {description && <p className="mb-4">{description}</p>}
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-48 h-48 mx-auto mb-4"
                />
              )}
              {skills && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {skills.map(({ name, image }, index) => (
                    <div key={index} className="flex items-center  p-4 ">
                      <img src={image} alt={name} className="w-12 h-12 mr-2 bg-white p-1 rounded-lg object-contain items-center flex justify-center" />
                      <span className="text-xl font-semibold">{name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
