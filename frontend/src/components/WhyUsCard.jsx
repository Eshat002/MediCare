import React from "react";

const WhyUsCard = ({ img, title, text, customClass }) => {
  return (
    <div className={`${customClass}  whyUsCard mb-14 px-8 py-12 rounded-3xl`}>
      <img className="w-20 h-auto object-cover" src={img} alt="DNA image" />
      <h5 className="text-2xl text-primaryBlack font-semibold mt-5 mb-2 capitalize">
        {title}
      </h5>
      <p className="text-base text-primaryBlack/70 font-normal ">{text}</p>
    </div>
  );
};

export default WhyUsCard;
