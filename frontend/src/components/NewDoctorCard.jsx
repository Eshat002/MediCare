import React from "react";
import { motion } from "framer-motion";

const NewDoctorCard = ({
  full_name,
  avatar,
  happy_patients,
  certificates,
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
      className={`doctorCard flex gap-8 hover:drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)] ${
        shadow ? "drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)]" : ""
      }`}
    >
      <div className="w-1/3">
        <img
          className="w-full h-auto object-cover border rounded-3xl"
          src={avatar}
          alt="doctor"
        />
      </div>

      <div className="w-2/3 flex gap-7">
        <div className="w-1/4 bg-primaryOrange/10 rounded-3xl flex justify-center items-center">
          <div className="text-center">
            <h6 className="text-lg font-medium mt-6 mb-1">{certificates}</h6>
            <p>Certificates</p>
            <h6 className="text-lg font-medium mt-6 mb-1">+{happy_patients}</h6>
            <p>Happy patients</p>
          </div>
        </div>

        <div className="w-3/4">
          <h5 className="text-primaryBlack font-semibold text-2xl mb-1 mt-4">
            Dr. {full_name}{" "}
          </h5>
          <span className="text-base font-medium text-primaryBlack/70">
            {specialization}
          </span>
          <p className="text-base font-medium text-primaryBlack/70">
            {doctor_at}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewDoctorCard;
