import React from "react";

const BtnWithIcon = ({ text, icon, onClick }) => {
  return (
    <button
      className="bg-primary shadow-lg shadow-primary/35 text-lg font-normal flex items-center text-white px-6 py-3 rounded-full hover:bg-sky-500"
      onClick={onClick}
    >
      <span className="me-2">{text}</span>
      {icon}
    </button>
  );
};

export default BtnWithIcon;
