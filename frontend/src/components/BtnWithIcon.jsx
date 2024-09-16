import React from "react";

const BtnWithIcon = ({ text, icon }) => {
  return (
    <button className="bg-primary text-lg font-normal flex items-center text-white px-6 py-3 rounded-full shadow-md hover:bg-sky-500">
      <span className="me-2">{text}</span>
      {icon}
    </button>
  );
};

export default BtnWithIcon;
