import React from "react";

export const AuthBtn = ({ text, type }) => {
  return (
    <button
      type={type}
      className="bg-primary shadow-lg w-full shadow-primary/35 text-lg font-normal flex justify-center items-center text-white px-6 py-3 rounded-lg hover:bg-sky-500"
    >
      {text}
    </button>
  );
};
