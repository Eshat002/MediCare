// import React from "react";

// const WhyUsCard = ({ img, title, text, customClass = "" }) => {
//   return (
//     <div
//       className={`${customClass} whyUsCard lg:mb-14 mb-4 xl:px-8 px-7 xl:py-14 py-10 rounded-3xl
//       hover:bg-white hover:drop-shadow-[0_25px_45px_rgba(135,206,235,0.3)] transition-all duration-300 ease-in-out
//       `}
//     >
//       <img className="w-20 h-auto object-cover" src={img} alt="DNA image" />
//       <h5 className="text-2xl text-primaryBlack font-semibold mt-5 mb-2 capitalize">
//         {title}
//       </h5>
//       <p className="text-base text-primaryBlack/70 font-normal ">{text}</p>
//     </div>
//   );
// };

// export default WhyUsCard;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
const WhyUsCard = ({ img, title, text, id, customClass = "" }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {/* Card List View */}
      <motion.div
        layoutId={id}
        className={`${customClass} whyUsCard lg:mb-14 mb-4 xl:px-8 px-7 xl:py-14 py-10 rounded-3xl
      hover:bg-white hover:drop-shadow-[0_25px_45px_rgba(135,206,235,0.3)] transition-all duration-300 ease-in-out
       `}
        onClick={() => setSelectedId(id)}
      >
        <img className="w-20 h-auto object-cover" src={img} alt="DNA image" />
        <h5 className="text-2xl text-primaryBlack font-semibold mt-5 mb-2 capitalize">
          {title}
        </h5>
        <p className="text-base text-primaryBlack/70 font-normal">{text}</p>
      </motion.div>

      {/* Popup View */}

      <AnimatePresence>
        {selectedId === id && (
          <motion.div
            layoutId={id}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-3xl sm:max-w-md max-w-xs mx-auto relative" // Add relative positioning
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                className="sm:w-32 h-auto w-20 object-cover mx-auto mb-4"
                src={img}
                alt="DNA image"
              />
              <h5 className="text-2xl text-primaryBlack font-semibold mt-5 mb-2 capitalize text-center">
                {title}
              </h5>
              <p className="text-base text-primaryBlack/70 font-normal text-center mb-4">
                {text}
              </p>

              {/* Close Icon */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                <FaTimes color="#24BEE0" size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhyUsCard;
