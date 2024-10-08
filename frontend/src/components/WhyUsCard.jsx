import React from "react";

const WhyUsCard = ({ img, title, text, customClass = "" }) => {
  return (
    <div
      className={`${customClass} whyUsCard lg:mb-14 mb-4 xl:px-8 px-7 xl:py-14 py-10 rounded-3xl
      hover:bg-white hover:drop-shadow-[0_25px_45px_rgba(135,206,235,0.3)] transition-all duration-300 ease-in-out
      `}
    >
      <img className="w-20 h-auto object-cover" src={img} alt="DNA image" />
      <h5 className="text-2xl text-primaryBlack font-semibold mt-5 mb-2 capitalize">
        {title}
      </h5>
      <p className="text-base text-primaryBlack/70 font-normal ">{text}</p>
    </div>
  );
};

export default WhyUsCard;
