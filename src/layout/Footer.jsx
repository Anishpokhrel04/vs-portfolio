import React, { useState, useEffect } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const Footers = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatDate = (date) => {
    const options = { month: "long", year: "numeric" };
    const monthYear = date.toLocaleDateString("en-US", options);
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);

    return `${monthYear} ${day}${daySuffix}`; // e.g., "October 10th, 2024"
  };

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // catches 11th-19th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedTime = currentTime.toLocaleTimeString(); // Format the time
  const formattedDate = formatDate(currentTime); // Format the date

  return (
    <Footer className="bg-primary-color text-text-color h-4 flex items-center justify-between px-4">
      <div>
        <p className="m-0 font-semibold">
         Made with React, Tailwind, Vite
        </p>
      </div>
      <div>
        <p className="m-0">
          © {new Date().getFullYear()} Anish. All rights reserved.
        </p>
      </div>
      <div>
        <p className="m-0 ">
          {formattedDate}, {formattedTime}, port:444
        </p>
      </div>
    </Footer>
  );
};

export default Footers;
