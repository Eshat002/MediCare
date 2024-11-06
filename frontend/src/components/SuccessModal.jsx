// import React, { useState, useEffect } from "react";
// import BtnWithoutIcon from "./BtnWithoutIcon.jsx";

// const SuccessModal = ({ isOpen, onClose }) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setIsMounted(true);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setIsAnimating(true);
//         });
//       });
//     } else {
//       setIsAnimating(false);
//       const timer = setTimeout(() => {
//         setIsMounted(false);
//       }, 200);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   if (!isMounted) return null;

//   return (
//     <div
//       className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200
//         ${isAnimating ? "opacity-100" : "opacity-0"}`}
//     >
//       <div
//         className={`absolute inset-0 bg-gray-800 transition-opacity duration-200
//           ${isAnimating ? "opacity-50" : "opacity-0"}`}
//         onClick={onClose}
//       />

//       <div
//         className={`bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-200
//           ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
//       >
//         <h2 className="text-xl font-bold mb-4">Appointment Created!</h2>
//         <p className="mb-4">Your appointment has been successfully created.</p>
//         <BtnWithoutIcon onClick={onClose} text="Close" />
//       </div>
//     </div>
//   );
// };

// export default SuccessModal;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BtnWithoutIcon from "./BtnWithoutIcon.jsx";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Modal backdrop */}
          <motion.div
            className="absolute inset-0 bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.2 }}
          />

          {/* Modal content with open card animation */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg relative sm:max-w-md max-w-xs"
            layoutId="modal" // Open card effect using layoutId
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Appointment Created!</h2>
            <p className="mb-4">
              Your appointment has been successfully created.
            </p>
            <BtnWithoutIcon onClick={onClose} text="Close" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
