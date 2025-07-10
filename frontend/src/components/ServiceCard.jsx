import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, content, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="ServiceCard lg:px-8 px-0 lg:py-10 py-6 rounded-3xl"
    >
      <img
        className="w-full h-auto object-cover border rounded-[40px]"
        loading="lazy"
        src={image}
        alt="service"
      />
      <h5 className="text-primaryBlack font-medium text-2xl mb-1 mt-4">
        {title}{" "}
      </h5>
      <p className="text-base font-normal text-primaryBlack/70 my-4 pb-2">
        {content}
      </p>
      <div>
        <Link
          to="/doctors"
          className="px-8 py-2 border bg-primary text-white font-normal rounded-3xl"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
