import React from "react";

/** @type {import('tailwindcss').Config} */
const skillsData = {
  frontendDevelopment: {
    title: "Frontend Development",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },

      {
        name: "React",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Next.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6c/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo_2020.svg",
      },
      {
        name: "SASS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      },
      {
        name: "jQuery",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery-Logo.svg",
      },
    ],
  },

  databaseManagement: {
    title: "Database Management",
    skills: [
      {
        name: "SQL",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/SQL_Logo.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.2015.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3c/MongoDB_Logo.svg",
      },
      {
        name: "Cassandra",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Apache_Cassandra_logo.svg",
      },
      {
        name: "Redis",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8b/Redis_Logo.svg",
      },
    ],
  },

  devOps: {
    title: "DevOps",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      },
      {
        name: "GitHub",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      },
      {
        name: "Bitbucket",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/04/Bitbucket_logo_2010.svg",
      },
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      {
        name: "Visual Studio Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8b/Visual_Studio_Code_logo.svg",
      },
      {
        name: "Postman",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Postman_logo.png",
      },
      {
        name: "JIRA",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Jira_logo.png",
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
            <div
              key={key}
              className="border p-4 rounded-lg shadow-lg bg-bg-light"
            >
              <h2 className="text-4xl mb-2">{title}</h2>
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
                    <div
                      key={index}
                      className="flex items-center border rounded-lg p-4 shadow-md bg-bg-color"
                    >
                      <img src={image} alt={name} className="w-16 h-16 mr-2" />
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
