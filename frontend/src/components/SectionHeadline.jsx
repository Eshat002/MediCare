import React from "react";

const SectionHeadline = ({ text }) => {
  return (
    <h2 className="font-bold lg:text-4xl text-2xl capitalize text-primaryBlack">
      {text}
    </h2>
  );
};

export default SectionHeadline;
