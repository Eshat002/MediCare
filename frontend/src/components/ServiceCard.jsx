import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, content, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="ServiceCard xl:px-8 px-7 xl:py-10 py-10 rounded-3xl bg-white"
    >
      <img
        className="w-full h-auto object-cover border"
        src={image}
        alt="service"
      />
      <h5 className="text-primaryBlack font-semibold text-2xl mb-1 mt-4">
        {title}{" "}
      </h5>
      <span className="text-base font-medium text-primaryBlack/70">
        {content}
      </span>
      <div>
        <a href="/" className="px-4 py-2 border bg-primary">
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
