// import React, { useState } from "react";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import CalenderGray from "../assets/svg/CalenderGray.jsx";
// import SectionHeadline from "./SectionHeadline.jsx";
// import BtnWithIcon from "./BtnWithIcon.jsx";
// import { FaTelegramPlane } from "react-icons/fa";
// import axios from "axios";
// import SuccessModal from "./SuccessModal"; // Add this import

// const BaseUrl = import.meta.env.VITE_API_URL;

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     appointment_date_time: null,
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDateTimeChange = (selectedDates) => {
//     setFormData({ ...formData, appointment_date_time: selectedDates[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});

//     try {
//       const response = await axios.post(
//         `${BaseUrl}/api/appointments/create/`,
//         formData
//       );

//       console.log("Appointment Created:", response.data);

//       setFormData({
//         first_name: "",
//         last_name: "",
//         email: "",
//         phone: "",
//         appointment_date_time: null,
//         message: "",
//       });

//       setIsSuccessModalOpen(true);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setErrors(error.response.data);
//       } else {
//         console.error("An unexpected error occurred:", error);
//       }
//     }
//   };

//   return (
//     <section className="bg-white flex flex-col items-center justify-center py-20">
//       <div className="section-headline-container mb-5">
//         <SectionHeadline text="Make Appointment" />
//       </div>
//       <div className="p-6 w-full max-w-3xl">
//         <form onSubmit={handleSubmit}>
//           {/* First Name and Last Name */}
//           <div className="grid grid-cols-2 gap-7 mb-7">
//             <div>
//               <input
//                 className={`bg-[#fcfcfc] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
//                   errors.first_name ? "border-red-500" : ""
//                 } ${!errors.first_name && "focus:ring-2 focus:ring-primary"}`}
//                 id="first_name"
//                 name="first_name"
//                 type="text"
//                 placeholder="First Name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//               />
//               {errors.first_name && (
//                 <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
//                   {errors.first_name}
//                 </p>
//               )}
//             </div>
//             <div>
//               <input
//                 className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
//                   errors.last_name ? "border-red-500" : "border-gray-300"
//                 } ${!errors.last_name && "focus:ring-2 focus:ring-primary"}`}
//                 id="last_name"
//                 name="last_name"
//                 type="text"
//                 placeholder="Last Name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//               />
//               {errors.last_name && (
//                 <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
//                   {errors.last_name}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Email and Phone */}
//           <div className="grid grid-cols-2 gap-7 mb-7">
//             <div>
//               <input
//                 className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } ${!errors.email && "focus:ring-2 focus:ring-primary"}`}
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
//                   {errors.email}
//                 </p>
//               )}
//             </div>
//             <div>
//               <input
//                 className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
//                   errors.phone ? "border-red-500" : "border-gray-300"
//                 } ${!errors.phone && "focus:ring-2 focus:ring-primary"}`}
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//               )}
//             </div>
//           </div>

//           {/* Appointment Date and Time */}
//           <div className="relative mb-7">
//             <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
//               <CalenderGray />
//             </div>
//             <Flatpickr
//               className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-12 text-gray-700 leading-tight focus:outline-none ${
//                 errors.appointment_date_time
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } ${
//                 !errors.appointment_date_time &&
//                 "focus:ring-2 focus:ring-primary"
//               }`}
//               id="appointment_date_time"
//               options={{
//                 enableTime: true,
//                 dateFormat: "Y-m-d H:i",
//                 time_24hr: false,
//               }}
//               value={formData.appointment_date_time}
//               onChange={handleDateTimeChange}
//               placeholder="Appointment Date and Time"
//             />
//             {errors.appointment_date_time && (
//               <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
//                 {errors.appointment_date_time}
//               </p>
//             )}
//           </div>

//           {/* Message */}
//           <div className="mb-8">
//             <textarea
//               className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
//                 errors.message ? "border-red-500" : "border-gray-300"
//               }  ${!errors.message && "focus:ring-2 focus:ring-primary"}`}
//               id="message"
//               name="message"
//               placeholder="Describe what you're looking for..."
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//             />
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
//                 {errors.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="flex items-center justify-center">
//             <BtnWithIcon text="Send" icon={<FaTelegramPlane size={20} />} />
//           </div>
//         </form>
//       </div>

//       <SuccessModal
//         isOpen={isSuccessModalOpen}
//         onClose={() => setIsSuccessModalOpen(false)}
//       />
//     </section>
//   );
// };

// export default Appointment;

import React, { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import CalenderGray from "../assets/svg/CalenderGray.jsx";
import SectionHeadline from "./SectionHeadline.jsx";
import BtnWithIcon from "./BtnWithIcon.jsx";
import BtnWithoutIcon from "./BtnWithoutIcon.jsx";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_API_URL;

// Separate Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200
        ${isAnimating ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`absolute inset-0 bg-gray-800 transition-opacity duration-200
          ${isAnimating ? "opacity-50" : "opacity-0"}`}
        onClick={onClose}
      />

      <div
        className={`bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-200
          ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <h2 className="text-xl font-bold mb-4">Appointment Created!</h2>
        <p className="mb-4">Your appointment has been successfully created.</p>
        <BtnWithoutIcon onClick={onClose} text="Close" />
      </div>
    </div>
  );
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    appointment_date_time: null,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateTimeChange = (selectedDates) => {
    setFormData({ ...formData, appointment_date_time: selectedDates[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await axios.post(
        `${BaseUrl}/api/appointments/create/`,
        formData
      );

      console.log("Appointment Created:", response.data);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        appointment_date_time: null,
        message: "",
      });

      setIsSuccessModalOpen(true);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center py-20">
      <div className="section-headline-container mb-5">
        <SectionHeadline text="Make Appointment" />
      </div>
      <div className="p-6 w-full max-w-3xl">
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <input
                className={`bg-[#fcfcfc] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.first_name ? "border-red-500" : ""
                } ${!errors.first_name && "focus:ring-2 focus:ring-primary"}`}
                id="first_name"
                name="first_name"
                type="text"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                  {errors.first_name}
                </p>
              )}
            </div>
            <div>
              <input
                className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.last_name ? "border-red-500" : "border-gray-300"
                } ${!errors.last_name && "focus:ring-2 focus:ring-primary"}`}
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                  {errors.last_name}
                </p>
              )}
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <input
                className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } ${!errors.email && "focus:ring-2 focus:ring-primary"}`}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <input
                className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } ${!errors.phone && "focus:ring-2 focus:ring-primary"}`}
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Appointment Date and Time */}
          <div className="relative mb-7">
            <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
              <CalenderGray />
            </div>
            <Flatpickr
              className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-12 text-gray-700 leading-tight focus:outline-none ${
                errors.appointment_date_time
                  ? "border-red-500"
                  : "border-gray-300"
              } ${
                !errors.appointment_date_time &&
                "focus:ring-2 focus:ring-primary"
              }`}
              id="appointment_date_time"
              options={{
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                time_24hr: false,
              }}
              value={formData.appointment_date_time}
              onChange={handleDateTimeChange}
              placeholder="Appointment Date and Time"
            />
            {errors.appointment_date_time && (
              <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                {errors.appointment_date_time}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            <textarea
              className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }  ${!errors.message && "focus:ring-2 focus:ring-primary"}`}
              id="message"
              name="message"
              placeholder="Describe what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <BtnWithIcon text="Send" icon={<FaTelegramPlane size={20} />} />
          </div>
        </form>
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </section>
  );
};

export default Appointment;
