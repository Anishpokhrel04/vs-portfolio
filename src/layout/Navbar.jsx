import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full ">
      <nav>
        <ul className="flex gap-3 mx-4">
          <li>About</li>
          <li>Blogs</li>
          <li>Skills</li>
          <li>Services</li>
        </ul>
      </nav>

      <div className="flex space-x-2 ">
        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
