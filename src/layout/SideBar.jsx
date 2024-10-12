import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import icons for dropdown
import js from "../assets/images/js.png";
import css from "../assets/images/css.png";
import antd from "../assets/images/antd.png";
import react from "../assets/images/next.png";
import bs from "../assets/images/bs.png";

// Updated menuItems with nested structure
const menuItems = [
  {
    key: "main",
    title: "About",
    items: [
      {
        key: "2",
        image: bs,
        title: "index.html",
        path: "/",
      },
      {
        key: "3",
        image: css,
        title: "experience.css",
        path: "/experience",
      },
      {
        key: "4",
        image: react,
        title: "Project.js",
        path: "/projects",
      },
      {
        key: "6",
        image: js,
        title: "Skills.js",
        path: "/skills",
      },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    items: [
      {
        key: "4",
        image: antd,
        title: "Project",
        path: "/projects",
      },
      {
        key: "5",
        image: bs,
        title: "Skills.js",
        path: "/skills",
      },
    ],
  },
  {
    key: "side  Projects",
    title: "Side Projects",
    items: [
      {
        key: "6",
        image: js,
        title: "Side Project 1",
        path: "/side-project-1",
      },
      {
        key: "7",
        image: css,
        title: "Side Project 2",
        path: "/side-project-2",
      },
    ],
  },
];

const MenuGroup = ({ group, onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex items-center pl-4 p-2 cursor-pointer transition duration-200"
        onClick={toggleMenu}
      >
        <h2 className="text-text-color text-sm font-semibold">{group.title}</h2>
        {isOpen ? (
          <IoIosArrowUp className="text-text-color ml-2" />
        ) : (
          <IoIosArrowDown className="text-text-color ml-2" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col pl-6">
          {group.items.map((item) => (
            <div
              key={item.key}
              className="flex items-center pl-2 p-1 hover:bg-bg-color cursor-pointer transition duration-200"
              onClick={() => onMenuClick(item.path)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-4 h-4 mr-2 object-cover "
              />
              <span className="text-text-color text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SideBar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-bg-light h-full w-52 shadow-md flex flex-col justify-between">
      <div>
        <h1 className="pt-2 text-xl ml-4">Explorer</h1>
        {menuItems.map((group) => (
          <MenuGroup
            key={group.key}
            group={group}
            onMenuClick={handleMenuClick}
          />
        ))}
      </div>
      <div className="flex flex-col ">
        <hr />
        <p className="my-1 items-center flex justify-center">© Anish Pokhrel</p>
        <hr />
        <p className="my-1 items-center flex justify-center">
          All Rights Reserved
        </p>
        <hr />
        <p className="my-1 items-center flex justify-center">
          Made in {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
