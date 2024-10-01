import React from "react";
import { BiCloset } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full mx-4">
      <nav>
        <ul className="flex gap-3 mx-2">
          <li>About</li>
          <li> Blogs</li>
          <li>Skills</li>
          <li>Services</li>
        </ul>
      </nav>

      <div className="text-text-color">
        <BiCloset className="text-2xl" />{" "}
      </div>
    </div>
  );
};

export default Navbar;
