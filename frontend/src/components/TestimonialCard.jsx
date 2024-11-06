// import React from "react";
// import ReactStars from "react-stars";

// const TestimonialCard = ({ name, rating, review, img }) => {
//   //   const ratingChanged = (newRating) => {
//   //     console.log(newRating);
//   //   };
//   return (
//     <div
//       className="bg-bronze/10 flex flex-col lg:flex-row lg:items-start items-center justify-center rounded-3xl lg:space-x-6 lg:px-9 px-8 py-8"
//       id="testimonial-card"
//     >
//       <img
//         className="w-20 h-20 object-cover rounded-full mb-4"
//         src={img}
//         alt="avatar"
//       />
//       <div className="flex lg:items-start items-center flex-col">
//         <h5 className="font-semibold text-2xl text-primaryBlack">{name}</h5>
//         <ReactStars
//           count={5}
//           value={rating}
//           //   onChange={ratingChanged}
//           size={28}
//           color2="#CF7D4E"
//           edit={false}
//         />
//         <p className="font-normal text-primaryBlack/80 text-lg mt-1">
//           {review}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;

import React from "react";
import ReactStars from "react-stars";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, rating, review, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-bronze/10 flex flex-col lg:flex-row lg:items-start items-center justify-center rounded-3xl lg:space-x-6 lg:px-9 px-8 py-8"
      id="testimonial-card"
    >
      <img
        className="w-20 h-20 object-cover rounded-full mb-4"
        src={img}
        alt="avatar"
      />
      <div className="flex lg:items-start items-center flex-col">
        <h5 className="font-semibold text-2xl text-primaryBlack">{name}</h5>
        <ReactStars
          count={5}
          value={rating}
          size={28}
          color2="#CF7D4E"
          edit={false}
        />
        <p className="font-normal text-primaryBlack/80 text-lg mt-1">
          {review}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
