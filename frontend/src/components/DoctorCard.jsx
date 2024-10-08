import React from "react";

const DoctorCard = ({
  full_name,
  avatar,
  happy_patients,
  doctors_at,
  specialization,
  shadow,
}) => {
  return (
    <div
      className={`doctorCard xl:px-8 px-7 xl:py-14 py-10 rounded-3xl bg-white ${
        shadow ? "drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)]" : ""
      }`}
    >
      <img className="w-16 h-auto object-cover" src={avatar} alt="doctor" />
      <h5>Dr. {full_name} </h5>
      <span>{specialization}</span>
      <h6>+{happy_patients} Happy patients</h6>
      <span>{doctors_at}</span>
    </div>
  );
};

export default DoctorCard;
