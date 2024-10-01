import React from "react";
import { CopyOutlined } from "@ant-design/icons";

const SmallSidebar = ({ onToggleSidebar }) => {
  // Accept toggle function as prop
  return (
    <div className="w-16 left-0 top-0 h-full flex flex-col items-center shadow-lg z-10 bg-bg-color">
      <CopyOutlined
        className="cursor-pointer text-2xl text-text-color my-3"
        onClick={onToggleSidebar} 
      />
    </div>
  );
};

export default SmallSidebar;
