import React from "react";
import { motion } from "framer-motion";

const NewDoctorCard = ({
  full_name,
  avatar,
  happy_patients,
  doctor_at,
  specialization,
  shadow,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`doctorCard xl:px-8 px-7 xl:py-10 py-10 rounded-3xl bg-white hover:drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)] ${
        shadow ? "drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)]" : ""
      }`}
    >
      <img
        className="w-20 h-20 object-cover rounded-full border"
        src={avatar}
        alt="doctor"
      />
      <h5 className="text-primaryBlack font-semibold text-2xl mb-1 mt-4">
        Dr. {full_name}{" "}
      </h5>
      <span className="text-base font-medium text-primaryBlack/70">
        {specialization}
      </span>
      <h6 className="text-lg text-[#0F97B5] font-medium mt-6 mb-1">
        +{happy_patients} Happy patients
      </h6>
      <span className="text-base font-medium text-primaryBlack/70">
        {doctor_at}
      </span>
    </motion.div>
  );
};

export default NewDoctorCard;
