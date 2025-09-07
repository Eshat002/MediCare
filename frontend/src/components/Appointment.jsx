import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import CalenderGray from "../assets/svg/CalenderGray.jsx";
import SectionHeadline from "./SectionHeadline.jsx";
import BtnWithIcon from "./BtnWithIcon.jsx";
import { FaTelegramPlane } from "react-icons/fa";
import SuccessModal from "./SuccessModal";
import { authenticatedApiClient } from "../utils/axiosClient";
import useAuthStore from "../stores/authStore.jsx";

const Appointment = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();

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

  // ✅ Auto-fill user details if logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData((prev) => ({
        ...prev,
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateTimeChange = (selectedDates) => {
    setFormData({ ...formData, appointment_date_time: selectedDates[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!isAuthenticated) {
      navigate("/login"); // redirect if not logged in
      return;
    }

    try {
      const response = await authenticatedApiClient.post(
        "/api/appointments/create/",
        formData
      );

      console.log("Appointment Created:", response.data);

      setFormData({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        email: user?.email || "",
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
    <section
      id="appointment-form"
      className="bg-white flex flex-col items-center justify-center py-20"
    >
      <div className="section-headline-container mb-5">
        <SectionHeadline text="Make Appointment" />
      </div>
      <div className="p-6 w-full max-w-3xl">
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-7">
            <div>
              <input
                className={`bg-[#fcfcfc] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
                  errors.first_name ? "border-red-500" : "border-gray-300"
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
          <div className="grid md:grid-cols-2 grid-col-1 gap-7 mb-7">
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
