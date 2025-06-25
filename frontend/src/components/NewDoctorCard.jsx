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
  bio,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`doctorCard flex sm:flex-row flex-col gap-8 ${
        shadow ? "drop-shadow-[0_15px_10px_rgba(205,127,50,0.2)]" : ""
      }`}
    >
      <div className="w-full sm:w-1/3">
        <img
          className="w-full h-auto object-cover border rounded-3xl"
          src={avatar}
          alt="doctor"
        />
      </div>

      <div className="w-full sm:w-2/3 flex sm:flex-row flex-col-reverse gap-7">
        <div className="sm:w-1/4 w-full bg-primaryOrange/10 p-4 gap-6 rounded-3xl flex flex-row sm:flex-col text-center justify-center items-center">
          <div>
            <h6 className="text-primaryOrange text-2xl font-semibold mb-1">
              {certificates}
            </h6>
            <p className="text-primaryBlack/70 text-base font-medium">
              Certificates
            </p>
          </div>
          <div>
            <h6 className="text-primaryOrange text-2xl font-semibold mb-1">
              +{happy_patients}
            </h6>
            <p className="text-primaryBlack/70 text-base font-medium">
              Happy patients
            </p>
          </div>
        </div>

        <div className="sm:w-3/4 w-full flex flex-col justify-center">
          <h5 className="text-primaryBlack font-semibold text-2xl mb-1 mt-4">
            Dr. {full_name}{" "}
          </h5>
          <span className="text-base font-medium text-primaryOrange capitalize">
            {specialization}
          </span>
          <p className="text-base text-primaryBlack/70 font-normal my-4">
            {bio}
          </p>
          <p className="text-base font-medium text-primaryBlack/70">
            {doctor_at}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewDoctorCard;
