import React from "react";

const BtnWithoutIcon = ({ text }) => {
  return (
    <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-sky-500">
      {text}
    </button>
  );
};

export default BtnWithoutIcon;
