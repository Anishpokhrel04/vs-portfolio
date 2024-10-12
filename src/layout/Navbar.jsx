import React from "react";
import vscode from "../assets/images/vscode.png";
import "../App.css";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full ">
      {" "}
      {/* Added padding for better spacing */}
      <div className="flex items-center">
        {/* Grouping image and nav items in one flex container */}
        <img src={vscode} alt="VS Code" className="h-6 w-6 mr-4 ml-2" />{" "}
        {/* Adjusted size and margin */}
        <nav>
          <ul className="flex gap-4">
            {" "}
            {/* Increased gap for better spacing */}
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blogs</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-2 mr-4">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
