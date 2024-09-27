import React from "react";

const WhyUsCard = ({ img, title, text }) => {
  return (
    <div className="whyUsCard">
      <img className="w-20 h-auto object-cover" src={img} alt="DNA image" />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default WhyUsCard;
