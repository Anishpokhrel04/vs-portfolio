import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-white">Anish Pokhrel</h1>
        <h4 className="text-2xl font-semibold text-gray-400">
          Software Engineer
        </h4>
      </div>
      <div className="flex justify-between mt-12">
        <div className="flex flex-col gap-5 w-1/2">
          <div>
            <h3 className="text-3xl">Start</h3>
            <ul className="flex flex-col gap-1 mt-2">
              <li>
                <Link to="/skills/" className="text-primary-color text-lg">
                  Skills...
                </Link>
              </li>
              <li>
                <Link to="/projects/" className="text-primary-color text-lg">
                  Projects...
                </Link>
              </li>
              <li>
                <Link to="/experience/" className="text-primary-color text-lg">
                  Experience...
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">Recent</h3>
            <ul className="flex flex-col gap-1 mt-2">
              <li>
                <Link className="flex gap-2 items-center">
                  <p className="text-primary-color text-lg">Skills:</p>
                  <p className="text-lg">E/Anishpokhrel/Skills</p>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <p className="text-primary-color text-lg">Email:</p>
                  <p className="text-lg">E/Anishpokhrel/Email</p>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <p className="text-primary-color text-lg">Experience:</p>
                  <p className="text-lg">E/Anishpokhrel/Experience</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <h3 className="text-3xl">About</h3>
          <div className="flex flex-col gap-4 mt-4">
            <div className="w-64 h-12 gap-4 border-l bg-bg-light text-white flex items-center p-4 border-b-4 border-primary-color cursor-pointer">
              <FaGithub className="text-3xl" />
              <h4 className="text-lg">GitHub Profile</h4>
            </div>
            <div className="w-64 h-12 gap-4 border-l bg-bg-light text-white flex items-center p-4 border-b-4 border-primary-color cursor-pointer">
              <FaFacebook className="text-3xl" />
              <h4 className="text-lg">Facebook</h4>
            </div>
            <div className="w-64 h-12 gap-4 border-l bg-bg-light text-white flex items-center p-4 border-b-4 border-primary-color cursor-pointer">
              <FaInstagram className="text-3xl" />
              <h4 className="text-lg">Instagram</h4>
            </div>
            <div className="w-64 h-12 gap-4 border-l bg-bg-light text-white flex items-center p-4 border-b-4 border-primary-color cursor-pointer">
              <FaLinkedin className="text-3xl" />
              <h4 className="text-lg">LinkedIn</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
