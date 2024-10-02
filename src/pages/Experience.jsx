import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook, FaBriefcase, FaGraduationCap, FaLaptop } from "react-icons/fa";

const experienceData = [
  {
    key: 1,
    date: "June 2023 - Present",
    title: "Software Engineer",
    company: "Autonomous Technology",
    description: "Working on various web applications and microservices.",
    icon: <FaBriefcase />,
    iconBg: "#007acc", // VS Code blue
  },
  {
    key: 2,
    date: "January 2023 - May 2023",
    title: "Junior Software Enginner",
    company: "Geek Tech Solutions",
    description:
      "Developed company's main website and contributed to quiz mobile app dashboard.",
    icon: <FaBook />,
    iconBg: "#d65a31", // Orange
  },
  {
    key: 3,
    date: "May 2022 - January 2023",
    title: "Trainee",
    company: "Code for Core Innovation",
    description: "Completed three month intern and joined as React js Trainee.",
    icon: <FaLaptop />,
    iconBg: "#34a800", // Green
  },
  {
    key: 4,
    date: "August 2018 - May 2022",
    title: "BSc in Computer Science and Information Technology",
    company: "Tribhuvan University",
    description:
      "Graduated with a degree in Computer Science and Information Technology.",
    icon: <FaGraduationCap />,
    iconBg: "#34a853",
  },
];

const Experience = () => {
  return (
    <div
      className="experience-timeline p-8"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      {/* Dark background similar to VS Code */}
      <h2 className="text-4xl font-bold text-center mb-8 text-primary-color">
        My Experience
      </h2>
      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.key}
            date={experience.date}
            contentStyle={{
              background: "#2d2d2d", // Darker background for the cards
              color: "#c5c6c7", // Light text color for readability
              boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }} // Arrow color to match card
            iconStyle={{ background: experience.iconBg, color: "#fff" }} // Icon background
            icon={experience.icon}
            position={index % 2 === 0 ? "left" : "right"} // Alternate between left and right
          >
            <h3 className="vertical-timeline-element-title text-white">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-400">
              {experience.company}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
