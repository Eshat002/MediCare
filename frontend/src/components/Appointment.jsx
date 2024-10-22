import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS
import CalenderGray from "../assets/svg/CalenderGray.jsx";
import SectionHeadline from "./SectionHeadline.jsx";
import BtnWithIcon from "./BtnWithIcon.jsx";
import BtnWithoutIcon from "./BtnWithoutIcon.jsx";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_API_URL;

const Appointment = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    appointment_date_time: null, // Combined date and time
    message: "",
  });

  const [errors, setErrors] = useState({}); // State to capture errors from the backend
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal
  // const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateTimeChange = (selectedDates) => {
    setFormData({ ...formData, appointment_date_time: selectedDates[0] }); // Set combined date and time
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before making the request

    try {
      const response = await axios.post(
        `${BaseUrl}/api/appointments/create/`,
        formData
      );

      console.log("Appointment Created:", response.data);

      // Reset form data
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        appointment_date_time: null,
        message: "",
      });
      // setTimeout(() => {
      //   setIsModalVisible(true); // Trigger the animation
      // }, 50);

      setIsSuccessModalOpen(true);
    } catch (error) {
      if (error.response && error.response.data) {
        // Capture specific field errors from the backend
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

          {/* Appointment Date and Time using Flatpickr */}
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
                dateFormat: "Y-m-d H:i", // Set the date and time format
                time_24hr: false, // Use 12-hour time
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
              placeholder="Describe what you’re looking for..."
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
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Appointment Created!</h2>
            <p className="mb-4">
              Your appointment has been successfully created.
            </p>
            <BtnWithoutIcon
              onClick={() => setIsSuccessModalOpen(false)}
              text="Close"
            />
          </div>
        </div>
      )}
      {/* {isSuccessModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.3s ease",
            visibility: isModalVisible ? "visible" : "hidden",
          }}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform ${
              isModalVisible ? "translate-y-0" : "translate-y-4"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Appointment Created!</h2>
            <p className="mb-4">
              Your appointment has been successfully created.
            </p>
            <BtnWithoutIcon
              onClick={() => {
                setIsModalVisible(false); // Start the fade-out
                setTimeout(() => {
                  setIsSuccessModalOpen(false); // Hide the modal after fade-out
                }, 300); // Match this timeout with the fade-out duration
              }}
              text="Close"
            />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Appointment;
