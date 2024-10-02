import React from "react";
import { CopyOutlined } from "@ant-design/icons";

const SmallSidebar = ({ onToggleSidebar }) => {
  return (
    <div className="w-10 left-0 top-0 h-full flex flex-col items-center shadow-lg z-10 bg-bg-color">
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute left-0 h-8 w-0.5 bg-white" />
        <CopyOutlined
          className="cursor-pointer text-2xl text-white my-3"
          onClick={onToggleSidebar}
        />
      </div>
    </div>
  );
};

export default SmallSidebar;
